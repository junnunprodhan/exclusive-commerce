import axios from "axios";

interface Response {
  data: {
    success: boolean;
    arrival: Arrival[];
    message: string;
  };
}

export async function getArrivalSSG(url: string) {
  try {
    const { data }: Response = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });

    if (data.success) {
      return data;
    } else {
      return {
        success: false,
        arrival: [],
        message: "Something went wrong !",
      };
    }
  } catch (error) {
    return {
      success: false,
      arrival: [],
      message: "Something went wrong !",
    };
  }
}
