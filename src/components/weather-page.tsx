import React from 'react';
import { WbSunny, Cloud, Explore } from '@mui/icons-material';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const weatherData = {
    cityName: "New York",
    temperature: "25°C",
    precipitation: "Clear",
    wind: "5 m/s",
};

export function WeatherPage() {
    return (
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle>Weather</CardTitle>
                <CardDescription>{weatherData.cityName}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <WbSunny className="w-5 h-5 mr-2" /> {/* Use WbSunny for temperature */}
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Temperature
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {weatherData.temperature}
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <Cloud className="w-5 h-5 mr-2" /> {/* Use Cloud for precipitation */}
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Precipitation
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {weatherData.precipitation}
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <Explore className="w-5 h-5 mr-2" /> {/* Use Explore for wind */}
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Wind
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {weatherData.wind}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
