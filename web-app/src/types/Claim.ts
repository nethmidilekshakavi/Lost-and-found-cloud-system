export interface Claim {
  id: number;
  itemId: string;
  claimantUserId: number;
  claimantEmail: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  description: string;
  createdAt: number;
  updatedAt: number;
}

export interface ClaimDto {
  itemId: string;
  claimantUserId: number;
  claimantEmail: string;
  description: string;
}