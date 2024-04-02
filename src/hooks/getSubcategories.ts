import axios from "axios";

interface ResponseProps {
  data: {
    success: boolean;
    subcategories: Subcategory[];
    message: string;
  };
}
export async function getSubcategories(url: string) {
  try {
    const { data }: ResponseProps = await axios(url, {
      headers: { "Content-Type": "application/json" },
    });
    if (data.success) {
      return data;
    }
    return {
      success: false,
      subcategories: [],
      message: "Something went wrong !",
    };
  } catch (error) {
    return {
      success: false,
      subcategories: [],
      message: "Something went wrong !",
    };
  }
}
