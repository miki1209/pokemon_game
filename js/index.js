//一旦復習したい

// //連想配列
// var hoge = [
//   {
//     "id": 2,
//     "name": "みきお",
//     "age": 26,
//   },
//   {
//     "id": 1,
//     "name": "みき",
//     "age": 22,
//   },
//   {
//     "id": 3,
//     "name": "みきまる",
//     "age": 26,
//   }
// ]

// //引数を2つ以上使用したidの呼び出し方法
// //findは一つのオブジェクトのみ
// // === 同じ数値と同じ型という意味
// function test (list, id){
//   return list.find(function(deta){
//     return deta.id === id
//   });
// }

// //filterはマッチするオブジェクトをすべて
// //<= 等しいかそれ以下
// var hoge6 = hoge.filter(function(value){
//   return value.id <= 2;
// });

// console.log(hoge6);

// //idで取得をしている
// //比較演算子覚える必要あり(理解しきれてない)
// var hoge7 = hoge.sort(function(a, b){
//   return (a.id > b.id ? 1 : -1);
// });

// //ループの種類(find,sort,map,filter)この中から使用する(for文とforEaechは基本使わない)
// //for文のほうがいい場合もある(for文かけない)
// //復習する

// console.log(hoge7);

// //関数の横に引数をいれる(値など)
// console.log(test(hoge, 3));

// //配列
// var hoge2 = ['みきお']

// //配列
// var hoge3 = ['みきお', "26"]

// //オブジェクト
// var hoge4 = {
//   id: {
//     name: "小山樹"
//   }
// }

// console.log(hoge4.id);

// //多次元配列
// var hoge5 = [
//   ["小山",16,1997,1209]
// ]

// console.log(hoge5);

// //ここからポケモンGAME
// //  1.p1と2pの選択をどうわけるのか...
// //  　-リンク先にパラメータを付けて分けるやり方があるっぽい
// //  2.player1はp1とする
// //  3.ループするっぽいから、ループを調査する必要がある。
// //  4.URLを取得メソッド「location」これ使う

// //URLを取得
// var path = location.search;

// console.log(path);

// //URLにパラメータを追加する...?
// var player1IndividualId = path.split("?p1=")[1]
//変数を定義しているためlocation.searchはpathになる

// ここからajax

// $(function(){
//         $.ajax({
//         url: '../json/pokemon.json', //アクセスするURL
//         type: 'get',
//         contentType:'application/json',
//         //Access-Control-Allow-origin:*,
//         dataType:'json',     //data type script・xmlDocument・jsonなど
//       }).then(function(deta){
//         console.log(deta);
//     })
// });

// function ajax(url,type,dataType){
//   return $.ajax({
//     url: url,
//     type: type,
//     dataType: dataType
//     })
// }

// window.onload = function() {
//   ajax('json/pokemon.json','get','json')
//   .done(function(data){
//     console.log(data);
//   }).fail(function(err){
//     console.log(err);
//   })
// };

// $(function(){

//   $.ajax({
//     url: 'json/pokemon_list.json',
//     type: 'get',
//     dataType: 'json'
//   }).then(
//     function (data,dataType){
//       console.log(data);
//       for (var i = 0; data.length > i  ;i++){
//         console.log(i);}
//     },
//     function (){
      
//     });
// });

$(function(){

  $.ajax({
    url: 'json/pokemon_list.json',
    type: 'get',
    dataType: 'json'
  }).then(
    function (data,dataType){
      for (var i in data){
        $('#js-list').append('<li class="list-box"><div class="poke-box"><h2 class="name-title">' + data[i].name + '</h2>' + '</div>' + '<img src="' + data[i].image + '">' + '<div class="link-box"><a href="" class="link-item">このポケモンにする</a></div>' + '</li>');
      }
    });
});

// $(function(){

//   $.ajax({
//     url: 'json/skill.json',
//     type: 'get',
//     dataType: 'json'
//   }).then(
//     function (data,dataType){
//       for (var i in data){
//         $('.poke-box').append('<p>' + data[i].skill_name + '</p>');
//       }
//     });
// });






var p = "../xxx.png";
var html = '<img src="' + p + '">';
// var html = <img src="../xxx.png">;
console.log(html);
