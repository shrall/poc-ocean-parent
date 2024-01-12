import { create } from 'zustand';

type TokenStore = {
  token: string;
  setToken: (token: string) => void;
};

export const useTokenStore = create<TokenStore>((set) => ({
  token: '',
  setToken: (token) => set({ token }),
}));
