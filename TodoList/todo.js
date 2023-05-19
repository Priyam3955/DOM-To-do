window.onload = function() {

    let newtask = document.getElementById('newtask')
   let addtask = document.getElementById('addtask')
    let todolist = document.getElementById('todolist')

    addtask.onclick = function(){
        let li = document.createElement('li')
       
        // Add Task
        let taskspan = document.createElement('span')
        taskspan.innerText = newtask.value;

      //Add cross Button Functionality
      let xBtn = document.createElement('button')
      xBtn.innerText = '❌'
      xBtn.onclick = function(event){
          console.log( event)
          event.target.parentElement.remove()
      }

       // add Up Button
      let upBtn = document.createElement('button')
      upBtn.innerText = '⬆️'
      upBtn.onclick = function ( event ){
        event.target.parentElement.parentElement.insertBefore(
          event.target.parentElement ,
          event.target.parentElement.previousElementSibling )
    }
       // add Down Button
      let downBtn = document.createElement('button')
      downBtn.innerText = '⬇️'
      downBtn.onclick = function ( event ){
        event.target.parentElement.parentElement.insertBefore(
          event.target.parentElement.nextElementSibling,
          event.target.parentElement
           )
    }
      li.appendChild(xBtn)
      li.appendChild(upBtn)
      // downBtn is appended in li     
      li.appendChild(downBtn)
      li.appendChild(taskspan)
      // li is appended in todolist
      todolist.appendChild(li)  
    }
}