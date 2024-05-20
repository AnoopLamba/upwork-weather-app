"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { weekDays } from "./common/Helper";
import weather from "@/services/weather";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const WeatherSection = ({ selectedCountry, selectedDay, setSelectedDay }) => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeather = async () => {
    if (selectedCountry) {
      try {
        console.log("selected country is this: ", selectedCountry);
        const data = await weather.getWeather(selectedCountry);
        console.log("data from getWeather function:", data);
        setWeatherData(data.list);
      } catch (err) {
        console.error(err);
        setWeatherData([]);
      }
    } else {
      console.log("no country selected");
    }
  };

  const filterWeatherData = (data, dayId) => {
    const today = new Date();
    const selectedDate = new Date();
    selectedDate.setDate(today.getDate() + ((dayId + 7 - today.getDay()) % 7));
    const nextWeekDate = new Date(selectedDate);
    nextWeekDate.setDate(selectedDate.getDate() + 7);

    const getDayData = (date) => {
      return data.filter((item) => {
        const itemDate = new Date(item.dt_txt);
        return (
          itemDate.getFullYear() === date.getFullYear() &&
          itemDate.getMonth() === date.getMonth() &&
          itemDate.getDate() === date.getDate()
        );
      });
    };

    return {
      thisWeek: getDayData(selectedDate),
      nextWeek: getDayData(nextWeekDate),
    };
  };

  const { thisWeek, nextWeek } = filterWeatherData(weatherData, selectedDay);

  const prepareChartData = (data) => {
    return {
      series: [
        {
          name: "Temperature",
          data: data.map((item) => ({
            x: new Date(item.dt_txt).toLocaleTimeString(),
            y: item.main.temp,
          })),
        },
      ],
      options: {
        chart: {
          type: "line",
        },
        xaxis: {
          type: "category",
          labels: {
            rotate: -45,
          },
        },
        yaxis: {
          title: {
            text: "Temperature (K)",
          },
        },
        title: {
          text: "Weather Data",
        },
      },
    };
  };

  return (
    <div className="max-w-[900px] w-full mx-auto mt-10">
      <h1>Weather App</h1>
      <select
        value={selectedDay}
        onChange={(e) => setSelectedDay(Number(e.target.value))}
      >
        {weekDays.map((day) => (
          <option key={day.id} value={day.id}>
            {day.name}
          </option>
        ))}
      </select>
      <br />
      <button onClick={fetchWeather}>Get Weather</button>
      {thisWeek.length > 0 && (
        <div>
          <h2>Weather Data for {weekDays[selectedDay].name}</h2>
          <ApexCharts {...prepareChartData(thisWeek)} />
        </div>
      )}
      {nextWeek.length > 0 && (
        <div>
          <h2>Weather Data for Next {weekDays[selectedDay].name}</h2>
          <ApexCharts {...prepareChartData(nextWeek)} />
        </div>
      )}
    </div>
  );
};

export default WeatherSection;
