import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import axios from 'axios';

function Manage_user() {

    // auto call when component load
    useEffect(() => {
        fetch_user();
    }, []);

    const [data, setData] = useState([]);
    const fetch_user = async () => {

        const res = await axios.get(`http://localhost:3000/users`);
        console.log(res.data);
        setData(res.data);
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
                                        data && data.map((value,index,arr) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.mobile}</td>
                                                    <td>
                                                        <button className='btn btn-danger m-2'>Delete</button>
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

export default Manage_user