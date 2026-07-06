import React, { useEffect, useState } from 'react'
import AHeader from './component/AHeader'
import AFooter from './component/AFooter'
import axios from 'axios';

function Manage_contact() {

    
   useEffect(() => {
        get_post();
    }, []);

   const [user_data,setuser_data]=useState([]);
    const get_post = async () => {
        const res = await axios.get(`http://localhost:5000/get_user`);
        console.log(res.data);
        setuser_data(res.data);
    }


    const deleteHandel = (id) => {
       
    }

    const editHandel=(id)=>{
        
    }

    return (
        <>
            <AHeader />
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2>Manage User</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user_data.map((item, index, arr) => {

                                        return (
                                            <tr key={item}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.username}</td>
                                                <td>
                                                    <button className='btn btn-primary' onClick={()=>editHandel(item.id)}>Edit</button>
                                                    <button className='btn btn-danger' onClick={()=>deleteHandel(item.id)}>Delete</button>
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
            <AFooter />
        </>
    )
}

export default Manage_contact