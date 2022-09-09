const app = ["Abuse", "Adult", "Agent", "Anger", "Apple", "Award", "Basis", "Beach", "Birth", "Block", "Blood", "Board", "Brain", "Bread", "Break", "Brown", "Buyer", "Cause", "Chain", "Chair", "Chest", "Chief", "Child", "China", "Claim", "Class", "Clock", "Coach", "Coast", "Court", "Cover", "Cream", "Crime", "Cross", "Crowd", "Crown", "Cycle", "Dance", "Death", "Depth", "Doubt", "Draft", "Drama", "Dream", "Dress", "Drink", "Drive", "Earth", "Enemy", "Entry", "Error", "Event", "Faith", "Fault", "Field", "Fight", "Final", "Floor", "Focus", "Force", "Frame", "Frank", "Front", "Fruit", "Glass", "Grant", "Grass", "Green", "Group", "Guide", "Heart", "Henry", "Horse", "Hotel", "House", "Image", "Index", "Input", "Issue", "Japan", "Jones", "Judge", "Knife", "Laura", "Layer", "Level", "Lewis", "Light", "Limit", "Lunch", "Major", "March", "Match", "Metal", "Model", "Money", "Month", "Motor", "Mouth", "Music", "Night", "Noise", "North", "Novel", "Nurse", "Offer", "Order", "Other", "Owner", "Panel", "Paper", "Party", "Peace", "Peter", "Phase", "Phone", "Piece", "Pilot", "Pitch", "Place", "Plane", "Plant", "Plate", "Point", "Pound", "Power", "Press", "Price", "Pride", "Prize", "Proof", "Queen", "Radio", "Range", "Ratio", "Reply", "Right", "River", "Round", "Route", "Rugby", "Scale", "Scene", "Scope", "Score", "Sense", "Shape", "Share", "Sheep", "Sheet", "Shift", "Shirt", "Shock", "Sight", "Simon", "Skill", "Sleep", "Smile", "Smith", "Smoke", "Sound", "South", "Space", "Speed", "Spite", "Sport", "Squad", "Staff", "Stage", "Start", "State", "Steam", "Steel", "Stock", "Stone", "Store", "Study", "Stuff", "Style", "Sugar", "Table", "Taste", "Terry", "Theme", "Thing", "Title", "Total", "Touch", "Tower", "Track", "Trade", "Train", "Trend", "Trial", "Trust", "Truth", "Uncle", "Union", "Unity", "Value", "Video", "Visit", "Voice", "Waste", "Watch", "Water", "While", "White", "Whole", "Woman", "World", "Youth"];
let word = app[Math.floor(Math.random() * 213)];
word = word.toUpperCase()
let letters = Array.from(word)
let column=1;
let row=0;
let difference=0;
console.log(word)

const keyboard = document.getElementsByClassName("btn")
let textbox = document.getElementById(column.toString())
console.log(word)
for (let i =0; i < keyboard.length; i++) {
    keyboard[i].addEventListener("click", e => {

        if(e.target.id === "ENTER" && column==6)
        {
            //5th letter
            if(document.getElementById((5*row+column-1).toString()).innerText.localeCompare(letters[4])==0)
            {
                document.getElementById((5*row+column-1).toString()).style.background = "green"
                document.getElementById(document.getElementById((5*row+column-1).toString()).innerText).style.background = "green"
            }
            else if(letters.includes(document.getElementById((5*row+column-1).toString()).innerText))
            {
                document.getElementById((5*row+column-1).toString()).style.background = "#B2BC27"
                document.getElementById(document.getElementById((5*row+column-1).toString()).innerText).style.background = "#B2BC27"
            }
            else
            {
                document.getElementById(document.getElementById((5*row+column-1).toString()).innerText).style.background = "#3d3d3d"
            }

            //4th letter
            if(document.getElementById((5*row+column-2).toString()).innerText.localeCompare(letters[3])==0)
            {
                document.getElementById((5*row+column-2).toString()).style.background = "green"
                document.getElementById(document.getElementById((5*row+column-2).toString()).innerText).style.background = "green"
            }
            else if(letters.includes(document.getElementById((5*row+column-2).toString()).innerText))
            {
                document.getElementById((5*row+column-2).toString()).style.background = "#B2BC27"
                document.getElementById(document.getElementById((5*row+column-2).toString()).innerText).style.background = "#B2BC27"
            }
            else
            {
                document.getElementById(document.getElementById((5*row+column-2).toString()).innerText).style.background = "#3d3d3d"
            }

            //3rd letter
            if(document.getElementById((5*row+column-3).toString()).innerText.localeCompare(letters[2])==0)
            {
                document.getElementById((5*row+column-3).toString()).style.background = "green"
                document.getElementById(document.getElementById((5*row+column-3).toString()).innerText).style.background = "green"
            }
            else if(letters.includes(document.getElementById((5*row+column-3).toString()).innerText))
            {
                document.getElementById((5*row+column-3).toString()).style.background = "#B2BC27"
                document.getElementById(document.getElementById((5*row+column-3).toString()).innerText).style.background = "#B2BC27"
            }
            else
            {
                document.getElementById(document.getElementById((5*row+column-3).toString()).innerText).style.background = "#3d3d3d"
            }

            //2nd letter
            if(document.getElementById((5*row+column-4).toString()).innerText.localeCompare(letters[1])==0)
            {
                document.getElementById((5*row+column-4).toString()).style.background = "green"
                document.getElementById(document.getElementById((5*row+column-4).toString()).innerText).style.background = "green"
            }
            else if(letters.includes(document.getElementById((5*row+column-4).toString()).innerText))
            {
                document.getElementById((5*row+column-4).toString()).style.background = "#B2BC27"
                document.getElementById(document.getElementById((5*row+column-4).toString()).innerText).style.background = "#B2BC27"
            }
            else
            {
                document.getElementById(document.getElementById((5*row+column-4).toString()).innerText).style.background = "#3d3d3d"
            }

            //1st letter
            if(document.getElementById((5*row+column-5).toString()).innerText.localeCompare(letters[0])==0)
            {
                document.getElementById((5*row+column-5).toString()).style.background = "green"
                document.getElementById(document.getElementById((5*row+column-5).toString()).innerText).style.background = "green"
            }
            else if(letters.includes(document.getElementById((5*row+column-5).toString()).innerText))
            {
                document.getElementById((5*row+column-5).toString()).style.background = "#B2BC27"
                document.getElementById(document.getElementById((5*row+column-5).toString()).innerText).style.background = "#B2BC27"
            }
            else
            {
                document.getElementById(document.getElementById((5*row+column-5).toString()).innerText).style.background = "#3d3d3d"
            }

            row++
            column=1
            difference++

        }
        else if(e.target.id === "ENTER")
        {

        }
        else if(e.target.id === "BACKSPACE" && column!=1 && column!=6 && column!=11 && column!=16 && column!=21 && column!=26)
        {
            column--
            textbox=document.getElementById((5*row+column).toString())
            textbox.innerText=null
        }
        else if(e.target.id === "BACKSPACE" && (column==6 || column==11 || column==16 || column==21 || column==26) && (((5*row)+column)/5)>difference)
        {
            column=5
            console.log("final: "+(5*row+column))
            textbox=document.getElementById((5*row+column).toString())
            textbox.innerText=null
        }
        else if(e.target.id === "BACKSPACE")
        {

        }
        else if(column<6)
        {

            textbox.innerText = e.target.id
            column++
            textbox=document.getElementById((5*row+column).toString())
        }
    })
}