import Sidebar from './Sidebar';
import './App.css';
import Chat from './Chat';
import Login from './Login';
import {useSelector,useDispatch} from 'react-redux'
import {selectUser} from './features/userSlice'
import { auth } from './firebase'; 
import {useEffect} from 'react'
import {login ,logout} from "./features/userSlice" 

function App() {
const user = useSelector(selectUser)
const dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      // the user id logged in
      console.log('hi')
      dispatch(login({
        uid:authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName:authUser.displayName,
      })
      );
    } else{
      //the user is logged out
      dispatch(logout())
    }
  })
}, [])


  return (
    <div className='app'>
      {
        user ? (
          <>
          <Sidebar />
          <Chat />
          </>
        ) : (
         <Login />
        )
      }
     
    </div>
  );
}

export default App;
