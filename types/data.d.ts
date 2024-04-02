interface Product {
  id: string;
  title: string;
  regularPrice: number;
  discountPercent: number;
  rating: number;
  totalStock: number;
  brands: null | string;
  images: string[];
  totalReview: number;
  subcategory_id: string;
  totalSales: number;
  status: "active" | "inactive";
  sku: string;
  typeOfSales: "regular" | "flash_sale" | "popular" | "best_sale";
  deliveryFee: number;
  created_at: string;
  updated_at: string;
}
interface Category {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

interface Subcategory {
  id: string;
  name: string;
  icon: string;
  created_at: string;
  updated_at: string;
}
interface Arrival {
  id: string;
  name: string;
  image: string;
  description: string;
  subcategory_id: string;
  created_at: string;
  updated_at: string;
}
interface Carousel {
  id: string;
  image: string;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
}
interface CartList {
  id: string;
  product_id: string;
  product: Product;
  quantity: number;
  user_id: string;
  user: User;
  created_at: string;
  updated_at: string;
}

interface Wishlist {
  id: string;
  product: Product;
  product_id: string;
  user_id: string;
  user: User;
  created_at: Date;
  updated_at: Date;
}
interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  phone: string | null;
  phoneVerified: Date | null;
  emptyPassword: boolean;
  image: string | null;
  address: string | null;
  created_at: Date;
  updated_at: Date;
}
