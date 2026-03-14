export interface PolicyEnginePort {
  evaluate(policy: string, input: unknown): Promise<PolicyResult>;
  loadPolicy(policyPath: string): Promise<void>;
}

export interface PolicyResult {
  allow: boolean;
  reason?: string;
}
