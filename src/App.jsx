import './App.css'
import GrandPa from './Components/GrandPa/GrandPa';
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import CustomHook from './Components/CustomHook/CustomHook'
// import RefForm from './Components/RefForm/RefForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = (data) => {
    console.log('SignUp data:', data);
  }
  const handleProfileSubmit = (data) => {
    console.log('Profile Update data:',data);
  }

  return (
    <>
      <h1>Submit Form</h1>

      <GrandPa></GrandPa>


      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHook></CustomHook> */}
      {/* <ReusableForm formTitle={'SignUP'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h3>SignUp:</h3>
          <p>Sign Up right now..</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleProfileSubmit} btn={'Update'}>
        <div>
          <h3>Update Profile:</h3>
          <p>Keep your profile updated..</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
