import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlaceData = async (sw,ne) => {
    try{
        const {data : { data }} = await axios.get(URL,{
          params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
          },
          headers: {
            'x-rapidapi-key': '9bcd84c1a8mshc8d3a187675aef1p1439d9jsn9fa306bfa80d',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    }catch(e){
        console.log(e);
    }
}