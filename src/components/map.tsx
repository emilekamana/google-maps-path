"use client"

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';


function Map() {
    
    const mapRef = React.useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const initMap = async () =>{
            const loader = new Loader({
                apiKey : process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary("maps");

            const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

            const position = {
                lat: -1.93132,
                lng: 30.15276
            };

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: "ELITE_MAP_ID"
            };

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            const marker = new Marker({
                map: map,
                position:  position,
            });
        }

        initMap()
    }, []);

    return (
        <div style={{height: '600px', width: "600px"}} ref={mapRef} />
    );
}

export default Map;