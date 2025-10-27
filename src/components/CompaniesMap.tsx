import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { managementCompanies } from '@/data/companies';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

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
  companyId: string;
  companyName: string;
  address: string;
  residents?: number;
}

function MapBounds({ locations }: { locations: MapLocation[] }) {
  const map = useMap();

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
    }
  }, [locations, map]);

  return null;
}

export default function CompaniesMap() {
  const [allLocations, setAllLocations] = useState<MapLocation[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<MapLocation[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  useEffect(() => {
    const locations: MapLocation[] = [];

    managementCompanies.forEach(company => {
      if (company.coordinates) {
        locations.push({
          lat: company.coordinates.lat,
          lng: company.coordinates.lng,
          type: 'office',
          companyId: company.id,
          companyName: company.name,
          address: company.address,
        });
      }

      company.houses.forEach(house => {
        if (house.lat && house.lng) {
          locations.push({
            lat: house.lat,
            lng: house.lng,
            type: 'house',
            companyId: company.id,
            companyName: company.shortName,
            address: house.address,
            residents: house.residents,
          });
        }
      });
    });

    setAllLocations(locations);
    setFilteredLocations(locations);
  }, []);

  const handleFilterChange = (companyId: string | null) => {
    setSelectedCompany(companyId);
    if (companyId === null) {
      setFilteredLocations(allLocations);
    } else {
      setFilteredLocations(allLocations.filter(loc => loc.companyId === companyId));
    }
  };

  if (allLocations.length === 0) {
    return null;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🗺️</span>
          Карта домов и офисов
        </CardTitle>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCompany === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFilterChange(null)}
              className="h-8"
            >
              <Icon name="Building2" size={14} className="mr-1" />
              Все компании
              <Badge variant="secondary" className="ml-2">
                {allLocations.length}
              </Badge>
            </Button>
            {managementCompanies.map(company => {
              const companyLocations = allLocations.filter(loc => loc.companyId === company.id);
              return (
                <Button
                  key={company.id}
                  variant={selectedCompany === company.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleFilterChange(company.id)}
                  className="h-8 text-xs"
                >
                  {company.shortName}
                  <Badge variant="secondary" className="ml-2">
                    {companyLocations.length}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </div>
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
            <MapBounds locations={filteredLocations} />
            {filteredLocations.map((location, index) => (
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
            <span>Дома ({filteredLocations.filter(l => l.type === 'house').length})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-500 border-2 border-white"></div>
            <span>Офисы УК ({filteredLocations.filter(l => l.type === 'office').length})</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
