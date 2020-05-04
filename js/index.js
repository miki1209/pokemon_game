//一旦復習したい

//連想配列
var hoge = [
    {
        "id": 2,
        "name": "みきお",
        "age": 26,
        "sex": "男"
    },
    {
        "id": 1,
        "name": "みき",
        "age": 22,
        "sex": "男"
    },
    {
        "id": 3,
        "name": "みきまる",
        "age": 26,
        "sex": "男"
    },
]

//引数を2つ以上使用したidの呼び出し方法
//findは一つのオブジェクトのみ
// === 同じ数値と同じ型という意味
function test (list, id){
    return list.find(function(deta){
        return deta.id === id
    });
}

//filterはマッチするオブジェクトをすべて
//<= 等しいかそれ以下
var hoge6 = hoge.filter(function(value){
    return value.id <= 2;
});

console.log(hoge6);

//idで取得をしている
//比較演算子覚える必要あり(理解しきれてない)
var hoge7 = hoge.sort(function(a, b){
    return (a.id > b.id ? 1 : -1);
});

//ループの種類(find,sort,map,filter)この中から使用する(for文とforEaechは基本使わない)
//for文のほうがいい場合もある(for文かけない)
//復習する

console.log(hoge7);

//関数の横に引数をいれる(値など)
console.log(test(hoge, 3));

//配列
var hoge2 = ['みきお']

//配列
var hoge3 = ['みきお', "26"]

//オブジェクト
var hoge4 = {
    id: {
        name: "小山樹"
    }
}

console.log(hoge4.id);

//多次元配列
var hoge5 = [
    ["小山",16,1997,1209]
]

console.log(hoge5);

//ここからポケモンGAME
//  1.p1と2pの選択をどうわけるのか...
//  -リンク先にパラメータを付けて分けるやり方があるっぽい
//  player1はp1とする
//  ループするっぽいから、ループを調査する必要がある。
//  URLを取得メソッド「location」これ使う


var path = location.search;

console.log(path);

var player1IndividualId = path.split("?p1=")[1]
//変数を定義しているためlocation.search;はpathになる


