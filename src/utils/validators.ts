export const validateEmail = (email: string): boolean => {
  const regex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return regex.test(email);
}

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
}

export const validateUsername = (username: string): boolean => {
  return username.length >= 3;
}