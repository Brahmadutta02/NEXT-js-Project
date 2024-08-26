const ResturantSignUp=()=>{
    return(
        <>
        <h3>Signup</h3>
        <div>
            <div className="input-wrapper">
            <input type="text" placeholder="Enter email id" className="input-field"/>
            </div>

            <div className="input-wrapper">
            <input type="text" placeholder="Enter Resturant Name" className="input-field"/>
            </div>

            <div className="input-wrapper">
            <input type="password" placeholder="Enter password" className="input-field"/>
            </div>

            <div className="input-wrapper">
            <input type="password" placeholder="Confirm password" className="input-field"/>
            </div>

            <div className="input-wrapper">
                <button className="button">Sign up</button>
            </div>
        </div>
        </>
    )
}

export default ResturantSignUp;