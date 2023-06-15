import { Card } from "react-bootstrap";
import "./Products.modules.css";
import { getAuth, updatePassword } from "firebase/auth";

 import {useState} from 'react';
// import AuthContext from "../Auth/AuthContext";
export function Product() {


  const [password, setPassword]= useState('');
  const auth = getAuth();
  
  const user = auth.currentUser;
  
  const handlepassword =(e)=>{
    setPassword(e.target.value);

  }

  // const NewPasswordInputRef = useRef();
  // const authCtx = useContext(AuthContext);
   const submitHandler=event=>{
       event.preventDefault();
       updatePassword(user, password).then(() => {
        alert("Update successful.")
      }).catch((error) => {
        // An error ocurred
        // ..
      });
      
    
   }

  //   const enternewpassword = NewPasswordInputRef.current.value;

  //   fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBioGGFEkjafDlfi3KO8DrKky9eXgcEH9A"
 
    //     // history.replace('/')
    //   });
    // };
  return (
    <Card style={{width:"500px",padding:'',backgroundColor:'aqua',textAlign:"center" ,border:''}}>
    <section className="classes.profile">
      <h1>Your User Profile</h1>
      <form className="classes.form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="new-password">New Password</label>
          <input
          type="password"
          id="new-password"
          minLength="7"
          value={password}
          onChange={handlepassword}
          required
        />
        </div>
        <div className="action">
          <button>Change Password</button>
        </div>
      </form>
    </section>
    </Card>
  );
}

