const { User } = require('../models');
const { validateName, 
  isEmailValid, 
  passwordIsValid, 
  } = require('../validations/index');

const create = async (displayName, email, password, image) => {
  const validateDisplay = validateName(displayName);
  if (validateDisplay.message) return validateDisplay;

  const regexEmail = isEmailValid(email);
  if (regexEmail.message) return regexEmail;

  const validatePassword = passwordIsValid(password);
  if (validatePassword.message) return validatePassword;

  const emailExists = await User.findOne({ where: {
    email,
  } });
  // console.log(emailExists);
  if (emailExists) return { message: 'User already registered' };

  const createUser = await User.create({ displayName, email, password, image });

  return createUser;
};

module.exports = {
  create,
};