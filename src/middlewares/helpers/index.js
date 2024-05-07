export const getUserToken = () => localStorage.getItem('userToken');
export const setUserToken = (token) => localStorage.setItem('userToken', token);

export const options = () => {
  return {
    headers: {
      Authorization: getUserToken(),
    }
  }
};

export const multipartOptions = () => {
  return {
    headers: {
      Authorization: getUserToken(),
      'Content-Type': 'multipart/form-data'
    }
  }
};