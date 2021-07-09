import React, { useState } from 'react'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'
export default function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const history = useHistory()
    const handelSubmit = async(e) => {
        e.preventDefault()
        try{
           const result = await auth.signInWithEmailAndPassword(email,password)
           window.M.toast({html: `successfully logedin ${result.user.email}!!!!`, classes :"green"})
           history.push('/')
        }catch(err){
           window.M.toast({html: err.message, classes :"green"})
        }
    }
    return (
       
        <div className="container center" style={{maxWidth:"400px"}}>
             <h4>Please login</h4>
            <form onSubmit={(e) => handelSubmit(e)}>
                <div className="input-field ">
                    <input placeholder="email" value={email} type="email"
                        onChange={(e) => setemail(e.target.value)} />
                    <input placeholder="password" value={password} type="password"
                        onChange={(e) => setpassword(e.target.value)} />
                </div>
                <button type="submit" className="waves-effect waves-light btn green black-text btn-small ">Login</button>
            </form>
        </div>
    )
}
