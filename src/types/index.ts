export interface AuthProvider {
  name: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export type AuthType = "SAAS" | "SELF_HOSTED";
