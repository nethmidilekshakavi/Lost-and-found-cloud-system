export interface Item {
  id: string;
  name: string;
  description: string;
  category: 'LOST' | 'FOUND';
  status: 'OPEN' | 'CLAIMED' | 'CLOSED';
  location: string;
  imageUrl?: string;
  reportedByUserId?: string;
  contactEmail?: string;
  contactPhone?: string;
  createdAt: number;
}

export interface ItemFormData {
  name: string;
  description: string;
  category: 'LOST' | 'FOUND';
  location: string;
  reportedByUserId?: string;
  contactEmail?: string;
  contactPhone?: string;
  image?: File | null;
}