// array of animal data
let animalData = [
    { animal: "goat", food: "Goatfeed", amount: 4 },
    { animal: "pig", food: "pigmix", amount: 10 },
    { animal: "dog", food: "dogFood", amount: 3 },
    { animal: "cat", food: "catFood", amount: 2 },
    { animal: "chicken", food: "allFlock", amount: 6 },
];

// Get the table body element where the data will be added.
let myAnimals = document.getElementById("myAnimals");

// Loop through each item in the animalData array.
for (let i = 0; i < animalData.length; i++) {
    // Create a new table row element for each animal.
    let row = document.createElement("tr");

    // Create the table data (cell) elements for each piece of information.
    let tdAnimal = document.createElement("td");
    let tdFood = document.createElement("td");
    let tdAmount = document.createElement("td");

    // Set the text content for each cell from the current animal object.
    tdAnimal.textContent = animalData[i].animal;
    tdFood.textContent = animalData[i].food;
    tdAmount.textContent = animalData[i].amount;

    // Append the new cells to the row. This must happen before the row is added to the table.
    row.appendChild(tdAnimal);
    row.appendChild(tdFood);
    row.appendChild(tdAmount);

    // Now, append the complete row to the table body.
    myAnimals.appendChild(row);
}
