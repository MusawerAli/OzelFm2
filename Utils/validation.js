export const rules = {
  name: {
    regEx: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
    error: 'Only aplhabetic letters are allowed with spaces in between.',
  },
  email: {
    regEx:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: 'Invalid email address.',
  },
  phone: {
    regEx: /(?=.{11,12}$)^\d+$/,
    error: 'Enter a valid phone number without a + sign && max lenght is 12.',
  },
  password: {
    regEx: /(?=^.{8,16}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    error:
      'Password must be minimum length 8 and maximum length 16 characters (with at least a lowercase letter and uppercase letter, a number and special character.',
  },
  numeric: {
    regEx: /^\d+$/,
    error: 'Only numeric digits allowed.',
  },
  postCode: {
    regEx: /[a-z]{1,2}[0-9][0-9a-z]?\s?[0-9][A-z]{2}/g,
    error: 'Post Code is not valid.',
  },
  address: {
    regEx: /^[a-zA-Z0-9\s,.'-]{3,}$/,
    error: 'Address is not valid',
  },
};
