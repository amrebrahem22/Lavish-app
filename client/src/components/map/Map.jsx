import React, { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";

const Map = () => {
    const navControlStyle = {
        right: 10,
        top: 30,
        marginTop: 50,
    };

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 51.509865,
        longitude: -0.118092,
        zoom: 11,
    });

    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/amrebrahem226/ckvtmuv14261q14ncuv01e9sm"
            mapboxApiAccessToken="pk.eyJ1IjoiYW1yZWJyYWhlbTIyNiIsImEiOiJja3Z0bXBhNGkwdDgyMnZtOXp2M2I0ZWN6In0.QL1DHzNqgMZNlBYE6QCT9g"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            style={{ minHeight: "700px" }}
        >
            <NavigationControl style={navControlStyle} />
        </ReactMapGL>
    );
};

export default Map;
