import axios from "axios";

const apiKey = process.env.OPENWEATHER_API_KEY;

async function getWeather(city) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

const weather = { getWeather };

export default weather;
