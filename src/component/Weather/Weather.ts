import axios from "axios";
interface Data {
  weathercode: number
  temperature: number
  is_day: string
}
interface CityName {
  city: string
  lat: string
  lng: string
  country: string
  iso2: string
  admin_name: string
  capital: string
  population: string
  population_proper: string
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
