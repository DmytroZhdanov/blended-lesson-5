export const userInfo = ({ latitude: lat, longitude: long }) => {
  const API_KEY = "c34efdc8ec4d43dfa0a3980567efbefd";
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${API_KEY}&language=en`;

  return fetch(urlPosition).then((res) => {
    if (res.ok) {
      return res.json().then((res) => res);
      //   res.json().then((res) => console.log(res));
      //   return;
    }
    throw new Error("Something...");
  });
};
