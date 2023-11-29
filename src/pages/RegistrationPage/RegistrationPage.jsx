import RegistrationForm from "../../components/RegistrationForm/RegistrationForm"
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import './registrationpage.css'

const RegistrationPage = () => {
  return (
    <div className="registration">
      <ImageContainer/>
      <RegistrationForm/>
    </div>
  )
}

export default RegistrationPage