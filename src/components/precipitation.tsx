import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudRain, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

interface PrecipitationProps {
  precip_mm: number;
}

const Precipitation: React.FC<PrecipitationProps> = ({ precip_mm }) => {
    let icon;
    if (precip_mm <= 2) {
        icon = faCloud;
    } else if (precip_mm <= 10) {
        icon = faCloudRain;
    } else {
        icon = faCloudShowersHeavy;
    }

    return (
        <div className="mb-1 grid grid-cols-[30px_1fr] items-start last:mb-0 last:pb-0">
            <FontAwesomeIcon icon={icon} className="text-blue-500 w-5 h-5 mr-1 ml-1" />
            <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                    Precipitation
                </p>
                <p className="text-sm text-muted-foreground">
                    {precip_mm} mm
                </p>
            </div>
        </div>
    );
}

export default Precipitation;
