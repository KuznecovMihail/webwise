import { Form } from "./Form"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handelRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
                dispatch(setUser({
                    email : user.email,
                    id : user.uid,
                    token : user.accessToken
                }));
                navigate('/')
            })
            .catch(console.error)
    }

    return (  
        <Form
            title = "register"
            handleClick = {handelRegister}
        />
    );
}

export default Signup
