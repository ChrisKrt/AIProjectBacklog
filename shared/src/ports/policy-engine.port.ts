// Port definition for policy engine (OPA/Rego)
export interface PolicyEnginePort {
  evaluate(policy: string, input: any): Promise<PolicyResult>;
  loadPolicy(policyId: string, policyCode: string): Promise<void>;
  removePolicy(policyId: string): Promise<void>;
}

export interface PolicyResult {
  allowed: boolean;
  reasons?: string[];
  data?: any;
}
