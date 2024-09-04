import React, {useState,useEffect} from "react";
import { CssBaseline, Grid } from '@material-ui/core';

import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";

import { getPlaceData } from "./api";

const App = () => {

    const [places, setPlaces] = useState([]);

    const [coordinate, setCoordinate] = useState({});
    const [bounds, setBounds] = useState(null);

    // Get user current codinates use built in browser gylocation API
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude ,longitude}}) =>{
            setCoordinate({lat: latitude, lng: longitude})
        })
    },[])

    useEffect(() => {
        if(bounds){
            console.log(bounds)
            getPlaceData(bounds.sw, bounds.ne)
                .then((data)=>{
                    console.log(data);
                    setPlaces(data);
                })
        }
    },[coordinate, bounds]) // if we keep dipendany array empty this will only call only starting the application


    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List places={places}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinate = {setCoordinate}
                        setBounds = {setBounds}
                        coordinate = {coordinate}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;
