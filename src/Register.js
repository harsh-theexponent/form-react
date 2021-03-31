import React,{useState} from 'react';
import axios from 'axios';

const Register=()=>{
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Mobile, setMobile] = useState("");

    const inputName=(e)=>{
        setName(e.target.value);
    }
    const inputEmail=(e)=>{
        setEmail(e.target.value);
    }
    const inputMobile=(e)=>{
        setMobile(e.target.value);
    }
    const inputPassword=(e)=>{
        setPassword(e.target.value);
    }
   

    const submit=()=>{
        const fd = new FormData();
        fd.append('name',Name);
        fd.append('email',Email);
        fd.append('mobile',Mobile);
        fd.append('password',Password);
        
        axios.post('http://localhost:8080/form-react/register.php',fd).then(res=>{
            console.log(res);
        })
    }

    return (
        <div className="container">
        
        <h1 className="mr-5 ml-5 mt-5">Registration</h1>
        <div className="container mb-5 mt-5 text-left">
        
        <div className="form-group">
        <input type="text" name="name" className="form-control" onChange={inputName} id="name" placeholder="Enter Name" />
        </div>
        <div className="form-group">
        <input type="email" name="email" id="email" className="form-control" onChange={inputEmail} placeholder="Enter email" />
        </div>
        <div className="form-group">
        <input type="tel" name="mobile" className="form-control" id="mobile" onChange={inputMobile} placeholder="Enter Mobile"  />
        </div>
        <div className="form-group">
        <input type="Password" name="password" className="form-control" id="password" onChange={inputPassword} placeholder="Enter Password" /> 
        </div>
        <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
      
       
            
      </div>
     
      </div>
    )
};

export default Register