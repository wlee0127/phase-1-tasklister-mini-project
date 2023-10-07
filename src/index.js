
document.addEventListener("DOMContentLoaded",addNewTask());

function addNewTask(){
  document.addEventListener("submit", () => {
    let userInput = document.getElementById("new-task-description").value;
    //create element li and append to ul. create text node and append it to parent element li. 
    const ul = document.getElementById("tasks");
    const li = document.createElement("li");
    li.setAttribute("id","li1");
    //const liPara = document.getElementById("li1");
    let textNode = document.createTextNode(userInput);
    const button = document.createElement("button");
    button.textContent = "X";
    button.setAttribute("class","btn");
    button.setAttribute("id",`${userInput}`);
  
    li.appendChild(textNode);
    ul.appendChild(li);
    li.appendChild(button);
    
    const buttons = document.querySelectorAll(".btn");
  for (const element of buttons){
    element.addEventListener("click", ()=>{
      element.parentElement.remove();
      element.remove();
    });
  };
    event.preventDefault();
    }
  );
};



