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

$(function(){

  $.ajax({
    url: 'json/pokemon.json',
    type: 'get',
    dataType: 'json'
  }).then(
    function (data,dataType){
      console.log(data);
      for (var i = 0; data.length > i  ;i++){
        console.log(i);}
    },
    function (){
      
    });
});
