import React from 'react';
import { useSelector } from 'react-redux';

import mapStyles from './Map.styles';
import MapMarker from './MapMarker';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import colors from '../../../constants/Colors';

const MapComponent = () => {
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    clickableIcons: false,
    zoomControl: true,
  };

  const entries = useSelector(({ journal }) => journal.entries);

  const containerStyle = {
    width: '100%',
    height: '50vh',
    margin: '0 auto',
    border: `1px solid ${colors.blue2}`,
  };

  const startLocation = {
    lat: 37.776596,
    lng: -122.391953,
  };

  const handleMapClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <GoogleMap
        id="mapContainer"
        mapContainerStyle={containerStyle}
        center={startLocation}
        zoom={11}
        options={options}
        onClick={handleMapClick}
      >
        {entries.map((entry, i) => (
          <MapMarker entry={entry} key={i} />
        ))}
      </GoogleMap>
    </>
  );
};

export default MapComponent;