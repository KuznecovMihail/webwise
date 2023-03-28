import Login from "components/Login";
import { Link } from "react-router-dom";

function LoginPage() {
    return ( 
        <div className='container'>
            <h1>LOGIN</h1>
                <Login/>
            <p>
                Or <Link to="/register">register</Link>
            </p>
        </div>
        
     );
}

export default LoginPage;