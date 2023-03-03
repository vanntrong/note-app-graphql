export interface User {
  displayName: string;
  email: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date | null;
  uid: string;
}
