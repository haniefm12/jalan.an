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
    const BASE_URL = "http://localhost:3030/victor/query";

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
    const BASE_URL = "http://localhost:3030/victor/query";

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
    const BASE_URL = "http://localhost:3030/victor/query";

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
    const BASE_URL = "http://localhost:3030/victor/query";

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

        FILTER contains(?oleh, "${value.input}")
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
      "nama": users.nama.value,
      "makanan": users.makanan.value,
      "objekwisata": users.objekwisata.value,
      "oleh": users.oleh.value,
    }
  }

  const handleChange = event => {
    setValue({
      ...value,
      'input': event.target.value
    })
  }

  return (
    <div>
      <header className="App-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <h2>Jalan.an</h2>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <header className="Title-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <h2>Cari Tempat Liburan Kamu</h2>
            </h1>
          </div>
        </div>
      </div>
    </header> 

    <body className="Body">
      <div>
      <input className="search" onChange={handleChange} type="text" />
      </div>    
      <div>    
        <button className="button" onClick={function(event){ getKota()}}>Cari Kota</button>
        <button className="button" onClick={function(event){ getMakanan()}}>Cari Makanan</button>
        <button className="button" onClick={function(event){ getObjekWisata()}}>Cari Objek Wisata</button>
        <button className="button" onClick={function(event){ getOlehOleh()}}>Cari Oleh-oleh</button>
      </div>  
      </body>
      <body className="Isi">
      <div>
        <ol>
          {value.users.map((item, i) => 
            <li key={i}>
              Kota :{item.nama}<br />
              Makanan : {item.makanan}<br />
              Objek Wisata : {item.objekwisata}<br />
              Oleh-oleh : {item.oleh} </li>)}
        </ol>
      </div>
      </body>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <h4>Jalan.an</h4>
                <p> Cari Tempat Liburan Kamu </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text"> Copyright 2020 | Suka-suka team</p>
              </div>
            </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
