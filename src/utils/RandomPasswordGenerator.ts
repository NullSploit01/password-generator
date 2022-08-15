export function PasswordGenerator(
  length: Number = 12,
  isAlpha: Boolean = true,
  isNumeric: Boolean = true,
  specialChars: Boolean = false
): String {
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
