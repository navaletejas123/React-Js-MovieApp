import axios from 'axios'
import React, { useEffect, useState } from 'react'
function Movies() {
    const [movie, setMovie] = useState([]);
    const [inputval, setInputval] = useState("")
    const [search, setSearch] = useState("lord")
    useEffect(() => { 
        getMovies();
    }, [])

    const handleChange = (e) =>{
        setInputval(e.target.value);
        console.log(inputval)
    }

    const handleClick = (inputval) =>{
        setSearch(inputval)
    }
    async function getMovies() {
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?apikey=39192f7c&s=${search}`, { headers: { "Content-Type": "application/json" } })
            setMovie(data.Search);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", margin: "20px 00px" }}>
                <input type="text" onChange={handleChange} value={inputval} placeholder='search' style={{ width: "30%", textAlign: "center", marginRight: "10px" }} />
                <button onClick={handleClick}>Search</button>
            </div>
            <div style={{ display: 'flex', height: '100vh', justifyContent: "space-evenly", flexWrap: "wrap" }}>
                {
                    movie.map((el) => (
                        <div key={el.imdbID} style={{ width: "20rem", backgroundColor: "#131313", color: "white", borderRadius: "15px", padding: "1rem", margin: '1rem', textAlign: "center" }}>
                            <img src={el.Poster} style={{ width: 100 + "%" }} alt="" />
                            <h3 style={{ marginTop: "20px" }}>{el.Title}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Movies
