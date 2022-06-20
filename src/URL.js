let nodeURL = "";
if (process.env.NODE_ENV === "development") {
  nodeURL = "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
  nodeURL = "https://smart-llama-app-node-server.herokuapp.com";
} else {
  nodeURL = "http://localhost:3000";
}
export default nodeURL;
