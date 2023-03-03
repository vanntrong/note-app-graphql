export interface User {
  _id: string;
  displayName: string;
  email?: string;
  avatar: string;
  createdAt?: Date;
  updatedAt?: Date | null;
  uid: string;
}
