import { PasswordGenerator } from './RandomPasswordGenerator';

export function GeneratePasswords(
  length: Number = 12,
  isAlpha: Boolean = true,
  isNumeric: Boolean = true,
  specialChars: Boolean = false,
  numberOfPasswords: Number = 24
): string[] {
  let passwords: string[] = [];
  for (let i = 0; i < numberOfPasswords; i++) {
    passwords.push(PasswordGenerator(length, isAlpha, isNumeric, specialChars));
  }
  return passwords;
}
