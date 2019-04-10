/*
Validation for entering Login Email and Password. This function
check if the email is empty or is written wrong and if the password
is at least 6 lenghts */

export const ValidationEmail = (email) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === '' || reg.test(email) === false)
    return 'insert valid email';
  else return true;
}

export const ValidationPassword = (password) => {
  if (password.length < 6)
    return 'insert password with at least 6 characters';
  else return true;
}