export const BCRYPT_WORK_FACTOR = 12;

export const PASSWORD_MAX_BYTES = 72;

export const PASSWORD_REGEX = /^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u;

export const PASSWORD_MESSAGE =
  '"{#label}" must contain one uppercase letter, one lowercase letter, and one digit';

const ONE_HOUR = 1000 * 60 * 60;

const TWELVE_HOURS = ONE_HOUR * 12;

export const EMAIL_VERIFICATION_TIMEOUT = TWELVE_HOURS;

// sha1 -> 160 bits / 8 = 20 bytes * 2 (hex) = 40 bytes
export const EMAIL_VERIFICATION_TOKEN_BYTES = 40;

// sha256 -> 256 bits / 8 = 32 bytes * 2 (hex) = 64 bytes
export const EMAIL_VERIFICATION_SIGNATURE_BYTES = 64;

// Password reset

export const PASSWORD_RESET_BYTES = 40;

export const PASSWORD_RESET_TIMEOUT = ONE_HOUR;
