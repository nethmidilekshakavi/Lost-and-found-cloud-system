export interface Claim {
  id: number;
  itemId: string;
  claimantUserId: number;
  claimantEmail: string;
  description: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: number;
  updatedAt: number;
}

export interface ClaimDto {
  itemId: string;
  claimantUserId: number;
  claimantEmail: string;
  description: string;
}