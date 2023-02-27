import { createServer } from "http";
import { readFileSync } from "fs";

createServer((req, res) => {
    if (req.url?.includes("index.html")) {
        const file = readFileSync("./html/index.html");
        res.setHeader("content-type", "text/html");
        res.write(file);
        res.end();
    } else if (req.url?.includes("chunked-response.txt")) {
        res.writeHead(200, "OK", {
            "transfer-encoding": "chunked",
            "content-type": "text/plain; charset=utf-8",
            "content-length": "22"
        });
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                res.write(`${i} `);
            }, i * 100);
        }
        setTimeout(() => {
            res.write("!");
            res.end();
        }, 30000);
    } else {
        res.end();
    }
}).listen(8000);