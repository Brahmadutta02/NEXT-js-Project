const ResturantSignUp=()=>{
    return(
        <>
        <h3>Signup</h3>
        <div>
            <div className="input-wrapper">
            <input type="text" placeholder="Enter Email Id" className="input-field"/>
            </div>

            <div className="input-wrapper">
            <input type="text" placeholder="Enter Resturant Name" className="input-field"/>
            </div>

            <div className="input-wrapper">
            <input type="password" placeholder="Enter Password" className="input-field"/>
            </div>

            <div className="input-wrapper">
            <input type="password" placeholder="Enter Confirm Password" className="input-field"/>
            </div>

            <div className="input-wrapper">
                <button className="button">Sign up</button>
            </div>
        </div>
        </>
    )
}

export default ResturantSignUp;