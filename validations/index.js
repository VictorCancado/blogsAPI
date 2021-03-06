const validateName = (displayName) => {
  if (displayName.length < 8) {
    return {
      message: '"displayName" length must be at least 8 characters long',
    };
  }

  return {};
};

const isEmailValid = (email) => {
  const reg = new RegExp(/^[\w.]+@[a-z]+.\w{2,3}$/g);

  if (!email) {
    return {
      message: '"email" is required',
    };
  }

  if (!reg.test(email)) {
    return {
      message: '"email" must be a valid email',
    };
  }

  return {};
};

const passwordIsValid = (password) => {
  if (!password) {
    return {
      message: '"password" is required',
    };
  }
  
  if (password.length < 6) {
    return {
      message: '"password" length must be 6 characters long',
    };
  }

  return {};
};

const isEmailLoginValid = (email) => {
  if (email === '') {
    return {
      message: '"email" is not allowed to be empty',
    };
  }
  
 if (!email) {
    return {
      message: '"email" is required',
    };
  }

  return {};
};

const passwordLoginIsValid = (password) => {
  if (password === '') {
    return {
      message: '"password" is not allowed to be empty',
    };
  }
  
  if (!password) {
    return {
      message: '"password" is required',
    };
  }

  return {};
};

const validateCategorieName = (name) => {
  if (!name) {
    return {
      message: '"name" is required',
    };
  }

  return {};
};

const validateBlogPosts = (title, content, categoryIds) => {
  if (!title) {
    return {
      message: '"title" is required',
    };
  }

  if (!content) {
    return {
      message: '"content" is required',
    };
  }

  if (!categoryIds) {
    return {
      message: '"categoryIds" is required',
    };
  }

  return {};
};

const validateUpdatePosts = (title, content, categoryIds) => {
  if (categoryIds) {
    return {
      message: 'Categories cannot be edited',
    };
  }
  if (!title) {
    return {
      message: '"title" is required',
    };
  }

  if (!content) {
    return {
      message: '"content" is required',
    };
  }

  return {};
};

module.exports = {
  validateName,
  isEmailValid,
  passwordIsValid,
  isEmailLoginValid,
  passwordLoginIsValid,
  validateCategorieName,
  validateBlogPosts,
  validateUpdatePosts,
};