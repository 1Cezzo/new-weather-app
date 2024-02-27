import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WeatherPage from '@/components/weather-page';

interface WeatherTabsProps {
  weatherData: any;
  error: string | null;
}

const WeatherTabs: React.FC<WeatherTabsProps> = ({ weatherData, error }) => {
  const [activeTab, setActiveTab] = useState<string>('1-day');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Tabs defaultValue={activeTab} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="1-day" onClick={() => handleTabChange('1-day')}>1-day</TabsTrigger>
          {/* Add tabs for other options */}
        </TabsList>
        <TabsContent value="1-day">
          {activeTab === '1-day' && (
            <WeatherPage weatherData={weatherData} />
          )}
        </TabsContent>
        {/* Add TabsContent for other options */}
      </Tabs>
    </div>
  );
}

export default WeatherTabs;
