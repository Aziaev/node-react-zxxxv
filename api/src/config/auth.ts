export const BCRYPT_WORK_FACTOR = 12;

export const PASSWORD_MAX_BYTES = 72;

export const PASSWORD_REGEX = /^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u;

export const PASSWORD_MESSAGE =
  '"{#label}" must contain one uppercase letter, one lowercase letter, and one digit';
