
export const validateId = (id:string) => {
  const isValid = id.match(/^[A-Za-z0-9]{6,20}$/);
  return isValid;
}

export const validatePassword = (password:string) => {
  const isValid = password.match(/^.(?=^.{10,20}$)(?=.\d)(?=.[a-zA-Z])(?=.[`~!@#$%^&()+=]).$/);
  return isValid;
}