import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { requesterGET } from '../../utils/requester';
import { localStorageSave } from '../../utils/auth';
import SignInForm from './sign-form';

const SignIn = () => {
  const [isSuccesfulLogin, setSuccessfullLogin] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const signInAction = async userName => {
    setIsRequesting(true);
    const response = await requesterGET('https://www.zeroexu.com', {
      userName
    });
    //Aplicar una libreria para guardar el token en localstorage
    localStorageSave('token', 'string_del_token');
    setIsRequesting(false);
    setSuccessfullLogin(true);
  };

  if (isSuccesfulLogin === true) {
    //REDIRECT AL DASHBOARD
    console.log('ejecutar redirect');
    return <Redirect to={'/dashboard'} />;
  }
  return <SignInForm signInAction={signInAction} isEnabled={!isRequesting} />;
};

export default SignIn;
