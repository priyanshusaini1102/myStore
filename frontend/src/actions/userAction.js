import axios from "axios";
import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    CLEAR_ERRORS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS
} from '../constants/userConstant';



//login
export  const login = (email,password) => async(dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST});

        const config = {headers:{"Content-Type":"application/json"}};

        const {data} = await axios.post('/api/v1/login',{email,password},config);

        dispatch({type: LOGIN_SUCCESS,payload:data});

    }catch(err){
        dispatch({type:LOGIN_FAIL,payload:err.response.data.message});
    }
}

//register
export const register = (userData) => async(dispatch) => {
    try{
        dispatch({type:REGISTER_USER_REQUEST});

        const config = {headers: {"Content-Type": "multipart/form-data"} };

        const { data } = await axios.post("/api/v1/register", userData, config);

        dispatch({type:REGISTER_USER_SUCCESS, payload:data});

    }catch(err){
        dispatch({type:REGISTER_USER_FAIL,payload:err.response.data.message});
    }
}

//load User Data
export  const loadUser = () => async(dispatch) => {
    try {
        dispatch({type: LOAD_USER_REQUEST});

        const {data} = await axios.get('/api/v1/me');
        
        dispatch({type: LOAD_USER_SUCCESS,payload:data});

    }catch(err){
        dispatch({type:LOAD_USER_FAIL,payload:err.response.data.message});
    }
}

//logout
export const logout = () => async(dispatch) => {
    try {
        await axios.get('/api/v1/logout');
        
        dispatch({type:LOGOUT_USER_SUCCESS})

    }catch(err){
        dispatch({type:LOGOUT_USER_FAIL, payload:err.response.data.message});
    }
}

//update profile
export const updateProfile = (userData) => async(dispatch) => {
    try{
        dispatch({type:UPDATE_PROFILE_REQUEST});

        const config = {headers: {"Content-Type": "multipart/form-data"} };

        const { data } = await axios.put("/api/v1/me/update", userData, config);

        dispatch({type:UPDATE_PROFILE_SUCCESS, payload:data.success});

    }catch(err){
        dispatch({type:UPDATE_PROFILE_FAIL,payload:err.response.data.message});
    }
}

//update password
export const updatePassword = (password) => async(dispatch) => {
    try{
        dispatch({type:UPDATE_PASSWORD_REQUEST});

        const config = {headers: {"Content-Type": "application/json"} };

        const { data } = await axios.put("/api/v1/password/update", password, config);

        dispatch({type:UPDATE_PASSWORD_SUCCESS, payload:data.success});

    }catch(err){
        dispatch({type:UPDATE_PASSWORD_FAIL,payload:err.response.data.message});
    }
}

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(`/api/v1/password/forgot`, email, config);
  
      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
    } catch (error) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  //Reset Password
export const resetPassword = (token,passwords) => async(dispatch) => {
    try {
        dispatch({type:RESET_PASSWORD_REQUEST});

        const config = { headers : { "Content-Type" : "application/json" }};

        const {data} = await axios.put(`/api/v1/password/reset/${token}`,passwords,config);

        dispatch({type:RESET_PASSWORD_SUCCESS, payload: data.success});

    }catch(err){
        dispatch({type:RESET_PASSWORD_FAIL,payload:err.response.data.message})
    }
}


//clearing errors
export const clearErrors = () => async(dispatch)=> {
    dispatch({type:CLEAR_ERRORS});
}