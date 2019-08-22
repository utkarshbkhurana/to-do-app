function addTask(){
    var task = document.getElementById("text-box").value;
    var name =  "task-"+task.replace(/ /g,'');
    if(task !== null && task !=="")
    localStorage.setItem(name,task);
    showtask();
}

function showtask(){
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if(keys[i].indexOf('task')>-1){
            values.push((localStorage.getItem(keys[i])));
        }
    }
    console.log(values);
    var str = '<ul class="list">'
    values.forEach(function(task) {
        var fxn= `removeTask('${task.replace(/ /g,'')}')`;
        str += '<li class="items" onclick='+fxn+'>'+ task + ' <span class="remove" onclick='+fxn+'>&times;</span> </li>';
      }); 
    str += '</ul>';
    document.getElementById("list").innerHTML = str;
}

function removeTask(task){
    localStorage.removeItem(`task-${task.replace(/ /g,'')}`);
    showtask();
}