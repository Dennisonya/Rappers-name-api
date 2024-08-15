
const express = require('express')
const app = express()
const PORT  = 5000
const cors = require('cors')
app.use(express.static('public'));
app.use(cors())
const rappers = {
    "eminem": {
        "realName": "Marshall Mathers",
        "age": 49,
        "genre": "Hip-Hop",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eminem_2021_Color_Corrected.jpg/800px-Eminem_2021_Color_Corrected.jpg"
        },
    "kendrick lamar": {
        "realName": "Kendrick Lamar Duckworth",
        "age": 34,
        "genre": "Hip-Hop",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg/330px-Pulitzer2018-portraits-kendrick-lamar.jpg"
    },
    "kanye west": {
        "realName": "Kanye Omari West",
        "age": 43,
        "genre": "Hip-Hop",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/330px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg"
        },
    "jcole" : {
        "realName": "Jermaine Lamarr Cole",
        "age": 36,
        "genre": "Hip-Hop",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/HOTSPOTATL_-_21_Savage_%26_J.Cole_Light_Birthday_Bash_ATL_2023_On_FIRE_%28xu6HKf40MX0_-_2m38s%29_%28cropped%29.jpg/330px-HOTSPOTATL_-_21_Savage_%26_J.Cole_Light_Birthday_Bash_ATL_2023_On_FIRE_%28xu6HKf40MX0_-_2m38s%29_%28cropped%29.jpg"
    },
    "chance the rapper": {
        "realName": "Chancelor Bennett",
        "age": 28,
        "genre": "Hip-Hop",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Kane_Brown_2022_interview.png/330px-Kane_Brown_2022_interview.png"
    },
    "drake": {
        "realName": "Aubrey Drake Graham",
        "age": "37",
        "genre": "Hip-Hop",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/330px-Drake_July_2016.jpg"
    },
    "tyler thecreator":{
        "realName": "Tyler  Gregory Okonma",
        "age": "33",
        "genre": "Hip-Hop",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tyler_the_Creator_%2852163761341%29_%28cropped%29.jpg/330px-Tyler_the_Creator_%2852163761341%29_%28cropped%29.jpg"
    },
    "unknown": {
        "realName": "Unknown",
        "age": "Unknown",
        "genre": "Unknown",
        "image": "Unknown"
    }

}

app.get('/', (req,res) => {
    res.sendFile(__dirname+ "/index.html")
})

app.get('/api/:name', (req,res)=>{
    const rappersName = req.params.name.toLowerCase();
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['unknown'])
    }
})


app.listen(PORT, ()=>{
    console.log(`Running on Port ${PORT} Better go Catch IT!`)
})