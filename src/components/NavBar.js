import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'

export default function NavBar({ user }) {
    const history = useHistory()
    return (
        <div>
            <nav className="green">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left" style={{marginLeft:"15px"}}>Todo
                    <i className="  material-icons tiny left" style={{marginLeft:"15px"}}>format_list_numbered</i>
                    </Link>
                    <ul id="nav-mobile" className="right ">

                        {
                            user ?
                                <li><i className="large material-icons left black-text " >face</i><button className="waves-effect waves-light btn yellow black-text btn-small " style={{marginRight:"15px"}}
                                onClick={()=>{
                                    auth.signOut()
                                    history.push('/login')
                                }}
                                >Logout</button></li>
                                :
                                <>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">signup</Link></li>
                                </>
                        }


                    </ul>
                </div>
            </nav>
        </div>
    )
}
