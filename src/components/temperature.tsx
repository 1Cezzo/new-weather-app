import React from 'react';

interface TemperatureProps {
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
  };
}

const Temperature: React.FC<TemperatureProps> = ({ temp_c, temp_f, condition }) => {
  return (
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
  );
}

export default Temperature;