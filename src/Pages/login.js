import React, { useState } from "react";
import '../forms.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import axios from "axios";
import { toast } from "react-toastify";



const Login = () =>
{
   

    const createCourse =(datas) =>{
        
        console.log(data);
        datas.preventDefault();
        datas.target.reset();
        
        postService(data);
    }
    const [data, setdata] =  useState({});



const postService=(data)=>{
    axios.post(`http://127.0.0.1/login`,data).then(
        (response)=>{
            //console.log(response);
           if(response.status === 200){
            
            setdata({ mail: "", pass:"" });
            toast.success("Please wait for Loging",{position: 'top-right'});
           }
           
         
           
            
        },
        (error)=>{
            
            toast.warning("Somthing went Wrong",{
                position: 'top-right',
            });

        }
    )
}



    return (
        <div className="container align-items-center" >
        
            <Form className="loginform "  onSubmit={createCourse}>
              <Form.Group controlId="formBasicEmail">
               <Form.Label className="label">Email address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" name="mail" 
                    required
                        onChange={(e) => {
                    setdata({ ...data, mail: e.target.value });
                   
                }}


                    />
              </Form.Group>

             <Form.Group controlId="formBasicPassword">
                  <Form.Label className="label">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"  name="pass" 
                    required
                    onChange={(e) => {
                    setdata({ ...data, pass: e.target.value });
                }}

                  />
             </Form.Group>
            
            <Button variant="primary" type="submit"
            onClick={(e)=>{
                    

                 
                }}

            >
               Submit
              </Button>
            </Form>
        </div>
    );
};
export default Login;