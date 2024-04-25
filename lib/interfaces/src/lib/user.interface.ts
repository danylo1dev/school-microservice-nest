export enum UserRole {
  Teather = 'Teather',
  Student = 'Student',
}

export interface IUser {
  id?: string;
  displayName?: string;
  email: string;
  passwordHash: string;
  role: UserRole;
}
