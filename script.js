function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (task === "") return;
    
    let li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(this)">❌</button>`;
    li.addEventListener("click", function() {
        this.classList.toggle("completed");
    });
    
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
