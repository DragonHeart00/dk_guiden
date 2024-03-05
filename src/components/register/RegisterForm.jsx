import React, {useEffect, useState} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import "./registerForm.css";
import { addStore } from "../../services/firebaseFun";

function RegisterForm() {
    const [formValues, setFormValues] = useState({
        store_name: '',
        cvr_nr: '',
        postNumber: '',
        address: '',
        city: '',
        email: '',
        name: '',
        lastName:'',
        phone:'',
        category: '' // Added category field to state
    });

    const [loading, setLoading] = useState(false); // State to control loading icon visibility
    const [showButton, setShowButton] = useState(false); // State to control register button visibility

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'cvr_nr' && value.length > 8) {
            // If the input field is 'cvr_nr' and the value length is more than 8, truncate the value
            setFormValues({ ...formValues, [name]: value.slice(0, 8) });
        } else if (name === 'postNumber' && value.length > 4) {
            // If the input field is 'postNumber' and the value length is more than 4, truncate the value
            setFormValues({ ...formValues, [name]: value.slice(0, 4) });
        } else {
            setFormValues({ ...formValues, [name]: value });
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true); // Show loading icon
            await addStore(formValues);
            window.location.href = "/confirm";
            // Handle success or navigation to next page
        } catch (error) {
            console.error('Error adding store:', error);
            // Handle error
        } finally {
            setLoading(false); // Hide loading icon
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true); // Show register button after a delay
        }, 2000); // Adjust the delay time (in milliseconds) as needed
        return () => clearTimeout(timer);
    }, []);

    const categories = [
        "Handyman",
        "Skrædder",
        "Elektronik",
        "Bilmekaniker",
        "Maler",
        "Smed",
        "Cykelmekaniker",
        "Butik",
        "Økonomi",
        "Lovgivning",
        "VVS",
        "Personlig træner",
        "Murer",
        "Tandlæge",
        "Psykolog og rådgivning",
        "Køreskoler",
        "Undervisning",
        "Tømer",
        "Sneoprydning",
        "Gartner",
        "Elektriker",
        "Læger",
        "Køletekniker",
        "Frisør",
        "Guld og sølv butikker",
        "Urmager",
        "Fotograf",
        "Vaskeri & renseri",
        "Rengøring"
    ];

    return (
        <MDBContainer>
            <MDBRow className='d-flex justify-content-center align-items-center py-5' style={{ marginTop: 80 }}>
                <MDBCol className='registerForm'>
                    <MDBCard className='card-registration card-registration-2'>
                        <MDBCardBody>
                            <form onSubmit={handleSubmit}>
                                <MDBRow>
                                    <MDBCol md='6' className='p-5'>
                                        <h3 className="fw-normal mb-5 text-start" style={{ color: '#03467a' }}>DK GUIDEN REGISTRERING FORM</h3>
                                        <h5 className="fw-normal mb-3 text-start">VIRKSOMHED INFORMATION</h5>
                                        <MDBRow>
                                            <MDBCol md='6'>
                                                <MDBInput wrapperClass='mb-4' name='store_name' type='text' placeholder={"Viksomheds navn"} value={formValues.store_name} onChange={handleInputChange} required />
                                            </MDBCol>
                                            <MDBCol md='6'>
                                                <MDBInput wrapperClass='mb-4' name='cvr_nr' type='text' placeholder={"CVR-nummer"} value={formValues.cvr_nr} onChange={handleInputChange} pattern="\d+" title="Kun tal tilladt" required />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBInput wrapperClass='mb-4' name='address' type='text' placeholder={"Adresse"} value={formValues.address} onChange={handleInputChange} required />
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol md='3'>
                                                <MDBInput wrapperClass='mb-4' name='postNumber' type='text' placeholder={"Postnummer"} value={formValues.postNumber} pattern="\d+" title="Kun tal tilladt" onChange={handleInputChange} required />
                                            </MDBCol>

                                            <MDBCol md='9'>
                                                <MDBInput wrapperClass='mb-4' name='city' type='text' placeholder={"By"} value={formValues.city} onChange={handleInputChange} required />
                                            </MDBCol>
                                        </MDBRow>

                                        <h5 className="fw-normal mb-3 mt-5 text-start">KONTAKTOPLYSNINGER</h5>
                                        <MDBRow>
                                            <MDBCol md='6'>
                                                <MDBInput wrapperClass='mb-4' name='name' type='text' placeholder={"Fornavn"} value={formValues.name} onChange={handleInputChange} required />
                                            </MDBCol>
                                            <MDBCol md='6'>
                                                <MDBInput wrapperClass='mb-4' name='lastName' type='text' placeholder={"Efternavn"} value={formValues.lastName} onChange={handleInputChange} required />
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBInput wrapperClass='mb-4' name='email' type='email' placeholder={"Mail"} value={formValues.email} onChange={handleInputChange} required />
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBInput wrapperClass='mb-4' name='phone' type='tel' placeholder={"Telefon Nummer "} value={formValues.phone} pattern="\d+" title="Kun tal tilladt" onChange={handleInputChange} required />
                                        </MDBRow>

                                        <h5 className="fw-normal mb-3 mt-5 text-start">VÆLG DIN KATEGORI</h5>
                                        <MDBRow>
                                            <MDBCol md='12' className={"pb-5 fw-normal"}>
                                                <select className="form-select" aria-label="example" name='category' value={formValues.category} onChange={handleInputChange} required>
                                                    <option selected disabled>Vælg kategori</option>
                                                    {categories.map((category, index) => (
                                                        <option key={index} value={category}>{category}</option>
                                                    ))}
                                                </select>
                                            </MDBCol>
                                            <MDBCol md='9'>
                                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='mb-4'
                                                             label='Jeg bekræfter hermed, at DK guiden må bevare ovenstående oplysninger.' required/>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className={"justify-content-end"}>
                                            <MDBCol md='2'>
                                                {showButton && (
                                                    <MDBBtn color='light' type="submit" disabled={loading}>
                                                        {loading ? "Loading..." : "TILMELD"}
                                                    </MDBBtn>
                                                )}
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>

                                    <MDBCol id={"backgroud"}>

                                    </MDBCol>
                                </MDBRow>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default RegisterForm;
