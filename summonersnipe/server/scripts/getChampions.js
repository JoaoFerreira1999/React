
const champions = []

fetch("http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json")
.then(function(response) {
    const data = response.json();
    return data.data[0].type;
}).then(function (obj) {
    console.log(obj);
}).catch(function(err) {
    console.log(err);
});