import { useState } from "react";
import PasswordStrengthMeter from "./Components/PasswordStrengthMeter";




function App() {

  const [password, setPassword] = useState('');
  // console.log(password);

  return (
    <div className="container">
      <div className="col-md-6 mx-auto text-right">
        <h3 className="text-center my-5">Password Strength</h3>
        <div className="form-group mb-1" >
          <input type="password"
           className="form-control shadow-none"
           placeholder="Password"
           onChange={e => setPassword(e.target.value)}/>
        </div>
        <PasswordStrengthMeter password= {password}/>
      </div>
    </div>
  );
}

export default App;
