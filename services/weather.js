import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

async function getWeather(country) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${apiKey}`
    );
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

const weather = { getWeather };

export default weather;
