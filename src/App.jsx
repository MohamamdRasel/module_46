
import './App.css'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
import ReuseAbleForm from './Components/ReuseAbleForm/ReuseAbleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {
  
  const handleSignUpSubmit = e =>{
    e.preventDefault();
}

const handleUpdateProfile = e =>{
  e.preventDefault();
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
        handleSubmit={handleSignUpSubmit}></ReuseAbleForm>

      <ReuseAbleForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText = 'Update'></ReuseAbleForm>
      
    </>
  )
}

export default App
