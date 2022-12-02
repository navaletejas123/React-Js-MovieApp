import React, { useState } from 'react'

function Teacher() {
    const [teacher, setTeacher] = useState({
        name: "",
        class: "",
        schoolName: "",
        salery: ""
    });
    var [table, setTable] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setTable([...table, teacher])

        console.log(table)
    }

    return (
        <div className=''>
            <form className='w-50 m-auto mt-5' onSubmit={handleSubmit}>
                <input onChange={e => { setTeacher({ ...teacher, name: e.target.value }) }} className='form-control mt-2' type="text" placeholder='name' />
                <input onChange={e => { setTeacher({ ...teacher, class: e.target.value }) }} className='form-control mt-2' type="text" placeholder='class' />
                <input onChange={e => { setTeacher({ ...teacher, schoolName: e.target.value }) }} className='form-control mt-2' type="text" placeholder='schoolName' />
                <input onChange={e => { setTeacher({ ...teacher, salery: e.target.value }) }} className='form-control mt-2' type="text" placeholder='salery' />
                <input className='btn btn-primary mt-3 d-block mx-auto' type="submit" value="Save" />
            </form>

            <table className="table table-danger w-75 m-auto mt-5">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">class</th>
                        <th scope="col">school Name</th>
                        <th scope="col">salery</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>abcd</td>
                        <td>5th</td>
                        <td>mySchool</td>
                        <td>15000</td>
                    </tr> */}
                    {
                        table.map((myValue, i) =>
                        (
                            <tr key={i}>
                                <td>{myValue.name}</td>
                                <td>{myValue.class}</td>
                                <td>{myValue.schoolName}</td>
                                <td>{myValue.salery}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Teacher
