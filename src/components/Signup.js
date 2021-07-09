import React,{useState} from 'react'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'




export default function Signup() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const history = useHistory()
   const handelSubmit =async(e)=>{
     e.preventDefault()
     try{
        const result = await auth.createUserWithEmailAndPassword(email,password)
        window.M.toast({html: `successfully signed up ${result.user.email}!!!!`, classes :"green"})
        history.push('/')
     }catch(err){
        window.M.toast({html: err.message, classes :"green"})
     }

   
   }
    return (
        <div className="container center" style={{maxWidth:"400px"}}>
            <h4>Please Signup</h4>
            <form onSubmit={(e) => handelSubmit(e)}>
                <div className="input-field ">
                    <input placeholder="email" type="email"
                        onChange={(e) => setemail(e.target.value)} />
                    <input placeholder="password" type="password"
                        onChange={(e) => setpassword(e.target.value)} />
                </div>
                <button type="submit" className="waves-effect waves-light btn green black-text btn-small ">signup</button>
            </form>
        </div>
    )
}
