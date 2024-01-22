export type INewUser = {
  email: string;
  name: string;
  username: string;
  password: string;
}

export type IUser = {
  userId: string;
  name: string;
  username: string;
  email: string;
  pfpUrl: string;
  bio: string;
};

export type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
}