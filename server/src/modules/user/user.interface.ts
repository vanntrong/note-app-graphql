export interface User {
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date | null;
  avatar: string;
}
