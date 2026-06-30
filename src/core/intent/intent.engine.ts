import type { Intent } from "./intent.types.js";
import { IntentValidator } from "./intent.validator.js";

export class IntentEngine {

  ingest<T>(
    intent: Intent<T>
  ): Intent<T> {

    const validated =
      IntentValidator.validate(intent);

    return validated;
  }

}
