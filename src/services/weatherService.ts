import axios from 'axios';

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  const response = await axios.get<WeatherData>(baseUrl, {
    params: {
      q: city,
      appid: apiKey,
      units: 'metric',
    },
  });
  return response.data
};
