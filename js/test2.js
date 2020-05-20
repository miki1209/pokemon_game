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
  }).done(function(data){
    console.log(data);
  }).fail(function(){
    
  })

  json = "json/pokemon.json";
  target = $('#list');
  $.getJSON(json, function(data){
      for(var n in data) {
          var text = '<li>';
          if (data[n].url){
              line = '<a href="'+data[n].url+'" target="_blank"><span>'+data[n].name+'</span></a>';
          }else{
              line = '<i><span>'+data[n].name+'</span></i>';
          }
          text = text+line+'</li>';
          $(target).append(text);
      }
  });
});
