import express from "express";
const app = express();
app.get('/show', (req, res) => {
    res.send({ message: "started" });
});
app.listen(3000);
//# sourceMappingURL=index.js.map