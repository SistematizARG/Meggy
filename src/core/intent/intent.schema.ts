import { z } from "zod";

export const IntentSchema = z.object({
  id: z.string().uuid(),

  action: z.string().min(1),

  payload: z.unknown(),

  priority: z.enum([
    "low",
    "normal",
    "high",
    "critical"
  ]),

  metadata: z.object({
    traceId: z.string().uuid(),

    tenantId: z.string(),

    actorId: z.string(),

    source: z.string(),

    timestamp: z.string().datetime()
  })
});

export type IntentDTO = z.infer<typeof IntentSchema>;
