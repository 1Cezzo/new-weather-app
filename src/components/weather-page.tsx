import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Precipitation from './precipitation';
import Wind from './wind';
import Temperature from './temperature';

interface WeatherPageProps {
  weatherData: {
    location: {
      name: string;
      country: string;
    };
    current: {
      temp_c: number;
      temp_f: number;
      condition: {
        text: string;
        icon: string;
      };
      wind_kph: number;
      gust_kph: number;
      wind_mph: number;
      gust_mph: number;
      precip_mm: number;
    };
  };
}

interface PrecipitationProps {
  precip_mm: number;
}

const WeatherPage: React.FC<WeatherPageProps> = ({ weatherData }) => {
    const { location, current } = weatherData;
    const { name, country } = location;
    const { temp_c, temp_f, condition, wind_kph, wind_mph, precip_mm, gust_kph, gust_mph } = current;
    return (
      <div className={`weather-page`}>
        <Card className={`w-[400px]`}>
            <CardHeader>
                <CardTitle>Weather</CardTitle>
                <CardDescription>{name}, {country}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    <Temperature temp_c={temp_c} temp_f={temp_f} condition={condition} />
                    <Separator className="my-3" />
                    <Precipitation precip_mm={precip_mm} />
                    <Separator className="my-3" />
                    <Wind wind_km={wind_kph} wind_gust_km={gust_kph} wind_mph={wind_mph} wind_gust_mph={gust_mph} />
                </div>
            </CardContent>
        </Card>
      </div>
    );
}

export default WeatherPage;
