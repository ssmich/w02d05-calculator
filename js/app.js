// const todos = [];
// const done = [];
const que = 0
const ouput = "345"
const outputCalc = Number(ouput)
console.log(outputCalc);
$(".numbers").click(function {
        que = $(this).val();
        output.concat($(this).val());
    };
)

function operation(que,$(this).val){
    event.preventDefault()

}
// $(".numbers").click(function{
//     que = $(this).val();
// })


// $(".operators").click(operation)

// function 
// function submitTodo(event){
//     event.preventDefault()
//     const userInput = $("#new-todo").val()
//     todos.push(userInput);
//     $('#new-todo').val("");
//     renderToDos();
// }
// $("#submit-todo").on("submit", submitTodo);
// function renderToDos(){
//     $('ul').empty();
//     todos.forEach(function(todo){
//         $('#todos').append(`<li>${todo}</li>`)
//     })
//     done.forEach(function(todo){
//         $('#done').append(`<li>${todo}</li>`)
//     })
// }
// $('body').on('click', '#todos li', function(e){
//     const index = $(e.target).index()
//     const finishedItem = todos.splice(index, 1)[0];
//     done.push(finishedItem);
//     renderToDos();
// })