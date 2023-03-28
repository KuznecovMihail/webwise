import { Form } from "./Form"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handelLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email : user.email,
                    id : user.uid,
                    token : user.accessToken
                }));
                navigate('/')
            })
            .catch(() => alert('Invalid user'))
    }
    return ( 
        <Form 
            title = "signin"
            handleClick = {handelLogin}
        />
     );
}

export default Login;