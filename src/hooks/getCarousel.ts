import axios from "axios";

interface Response {
  data: {
    success: boolean;
    carousel: Carousel[];
    message: string;
  };
}

export async function getCarouselSSG(url: string) {
  try {
    const { data }: Response = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });

    if (data.success) {
      return data;
    } else {
      return {
        success: false,
        carousel: [],
        message: "Something went wrong !",
      };
    }
  } catch (error) {
    return {
      success: false,
      carousel: [],
      message: "Something went wrong !",
    };
  }
}
