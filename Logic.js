// The logic file for the site

// The list of planets
var PlanetList = [
    {
        Name_Offical: "Earth", 
        NickName: "A big spinning marble", 
        Age: 50000, 
        Population: "400 Billion",
        CarbonDangerLevel: "Ludicrous",
        Image: "Images/IMG_Earth.jpg",
        Description: "The place where all humans live. It has been around for billions of years even more." + 
                     " So please take of it...pretty please."
    },
    {
        Name_Offical: "Venus", 
        NickName: "One of the first planets in warframe", 
        Age: 8000, 
        Population: "200 Million",
        CarbonDangerLevel: "Light",
        Image: "Images/IMG_Venus.jpg",
        Description: "Aside from being one of the first planets in Warframe it is also...actually I don't know."
    }
];


// Page references
var buttonSpawnPoint;
var planetDisplaySpawnPoint;

// When the page loads up
window.onload = function()
{
    buttonSpawnPoint = document.querySelector("#PlanetSelectionSpawnPoint");
    planetDisplaySpawnPoint = document.querySelector("#PlanetInfoSpawnPoint");

    // Create planet selection buttons
    createPlanetSelectionButtons();
};

// Create planet selection buttons
function createPlanetSelectionButtons()
{
    buttonSpawnPoint.innerHTML = "";

    // For each entry in the planet list
    for (var i = 0; i < PlanetList.length; i++)
    {
        var newButton;
        newButton = document.createElement("Button");
        newButton.appendChild(document.createTextNode(PlanetList[i].Name_Offical));
        newButton.setAttribute("class", "btn btn-default");
        newButton.setAttribute("onclick", "displayPlanet(" + i + ")");

        buttonSpawnPoint.appendChild(newButton);
    }
}

// Display planet
function displayPlanet(index)
{
    planetDisplaySpawnPoint.innerHTML = " ";

    // The planet name title
    var planetNameTitle = document.createElement("h4");
    planetNameTitle.appendChild(document.createTextNode(PlanetList[index].Name_Offical + " (" + PlanetList[index].NickName + ")"));
    planetDisplaySpawnPoint.appendChild(planetNameTitle);

    // The age of the planet text
    var ageText = document.createElement("p");
    ageText.appendChild(document.createTextNode("Age: " + PlanetList[index].Age));
    planetDisplaySpawnPoint.appendChild(ageText);

    // The population text
    var populationText = document.createElement("p");
    populationText.appendChild(document.createTextNode("Population: " + PlanetList[index].Population));
    planetDisplaySpawnPoint.appendChild(populationText);

    // Carbon danger level text
    var carbonDangerLevelText = document.createElement("p");
    carbonDangerLevelText.appendChild(document.createTextNode("CO Danger Level: " + PlanetList[index].CarbonDangerLevel));
    planetDisplaySpawnPoint.appendChild(carbonDangerLevelText);

    // Create the image elements
    var planetImage = document.createElement("img");
    planetImage.setAttribute("src", PlanetList[index].Image);
    planetDisplaySpawnPoint.appendChild(planetImage);

    // Create the description elements
    var descriptionTitle = document.createElement("h4");
    descriptionTitle.appendChild(document.createTextNode("Details"))
    planetDisplaySpawnPoint.appendChild(descriptionTitle);

    var description = document.createElement("p");
    description.appendChild(document.createTextNode(PlanetList[index].Description));
    planetDisplaySpawnPoint.appendChild(description);
    
}