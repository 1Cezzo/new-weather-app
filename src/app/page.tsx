import { WeatherPage } from "@/components/weather-page";

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <WeatherPage />
    </div>
  );
}
