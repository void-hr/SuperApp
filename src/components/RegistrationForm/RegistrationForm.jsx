import { useEffect, useState } from 'react'
import './registrationform.css'
import { useNavigate } from 'react-router-dom';

const initialState = {
  check: false,
  name: '',
  username: '',
  email: '',
  mobile: '',
}

const RegistrationForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState)
  const [formErrorValues, setFormErrorValues] = useState({})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrorValues(validate(formData,e));
  }


  const validate = (values,e) => {
    const errors = {}
    if (values.username.length === 0) {
      errors.username = "Field is required"
    }
    if (values.name.length === 0) {
      errors.name = "Field is required"
    }
    if (values.email.length === 0) {
      errors.email = "Field is required"
    }
    if (values.mobile.length === 0) {
      errors.mobile = "Field is required"
    }
    if( values.check === false) {
      errors.check = "Check this box if you want to proceed"
    }

    return errors;
  }
 

  useEffect(() => {
    const isFormFilled = Object.keys(formData).every((key) => formData[key] !== '');
    if(isFormFilled && formData.check && Object.keys(formErrorValues).length === 0) {
      localStorage.setItem('fornData', JSON.stringify(formData))
      navigate('/category')
    }
    
  }, [formErrorValues, formData, navigate])

  return (
    <div className='form_container'>
      <div className='logo'>
        <p className='logo_text'>Super App</p>
        <p>Create your new account</p>
      </div>
      <form className='form'>
       <input type="text" className={formErrorValues.name && 'input_error'} name='name' placeholder='Name' onChange={(e) => handleChange(e)} />
       { formErrorValues && <p className='errors'>{formErrorValues.name}</p>}
        <input type="text" className={formErrorValues.username && 'input_error'}  name='username' placeholder='Username' onChange={(e) => handleChange(e)} />
        { formErrorValues && <p className='errors'>{formErrorValues.username}</p>}
        <input type="email" className={formErrorValues.email && 'input_error'}  name="email" placeholder='Email' onChange={(e) => handleChange(e)} />
        { formErrorValues && <p className='errors'>{formErrorValues.email}</p>}
        <input type="number" className={formErrorValues.mobile && 'input_error'}   name='mobile' placeholder='Mobile' onChange={(e) => handleChange(e)} />
        { formErrorValues && <p className='errors'>{formErrorValues.mobile}</p>}
        <div className='checkbox'>
          <input type="checkbox" required onChange={(e) => setFormData({ ...formData, check: e.target.checked })} />
          <p>Share my registration data with Superapp</p>
        </div>
          { formErrorValues && <p className='errors'>{formErrorValues.check}</p>}
        <button className='signup' onClick={handleSubmit}>Signup</button>
        <div className='t&c'>
          <p>By clicking on Sign up. you agree to Superapp <a href='/'>Terms and Conditions of Use</a></p>
          <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="/">Privacy Policy</a></p>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm

// DM SANS ROBOTO SINGLE DAY