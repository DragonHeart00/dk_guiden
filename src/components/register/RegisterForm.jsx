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
import Category from "./Category";

function RegisterForm() {
    return (
        <MDBContainer fluid >

            <MDBRow className='d-flex justify-content-center align-items-center' style={{marginTop:120}}>
                <MDBCol col='8' className='m-5'>
                    <MDBCard className='card-registration card-registration-2' style={{borderRadius: '15px'}}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md='6' className='p-5'>
                                    <h3 className="fw-normal mb-5">VIRKSOMHED INFORMATION</h3>
                                    <MDBRow>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' size='lg' id='form1' type='text' placeholder={"Viksomheds navn"}/>
                                        </MDBCol>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' size='lg' id='form2' type='text' placeholder={"CVR-nummer"}/>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBInput wrapperClass='mb-4' size='lg' id='form4' type='text' placeholder={"Adresse"}/>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md='3'>
                                            <MDBInput wrapperClass='mb-4' size='lg' id='form6' type='text' placeholder={"Postnummer"}/>
                                        </MDBCol>

                                        <MDBCol md='9'>
                                            <MDBInput wrapperClass='mb-4'  size='lg' id='form7' type='text' placeholder={"By"}/>
                                        </MDBCol>
                                    </MDBRow>

                                    <h3 className="fw-normal mb-5">KONTAKTOPLYSNINGER</h3>
                                    <MDBRow>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' size='lg' id='form1' type='text' placeholder={"Fornavn"}/>
                                        </MDBCol>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' size='lg' id='form2' type='text' placeholder={"Efternavn"}/>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBInput wrapperClass='mb-4' size='lg' id='form4' type='text' placeholder={"Mail"}/>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md='3'>
                                            <MDBInput wrapperClass='mb-4' size='lg' id='form6' type='text' placeholder={"+45"}/>
                                        </MDBCol>

                                        <MDBCol md='9'>
                                            <MDBInput wrapperClass='mb-4'  size='lg' id='form7' type='text' placeholder={"Telefon Nummer "}/>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>

                                <MDBCol md='6' className='bg-indigo p-5' >
                                    <h3 className="fw-normal mb-5 ">VÆLG DIN KATEGORI</h3>
                                    <MDBCol md='9' className={"pb-5 fw-normal"} >
                                        <Category/>
                                    </MDBCol>
                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='mb-4' label='Jeg bekræfter hermed, at DK guiden må bevare ovenstående oplysninger.' />
                                    <MDBBtn color='light' size='lg'>Register</MDBBtn>
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
