import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";

import useStyles from './styles';


const Map = ({setCoordinate, setBounds, coordinate}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKe={{ key:'AIzaSyBcM__aq8fGtiHQeqQ77s8qsX3uenFLuxY'}}
                defaultCenter={coordinate}
                center={coordinate}
                defaultZoom={14}
                margine={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    setCoordinate({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                  }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;