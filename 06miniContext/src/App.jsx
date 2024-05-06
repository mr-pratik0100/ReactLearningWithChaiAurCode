
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'

function App() {
  
  return (
    <UserContextProvider>
       <h2>react with chai</h2>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
