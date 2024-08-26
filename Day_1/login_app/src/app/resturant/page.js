'use client'
import {useState} from "react";
import ResturantLogin from "../_components/ResturantLogin";
import ResturantSignUp from "../_components/ResturantSignUp";
import ResturantHeader from "../_components/ResturantHeader";
import ResturantFooter from "../_components/Footer";
import "./style.css"

const Resturant =() => {
    const [login, setLogin]=useState(true)
    return(
        <>
        <div className="container">
            <ResturantHeader />
        <h1>Resturant Sign Up Page</h1>
        {
            login? <ResturantLogin/>: <ResturantSignUp/>
        }
        <div>
        <button onClick={()=>setLogin(!login)} className="button-link">
            {login?"Don't Have Any Account? Signup":"Already have Account? Login"}
        </button>
        </div>
        </div>
        <ResturantFooter/>
        </>
    )
}

export default Resturant;