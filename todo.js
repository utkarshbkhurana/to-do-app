function addTask(){
    var task = document.getElementById("text-box").value;
    var name =  "task-"+task.replace(/ /g,'');
    if(task !== null && task !=="")
    localStorage.setItem(name,task);
    showtask();
    document.getElementById("text-box").value = '';
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
        var fxn = `removeTask('${task.replace(/ /g,'')}')`;
        var fxn2 = `completeTask('${task.replace(/ /g,'')}',this)`;
        str += '<li class="items" onclick='+fxn2+'>'+ task + ' <span class="remove" onclick='+fxn+'>&times;</span> </li>';
      }); 
    str += '</ul>';
    document.getElementById("list").innerHTML = str;
}

function removeTask(task){
    console.log(this)
    localStorage.removeItem(`task-${task.replace(/ /g,'')}`);
    showtask();
}

function completeTask(task,el){
    console.log(el)
    el.className += ' hidden'
    setTimeout(()=>{
        localStorage.removeItem(`task-${task.replace(/ /g,'')}`);
        showtask();
    },1000)
}