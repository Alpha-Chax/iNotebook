import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const host = "https://inotebook-backend.adaptable.app";

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            props.showAlert("Logged In Successfully", "success")
            history.push("/");
        }
        else{
            props.showAlert("Invalid Details", "danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='mt-3'>
            <h2 style={{borderRadius:"5px",display:"inline-block", backgroundColor:"beige", padding:"7px"}} className='my-4'>Login To Continue To iNotebook</h2>
            <form  onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="email" className="form-label"><strong>Email address</strong></label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"><strong>We'll never share your email with anyone else.</strong></div>
                </div>
                <div className="my-3">
                    <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-outline-dark my-2">Submit</button>
            </form>
        </div>
    )
}

export default Login