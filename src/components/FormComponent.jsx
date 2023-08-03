import { useState } from 'react';
import './FormComponent.css'

const FormComponent = () =>{

    //state for input form
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passConfirm,setPassConfirm] = useState('');

    //state for error massage
    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorPassConfirm,setErrorPassConfirm] = useState('')

    //state for color control
    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [passConfirmColor,setPassConfirmColor] = useState('')


    //example of outline function
    const setName = (event)=>{
        setUserName(event.target.value.trim())
    }

    const validateForm = (event) =>{
        event.preventDefault()

        if(userName.length>0){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('User name is required')
            setUserNameColor('red')
        }

        if(email.includes('@')){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('Invalid email address')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('Password length must be greater than 8 characters')
            setPasswordColor('red')
        }

        if(passConfirm == password){
            setErrorPassConfirm('')
            setPassConfirmColor('green')
        }else{
            setErrorPassConfirm('Password not match')
            setPassConfirmColor('red')
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Register Form</h2>
                <div className="form-control">
                    <label htmlFor="user_name">User Name</label>
                    <input type="text" name="user_name" id="user_name" value={userName} onChange={setName} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label htmlFor="user_email">Email Address</label>
                    <input style={{borderColor:emailColor}} type="email" name="user_email" id="user_email" value={email} onChange={(e)=>setEmail(e.target.value.trim())} />
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label htmlFor="user_pass">Password</label>
                    <input style={{borderColor:passwordColor}} type="password" name="user_pass" id="user_pass" value={password} onChange={(e)=>setPassword(e.target.value.trim())}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm_pass">Confirm Password</label>
                    <input style={{borderColor:passConfirmColor}} type="password" name="confirm_pass" id="confirm_pass" value={passConfirm} onChange={(e)=>setPassConfirm(e.target.value.trim())}/>
                    <small style={{color:passConfirmColor}}>{errorPassConfirm}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default FormComponent;