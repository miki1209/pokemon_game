$(function(){
        $.ajax({
        url: '../json/pokemon_list.json', //アクセスするURL
        type: 'get',
        contentType:'application/json',
        //Access-Control-Allow-origin:*,
        dataType:'json',     //data type script・xmlDocument・jsonなど
      }).then(function(deta){
        console.log(data);
    })
    });
