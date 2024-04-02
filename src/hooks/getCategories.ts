import axios from "axios";

interface ResponseProps {
  data: {
    success: boolean;
    categories: Category[] | null;
    message: string;
  };
}
export async function getCategoriesSSG(url: string) {
  try {
    const { data }: ResponseProps = await axios(url, {
      headers: { "Content-Type": "application/json" },
    });

    if (data.success) {
      return data;
    } else {
      return {
        categories: null,
        success: false,
        message: "Something went wrong !",
      };
    }
  } catch (error) {
    return {
      categories: null,
      success: false,
      message: "Something went wrong !",
    };
  }
}
