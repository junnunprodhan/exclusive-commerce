import axios from "axios";

interface ResponseProps {
  data: {
    success: boolean;
    product: Product | null;
    message: string;
  };
}
export async function getProductSSR(url: string) {
  try {
    const { data }: ResponseProps = await axios(url, {
      headers: { "Content-Type": "application/json" },
    });

    if (data.success) {
      return data;
    } else {
      return {
        product: null,
        success: false,
        message: "Something went wrong !",
      };
    }
  } catch (error) {
    return {
      product: null,
      success: false,
      message: "Something went wrong !",
    };
  }
}
