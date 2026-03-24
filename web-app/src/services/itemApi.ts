import axios from 'axios';
import type { Item } from '../types/item';

const API_BASE = 'http://35.200.174.160:9000';

const api = axios.create({ baseURL: API_BASE });

export const getItems = async (): Promise<Item[]> => {
  const res = await api.get('/api/items');
  return res.data;
};

export const getItemById = async (id: string): Promise<Item> => {
  const res = await api.get(`/api/items/${id}`);
  return res.data;
};

export const getItemsByCategory = async (category: string): Promise<Item[]> => {
  const res = await api.get(`/api/items/category/${category}`);
  return res.data;
};

export const createItem = async (formData: FormData): Promise<Item> => {
  const res = await api.post('/api/items', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

export const updateItemStatus = async (id: string, status: string): Promise<Item> => {
  const res = await api.patch(`/api/items/${id}/status`, null, { params: { status } });
  return res.data;
};

export const deleteItem = async (id: string): Promise<void> => {
  await api.delete(`/api/items/${id}`);
};