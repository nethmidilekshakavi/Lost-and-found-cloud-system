import axios from 'axios';
import type { Claim, ClaimDto } from '../types/claim';

const API_BASE = 'http://localhost:9000';

const api = axios.create({ baseURL: API_BASE });

export const getClaims = async (): Promise<Claim[]> => {
  const res = await api.get('/api/v1/claims');
  return res.data;
};

export const getClaimById = async (id: number): Promise<Claim> => {
  const res = await api.get(`/api/v1/claims/${id}`);
  return res.data;
};

export const getClaimsByItem = async (itemId: string): Promise<Claim[]> => {
  const res = await api.get(`/api/v1/claims/item/${itemId}`);
  return res.data;
};

export const getClaimsByUser = async (userId: number): Promise<Claim[]> => {
  const res = await api.get(`/api/v1/claims/user/${userId}`);
  return res.data;
};

export const getClaimsByStatus = async (status: string): Promise<Claim[]> => {
  const res = await api.get(`/api/v1/claims/status/${status}`);
  return res.data;
};

export const createClaim = async (data: ClaimDto): Promise<Claim> => {
  const res = await api.post('/api/v1/claims', data);
  return res.data;
};

export const updateClaimStatus = async (id: number, status: string): Promise<Claim> => {
  const res = await api.patch(`/api/v1/claims/${id}/status`, null, { params: { status } });
  return res.data;
};

export const deleteClaim = async (id: number): Promise<void> => {
  await api.delete(`/api/v1/claims/${id}`);
};