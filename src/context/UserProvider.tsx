import { ReactElement, createContext, useState } from 'react';

type UserValue = {
  username: string;
  email: string;
  id: string;
  role: string;
};

type ContextType = {
  user: UserValue | null;
  setUser: React.Dispatch<React.SetStateAction<UserValue | null>>;
};

export const userContext = createContext<ContextType>({} as ContextType);
const Provider = userContext.Provider;

type Props = {
  children: ReactElement;
};

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<UserValue | null>(null);

  return <Provider value={{ user, setUser }}>{children}</Provider>;
}
