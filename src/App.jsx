
import './App.css'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
import ReuseAbleForm from './Components/ReuseAbleForm/ReuseAbleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {
  
  const handleSignUpSubmit = data =>{
    console.log('sign up data', data);
}

const handleUpdateProfile = data =>{
  console.log('update profile', data);
}

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm>    */}
      
      {/* <StatefulForm></StatefulForm> */}

      {/* <RefForm></RefForm> */}
      
      {/* <HookForm></HookForm> */}

      <ReuseAbleForm 
        formTitle={'Sign UP'} 
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p>Please sign up right now</p>
          </div>
        </ReuseAbleForm>

      <ReuseAbleForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText = 'Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReuseAbleForm>
      
    </>
  )
}

export default App
