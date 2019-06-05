export interface AuthInfo {
  accessToken: string;
  uuid: string;
  expiresIn: number;
}

export interface User {
  uuid: string;
  full_name: string;
  avatarUrl: string;
  linkedin: string;
  github: string;
  twitter: string;
  instagram: string;
  description: string;
}

export interface Error {
  message: string;
  status: number;
}

export interface Event {
  id: number;
  name: string;
  owner_uuid: string;
  company: string;
  created_at: Date;
  finish_at: Date;
}
