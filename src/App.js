import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import qs from 'qs';

function App() {

  const [value, setValue] = useState({
    users: [],
    input: ''
  });

  useEffect(() => {
    // Update the document title using the browser API

  });

  const getKota = async () => {
    const BASE_URL = "http://localhost:3030/jalan.an/query";

    const headers = {
      'Accept': 'application/sparql-results+json,*/*;q=0.9',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };

    const queryData = {
      query:
        `PREFIX lw:<http://jalanan.com/ns/listwisata>
        SELECT ?makanan ?nama ?objekwisata ?oleh 
        WHERE {
            ?lw lw:nama ?nama.
            ?lw lw:makanan ?makanan.
            ?lw lw:objekwisata ?objekwisata.
            ?lw lw:oleh ?oleh;

        FILTER contains(?nama, "${value.input}")
        }`
    };

    try {
      const { data } = await axios(BASE_URL, {
        method: 'POST',
        headers,
        data: qs.stringify(queryData)
      });
      console.log(data);

      // Convert Data
      const formatted_data = data.results.bindings.map((users, index) => formatter(users, index));
      console.log(formatted_data)

      setValue({
        ...value,
        users: formatted_data
      });
    } catch (err) {
      console.error(err);
    }
  }


  const getMakanan = async () => {
    const BASE_URL = "http://localhost:3030/jalan.an/query";

    const headers = {
      'Accept': 'application/sparql-results+json,*/*;q=0.9',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };

    const queryData = {
      query:
        `PREFIX lw:<http://jalanan.com/ns/listwisata>
        SELECT ?makanan ?nama ?objekwisata ?oleh 
        WHERE {
            ?lw lw:nama ?nama.
            ?lw lw:makanan ?makanan.
            ?lw lw:objekwisata ?objekwisata.
            ?lw lw:oleh ?oleh;

        FILTER contains(?makanan, "${value.input}")
        }`
    };

    try {
      const { data } = await axios(BASE_URL, {
        method: 'POST',
        headers,
        data: qs.stringify(queryData)
      });
      console.log(data);

      // Convert Data
      const formatted_data = data.results.bindings.map((users, index) => formatter(users, index));
      console.log(formatted_data)

      setValue({
        ...value,
        users: formatted_data
      });
    } catch (err) {
      console.error(err);
    }
  }


  const getObjekWisata = async () => {
    const BASE_URL = "http://localhost:3030/jalan.an/query";

    const headers = {
      'Accept': 'application/sparql-results+json,*/*;q=0.9',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };

    const queryData = {
      query:
        `PREFIX lw:<http://jalanan.com/ns/listwisata>
        SELECT ?makanan ?nama ?objekwisata ?oleh 
        WHERE {
            ?lw lw:nama ?nama.
            ?lw lw:makanan ?makanan.
            ?lw lw:objekwisata ?objekwisata.
            ?lw lw:oleh ?oleh;

        FILTER contains(?objekwisata, "${value.input}")
        }`
    };

    try {
      const { data } = await axios(BASE_URL, {
        method: 'POST',
        headers,
        data: qs.stringify(queryData)
      });
      console.log(data);

      // Convert Data
      const formatted_data = data.results.bindings.map((users, index) => formatter(users, index));
      console.log(formatted_data)

      setValue({
        ...value,
        users: formatted_data
      });
    } catch (err) {
      console.error(err);
    }
  }


  const getOlehOleh = async () => {
    const BASE_URL = "http://localhost:3030/jalan.an/query";

    const headers = {
      'Accept': 'application/sparql-results+json,*/*;q=0.9',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    };

    const queryData = {
      query:
        `PREFIX lw:<http://jalanan.com/ns/listwisata>
        SELECT ?makanan ?nama ?objekwisata ?oleh 
        WHERE {
            ?lw lw:nama ?nama.
            ?lw lw:makanan ?makanan.
            ?lw lw:objekwisata ?objekwisata.
            ?lw lw:oleh ?oleh;

        FILTER contains(?makanan, "${value.input}")
        }`
    };

    try {
      const { data } = await axios(BASE_URL, {
        method: 'POST',
        headers,
        data: qs.stringify(queryData)
      });
      console.log(data);

      // Convert Data
      const formatted_data = data.results.bindings.map((users, index) => formatter(users, index));
      console.log(formatted_data)

      setValue({
        ...value,
        users: formatted_data
      });
    } catch (err) {
      console.error(err);
    }
  }

  const formatter = (users, index) => {
    
    return {
      "id": index,
      "nama": users.song.value,
      "makanan": users.artist.value,
      "objekwisata": users.genre.value,
      "oleh": users.length.value,
    }
  }

  const handleChange = event => {
    setValue({
      ...value,
      'input': event.target.value
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getKota}>Get List</button>
        <ol>
          {value.users.map((item, i) => <li key={i}>{item.nama}</li>)}
        </ol>
        <div>
        </div>
      </header>
    </div>
  );
}

export default App;
