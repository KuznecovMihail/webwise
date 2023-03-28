import Signup from "../components/SignUp";
import { Link } from "react-router-dom";

function RegisterPage() {
    return ( 
        <div className='container'>
            <h1>Register</h1>
                <Signup />
            <p>
                Or <Link to="/login">login</Link>
            </p>
        </div>
     );
}

export default RegisterPage;