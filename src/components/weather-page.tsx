import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faWind } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Precipitation from './precipitation';
import Wind from './wind';

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
        <Card className={`w-[380px]`}>
            <CardHeader>
                <CardTitle>Weather</CardTitle>
                <CardDescription>{name}, {country}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    <div className="mb-1 grid grid-cols-[30px_1fr] items-start last:mb-0 last:pb-0">
                      {condition.icon && <img src={condition.icon} alt="Weather Icon" className="w-7 h-7 mr-6" />} {/* Render weather condition icon */}
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Temperature
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {temp_c}°C / {temp_f}°F
                            </p>
                        </div>
                    </div>
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
