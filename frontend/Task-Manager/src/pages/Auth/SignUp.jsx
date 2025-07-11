import React, {useState, useContext} from 'react'
import AuthLayout from '../../components/layouts/AuthLayout';
import { validateEmail } from '../../utils/helper.js';
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector';
import Input from '../../components/inputs/Input.jsx';
import { useNavigate,Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosinstance.js';
import { API_PATHS } from '../../utils/apiPaths.js';
import { UserContext } from '../../context/userContext';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminInviteToken, setAdminInviteToken] = useState('');

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {updateUser} = useContext(UserContext)

  //handle sign up form submit

  const handleSignUp = async (e) => {
      e.preventDefault();
      

      if (!fullName) {
        setError('Please enter your full name');
        return;
      }
      if (!validateEmail(email)) {
        setError('Please enter a valid email address');
        return;
      }
      if (password.length < 8) {
        setError('Password must be at least 8 characters long');
        return;
      }
      setError("");
       //Sign up API call
    try{

      //upload image if present
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
         profileImageUrl = imgUploadRes.imageUrl || "";
            }
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
        profileImageUrl, 
        adminInviteToken

      });
      const { token, role } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data); // Assuming updateUser is a function to update user context

        //redirect to dashboard based on role
        if (role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/user/dashboard');
        }
      }
      
    } catch(error){
      if (error.response && error.response.data.message){
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }

    }
    }

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col  justify-center">
        <h3 className="text-xl font-semibold text-black"> Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6 ">
          Join us today by entering your details belows.
        </p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
            />

            <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter your email"
            type="text"
            />
            <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter your password"
            type="password"
            />

            <Input
            value={adminInviteToken}
            onChange={(e) => setAdminInviteToken(e.target.value)}
            label="Admin Invite Token"
            placeholder="6 Digit Code"
            type="text"
            />
             </div>
            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          <button type="submit" className="btn-primary">
           Sign Up
          </button>
          <p className="text-[13px] text-slate-800 mt-3 text-center">
           Already have an account?{" "}
            <Link className="font-medium text-primary underline" to="/signup">
              Login
            </Link>
          </p>

         

        </form>

      </div>
    </AuthLayout>
  )
}

export default SignUp;