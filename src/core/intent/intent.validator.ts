import { IntentSchema } from "./intent.schema.js";
import { InvalidIntentError } from "./errors.js";
import type { Intent } from "./intent.types.js";

export class IntentValidator {
  static validate(
    intent: Intent
  ): Intent {

    const result =
      IntentSchema.safeParse(intent);

    if (!result.success) {
      throw new InvalidIntentError(
        result.error.message
      );
    }

    return intent;
  }
}
