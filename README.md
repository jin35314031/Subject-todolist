# Subject-todolist
## 研修用課題（Todoリスト）
実行環境
``` 
node.js v11.6.0
npm  6.5.0-next.0
mysql Ver 14.14 Distrib 5.7.29
```

[DB接続情報](https://github.com/jin35314031/Subject-todolist/blob/9a684adb99eb0019ce336ade69582ab8e316dbd5/list-app/app.js#L10-L14)
local環境で稼働させる訓練用リポジトリの為 接続情報も記載しています。
  
```
CREATE DATABASE list_app;

create table items
(
    id        int auto_increment
        primary key,
    name      text                 null,
    done      tinyint(1) default 0 not null,
    doneDate  datetime             null,
    important tinyint(1) default 0 null,
    firstTime datetime   default CURRENT_TIMESTAMP
);

```

*同一の課題を検証してもらう前提のため以下のリポジトリとテーブル定義を共有しています。

https://github.com/takano08/todo-list


#### 事前準備
- node.js インストール 
- DBを作成


#### 実行手順

- git clone https://github.com/jin35314031/Subject-todolist.git
- cd  Subject-todolist
- cd list-app
- npm install
- node app.js

APP起動後 [localhost:3000にアクセス](http://localhost:3000/)