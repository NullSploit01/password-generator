import { PasswordGenerator } from './RandomPasswordGenerator';

function GeneratePasswords({
  length = 12,
  isAlpha = true,
  isNumeric = true,
  specialChars = false,
  numberOfPasswords = 24,
}) {
  let passwords: string[] = [];
  for (let i = 0; i < numberOfPasswords; i++) {
    passwords.push(PasswordGenerator(length, isAlpha, isNumeric, specialChars));
  }
  return passwords;
}

export { GeneratePasswords };
