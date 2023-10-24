import axios from "axios";
export const getWaether = async (
  cityName:
    | {
        city: string;
        lat: string;
        lng: string;
        country: string;
        iso2: string;
        admin_name: string;
        capital: string;
        population: string;
        population_proper: string;
      }
    | undefined
) => {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${cityName?.lat}&longitude=${cityName?.lng}&current_weather=true`
  );
  const data: { weathercode: number; temperature: number; is_day: string } =
    response.data.current_weather;
  return { ...data };
};
