export interface Admin {
  id: string;
  name: string;
  username: string;
  password: string;
  roles: AdminRole[];
}

enum AdminRole {
  "superadmin",
  "admin",
}
