import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userdelete, userget, userupdate } from '../../../app/userSlice';

function Manage_user() {



    // axios.get(`http://localhost:3000/user`);  all data get in arr
    // axios.get(`http://localhost:3000/user?country=india`);  all data get in arr
    // axios.get(`http://localhost:3000/user/123455`);  get single id data object

    // axios.post(`http://localhost:3000/user`,object);  insert in api
    // axios.delete(`http://localhost:3000/user/1234`);  delete id data in api
    // axios.patch(`http://localhost:3000/user/1234`,object);  delete id data in api


    // auto call when component load

    const dispatch=useDispatch();
    const {user}=useSelector((state)=> state.user);
    const redirect = useNavigate();

    useEffect(() => {
        fetch_user();
    },[]);


    const fetch_user = async () => {
        dispatch(userget());
    }


    const deleteHandel = async (id) => {
        dispatch(userdelete(id));
        fetch_user();
        alert('User Deleted success');
        return false;
    }


    // edit update
    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    });


    const editHandel = async (id) => {
        
        const res=user.filter((data)=> data.id==id);
        setFormvalue(res[0]);
    }


    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value })
        console.log(formvalue);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        dispatch(userupdate(formvalue));
        fetch_user();
        alert('User updated success');
        return false;

    }

    const statusHandel = async (id) => {
        const res = user.filter((data) => data.id == id);
        if (res[0].status == "Unblock") {
           
        }   else {                  
            setFormvalue({ ...formvalue, id: id, status: "Unblock" })
        }
    }


    return (
        <div>
            <div>
                <Header title="Manage User" />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Manage User</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        user && user.map((value, index, arr) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.mobile}</td>
                                                    <td>
                                                        <button className='btn btn-success m-2' onClick={() => statusHandel(value.id)}>{value.status}</button>
                                                        <button className='btn btn-danger m-2' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                        <button className='btn btn-primary m-2' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editHandel(value.id)} >Edit</button>
                                                        <button className='btn btn-primary m-2' onClick={() => redirect('/edit_user/' + value.id)}>Edit Page</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }



                                </tbody>
                            </table>

                            <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        {/* Modal Header */}
                                        <div className="modal-header">
                                            <h4 className="modal-title">Edit User</h4>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                        </div>
                                        {/* Modal body */}
                                        <div className="modal-body">
                                            <form action="" method="post" onSubmit={submitHandel}>
                                                <div className="mb-3 mt-3">
                                                    <label htmlFor="email">Name:</label>
                                                    <input type="text" onChange={changeHandel} value={formvalue.name} className="form-control" placeholder="Enter Name" name="name" />
                                                </div>
                                                <div className="mb-3 mt-3">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="email" onChange={changeHandel} value={formvalue.email} className="form-control" placeholder="Enter email" name="email" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="pwd">Password:</label>
                                                    <input type="password" onChange={changeHandel} value={formvalue.password} className="form-control" placeholder="Enter password" name="password" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="pwd">Mobile:</label>
                                                    <input type="number" onChange={changeHandel} value={formvalue.mobile} className="form-control" placeholder="Enter Mobile" name="mobile" />
                                                </div>

                                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Submit</button>
                                            </form>

                                        </div>
                                        {/* Modal footer */}
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Manage_user