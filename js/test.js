$(function(){
        $.ajax({
        url: '/json/pokemon_list.json', //アクセスするURL
        type: 'get',
        contentType:'application/json',
        //Access-Control-Allow-origin:*,
        dataType:'json',     //data type script・xmlDocument・jsonなど
      }).then(function(deta){
        console.log(deta);
    })
});


// $(function(){
//   $.ajax({
//     url: '../json/test.json',
//     dataType: 'json',
//     data: {name: 'chara'},
//     success: function(data){
//       var dataArray = data.charas;
//       $.each(dataArray, function(i){
//         $(".nameData").append("<p>id: " + dataArray[i].id + "　Character: " + dataArray[i].chara + "　　(CV: " + dataArray[i].cv + ")</p>");
//       });
//     }
//   });
// });