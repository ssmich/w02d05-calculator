const que = 0
// const ouput = ""
// const outputCalc = Number(ouput)
var x = 10;
// console.log(outputCalc);

function showNumber (){
    $("#output").text($("#output").text()+$(this).text())
}
$(".number").click(showNumber);
$("button").click(function(){
    $("p").off("click.mySomething");
});
console.log()
$('#b1').click(function(){
        $('#input').val($('#input').val()+$(this).val());
    }
);
// $("#seven").on('click', (e)=> {
//     console.log(e.target.tagName);
//     if(e.target.tagName === 'BUTTON'){
//       $(e.currentTarget).hide();
//       console.log($(e.target).text());
//     }
//   });
// document.getElementById("ouput").innerHTML = output;

// function operation(que,$(this).val){
//     event.preventDefault()

// }
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