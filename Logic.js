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
        Description: "\"This place is horrible please someone help!" +
                        " The oil was so good that we took all of it." +
                        " Wait Mark are those missles over there?\" -Pioneer Jack",
        Alt_Dim_NickName: "A pristine paradise",
        Alt_Dim_Age: 20,
        Alt_Dim_Population: "20 Thousand",
        Alt_Dim_CarbonDangerLevel: "Light",
        Alt_Dim_Description: "\"Wow this place is absolutely amazing!" +
                            " Nothing terrible will happen to it for sure!\" -Pioneer Jack"
    },
    {
        Name_Offical: "Venus", 
        NickName: "Better old Earth", 
        Age: 8000, 
        Population: "200 Million",
        CarbonDangerLevel: "Light",
        Image: "Images/IMG_Venus.jpg",
        Description: "\"This is like old Earth just without the missles. I love Exped!\" -Pioneer Jane",
        Alt_Dim_NickName: "The yellow devil",
        Alt_Dim_Age: 9500,
        Alt_Dim_Population: "400",
        Alt_Dim_CarbonDangerLevel: "Moderate",
        Alt_Dim_Description: "\"The heat has burned my friends and my dog. I hate Exped.\" -Mark"
    },
    {
        Name_Offical: "Mercury", 
        NickName: "Sun's best friend", 
        Age: 10000, 
        Population: "2",
        CarbonDangerLevel: "Moderate",
        Image: "Images/IMG_Mercury.jpg",
        Description: "\"A perfect example of a long term and balanced relationship." +
                        " The sun burns mercury and mercury smacks the sun.\" -Pioneer Jack",
        Alt_Dim_NickName: "It's bullied by the Sun",
        Alt_Dim_Age: 500,
        Alt_Dim_Population: "1",
        Alt_Dim_CarbonDangerLevel: "Ludicrous",
        Alt_Dim_Description: "\"The sun gave mercury a solar wedgie.\" -Sun ambassador"
    },
    {
        Name_Offical: "Mars", 
        NickName: "Great when colourblind", 
        Age: 7500, 
        Population: "10 Thousand",
        CarbonDangerLevel: "Ludicrous",
        Image: "Images/IMG_Mars.jpg",
        Description: "\"The set from \"Martian Boys 2\" is still here." +
                        " We can finally make a proper ending to this trilogy!\" -Mark",
        Alt_Dim_NickName: "Too much red",
        Alt_Dim_Age: 3500,
        Alt_Dim_Population: "5000",
        Alt_Dim_CarbonDangerLevel: "Moderate",
        Alt_Dim_Description: "\"I really wish someone finished the Martian Boys triliogy.\" -Mark"
    },
    {
        Name_Offical: "Jupiter", 
        NickName: "It ate beans", 
        Age: 2000, 
        Population: "1",
        CarbonDangerLevel: "Ludicrous",
        Image: "Images/IMG_Jupiter.jpg",
        Description: "\"More gas than my husband.\" -Pioneer Jane",
        Alt_Dim_NickName: "It's just gas",
        Alt_Dim_Age: 50,
        Alt_Dim_Population: "0",
        Alt_Dim_CarbonDangerLevel: "Ludicrous",
        Alt_Dim_Description: "\"Starting to smell like my mouth.\" -Pioneer Jack"
    },
    {
        Name_Offical: "Saturn", 
        NickName: "Big ring", 
        Age: 300, 
        Population: "15 Thousand",
        CarbonDangerLevel: "Moderate",
        Image: "Images/IMG_Saturn_02.jpg",
        Description: "\"Great food, beautiful Sari, and a city among the clouds.\" -Mark",
        Alt_Dim_NickName: "Doughnut",
        Alt_Dim_Age: 50,
        Alt_Dim_Population: "0",
        Alt_Dim_CarbonDangerLevel: "Ludicrous",
        Alt_Dim_Description: "\"Were gonna need an army of detoxifiers and shield generators." +
                                " Hendrick is not gonna like this." +
                                " I could always be a stix dealer on Earth." + 
                                " Oh great he's here.\" -Pioneer Jack"
    },
    {
        Name_Offical: "Uranus", 
        NickName: "A joke", 
        Age: 2500, 
        Population: "300",
        CarbonDangerLevel: "Moderate",
        Image: "Images/IMG_Uranus.jpg",
        Description: "\"One of my prized possesions." +
                        " Who knew holding ice hostage would grant so much power!\" -Hendrick",
        Alt_Dim_NickName: "Tempting",
        Alt_Dim_Age: 1000,
        Alt_Dim_Population: "0",
        Alt_Dim_CarbonDangerLevel: "Light",
        Alt_Dim_Description: "\"I wonder if Hendrick would laugh at this discovery.\" -Pioneer Jane"
    },
    {
        Name_Offical: "Neptune", 
        NickName: "Blue ball", 
        Age: 1000, 
        Population: "0",
        CarbonDangerLevel: "Light",
        Image: "Images/IMG_Neptune.jpg",
        Description: "\"Where is my shrink ray Mark!\" -Hendrick",
        Alt_Dim_NickName: "A handball",
        Alt_Dim_Age: 500,
        Alt_Dim_Population: "0",
        Alt_Dim_CarbonDangerLevel: "Light",
        Alt_Dim_Description: "\"If only it was smaller.\" -Pioneer Jack"
    }

];

// A list of years
var YearList = [
    {
        Year: 3094,
        Period: "A.B"
    },
    {
        Year: 2786,
        Period: "B.B"
    }
];


// Page references
var buttonSpawnPoint;
var planetDisplaySpawnPoint;
var alternateDimensionToggle;
var stylesheetElement;
var yearDisplay;

var isInAlternateDimension = false;
var currentPlanetIndex = -1;

/*--Variables End--*/


// When the page loads up
window.onload = function()
{
    buttonSpawnPoint = document.querySelector("#PlanetSelectionSpawnPoint");
    planetDisplaySpawnPoint = document.querySelector("#PlanetInfoSpawnPoint");
    alternateDimensionToggle = document.querySelector("#SwitchDimensionToggle");
    stylesheetElement = document.querySelector("#PageStyle");
    yearDisplay = document.querySelector("#YearDisplay");

    toggleAlternateDimension(false);

    alternateDimensionToggle.onclick = function()
    {
        isInAlternateDimension = !isInAlternateDimension;
        toggleAlternateDimension(isInAlternateDimension);
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

        // If the current index is not the last part of the array
        // Remove the bottom border
        if (i != (PlanetList.length - 1))
        {
            newButton.style.borderBottom = "0px";
        }

        buttonSpawnPoint.appendChild(newButton);
    }
}

// Display planet
function displayPlanet(index)
{
    currentPlanetIndex = index;

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
        // If is in alternate dimension
        if (isInAlternateDimension)
        {
            // carbonDangerLevelText_02.style.color = "green";
            carbonDangerLevelText_02.style.color = "#00BFA5";
        }
        else
        {
            carbonDangerLevelText_02.style.color = "green";
        }

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
    descriptionTitle.appendChild(document.createTextNode("Log"))
    planetDisplaySpawnPoint.appendChild(descriptionTitle);

    var description = document.createElement("p");
    var descContent = " ";

    if (isInAlternateDimension)
    {
        descContent = PlanetList[index].Alt_Dim_Description;
    }
    else
    {
        descContent = PlanetList[index].Description;
    }

    description.appendChild(document.createTextNode(descContent));
    planetDisplaySpawnPoint.appendChild(description);
    
}

// Toggle the status of the alternate dimension
function toggleAlternateDimension(status)
{
    var displayedPlanetTitle = document.querySelector("#DisplayedPlanetTitle");
    isInAlternateDimension = status;

    if (status === true)
    {
        yearDisplay.innerHTML = YearList[1].Year + " " + YearList[1].Period;
        displayedPlanetTitle.innerHTML = "Selected Planet (Alternate Dimension)";
        stylesheetElement.setAttribute("href", "AltDimensionStyles.css");
    }

    else
    {
        yearDisplay.innerHTML = YearList[0].Year + " " + YearList[0].Period;
        displayedPlanetTitle.innerHTML = "Selected Planet";
        stylesheetElement.setAttribute("href", "Style.css");
    }

    // If no planet has been selected
    if (currentPlanetIndex == -1)
    {
        planetDisplaySpawnPoint.innerHTML = "<p>No planet selected.</p>";
    }
    // Otherwise
    // Rebuild the planet display section
    else
    {
        planetDisplaySpawnPoint.innerHTML = " ";
        displayPlanet(currentPlanetIndex);
    }

}