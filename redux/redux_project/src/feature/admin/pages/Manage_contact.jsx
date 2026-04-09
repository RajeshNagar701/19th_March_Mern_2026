import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios';

function Manage_contact() {

    // auto call when component load
    useEffect(() => {
        fetch_contact();
    }, []);

    const [data, setData] = useState([]);
    const fetch_contact = async () => {

     
    }

    const deleteHandel = async (id) => {
       
        alert('Contact Deleted success');
        return false;
    }


    return (
        <div>
            <div>
                <Header title="Manage User" />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Manage Contact</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Comment</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data && data.map((value, index, arr) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.comment}</td>
                                                    <td>
                                                        <button className='btn btn-danger m-2' onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                        <button className='btn btn-primary m-2'>Edit</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Manage_contact