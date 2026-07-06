import React, { useEffect, useState } from 'react'
import AHeader from './component/AHeader'
import AFooter from './component/AFooter'
import axios from 'axios';


function Dashbord() {


    useEffect(() => {
        get_post();
    }, []);

    const [blog_data, setBlog_data] = useState([]);
    const get_post = async () => {
        const res = await axios.get(`http://localhost:5000/get_blog`);
        console.log(res.data);
        setBlog_data(res.data);
    }


    const [formvalue, setFormvalue] = useState({
        title: "",
        body: "",
    });

    const editHandel = async (_id) => {
        const res = await axios.get(`http://localhost:5000/edit_blog/${_id}`);
        console.log(res.data[0]);
        setFormvalue(res.data[0]);
    }

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue._id);
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.put(`http://localhost:5000/update_blog/${formvalue._id}`, formvalue);
        get_post();
        alert('Blog Update Successfull');
        return false;
    }

    const deleteHandel = async (_id) => {
        const res = await axios.delete(`http://localhost:5000/delete_blog/${_id}`);
        get_post();
        alert('Blog Delete Successfull');
        return false;
    }

    return (
        <>
            <AHeader />
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2>Manage Blog </h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ObjectId</th>
                                    <th>User Id</th>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    blog_data.map((value, index, arr) => {

                                        return (
                                            <tr>
                                                <td>{value._id}</td>
                                                <td>{value.userId}</td>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                                <td>{value.body}</td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => deleteHandel(value._id)}>Delete</button>
                                                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editHandel(value._id)}>Edit</button>
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
                                                                    <div className="container mt-3">
                                                                        <form action="" method='post'>
                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="email">Title:</label>
                                                                                <input type="name" onChange={changeHandel} value={formvalue.title} className="form-control" id="name" placeholder="Enter title" name="title" />
                                                                            </div>
                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="email">Body:</label>
                                                                                <textarea onChange={changeHandel} className="form-control" value={formvalue.body} id="email" placeholder="Enter Body" name="body"></textarea>
                                                                            </div>


                                                                            <button type="submit" className="btn btn-primary" onClick={submitHandel} data-bs-dismiss="modal">Save</button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {/* Modal footer */}
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-danger" >Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </td>
                                            </tr>);
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

export default Dashbord