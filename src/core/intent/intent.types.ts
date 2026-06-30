export type IntentPriority =
  | "low"
  | "normal"
  | "high"
  | "critical";

export interface IntentMetadata {
  readonly traceId: string;
  readonly tenantId: string;
  readonly actorId: string;
  readonly source: string;
  readonly timestamp: string;
}

export interface Intent<
  TPayload = unknown
> {
  readonly id: string;
  readonly action: string;
  readonly payload: TPayload;
  readonly priority: IntentPriority;
  readonly metadata: IntentMetadata;
}
