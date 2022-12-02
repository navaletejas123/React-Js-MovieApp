import React, { useState } from 'react'

const MyForm = () => {
    const [newData, setNewData] = useState([])
    const [data, setData] = useState({
        name: "",
        lastName: "",
        age: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const a = data;
        setNewData(a)
        console.log(newData)
    }
    return (
        <div>
            <form className='w-25 mx-auto' onSubmit={handleSubmit}>
                <input onChange={(e) => { setData({ ...data, name: e.target.value }) }} className='mt-3 form-control' type="text" placeholder='name' />
                <input onChange={(e) => { setData({ ...data, lastName: e.target.value }) }} className='mt-3 form-control' type="text" placeholder='last name' />
                <input onChange={(e) => { setData({ ...data, age: e.target.value }) }} className='mt-3 form-control' type="text" placeholder='age' />
                <input className='mt-3 btn btn-primary d-block m-auto' type="submit" />
            </form>
        </div>
    )
}

export default MyForm
