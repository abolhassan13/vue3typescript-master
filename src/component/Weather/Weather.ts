import axios from "axios";
interface Data {
  weathercode: Number
  temperature: Number
  is_day: String
}
interface CityName {
  city: String
  lat: String
  lng: String
  country: String
  iso2: String
  admin_name: String
  capital: String
  population: String
  population_proper: String
}
export const getWaether = async (
  cityName: CityName | undefined
) => {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${cityName?.lat}&longitude=${cityName?.lng}&current_weather=true`
  );
  const data: Data =
    response.data.current_weather;
  return { ...data };
};
