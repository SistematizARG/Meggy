export class InvalidIntentError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "InvalidIntentError";
  }
}
