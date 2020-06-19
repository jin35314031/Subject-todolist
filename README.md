# Subject-todolist
○使用環境
Node.js v12.18.0　
mySQL  Ver 14.14 Distrib 5.7.29, for osx10.15 (x86_64) 

○実行方法
ターミナル上で
cd Subject-todolist
cd list-app
を実行してlist-appディレクトリを選択。
brew services start mysql@5.7
を実行してmySQLを起動。
node app.js
を実行してサーバーを起動。
ブラウザのURLで
localhost:3000
にアクセスする。
   
○環境整備（macOS）

１、Node.jsの確認
Node.jsがすでにインストールされているか確認する。
ターミナル上で
node -v 
を実行する。
v12.18.0
上記のようにバージョンが表示されていればインストールされている。
バージョンが表示されない場合は公式サイトよりインストール（推奨版）を行う。

２、Homebrewの確認
Homebrewがインストールされているかを確認する。
ターミナル上で
brew -v
を実行する。
brew: command not found と表示された場合はHomebrewがインストールされていないので、この後の手順にしたがってインストールを行う。
Homebrewをインストールするには、以下のコマンドをコピーしてターミナルで実行する。
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
インストール終了後、ターミナル上で再度「brew -v」を実行する。
Homebrew 1.6.2 のような文字が表示されたら、Homebrewは正常にインストールできている。

３、mySQLのインストール
今回はmySQLのバージョン５.７をインストールする。
ターミナル上で
brew install mysql@5.7
を実行する。
次にmySQL用のコマンドを使えるようにするためにパスを設定する。
If you need to have mysql@5.7 first in your PATH run:の後の1行をターミナルで実行してください。（~/.zshrc部分は環境によって異なる場合がある）
source ~/.zshrc
を実行して設定を反映させる。ただし~/.zshrc部分はパスの設定で使ったコマンドの最後>>以降の~/.〇〇と同じになるように注意する。

4、mySQLの設定
ターミナル上で
brew services start mysql@5.7
を実行してmySQLを起動。
mysql --user=root --password
を実行してrootユーザーとしてログイン。
CREATE DATABASE list_app;
を実行してlist_appデータベースを作成。
USE list_app
を実行してlist_appデータベースを選択。
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
を実行してitemsテーブルを作成し、カラムを設定する。
mySQLを閉じる。
　
5、git cloneでリポジトリを取得
ターミナルにて
git clone https://github.com/jin35314031/Subject-todolist.git
を実行する。
cd Subject-todolist
cd list-app
を実行してlist-appディレクトリを選択。

6、必要なパッケージをインストール。
ターミナル上で
npm install mysql
を実行し、mysqlパッケージをインストール。
同様に
npm install express ejs
を実行し、expressとejsパッケージをインストール。

