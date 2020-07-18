const http = require("http");
const fs = require("fs");
const url = require("url");
import { serverConfig } from "../config.js";

const mine = serverConfig.mine;

async function sleep(time) {
  for (let i = 1; i < 100000000; i++) {
    let obj = new Object();
    obj.name = "";
    obj.age = 1;
  }
  console.log("OK!");
  return time;
}

async function setResponseFile(res, contextType, filePath, encoding) {
  res.writeHead(200, { "Content-Type": contextType });
  res.write(fs.readFileSync(filePath, encoding));
  res.end();
  console.info("fileレスポンスを返しました。処理を終了させます。");
}

async function setResponseText(res, contextType, resData, encoding) {
  res.writeHead(200, { "Content-Type": contextType });
  res.write(resData, encoding);
  res.end();
  console.info("textレスポンスを返しました。処理を終了させます。");
}

const server = http.createServer(async (req, res) => {
  console.log("---------- server start ----------");
  //splitで . で区切られた配列にする
  let tmp = req.url.split(".");
  //tmp配列の最後の要素(外部ファイルの拡張子)を取得
  let ext = tmp[tmp.length - 1];
  //リクエストされたURLをサーバの相対パスへ変換する
  let path = "." + req.url;
  let pathname = url.parse(req.url).pathname;
  //リクエストされたクエリパラメータを取得
  let query = url.parse(req.url, true).query;
  let isResponse = true;
  let filePath = path;
  let contextType = mine[ext];
  let encoding;
  let resData;
  console.log("pathname: " + pathname);
  switch (await (mine.key = ext)) {
    case "html":
    case "js":
    case "css":
      encoding = "utf-8";
      break;
    case "jpg":
    case "jpeg":
    case "png":
      encoding = "binary";
      break;
    case "ico":
      isResponse = false;
      break;
    default:
      encoding = "utf-8";
      contextType = "text/html";
      // GET REQUEST
      if (req.method === "GET") {
        isResponse = false;
        filePath = "./public/index.html";
        console.log("GET PATH: " + path);
        console.log("↓query↓");
        console.log(query);
        switch (pathname) {
          case "/":
            setResponseFile(res, contextType, filePath, encoding);
            break;
          case "/action":
            setResponseFile(res, contextType, filePath, encoding);
            break;
          case "/ajax":
            sleep(5);
            console.log("ajax get start");
            contextType = "text/plain";
            resData = "ajax get successfully";
            setResponseText(res, contextType, resData, encoding);
            break;
          default:
            //エラーページ
            filePath = "./public/index.html";
            setResponseFile(res, contextType, filePath, encoding);
            break;
        }
      }
      // POST REQUEST
      else if (req.method === "POST") {
        sleep(5);
        isResponse = false;
        filePath = "./public/index.html";
        console.log("POST PATH: " + path);
        let postObject;
        let postJson;
        // data受信イベントの発生時に断片データ(chunk)を取得
        req
          .on("data", (chunk) => {
            // JSON形式
            console.log("on data");
            postJson = chunk;
          })
          .on("end", () => {
            isResponse = true;
            switch (pathname) {
              case "/":
                setResponseFile(res, contextType, filePath, encoding);
                break;
              case "/action":
                setResponseFile(res, contextType, filePath, encoding);
                break;
              case "/ajax":
                console.log("ajax post start");
                // JSON => OBJECT
                postObject = JSON.parse(postJson);
                console.log("postObject.name : " + postObject.name);
                console.log("postObject.age  : " + postObject.age);
                let array = serverConfig.data;
                contextType = "text/plain";
                // OBJECT => STRING
                resData = JSON.stringify(array);
                console.log("array: " + array);
                console.log("resData: " + resData);
                setResponseText(res, contextType, resData, encoding);
                break;
              default:
                // エラーページ
                filePath = "./public/index.html";
                setResponseFile(res, contextType, filePath, encoding);
                break;
            }
            return 0;
          });
      }
      break;
  }

  if (isResponse == true) {
    console.log("filePath:" + filePath);
    console.log("ext:" + ext);
    console.log("mine[ext]:" + contextType);
    setResponseFile(res, contextType, filePath, encoding);
  }
});

server.listen(serverConfig.port, () => {
  console.info(
    `Listening on ${serverConfig.port} :: http://localhost:${serverConfig.port}/`
  );
});
