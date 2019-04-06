import Event from "./event";

Echo.join("chat")
    .here(users => {
        console.log("echo.js > chat > here", users);
        Event.$emit("users.here", users);
    })
    .joining(user => {
        console.log("echo.js > chat > joining", user);
        Event.$emit("users.joined", user);
    })
    .leaving(user => {
        console.log("echo.js > chat > leaving", user);
        Event.$emit("users.left", user);
    })
    .listen("MessageCreated", data => {
        console.log("echo.js > chat > MessageCreated", data);
        Event.$emit("added_message", data.message);
    });
