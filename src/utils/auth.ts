export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("authToken");
};

export const logout = () => {
  localStorage.removeItem("authToken");
};
