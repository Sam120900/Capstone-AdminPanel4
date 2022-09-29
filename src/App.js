import React from 'react'
import './App.css';
import firebase from './firebase'

function App() {

  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("userProfile").get()
      setUsers(data.docs.map(doc => doc.data()))
    }
    fetchData()
  }, [])


  return (
    
    <ul>
      {users.map(user => (
        <li key={user.uid}> 
          {user.firstName}
        </li>
      ))}
    </ul>


  );
}

export default App;
