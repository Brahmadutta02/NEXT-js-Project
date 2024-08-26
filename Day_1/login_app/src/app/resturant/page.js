'use client'
import {useState} from "react";
import ResturantLogin from "../_components/resturantLogin";
import ResturantSignUp from "../_components/resturantSignUp";

const Resturant =() => {
    const [login, setLogin]=useState(true)
    return(
        <>
        <div className="container">
        <h1>Resturant Sign Up Page</h1>
        {
            login? <ResturantLogin/>: <ResturantSignUp/>
        }
        <div>
        <button onClick={()=>setLogin(!login)} className="button-link">
            {login?"Do Not Have Account? Signup":"Already have Account? Login"}
        </button>
        </div>
        </div>
        </>
    )
}

export default Resturant;