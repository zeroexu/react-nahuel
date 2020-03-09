import localstorage from 'local-storage';

export const isSigned = () => {
  const token = localStorage.getItem('token') || '';
  //Aplicar jwt para desencriptar el token  y verificar si es valido aun
  return token.length > 0;
};

export const localStorageSave = (key, value) => {
  localStorage.setItem(key, value);
};
