# react-flux-training
fluxの基礎を学ぶプロジェクト
reactを使っています
Link + axiosを使うためにnode serverを使っています

## プロジェクト作成
- ディレクトリ作成
```
$ mkdir react-basic
$ cd react-basic
```
- 初期化
```
$ npm init -y
```
- webpackに関するインストール(今回はbabelもインストール)
```
$ npm install --save-dev webpack webpack-cli webpack-dev-server
$ npm install --save webpack webpack-cli
$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
$ npm install --save-dev react react-dom
$ npm install --save-dev react-router react-router-dom
```

- fluxをインストールする(**今回のメイン**)
```
npm install --save-dev flux
```

- ~~babel-plugin-react-html-attrsをインストールする(JSXではclassNamesを使うところ、classを使えるようにする)~~ これは今回使えなくてclassnamesで対応したので使わず...
```
$ npm install --save-dev babel-plugin-react-html-attrs
```

- JSXでclass定義のためにclassnamesをインストール
```
$ npm install --save-dev classnames
```
- axiosをインストール
```
$ npm install --save-dev axios
```

- @babel/polyfillをnode server用にインストール
```
$ npm install --save-dev @babel/polyfill
```

- @types/react-domが必要と言われたので、、、
```
$ npm install @types/react-dom
```

- @types/react-router-domが必要と言われたので、、、
```
$ npm install @types/react-router-dom
```

- @types/classnamesが必要と言われたので、、、
```
$ npm install @types/classnames
```

- @types/fluxが必要と言われたので、、、
```
$ npm install @types/flux
```

- babelでbind()を省略する際の記法で必要となったため、@babel/plugin-proposal-class-propertiesをインストール(.bind(this)関数の省略について)
```
$  npm install --save-dev @babel/plugin-proposal-class-properties
```


## 補足
### コンポーネントライフサイクル
> [公式] https://ja.reactjs.org/docs/react-component.html
#### マウント
コンポーネントのインスタンスが作成されて DOM に挿入されるときに、これらのメソッドが次の順序で呼び出されます。
1. constructor()
2. static getDerivedStateFromProps()　※あまり使われない
3. render()
4. componentDidMount()

#### 更新
更新は props や state の変更によって発生する可能性があります。コンポーネントが再レンダーされるときに、これらのメソッドは次の順序で呼び出されます。
1. static getDerivedStateFromProps()　※あまり使われない
2. shouldComponentUpdate()　※あまり使われない
3. render()
4. getSnapshotBeforeUpdate()　※あまり使われない
5. componentDidUpdate()

#### アンマウント
このメソッドは、コンポーネントが DOM から削除されるときに呼び出されます。
1. componentWillUnmount()


### カスタムイベント通知(emit)
今回はthis.emitと記載し、changeイベントを子から親にデータを伝達させた。
`~~~.on("change",...)`のようにして親を監視することでイベントを拾うことが可能である。

### メモリリークの発生
処理が重くなっていく原因になるので必ず行うこと。
- 以下のエラーが発生
```
react-dom.development.js:88 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
```
対策として、アンマウント(componentWillUnmount())を追加し、その中でメモリの解放を行った。
componentDidMountにlistenerを追加処理を書いていたのでメモリリークが起きていた。
これは登録していたListener は開放されること無くメモリ上にどんどん蓄積されたからである。
componentWillUnmountでメモリの解放をすることで発生を防ぐことが可能である。
その結果、メモリリークを防ぐことができる。

### 参考
> https://qiita.com/TsutomuNakamura/items/cb3b6109fb21730cd73f