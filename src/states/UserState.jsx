import React from 'react'
import UserContext from '../context/UserContext'
import { useDispatch } from 'react-redux'
import { loaddata, logout } from '../features/userSlice';
import { Redirect } from 'react-router-dom';
import { relBatch } from '../features/batchSlice';
import { getValue, relValue } from '../features/valSlice';
import axios from 'axios';

const UserState = (props) => {
  let api = "http://192.168.0.107:5002/api/v1/loginuser";
  const dispatch = useDispatch();
  let config = {
    headers: {
      "Content-Type": "application/json",
    }
  }
  const login = async (creditional) => {
    // if(creditional.email==)
    console.log(creditional);
    const response = await axios.post(api,creditional,config);
    console.log(response.data);
    if(response.data && response.data.type=='manufacturer'){
      console.log("true");
      dispatch(loaddata(response.data));
      dispatch(getValue(response.data))
    }
    else if(response.data){
      dispatch(loaddata(response.data));
    }
    else{
      alert("Enter a proper creditional");
    }
    // history.push('/admin/index')
  }
  const logoutuser = () => {
    dispatch(logout());
    dispatch(relBatch());
    dispatch(relValue());
  }

  return (
    <UserContext.Provider value={{ login, logoutuser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState