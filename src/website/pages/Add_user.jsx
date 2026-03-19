import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Add_user() {
    return (
        <div>
            <div>
                <Header title="Add User" />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Add User</h2>
                            <form action="" method="post">
                                 <div className="mb-3 mt-3">
                                    <label htmlFor="email">Name:</label>
                                    <input type="text" className="form-control" placeholder="Enter Name" name="name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control"  placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control"  placeholder="Enter password" name="password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Mobile:</label>
                                    <input type="number" className="form-control"  placeholder="Enter Mobile" name="mobile" />
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