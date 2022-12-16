const loadSports = () => {
   fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
    .then(res => res.json())
    .then(data => displaySports(data))
};
loadSports();

const displaySports = sports => {
    const sportsDetails =sports.sports;
    const sportsDiv = document.getElementById("sports-div");
    sportsDetails.forEach(sport => {
        //console.log(sport)
        const div = document.createElement("div");
        div.innerHTML = `
        <p>id: ${sport.idSport}</p>
        <p>Description: ${sport.strSportDescription}</p>
       
        `
        sportsDiv.appendChild(div)
    })
}

