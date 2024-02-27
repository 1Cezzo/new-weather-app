import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Precipitation from './precipitation';

interface HourlyData {
  time: string;
  temp_c: number;
  precip_mm: number;
  wind_kph: number;
  condition: {
    icon: string;
  };
}

interface DailyData {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    totalprecip_mm: number;
    maxwind_kph: number;
  };
  
  hour: HourlyData[];
}

interface WeatherData {
  forecast?: {
    forecastday?: DailyData[];
  };
}

const WeatherPage7Day: React.FC<{ weatherData: WeatherData }> = ({ weatherData }) => {
  if (!weatherData.forecast || !weatherData.forecast.forecastday) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="seven-day-graph">
      {weatherData.forecast.forecastday.map((day, index) => {
        const iconsForTimes = getIconsForTimes(day.hour);
        console.log(iconsForTimes);

        return (
          <div key={day.date} className="day">
            <Card>
              <CardHeader>
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>{day.date}</div>
                  <Separator orientation="vertical" />
                  <div className="flex justify-center">
                    {iconsForTimes.map((icon, i) => (
                      console.log(icon),
                      <img key={i} src={icon} alt={`Icon ${i}`} className='w-10 h-10'/>
                    ))}
                  </div>
                  <Separator orientation="vertical" />
                  <div>High: {day.day.maxtemp_c}°C / Low: {day.day.mintemp_c}°C</div>
                  <Separator orientation="vertical" />
                  <Precipitation precip_mm={day.day.totalprecip_mm} />
                </div>
              </CardHeader>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const getIconsForTimes = (hourlyData: HourlyData[]): string[] => {
  const times = ['06:00', '12:00', '18:00', '23:00'];
  const icons: string[] = [];

  times.forEach((time) => {
    const dataForTime = hourlyData.find((hour) => hour.time.slice(-5) === time);
    if (dataForTime) {
      icons.push(dataForTime.condition.icon);
    }
  });

  return icons;
};


export default WeatherPage7Day;
