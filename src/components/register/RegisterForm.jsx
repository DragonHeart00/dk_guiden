import React from 'react';
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
function RegisterForm() {
    return (
        <MDBContainer fluid >
            <MDBRow className='d-flex justify-content-center align-items-center py-5' style={{marginTop:80}}>
                <MDBCol col='8' className='registerForm'>
                    <MDBCard className='card-registration card-registration-2'>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md='6' className='p-5'>
                                    <h3 className="fw-normal mb-5 text-start" style={{color:'#03467a'}}>DK GUIDEN REGISTRERING FORM</h3>
                                    <h5 className="fw-normal mb-3 text-start">VIRKSOMHED INFORMATION</h5>
                                    <MDBRow>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' id='form1' type='text'
                                                      placeholder={"Viksomheds navn"}/>
                                        </MDBCol>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' id='form2' type='text'
                                                      placeholder={"CVR-nummer"}/>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBInput wrapperClass='mb-4' id='form4' type='text' placeholder={"Adresse"}/>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md='3'>
                                            <MDBInput wrapperClass='mb-4' id='form6' type='text'
                                                      placeholder={"Postnummer"}/>
                                        </MDBCol>

                                        <MDBCol md='9'>
                                            <MDBInput wrapperClass='mb-4' id='form7' type='text' placeholder={"By"}/>
                                        </MDBCol>
                                    </MDBRow>

                                    <h5 className="fw-normal mb-3 mt-5 text-start">KONTAKTOPLYSNINGER</h5>
                                    <MDBRow>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' id='form1' type='text'
                                                      placeholder={"Fornavn"}/>
                                        </MDBCol>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' id='form2' type='text'
                                                      placeholder={"Efternavn"}/>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBInput wrapperClass='mb-4' id='form4' type='text' placeholder={"Mail"}/>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBInput wrapperClass='mb-4' id='form7' type='text'
                                                  placeholder={"Telefon Nummer "}/>
                                    </MDBRow>

                                    <h5 className="fw-normal mb-3 mt-5 text-start">VÆLG DIN KATEGORI</h5>
                                    <MDBRow>
                                        <MDBCol md='12' className={"pb-5 fw-normal"}>
                                            <select className="form-select" aria-label="example">
                                                <option selected disabled>Vælg kategori</option>
                                                <option value="Handyman">Handyman</option>
                                                <option value="Skrædder">Skrædder</option>
                                                <option value="Elektronik">Elektronik</option>
                                                <option value="Bilmekaniker">Bilmekaniker</option>
                                                <option value="Maler">Maler</option>
                                                <option value="Smed">Smed</option>
                                                <option value="Cykelmekaniker">Cykelmekaniker</option>
                                                <option value="Butik">Butik</option>
                                                <option value="Økonomi">Økonomi</option>
                                                <option value="Lovgivning">Lovgivning</option>
                                                <option value="VVS">VVS</option>
                                                <option value="Personlig træner">Personlig træner</option>
                                                <option value="Murer">Murer</option>
                                                <option value="Tandlæge">Tandlæge</option>
                                                <option value="Psykolog og rådgivning">Psykolog og rådgivning</option>
                                                <option value="Køreskoler">Køreskoler</option>
                                                <option value="Undervisning">Undervisning</option>
                                                <option value="Tømer">Tømer</option>
                                                <option value="Sneoprydning">Sneoprydning</option>
                                                <option value="Gartner">Gartner</option>
                                                <option value="Elektriker">Elektriker</option>
                                                <option value="Læger">Læger</option>
                                                <option value="Køletekniker">Køletekniker</option>
                                                <option value="Frisør">Frisør</option>
                                                <option value="Guld og sølv butikker">Guld og sølv butikker</option>
                                                <option value="Urmager">Urmager</option>
                                                <option value="Fotograf">Fotograf</option>
                                                <option value="Vaskeri & renseri">Vaskeri & renseri</option>
                                                <option value="Rengøring">Rengøring</option>
                                            </select>

                                        </MDBCol>
                                        <MDBCol md='9'>
                                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='mb-4'
                                                         label='Jeg bekræfter hermed, at DK guiden må bevare ovenstående oplysninger.'/>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className={"justify-content-end"}>
                                        <MDBCol md='2'>
                                            <MDBBtn color='light'>TILMELD</MDBBtn>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol id={"backgroud"}>

                                </MDBCol>
                            </MDBRow>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default RegisterForm;
