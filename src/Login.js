import React,{useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Login=()=>{
    const[Email,setEmail]= useState("");
    const[Password,setPassword]= useState("");
    const[Redirectstate,setRedirectstate]= useState(false);

    const emailcheck=(e)=>{
        setEmail(e.target.value);
        console.log(Email);
    }
    const passwordcheck=(e)=>{
        setPassword(e.target.value);
        console.log(Password);
    }
    const check=(e)=>{
        e.preventDefault();
        const fd = new FormData();
        fd.append('email', Email);
        fd.append('password', Password);

        axios.post('http://localhost:8080/form-react/login.php',fd).then(res=>{
                if(res.data>0){
                    // console.log(res);
                    localStorage.setItem('myvalue',Email);
                    setRedirectstate(true);
                }
                else
                {
                    console.log(res);
                }
        }).catch(err=>{
            console.log(err);
        })
    }
return((Redirectstate)?(<Redirect to="/home"/>):
        <div className="container">
                <h1>Login</h1>
                    <div className="form-group">
                         <label for="Email" >Email</label>
                         <input type="email" name="email" onChange={emailcheck}  className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label for="Password" >Password</label>
                        <input type="Password" name="Password" onChange={passwordcheck}  className="form-control"></input>
                    </div>
                    <button className="btn btn-primary" onClick={check}>Login</button>
             </div>
    )

    }
export default Login