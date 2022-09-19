import React, { useState } from 'react';

const Contact = () => {
    const [data,setData] = useState({
        fullname:'',
        mobile:'',
        email:'',
        message:'',
    });

    const inputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preVal) =>
        {
            return {
                ...preVal,
                [name] :value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname} my mobile number is ${data.mobile} my email id is ${data.email} i saying ${data.message}`)

    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Enter Name</label>
                                <input type="text" name="fullname" value={data.fullname} onChange={inputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Enter Contact</label>
                                <input type="number" name="mobile" value={data.mobile} onChange={inputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter your Contact number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" name="email" value={data.email} onChange={inputEvent} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" name="message" value={data.message} onChange={inputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className='mb-3'>
                                <button className='btn btn-primary' type="submit">Submit Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;