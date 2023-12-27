const socket = new WebSocket("wss://ws.ifelse.io/");

socket.addEventListener("open", () => {
    console.log("З'єднання з WebSocket встановлено.");
    socket.send("Привіт, сервер!");
});

socket.addEventListener("message", (event) => {
    console.log("Повідомлення від сервера:", event.data);
});

socket.addEventListener("error", (error) => {
    onsole.error("Сталася помилка з WebSocket:", error);
});

socket.addEventListener("error", (event) => {
    console.error("З'єднання з WebSocket закрит:", event);
});