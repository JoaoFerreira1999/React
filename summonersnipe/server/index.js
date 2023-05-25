const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
var bodyParser = require('body-parser')
require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT;
const api_key = process.env.API_KEY;

app.post('/summoner', (req, res) => {
    const name = req.body.summonerName;
    const region = req.body.region;
    const regionTag = req.body.regionTag;
    //console.log(name, region);

    axios.get("https://" + regionTag + ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name + "?api_key=" + api_key)
    .then(function (response) {
        //console.log(response.data);
        const puuid = response.data.puuid;
        const id = response.data.id;
        const accountId = response.data.accountId;
        const summonerLevel = response.data.summonerLevel;
        const summonerName = response.data.name;
        const iconId = response.data.profileIconId;

        axios.get("https://" + regionTag + ".api.riotgames.com/lol/league/v4/entries/by-summoner/" + id + "?api_key=" + api_key)
        .then(function (response) {
            //console.log(response.data);
            const soloQueueData = response.data[0];
            const rankedFlexData = response.data[1];

            if(response.data.length !== 0){
                const summonerDetails = [
                    {
                        regionTag: regionTag,
                        id: id
                    },
                    {
                        id: "soloqueue",
                        name: summonerName,
                        level: summonerLevel,
                        iconId: iconId,
                        tier: soloQueueData.tier,
                        division: soloQueueData.rank,
                        leaguePoints: soloQueueData.leaguePoints,
                        wins: soloQueueData.wins,
                        losses: soloQueueData.losses,
                    },
                    {
                        id: "rankedFlex",
                        name: summonerName,
                        level: summonerLevel,
                        tier: rankedFlexData.tier,
                        division: rankedFlexData.rank,
                        leaguePoints: rankedFlexData.leaguePoints,
                        wins: rankedFlexData.wins,
                        losses: rankedFlexData.losses,
                    }]

                axios.get("https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid +"/ids?start=0&count=20&api_key=" + api_key)
                .then(function (response) {
                    axios.get("https://europe.api.riotgames.com/lol/match/v5/matches/EUW1_6415482931?api_key=" + api_key)
                    .then(function (response){
                        summonerDetails.push({
                            matchHistory: response.data
                        });
                        console.log(summonerDetails);
                        res.send(summonerDetails);
                    })
                    .catch(function (err){
                        console.log(err);
                    })
                })
                .catch(function (err){
                    console.log(err);
                })
            }
        })
        .catch(function (err){
            console.log(err);
        })
    })
    .catch(function (err){
        console.log(err);
    })
});

app.post('/championmastery', function (req, res){
    const id = req.body.id; 
    const regionTag = req.body.regionTag;

    axios.get("https://" + regionTag + ".api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + id + "?api_key=" + api_key)
    .then(function (response) {
        console.log(response.data);
        const championDetails = [];

        championDetails.push({
            champions: response.data
        });
        res.send(championDetails);
    })
    .catch(function (err) {
        console.error(err);
    })
})

app.listen(port, () => {
    console.log('Server is running');
});

