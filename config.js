const serverConfig = {
  mine: {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    ico: "",
  },
  port: 3000,
  data: [
    {
      name: "sato",
      card: "visa",
      timeLimit: "2020/02/02",
    },
    {
      name: "taro",
      card: "master",
      timeLimit: "2024/12/02",
    },
    {
      name: "ono",
      card: "amex",
      timeLimit: "2021/05/29",
    },
    {
      name: "utida",
      card: "jcb",
      timeLimit: "2023/02/02",
    },
  ],
};

const clientConfig = {
  sample: "sample",
};

module.exports = {
  serverConfig,
  clientConfig,
};
