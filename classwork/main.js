//getting the unordered list elements and input box from the HTML
let ul = document.querySelector("#task-list");
const input = document.querySelector("#taskInput");

//Creating a callback function to handle inputs
const handleInput = () => {

    //If the input value is empty, don't do anything
    if(input.value !== "") {

        //If input value has content, call the addTask function
        addTask(input.value);
    }
}

//Add event listener to handle input when pressing the button with id="addTask"
document.querySelector("#addTask").addEventListener("click", handleInput);

const addTask = (task) => {
    //Create list item
    let newListItem = document.createElement("li");

    //make li text the inputed text
    newListItem.textContent = task;

    //Append the list item to the unordered list in the HTML
    ul.appendChild(newListItem);

    //Create a button for deleting items
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "deleteBtn"

    //Append the delete button to the list item
    newListItem.appendChild(deleteButton);

    //Create event listen with a function to delete the parent of the delete button
    deleteButton.addEventListener("click", function () {
        const listItem = this.parentNode;
        listItem.parentNode.removeChild(listItem);

        //Call count display function
        updateCountDisplay();
    });

    updateCountDisplay();
}

//Count display callback function that just sets a p element to the number of children in the unordered list
const updateCountDisplay = () => {
    let p = document.querySelector("#count");
    p.innerText = ul.childElementCount;
}

//Call at the end to update display to 0 on loading webpage
updateCountDisplay();
