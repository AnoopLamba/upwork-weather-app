"use client";

import { useState } from "react";
import Header from "./Header";
import WeatherSection from "./WeatherSection";
import { weekDays } from "./common/Helper";

export const HeroSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedDay, setSelectedDay] = useState(weekDays[0]);

  return (
    <main>
      <Header
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <WeatherSection
        selectedCountry={selectedCountry}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    </main>
  );
};
