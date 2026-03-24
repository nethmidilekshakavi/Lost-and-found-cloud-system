import axios from 'axios';
import type { Claim, ClaimDto } from '../types/claim';

const API_BASE = 'http://35.200.174.160:9000';

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export const getClaims = async (): Promise<Claim[]> => {
  const res = await api.get('/api/claims');
  return res.data;
};

export const getClaimById = async (id: number): Promise<Claim> => {
  const res = await api.get(`/api/claims/${id}`);
  return res.data;
};

export const createClaim = async (data: ClaimDto): Promise<Claim> => {
  const res = await api.post('/api/claims', data);
  return res.data;
};

export const updateClaimStatus = async (
  id: number,
  status: string,
  role: string
): Promise<Claim> => {
  const res = await api.patch(`/api/claims/${id}/status`, null, {
    params: { status, requestedByRole: role },
  });
  return res.data;
};
export const deleteClaim = async (id: number): Promise<void> => {
  await api.delete(`/api/claims/${id}`);
};