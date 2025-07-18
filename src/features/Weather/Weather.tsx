import { useState } from "react";
import { WeatherCard } from "./WeatherCard";

interface RegionCoord {
  lon: number;
  lat: number;
}

export interface TempWeather {
  temp: number;
  humidity: number;
  pressure: number;
}

export interface CloudsWeather {
  all: number;
}

export interface RainWeather {
  "1h": number;
}

export interface SysWeather {
  sunrise: number;
  sunset: number;
}

export interface WindWeather {
  speed: number;
  deg: number;
  gust: number;
}

export interface SkyWeather {
  description: string;
  icon: string;
  main: string;
}

export interface MainWeather {
  main: TempWeather;
  name: string;
  wind: WindWeather;
  sys: SysWeather;
  timezone: number;
  weather: Array<SkyWeather>;
}

interface WeatherResponse {
  coord: RegionCoord;
  weather: object[];
  base: string;
  main: object;
  visibility: number;
  wind: object;
  clouds: object;
  dt: number;
  sys: object;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const apiKey: string = "cae8451f82839b0e9e99bd2e5e397096";

export const Weather = () => {
  const [city, setcity] = useState<string>("");
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [dataWeather, setDataWeather] = useState<MainWeather | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim().length < 4) return;
    console.log(city, "sdasdasdasdasdasdadad");

    try {
      const responseCoord = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city},ru&appid=${apiKey}`
      );

      if (!responseCoord.ok) {
        throw new Error("Error 1");
      }

      const [regionCoord] = await responseCoord.json();

      console.log(regionCoord, "1");

      if (!regionCoord) {
        throw new Error("Gorod ne naiden bratishka");
      }

      const { lat, lon } = regionCoord as RegionCoord;
      console.log(lat, lon);

      const responseWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );

      if (!responseWeather.ok) throw new Error("Error 2");

      const regionWeather = await responseWeather.json();
      console.log(regionWeather, "VTORIOISAS");

      setDataWeather(regionWeather);
      setcity("");
    } catch (err) {
      console.error(err, "catch");
    } finally {
      console.log("rabotaet baida tvoya s");
    }
  };

  console.log(dataWeather, "sss");
  return (
    <div>
      {isLoad ? "netu bratishka" : <WeatherCard weather={dataWeather} />}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setcity(e.currentTarget.value);
          }}
        />
        <button type="submit"> Press</button>
      </form>
      <div>{}</div>
    </div>
  );
};
