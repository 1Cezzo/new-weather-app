import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

interface WindProps {
  wind_km: number;
  wind_gust_km: number;
  wind_mph: number;
  wind_gust_mph: number;
}

const Wind: React.FC<WindProps> = ({ wind_km, wind_gust_km, wind_mph, wind_gust_mph }) => {
  let wind_ms = parseFloat((wind_km / 3.6).toFixed(1));
  let wind_gust_ms = parseFloat((wind_gust_km / 3.6).toFixed(1));

  return (
    <div className="mb-1 grid grid-cols-[30px_1fr] items-start last:mb-0 last:pb-0">
                        <FontAwesomeIcon icon={faWind} className="text-green-500 w-5 h-5 mr-1 ml-1" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Wind
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {wind_ms} m/s ({wind_gust_ms}) / {wind_mph} mph ({wind_gust_mph})
                            </p>
                        </div>
                    </div>
  );
}

export default Wind;