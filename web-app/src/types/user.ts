export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  email: string;
  role: string;
  password: string;
}

export interface UserDto {
  name: string;
  email: string;
  password: string;
  role?: string;
}