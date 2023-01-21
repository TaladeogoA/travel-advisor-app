const getPlacesData = async function ({ queryKey }) {
  const [type, bounds] = queryKey;

  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=${bounds?.sw.lat}&tr_latitude=${bounds?.ne.lat}&bl_longitude=${bounds?.sw.lng}&tr_longitude=${bounds?.ne.lng}`;
  console.log(URL);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "42de696695msh49db979fb458e74p15f37cjsn7bb0ae314fee",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const response = await fetch(URL, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

export default getPlacesData;
