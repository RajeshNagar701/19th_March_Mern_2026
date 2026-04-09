import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userinsert } from '../../../app/userSlice';

function Add_user() {

    const dispatch=useDispatch();
    const [formvalue,setFormvalue]=useState({
        name:"",
        email:"",
        password:"",
        mobile:"",
    });
    
    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(), status:"Unblock", [e.target.name]:e.target.value})
        console.log(formvalue);
    }

    const submitHandel=async(e)=>{
        e.preventDefault();
        dispatch(userinsert(formvalue));
        setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""});
        alert('User Added success');
        return false;
    }

    
    return (
        <div>
            <div>
                <Header title="Add User" />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Add User</h2>
                            <form action="" method="post" onSubmit={submitHandel}>
                                 <div className="mb-3 mt-3">
                                    <label htmlFor="email">Name:</label>
                                    <input type="text" onChange={changeHandel} value={formvalue.name} className="form-control" placeholder="Enter Name" name="name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" onChange={changeHandel} value={formvalue.email}  className="form-control"  placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" onChange={changeHandel} value={formvalue.password}  className="form-control"  placeholder="Enter password" name="password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Mobile:</label>
                                    <input type="number" onChange={changeHandel} value={formvalue.mobile}  className="form-control"  placeholder="Enter Mobile" name="mobile" />
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Add_user