var socket = io();

socket.on("connect", function () {
    console.log("Connected to server");
});

socket.on("disconnect", function () {
    console.log("Disconnected from server");
});


// chat box 

$(".header-left, .chat-hide").on("click", function(){
    $(".chat-body").css("display", "block");
});

$(".chat-hide").on("click", function(){
    $(".chat-body").css("display", "none");
});

$(".chat-close").on("click", function(){
    $(".live-chat").css("display", "none");
});

// ---------------------------------


socket.on("AdminMessage", function(message) {
    var li = $("<li></li>");
    li.text(`${message}`);
    $("#messages").append(li);
});

$("#message-form").on("submit", function(e) {
    e.preventDefault();

    var message = $("[name=message]").val();
    socket.emit("createMessage", message , function () {
    });

    var li = $("<li></li>");
    li.text(`${message}`);
    $("#messages").append(li);
})

