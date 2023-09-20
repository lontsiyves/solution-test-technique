let API_URL = "http://localhost:3020/restaurants";

const fetchRestaurantList = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const restaurant = await response.json();
    return restaurant;
  } catch (error) {
    console.log(error);
  }
};

const fetchRestaurantById = async (id: any) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const restaurant = await response.json();
    return restaurant;
  } catch (error) {
    console.log(error);
  }
};

export { fetchRestaurantList, fetchRestaurantById };
