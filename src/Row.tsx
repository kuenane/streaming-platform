import { type } from 'os';
import { title } from 'process';
import React, {useState, useEffect} from 'react';
import axios from './axios';

/*type Prop = {
    title: string;
    fetchUrl: string;
}
*/

function Row({title, fetchUrl}:{title: any, fetchUrl:any}): JSX.Element {   
    const [movies, setMovies] = useState([]);

    // A snippet of code that runs based on a specific condition    
    useEffect(() => {
        // if [], run once when row loads and don't run again
        // While the data is loading, do something

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data);
            //console.table(request.data)
            console.log(request);
            return request;
            
            
        }
        fetchData();
    }, [fetchUrl]);
    

    console.log(movies);

    return (
        <div>
            <h2>{title}</h2>
        </div>
    ) 
}

export default Row;