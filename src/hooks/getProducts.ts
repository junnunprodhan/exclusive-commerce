import axios from "axios";

interface ResponseProps {
  data: {
    success: boolean;
    products: Product[];
    total: number;
    message: string;
  };
}
export async function getProducts(url: string) {
  try {
    const { data }: ResponseProps = await axios(url, {
      headers: { "Content-Type": "application/json" },
    });

    if (data.success) {
      return data;
    } else {
      return {
        products: [],
        total: 0,
        message: "Something went wrong !",
      };
    }
  } catch (error) {
    return {
      products: [],
      total: 0,
      message: "Something went wrong !",
    };
  }
}
