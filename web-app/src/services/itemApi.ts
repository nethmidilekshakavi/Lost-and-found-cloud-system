import axios from 'axios';
import type { Item } from '../types/item';

const API_BASE = 'http://localhost:9000';

const api = axios.create({ baseURL: API_BASE });

export const getItems = async (): Promise<Item[]> => {
  const res = await api.get('/api/v1/items');
  return res.data;
};

export const getItemById = async (id: string): Promise<Item> => {
  const res = await api.get(`/api/v1/items/${id}`);
  return res.data;
};

export const getItemsByCategory = async (category: string): Promise<Item[]> => {
  const res = await api.get(`/api/v1/items/category/${category}`);
  return res.data;
};

export const createItem = async (formData: FormData): Promise<Item> => {
  const res = await api.post('/api/v1/items', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

export const updateItemStatus = async (id: string, status: string): Promise<Item> => {
  const res = await api.patch(`/api/v1/items/${id}/status`, null, { params: { status } });
  return res.data;
};

export const deleteItem = async (id: string): Promise<void> => {
  await api.delete(`/api/v1/items/${id}`);
};