import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { managementCompanies } from '@/data/companies';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const customIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="background-color: #0ea5e9; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

const officeIcon = L.divIcon({
  className: 'office-marker',
  html: `<div style="background-color: #f59e0b; width: 35px; height: 35px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-size: 18px;">🏢</div>`,
  iconSize: [35, 35],
  iconAnchor: [17.5, 17.5],
});

interface MapLocation {
  lat: number;
  lng: number;
  type: 'house' | 'office';
  companyName: string;
  address: string;
  residents?: number;
}

function MapBounds({ locations }: { locations: MapLocation[] }) {
  const map = useMap();

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [locations, map]);

  return null;
}

export default function CompaniesMap() {
  const [locations, setLocations] = useState<MapLocation[]>([]);

  useEffect(() => {
    const allLocations: MapLocation[] = [];

    managementCompanies.forEach(company => {
      if (company.coordinates) {
        allLocations.push({
          lat: company.coordinates.lat,
          lng: company.coordinates.lng,
          type: 'office',
          companyName: company.name,
          address: company.address,
        });
      }

      company.houses.forEach(house => {
        if (house.lat && house.lng) {
          allLocations.push({
            lat: house.lat,
            lng: house.lng,
            type: 'house',
            companyName: company.shortName,
            address: house.address,
            residents: house.residents,
          });
        }
      });
    });

    setLocations(allLocations);
  }, []);

  if (locations.length === 0) {
    return null;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🗺️</span>
          Карта домов и офисов
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[600px] w-full rounded-lg overflow-hidden">
          <MapContainer
            center={[59.95, 30.33]}
            zoom={11}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapBounds locations={locations} />
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={[location.lat, location.lng]}
                icon={location.type === 'office' ? officeIcon : customIcon}
              >
                <Popup>
                  <div className="p-2">
                    <strong className="text-sm">{location.companyName}</strong>
                    <p className="text-xs text-muted-foreground mt-1">{location.address}</p>
                    {location.residents !== undefined && (
                      <p className="text-xs mt-1">👥 {location.residents} жильцов</p>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="mt-4 flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-sky-500 border-2 border-white"></div>
            <span>Дома</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-500 border-2 border-white"></div>
            <span>Офисы УК</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
