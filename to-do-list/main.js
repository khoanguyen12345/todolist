let todoList = [];

const addTodo = () => {
  let todo = document.getElementById("todoInput").value;

  let itemTodo = { contents: todo, complete: false, removed: false };

  todoList.push(itemTodo);
  render();
};

const toggleDone = (index) => {
  if (todoList[index].complete == true){
    todoList[index].complete = false;
  }else if (todoList[index].complete == false){
    todoList[index].complete = true;
  } 
  render();
};

const remove = (index)=>{
    todoList[index].removed = true
    render();
}

const arrayDone = todoList.filter((index)=>{
    if (todoList[index].complete == true){
        return false
    }else{
        return true
    }
})

const render = () => {
  let todoHTML = todoList
    .map((item, index) => {
      if (item.complete == false && item.removed == false) {
        return `<div class="item-style">${item.contents} <a onclick="remove(${index})" href="#">x</a>  <a onclick="toggleDone(${index})" href="#">Mark Done </a></div>`;
      } else if (item.complete == true && item.removed == false) {
        return `<div class="item-style"><strike>${item.contents}</strike> <a onclick="remove(${index})" href="#">x</a>  <a onclick="toggleDone(${index})" href="#">Mark Not Done </a></div>`;
      } 
    })
    .join("");
  document.getElementById("resultArea").innerHTML = todoHTML;
};

const renderDone = () => {
    let doneHTML = todoList
      .map((item, index) => {
        if (item.complete == false && item.removed==false) {
          return `<div class="item-style">To do:${item.contents} <a onclick="remove(${index})" href="">x</a>  <a onclick="toggleDone(${index})" href="#">Mark Not Done </a></div>`;
        } 
      })
      .join("");
    document.getElementById("resultArea").innerHTML = doneHTML;
  };

  function checkedDone() {
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true){
      renderDone()
    } else if (checkBox.checked == false) {
      render()
    }
  }
