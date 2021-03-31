import React from 'react';
import {Link} from 'react-router-dom';

const Logout=()=>{
    return (
        <div>
            <h1>Log Out</h1><br></br>
            <br></br>
            <h3><Link to='/login'>Click here to Login Again</Link></h3>
        </div>
    )
};

export default Logout;