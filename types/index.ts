// Shared TypeScript types for the application

export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface Lead {
  id: string;
  email: string;
  name: string;
  phone?: string;
  status: 'new' | 'contacted' | 'consultation_booked' | 'converted';
  created_at: string;
}

export interface Client extends User {
  program_type?: string;
  start_date?: string;
  status: 'active' | 'inactive';
}
