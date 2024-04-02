interface InputCartItems {
  color?: string;
  size?: string;
  product_id?: string;
  user_id?: string;
}

interface InputUser {
  emailOrPhone?: string;
  name?: string;
  password?: string;
}

interface InputWishlist {
  user_id: string;
  product_id: string;
}
interface InputProfile {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  password?: string;
}
