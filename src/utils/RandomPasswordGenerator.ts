function PasswordGenerator(
  length = 12,
  isAlpha = true,
  isNumeric = true,
  specialChars = false
) {
  let password = '';
  let possible = isAlpha
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    : '';
  possible += isNumeric ? '1234567890' : '';
  possible += specialChars ? '!@#$%^&*' : '';

  for (let i = 0; i < length; i++)
    password += possible.charAt(Math.floor(Math.random() * possible.length));

  return password;
}

export { PasswordGenerator };
