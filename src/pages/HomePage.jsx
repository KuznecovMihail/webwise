import {Navigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/use-auth'
import { removeUser } from 'store/slices/userSlice'
import Header from 'components/Menu/Header';

function HomePage() {
    const dispatch = useDispatch()

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div className='container'>
            <Header/>
            <h1>Welcome</h1>

            <button
                onClick={() => dispatch(removeUser())}

            >Log Out</button>
        </div>
    ) : 
    ( 
        <Navigate to = "/login" />
    );
}

export default HomePage;