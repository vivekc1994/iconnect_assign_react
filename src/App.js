import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="container">
      <form onSubmit={(e)=>login(e)}>
        <div class="form-group">
          <label for="InputEmailLabel">Email address</label>
          <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <label for="InputPasswordLabel">Password</label>
          <input type="password" class="form-control" id="InputPassword" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

function login(e) {
  e.preventDefault();
  let request ={
    email: document.getElementById('InputEmail').value,
    password: document.getElementById('InputPassword').value
  }
  console.log(request);
 axios.post('http://localhost:5000/api/user/login',request)
.then(resp => {
  alert(resp.message);
})
.catch(err => {
  console.log(err);
})

}


export default App;
