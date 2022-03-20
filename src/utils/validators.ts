const emailValidationRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const imageUrlValidationRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;

export const validateSignInInputs = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  let emailError = "";
  let passwordError = "";

  if (!email) {
    emailError = "Field can not be empty";
  } else if (!emailValidationRegex.exec(email)) {
    emailError = "Email is invalid";
  }

  if (!password) {
    passwordError = "Field can not be empty";
  }

  const hasError = emailError || passwordError;

  return { hasError, emailError, passwordError };
};

export const validateSignUpInputs = ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  let firstNameError = "";
  let lastNameError = "";
  let emailError = "";
  let passwordError = "";

  if (!email) {
    emailError = "Field can not be empty";
  } else if (!emailValidationRegex.exec(email)) {
    emailError = "Email is invalid";
  }

  if (!password) {
    passwordError = "Field can not be empty";
  }

  if (!firstName) {
    firstNameError = "Field can not be empty";
  }

  if (!lastName) {
    lastNameError = "Field can not be empty";
  }

  const hasError =
    firstNameError || lastNameError || emailError || passwordError;

  return { hasError, firstNameError, lastNameError, emailError, passwordError };
};

export const validateCategoryInputs = ({
  name,
  imageUrl,
  description,
}: {
  name: string;
  imageUrl: string;
  description: string;
}) => {
  let nameError = "";
  let imageUrlError = "";
  let descriptionError = "";

  if (!name) {
    nameError = "Field can not be empty";
  }

  if (!imageUrl) {
    imageUrlError = "Field can not be empty";
  } else if (!imageUrlValidationRegex.exec(imageUrl)) {
    imageUrlError = "Image Url is not valid";
  }

  if (!description) {
    descriptionError = "Field can not be empty";
  }

  const hasError = nameError || imageUrlError || descriptionError;

  return { hasError, nameError, imageUrlError, descriptionError };
};
