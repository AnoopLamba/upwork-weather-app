import axios from "axios";

const apiKey = process.env.OPENWEATHER_API_KEY;

async function getWeather(lat, lon) {
  try {
    const res = await axios.get(
      `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

const weather = { getWeather };

export default weather;
