## Jalan.an
Jalan.an is a semantic web to help you find tourist destination easily

### Installation
Apache Jena Fuseki
1. Download Apache Jena Fuseki di https://jena.apache.org/download/
2. Download apache-jena-fuseki-3.15.0.zip
3. Extract file at C
4. Run fuseki-server.bat
5. Open your browser, input localhost:3030


### Upload Dataset

1. Run fuseki-server.bat
2. Open your browser browser, input localhost:3030
3. Click manage dataset, and make a new one. 
4. Enter Dataset name = jalan.an
5. Choose Dataset type = Persistent
6. Create dataset
7. Upload data from dataset folder, choose jalanan.ttl
8. Wait until the file sucessfully uploaded


### Node.Js

1. Download Node.js installer
2. Install Node.js and NPM (see.. https://nodejs.org/en/docs/)
3. Clone https: https://github.com/haniefm12/jalan.an.git into your directory
4. Run NPM start on your terminal
```bash
$ npm start
```
5. Go to your browser, input localhost:3000
6. You will see Jalan.an main page


### How To Use

1. After run npm start, go to your browser, input localhost:3000
2. Search for Kota, Makanan, Objek Wisata or Oleh-oleh 
