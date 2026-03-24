import axios from 'axios';
import type { User, UserDto, LoginRequest, LoginResponse } from '../types/user';

const API_BASE = 'http://35.200.174.160:9000';

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await api.post('/auth/login', data);
  return res.data;
};

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get('/api/users');
  return res.data;
};

export const createUser = async (data: UserDto): Promise<boolean> => {
  const res = await api.post('/api/users', data);
  return res.data;
};

export const updateUser = async (id: number, data: UserDto): Promise<boolean> => {
  const res = await api.put(`/api/users/${id}`, data);
  return res.data;
};

export const deleteUser = async (id: number): Promise<boolean> => {
  const res = await api.delete(`/api/users/${id}`);
  return res.data;
};

export const editRole = async (id: number, role: string): Promise<boolean> => {
  const res = await api.patch(`/api/users/${id}/role`, null, { params: { role } });
  return res.data;
};