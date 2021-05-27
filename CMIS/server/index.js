import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

const PORT = 4000;
const file_path_child_1_4 = 'public/storage/childmortality_1_4_3.json';
const file_path_gdp = 'public/storage/gdp.json';

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: '50mb',extended: true}));
app.use(cors());
app.use(express.static('public'));
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  ;(async function(){
    app.listen(PORT);
    console.log('Listening to the PORT: '+ PORT);
})()

app.post('/api/getDetails', function(request, response){
    
    console.log(request.body);
    const country = request.body._country;
    const type = request.body._type;
    const group = request.body._group;

    
    if(type === '' || type === null)  type = 'SKIP';
    
    const fs = require('fs');
    // let file_path_name = 'public/storage/childmortality_1_4.json';

    let rawdata = fs.readFile(file_path_child_1_4, (err, data)=>{
        if(err) {
            console.log(err);
            return response.status(400).send("Mukesh Got Error");}
        else{
            if(type === 'SKIP'){
                console.log('project is EMPTY')
                return response.status(400).send('project is EMPTY');
            }
            let p_data = JSON.parse(data, function(k,v){
                console.log(k);
            })
            
            return response.status(200).send(p_data[_project]);
        }
    })
    
})
