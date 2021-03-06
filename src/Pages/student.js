import React from "react";
import '../CSS/student.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
const Student = () =>
{
    return (
        <div className="container align-items-center" >
              
         <Form className="regform ">
         <Form.Label className="label"><h3>Personal Details</h3></Form.Label>
            <div className="row">
                <div className="col-sm-6">
                     <Form.Group controlId="name">
                    
                         <Form.Label className="label">Full Name</Form.Label>
                         <Form.Control type="text" placeholder="Enter Name" />
                      </Form.Group>
                </div>
                <div className="col-sm-6">
                     <Form.Group controlId="dob">
                        <Form.Label className="label">Date of Birth</Form.Label>
                         <Form.Control type="Date" placeholder="DOB" />
                     </Form.Group>  
                </div>


                <div className="col-sm-6">
                     <Form.Group controlId="aadhar">
                         <Form.Label className="label">Aadhar No</Form.Label>
                         <Form.Control type="text" placeholder="Enter Aadhar No" />
                      </Form.Group>
                </div>
                <div className="col-sm-6">
                     <Form.Group controlId="pancard">
                        <Form.Label className="label">PAN No</Form.Label>
                         <Form.Control type="text" placeholder="Enter PAN No"  />
                     </Form.Group>  
                </div>


                <div className="col-sm-6">
                     <Form.Group controlId="contact1">
                         <Form.Label className="label">Contact No 1</Form.Label>
                         <Form.Control type="tel" placeholder="Enter Contact No 1"/>
                      </Form.Group>
                </div>
                <div className="col-sm-6">
                     <Form.Group controlId="contact2">
                        <Form.Label className="label">Contact No 2</Form.Label>
                         <Form.Control type="tel" placeholder="Enter Contact No 2"  />
                     </Form.Group>  
                </div>

                <div className="col-sm-6">
                     <Form.Group controlId="address1">
                         <Form.Label className="label">Address Line 1</Form.Label>
                         <Form.Control type="text" placeholder="Enter Address 1"/>
                      </Form.Group>
                </div>
                <div className="col-sm-6">
                     <Form.Group controlId="address2">
                        <Form.Label className="label">Address Line 2</Form.Label>
                         <Form.Control type="text" placeholder="Enter Address Line 2"  />
                     </Form.Group>  
                </div>

                <div className="col-sm-6">
                     <Form.Group controlId="village">
                         <Form.Label className="label">Village</Form.Label>
                         <Form.Control type="text" placeholder="Enter Village Name"/>
                      </Form.Group>
                </div>
                <div className="col-sm-6">
                     <Form.Group controlId="taluka">
                        <Form.Label className="label">Taluka</Form.Label>
                         <Form.Control type="text" placeholder="Enter Taluka"  />
                     </Form.Group>      
                </div>

                <div className="col-sm-6">
                     <Form.Group controlId="dist">
                         <Form.Label className="label">District</Form.Label>
                         <Form.Control type="text" placeholder="Enter District"/>
                      </Form.Group>
                </div>
                <div className="col-sm-6">
                     <Form.Group controlId="state">
                        <Form.Label className="label">State</Form.Label>
                         <Form.Control type="text" placeholder="Enter State Name"  />
                     </Form.Group>  
                </div>

                
                <div className="col-sm-6">
                     <Form.Group controlId="pincode">
                         <Form.Label className="label">Pincode</Form.Label>
                         <Form.Control type="text" placeholder="Enter Pincode"/>
                      </Form.Group>
                </div>
                </div>


                <div className="row">
                <Form.Label className="label col-sm-12"><h3>Family Details</h3></Form.Label>

                  <div className="col-sm-6">
                      <Form.Group controlId="gotra">
                         <Form.Label className="label">Gotra</Form.Label>
                         <Form.Control type="text" placeholder="Enter Gotra"/>
                      </Form.Group>                   
                  </div>

                  <div className="col-sm-6">
                      <Form.Group controlId="janmnav">
                         <Form.Label className="label">Janmnav</Form.Label>
                         <Form.Control type="text" placeholder="Enter Janmnav"/>
                      </Form.Group>                   
                  </div>
                
                  <div className="col-sm-6">
                      <Form.Group controlId="fathernm">
                         <Form.Label className="label">Father Name</Form.Label>
                         <Form.Control type="text" placeholder="Enter Father Name"/>
                      </Form.Group>                   
                  </div>

                  <div className="col-sm-6">
                      <Form.Group controlId="fatheradhar">
                         <Form.Label className="label">Father's Aadhar No</Form.Label>
                         <Form.Control type="text" placeholder="Enter Father's Aadhar No"/>
                      </Form.Group>                   
                  </div>


                  <div className="col-sm-6">
                      <Form.Group controlId="mothernm">
                         <Form.Label className="label">Mother Name</Form.Label>
                         <Form.Control type="text" placeholder="Enter Mother Name"/>
                      </Form.Group>                   
                  </div>

                  <div className="col-sm-6">
                      <Form.Group controlId="motheradhar">
                         <Form.Label className="label">Mother's Aadhar No</Form.Label>
                         <Form.Control type="text" placeholder="Enter Mother's Aadhar No"/>
                      </Form.Group>                   
                  </div> 




                </div>
              
            
             

           
            
            <Button variant="primary" type="submit">
               Submit
              </Button>
            </Form>
        </div>          
           
       
    );
};
export default Student;