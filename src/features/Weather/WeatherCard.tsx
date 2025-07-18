import type { MainWeather } from "./Weather";

interface WeatherCardProps {
  weather: MainWeather | null;
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  if (!weather) return null;
  // if (!Array.isArray(weather.weather) || weather.weather.length === 0) {
  //   return null;
  // }

  const { temp, humidity } = weather.main;
  const { speed } = weather.wind;
  const { icon } = weather.weather[0];

  const fixedTime = (time: number, timeZone: number) => {
    console.log(time, "time", timeZone, "zona");

    const date = new Date(time * 1000);
    console.log(date, "sss");
    const dateUTCurr = new Date(date.getTime() + timeZone * 1000);
    console.log(dateUTCurr, "ssssppc");

    const currentDate = date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });
    return currentDate;
  };

  return (
    <div className="flex bg-t-purple gap-10  rounded-[5px] border-1 p-4">
      <div>
        <h2 className="uppercase">{weather.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt={weather.weather[0].description}
        />
      </div>
      <div className="flex flex-col items-start text-3xl">
        <div className=" block">
          <div> Температура братишка: {temp.toFixed()}°C</div>
        </div>
        <div className="block">
          Ветер братишка: {speed ? `${speed} M/S` : "netu vetra"}
        </div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
