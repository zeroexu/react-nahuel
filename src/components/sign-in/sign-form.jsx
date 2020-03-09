import React, { useState } from 'react';

const SignInForm = ({ signInAction, isEnabled = true }) => {
  const [currentUserName, setCurrentUserName] = useState('');
  const onChangeUserName = event => {
    setCurrentUserName(event.target.value);
  };
  return (
    <div>
      <input
        name='user'
        placeholder='nombre de usuario'
        onChange={onChangeUserName}
      />
      <button
        onClick={() => {
          isEnabled && signInAction(currentUserName);
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInForm;
