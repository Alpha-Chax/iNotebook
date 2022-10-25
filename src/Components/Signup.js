import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"", email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        const {name, email, password} = credentials;
       
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password, name: credentials.name})
        });
        const json = await response.json()
        console.log(json);
     

        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push("/");
            props.showAlert("Account Created Successfully", "success")
        }
        else{
           props.showAlert("Invalid Credentials", "danger")
        }
    }

  

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <div className="container mt-2">
      <h2 style={{borderRadius:"5px",display:"inline-block", backgroundColor:"beige", padding:"7px"}} className='my-4'>Create An Account To Use iNotebook</h2>
    <form onSubmit={handleSubmit}>
  <div className="my-3">
    <label htmlFor="name" className="form-label"><strong>Name</strong></label>
    <input type="name" className="form-control" id="name" name='name' onChange={onChange} />
  </div>
  <div className="my-3">
    <label htmlFor="email" className="form-label"><strong>Email address</strong></label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text"><strong>We'll never share your email with anyone else.</strong></div>
  </div>
  <div className="my-3">
    <label htmlFor="password" className="form-label"><strong>Password</strong></label>
    <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-outline-dark my-2">Submit</button>
</form>
</div>
  )
}

export default Signup
