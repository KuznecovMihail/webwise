import {useState} from 'react';
import 'style/form.css'

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div>
            <div className="form">
                <input className='form__input' 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input className='form__input'
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="password"
                />
                <button className='form__button'
                    onClick={() => handleClick(email, pass)}
                >
                    {title}
                </button>
            </div>
        </div>
    )
}

export {Form}