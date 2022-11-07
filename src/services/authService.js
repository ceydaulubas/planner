import axios from 'axios';

// Contains all the methods and also we need to use the create method of axios to build a new instance
class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true,
    });
  }

  // Method to use in our SignUp component
  signup = async (name, email, password) => {
    console.log('sign up');
    return this.service.post('/signup', { name, email, password }).then((response) => response.data);
  };

  // Method to use in our Login component
  login = async (email, password) => {
    console.log('login');
    return this.service.post('/login', { email, password }).then((response) => response.data);
  };
}

export default AuthService;
