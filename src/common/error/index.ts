export class AppError extends Error {
  code: AppErrorCode;

  message: string;

  constructor(code: AppErrorCode, message: string) {
    super();

    this.code = code;
    this.message = message;
  }

  toString() {
    return `${this.code}: ${this.message}`;
  }
}

export enum AppErrorCode {
  CharacterNotFound = 'CHARACTER_NOT_FOUND',
  CharactersNotFound = 'CHARACTERS_NOT_FOUND',
  UnknownError = 'UNKNOWN_ERROR',
}
