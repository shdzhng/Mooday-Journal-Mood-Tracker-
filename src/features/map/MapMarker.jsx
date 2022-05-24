import React from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import colors from '../../constants/Colors';
import {
  InfoWindowText,
  InfoWindowDate,
  InfoWindowTitle,
} from './MapMarker.styles';
import EditPopUp from '../popUp/EditPopUp';

export default function MapMarker({ entry }) {
  const svgMarker = {
    path: 'm8.075 23.52c-6.811-9.878-8.075-10.891-8.075-14.52 0-4.971 4.029-9 9-9s9 4.029 9 9c0 3.629-1.264 4.64-8.075 14.516-.206.294-.543.484-.925.484s-.719-.19-.922-.48l-.002-.004z',
    fillColor: colors.variantMap[entry.feeling],
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new window.google.maps.Point(15, 30),
  };

  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const { lat, lng } = JSON.parse(entry.location).geometry.location;

  const handleOpen = () => {
    setShowInfoWindow(true);
  };

  const handleClose = () => {
    setShowInfoWindow(false);
  };

  return (
    <Marker
      name={entry.feeling}
      icon={svgMarker}
      title={entry.name}
      onClick={handleOpen}
      position={{
        lat,
        lng,
      }}
    >
      {showInfoWindow && (
        <InfoWindow
          position={{
            lat: lat,
            lng: lng,
          }}
          onCloseClick={handleClose}
        >
          <div>
            <InfoWindowTitle>{entry.name}</InfoWindowTitle>
            <InfoWindowDate>{entry.date.split(',')[0]}</InfoWindowDate>
            <InfoWindowText>{entry.entry}</InfoWindowText>
            <EditPopUp entry={entry} />
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
}