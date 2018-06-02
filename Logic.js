// The logic file for the site

/*--Variables--*/


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
                     " So please take of it...pretty please.",
        Alt_Dim_NickName: "A pristine paradise",
        Alt_Dim_Age: 20,
        Alt_Dim_Population: "20 Thousand",
        Alt_Dim_CarbonDangerLevel: "Light"
    },
    {
        Name_Offical: "Venus", 
        NickName: "One of the first planets in warframe", 
        Age: 8000, 
        Population: "200 Million",
        CarbonDangerLevel: "Light",
        Image: "Images/IMG_Venus.jpg",
        Description: "Aside from being one of the first planets in Warframe it is also...actually I don't know.",
        Alt_Dim_NickName: "The yellow devil",
        Alt_Dim_Age: 9500,
        Alt_Dim_Population: "400",
        Alt_Dim_CarbonDangerLevel: "Moderate"
    }
];


// Page references
var buttonSpawnPoint;
var planetDisplaySpawnPoint;
var alternateDimensionToggle;

var isInAlternateDimension = false;


/*--Variables End--*/


// When the page loads up
window.onload = function()
{
    buttonSpawnPoint = document.querySelector("#PlanetSelectionSpawnPoint");
    planetDisplaySpawnPoint = document.querySelector("#PlanetInfoSpawnPoint");
    alternateDimensionToggle = document.querySelector("#AltDimensionToggle");

    alternateDimensionToggle.onchange = function()
    {
        isInAlternateDimension = alternateDimensionToggle.checked;
        toggleAlternateDimension(alternateDimensionToggle.checked);
    }


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
    var nickNameContent = " ";

    if (isInAlternateDimension)
    {
        nickNameContent = PlanetList[index].Alt_Dim_NickName;
    }
    else
    {
        nickNameContent = PlanetList[index].NickName;
    }

    planetNameTitle.appendChild(document.createTextNode(PlanetList[index].Name_Offical + " (" + nickNameContent + ")"));
    planetDisplaySpawnPoint.appendChild(planetNameTitle);

    // The age of the planet text
    var ageText = document.createElement("p");
    var ageContent = " ";

    if (isInAlternateDimension)
    {
        ageContent = PlanetList[index].Alt_Dim_Age;
    }
    else
    {
        ageContent = PlanetList[index].Age;
    }

    ageText.appendChild(document.createTextNode("Age: " + ageContent));
    planetDisplaySpawnPoint.appendChild(ageText);

    // The population text
    var populationText = document.createElement("p");
    var populationContent = " "

    if (isInAlternateDimension)
    {
        populationContent = PlanetList[index].Alt_Dim_Population;
    }
    else
    {
        populationContent = PlanetList[index].Population;
    }

    populationText.appendChild(document.createTextNode("Population: " + populationContent));
    planetDisplaySpawnPoint.appendChild(populationText);

    // Carbon danger level text
    var carbonDangerLevelText_01 = document.createElement("p");
    carbonDangerLevelText_01.appendChild(document.createTextNode("CO Danger Level: "));

    var carbonDangerLevelText_02 = document.createElement("p");
    var carbonDangerLevelContent = " ";

    if (isInAlternateDimension)
    {
        carbonDangerLevelContent = PlanetList[index].Alt_Dim_CarbonDangerLevel;
    }
    else
    {
        carbonDangerLevelContent = PlanetList[index].CarbonDangerLevel;
    }

    carbonDangerLevelText_02.appendChild(document.createTextNode(carbonDangerLevelContent));
    carbonDangerLevelText_02.style.display = "inline";
    
    // Depending of the content of the second carbon danger level text element
    // Set the colour accordingly
    // Set the tooltip accordingly
    if (carbonDangerLevelText_02.innerHTML == "Ludicrous")
    {
        carbonDangerLevelText_02.style.color = "red";
        carbonDangerLevelText_02.setAttribute("title", "This is really bad!");
    }
    else if (carbonDangerLevelText_02.innerHTML == "Moderate")
    {
        carbonDangerLevelText_02.style.color = "#EF6C00";
        carbonDangerLevelText_02.setAttribute("title", "We should probably pay attention to this.");
    }
    else
    {
        carbonDangerLevelText_02.style.color = "green";
        carbonDangerLevelText_02.setAttribute("title", "Everything is alright.");
    }


    carbonDangerLevelText_01.appendChild(carbonDangerLevelText_02);
    planetDisplaySpawnPoint.appendChild(carbonDangerLevelText_01);

    // Create the image elements
    var planetImage = document.createElement("img");
    planetImage.setAttribute("src", PlanetList[index].Image);
    planetImage.setAttribute("alt", "This is a picture of the planet: " + PlanetList[index].Name_Offical);
    planetDisplaySpawnPoint.appendChild(planetImage);

    // Create the description elements
    var descriptionTitle = document.createElement("h4");
    descriptionTitle.appendChild(document.createTextNode("Details"))
    planetDisplaySpawnPoint.appendChild(descriptionTitle);

    var description = document.createElement("p");
    description.appendChild(document.createTextNode(PlanetList[index].Description));
    planetDisplaySpawnPoint.appendChild(description);
    
}

// Toggle the status of the alternate dimension
function toggleAlternateDimension(status)
{
    var displayedPlanetTitle = document.querySelector("#DisplayedPlanetTitle");

    if (status === true)
    {
        displayedPlanetTitle.innerHTML = "Selected Planet (Alternate Dimension)";
    }

    else
    {
        displayedPlanetTitle.innerHTML = "Selected Planet";
    }

    planetDisplaySpawnPoint.innerHTML = "<p>No planet selected.</p>";
}