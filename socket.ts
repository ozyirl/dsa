import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*", // allow all origins (for testing)
  },
});

io.on("connection", (socket) => {
  console.log("✅ A user connected:", socket.id);

  socket.on("message", (msg) => {
    console.log("💬 Message received:", msg);
    socket.emit("reply", "Got your message: " + msg);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

httpServer.listen(3000, () => {
  console.log("🚀 Server listening on http://localhost:3000");
});
