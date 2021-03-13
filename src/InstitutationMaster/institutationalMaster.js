import React, {Fragment, useEffect,useState} from "react";
import '../forms.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'; 
import axios from "axios";
import { render } from "@testing-library/react";
import { toast } from "react-toastify";



const InstitutionalMaster = () =>{

    const createInstitutation =(datas) =>{
        
        console.log(Regdata);
        datas.preventDefault();
        datas.target.reset();
        
        //postService(data);
    }

    const [Regdata, setRegdata] =  useState({});




return(
    <Fragment>
    <h3  className="text-center text-weight-bold mt-2 text-light">Institutation  Master</h3> 
    <div className="container">
    <h6 className="text-light m-1">* fields are mandatory</h6>
    <Form   onSubmit={createInstitutation}>
        <Form.Row>
            <Col>
                <Form.Group controlId="name"  className="mr-2">
                    
                    <Form.Label className="label">Institutation Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Institutation Name" name="name" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, name: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            <Col>
                    <Form.Group controlId="name" className="ml-2">
                    
                    <Form.Label className="label">Mail ID *</Form.Label>
                    <Form.Control type="text" placeholder="Mail ID" name="mail" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, mail: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            </Form.Row>

            <Form.Row>
            <Col>
                <Form.Group controlId="name"  className="mr-2">
                    
                    <Form.Label className="label">Address *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Institutation Name" name="Address" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, Address: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            <Col>
                    <Form.Group controlId="name" className="ml-2">
                    
                    <Form.Label className="label">Registration No *</Form.Label>
                    <Form.Control type="text" placeholder="Registration No" name="Registration" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, Registration: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            </Form.Row>


            <Form.Row>
            <Col>
                <Form.Group controlId="name"  className="mr-2">
                    
                    <Form.Label className="label">Village *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Village Name" name="Village" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, Village: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            <Col>
                    <Form.Group controlId="name" className="ml-2">
                    
                    <Form.Label className="label">District  *</Form.Label>
                    <Form.Control type="text" placeholder="District" name="District" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, District: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            </Form.Row>


            <Form.Row>
            <Col>
                <Form.Group controlId="name"  className="mr-2">
                    
                    <Form.Label className="label">Pincode *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Pincode " name="Pincode" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, Pincode: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            <Col>
                    <Form.Group controlId="name" className="ml-2">
                    
                    <Form.Label className="label">State  *</Form.Label>
                    <Form.Control type="text" placeholder="State " name="State" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, State: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            </Form.Row>

            <Form.Row>
            <Col>
                <Form.Group controlId="name"  className="mr-2">
                    
                    <Form.Label className="label">80G Reg No *</Form.Label>
                    <Form.Control type="text" placeholder="Enter 80G Reg No " name="Reg80gno" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, Reg80gno: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            <Col>
                    <Form.Group controlId="name" className="ml-2">
                    
                    <Form.Label className="label">Other Reg No  </Form.Label>
                    <Form.Control type="text" placeholder="Other Reg No " name="Other_Reg_No" 
                     onChange={(e) => {
                       setRegdata({ ...Regdata, Other_Reg_No: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            </Form.Row>


            <Form.Row>
            <Col>
                <Form.Group controlId="name"  className="mr-2">
                    
                    <Form.Label className="label">Contact 1*</Form.Label>
                    <Form.Control type="text" placeholder="Enter Contact  " name="Contact1" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, Contact1: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            <Col>
                    <Form.Group controlId="name" className="ml-2">
                    
                    <Form.Label className="label">Contact 2  </Form.Label>
                    <Form.Control type="text" placeholder="Other Contact No " name="Contact2" 
                     onChange={(e) => {
                       setRegdata({ ...Regdata, Contact2: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            </Form.Row>
            



            <Form.Row>
            <Col>
                <Form.Group controlId="name"  className="mr-2">
                    
                    <Form.Label className="label">Institutation ID*</Form.Label>
                    <Form.Control type="text" placeholder="Enter Institutation ID  " name="InstitutationID" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, InstitutationID: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            <Col>
                    <Form.Group controlId="name" className="ml-2">
                    
                    <Form.Label className="label">Institutation Password  *</Form.Label>
                    <Form.Control type="text" placeholder="Institutation Password  " name="Institutation_pass" required
                     onChange={(e) => {
                       setRegdata({ ...Regdata, Institutation_pass: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            </Form.Row>


            <Form.Row>
            <Col>
                <Form.Group controlId="name"  className="mr-2">
                    
                    <Form.Label className="label">Other 1 </Form.Label>
                    <Form.Control type="text" placeholder="Other 1  " name="Other1"  
                     onChange={(e) => {
                       setRegdata({ ...Regdata, Other1: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            <Col>
                    <Form.Group controlId="name" className="ml-2">
                    
                    <Form.Label className="label">Other 2 </Form.Label>
                    <Form.Control type="text" placeholder="Other 2  " name="Other2" 
                     onChange={(e) => {
                       setRegdata({ ...Regdata, Other2: e.target.value });
                        }}

                     />
                 </Form.Group>
            </Col>
            </Form.Row>
       

            <Container className="text-center ">
            
            <Button className="m-2"  color="warning" 
                >Submit</Button>
        </Container>



    </Form>
    </div>
    
    </Fragment>


);

}



export default InstitutionalMaster;