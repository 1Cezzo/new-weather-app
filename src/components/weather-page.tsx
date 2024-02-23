import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faWind } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
      wind_mph: number;
    };
  };
}

const WeatherPage: React.FC<WeatherPageProps> = ({ weatherData }) => {
    const { location, current } = weatherData;
    const { name, country } = location;
    const { temp_c, temp_f, condition, wind_kph, wind_mph } = current;
    return (
      <div className={`weather-page`}>
        <Card className={`w-[380px]`}>
            <CardHeader>
                <CardTitle>Weather</CardTitle>
                <CardDescription>{name}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <FontAwesomeIcon icon={faSun} className="text-yellow-500 w-5 h-5 mr-2" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Temperature
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {temp_c}°C / {temp_f}°F
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <FontAwesomeIcon icon={faCloud} className="text-blue-500 w-5 h-5 mr-2" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Precipitation
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {condition.text}
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <FontAwesomeIcon icon={faWind} className="text-green-500 w-5 h-5 mr-2" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Wind
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {wind_kph} km/h / {wind_mph} mph
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    );
}

export default WeatherPage;
