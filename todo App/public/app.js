var mainList = document.getElementById('mainList')
var todoInput = document.getElementById('inp')
var userName = prompt("Enter your name to set your todo list");
var showName = document.getElementById("name");
showName.innerHTML = userName;
var database = firebase.database().ref(userName);

// console.log(firebase)
database.on('child_added',function(data){
    var text = document.createTextNode(data.val().value)
    var li = document.createElement('li')
    li.setAttribute('class', 'list')
    li.appendChild(text)
    // console.log(li)
    mainList.appendChild(li)
    

    var btnDiv = document.createElement('div')
    //=== Create Delete Button =====
    var deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'btn')
    deleteBtn.setAttribute('onClick', 'deletTodo(this)')
    deleteBtn.setAttribute('id',data.val().key)
    var deleteText = document.createTextNode('Delete Todo')
    deleteBtn.appendChild(deleteText)
    btnDiv.appendChild(deleteBtn)

    // //=== Create Edit Button =====
    var editBtn = document.createElement('button')
    editBtn.setAttribute('class', 'btn')
    editBtn.setAttribute('onClick', 'editTodo(this)')
    editBtn.setAttribute('id',data.val().key)
    var editText = document.createTextNode('Edit Todo')
    editBtn.appendChild(editText)
    btnDiv.appendChild(editBtn)

    li.appendChild(btnDiv)
})

function addTodo() {
    var inputText = todoInput.value
    var key = firebase.database().ref(userName).push().key

    var obj = {
        value: inputText,
        key: key
    }
    database.child(key).set(obj);
    




    // var text = document.createTextNode(inputText)
    // var li = document.createElement('li')
    // li.setAttribute('class', 'list')
    // li.appendChild(text)
    // // console.log(li)
    // mainList.appendChild(li)
    

    // var btnDiv = document.createElement('div')
    // //=== Create Delete Button =====
    // var deleteBtn = document.createElement('button')
    // deleteBtn.setAttribute('class', 'btn')
    // deleteBtn.setAttribute('onClick', 'deletTodo(this)')
    // var deleteText = document.createTextNode('Delete Todo')
    // deleteBtn.appendChild(deleteText)
    // btnDiv.appendChild(deleteBtn)

    // // //=== Create Edit Button =====
    // var editBtn = document.createElement('button')
    // editBtn.setAttribute('class', 'btn')
    // editBtn.setAttribute('onClick', 'editTodo(this)')
    // var editText = document.createTextNode('Edit Todo')
    // editBtn.appendChild(editText)
    // btnDiv.appendChild(editBtn)

    // li.appendChild(btnDiv)

    todoInput.value = ''
}

function deletTodo(e) {
    // console.log(e.id)
    database.child(e.id).remove();
    e.parentNode.parentNode.remove();
}

function editTodo(e) {
    var text = prompt('Apna Text likho')
    var obj ={
        value: text,
        key: e.id
    }
    database.child(e.id).set(obj)
    // console.log(obj.value)
    // console.log(e.parentNode.parentNode.childNodes[0])
    var listText = e.parentNode.parentNode.firstChild
    listText.nodeValue = text
}

function deleteAll() {
    database.remove()
    mainList.innerHTML = ''
}


//=========== Constructor Function =============


// var obj = {
//     name: 'Basit Ahmed',
//     age: 21,
//     result: 'pass',
// }

// var checkproperty = 'institute' in obj

// obj.institute = 'SAIMS'

// console.log(obj)



// function CreateStudentObject(name, age, inst) {
//     this.studentName = name
//     this.age = age
//     this.institute = inst
// }

// var student1 = new CreateStudentObject('Basit Ahmed', 12, "SAIMS")

// var arr = []

// function addStudent() {
//     var name = prompt('name')
//     var age = prompt('age')
//     var inst = prompt('inst')

//     var newStudent = new CreateStudentObject(name, age, inst)
//     arr.push(newStudent)
//     console.log(arr)
// }









