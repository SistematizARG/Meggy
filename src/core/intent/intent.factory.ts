import { randomUUID } from "node:crypto";

import type {
  Intent,
  IntentPriority
} from "./intent.types.js";

export class IntentFactory {

  static create<TPayload>(
    action: string,
    payload: TPayload,
    options: {
      actorId: string;
      tenantId: string;
      source: string;
      traceId?: string;
      priority?: IntentPriority;
    }
  ): Intent<TPayload> {

    return {

      id: randomUUID(),

      action,

      payload,

      priority:
        options.priority ?? "normal",

      metadata: {

        traceId:
          options.traceId ??
          randomUUID(),

        actorId:
          options.actorId,

        tenantId:
          options.tenantId,

        source:
          options.source,

        timestamp:
          new Date().toISOString()
      }
    };
  }

}
