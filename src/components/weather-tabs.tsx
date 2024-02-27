import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WeatherPage1Day from '@/components/1-day-weather-page';
import WeatherPage7Day from '@/components/7-day-weather-page';

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
      <Tabs defaultValue={activeTab} className="w-[600px]">
        <TabsList>
          <TabsTrigger value="1-day" onClick={() => handleTabChange('1-day')}>1-day</TabsTrigger>
          <TabsTrigger value="7-day" onClick={() => handleTabChange('7-day')}>7-day</TabsTrigger>
        </TabsList>
        <TabsContent value="1-day">
          {activeTab === '1-day' && (
            <WeatherPage1Day weatherData={weatherData} />
          )}
        </TabsContent>
        <TabsContent value="7-day">
          {activeTab === '7-day' && (
            <WeatherPage7Day weatherData={weatherData} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default WeatherTabs;
