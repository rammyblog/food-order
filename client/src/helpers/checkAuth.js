import decode from "jwt-decode";

const checkAuth = () => {
  const token = localStorage.getItem("food_order_access_token");

  if (!token) return false;

  try {
    const { exp } = decode(token);
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};
export default checkAuth;
