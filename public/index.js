$("#allMenu .row .btn").click(function(){
    var text_id = $(this).attr("id");
    console.log("ID: "+text_id);
    var prices =  $('#'+text_id).text();
    console.log("Pirce: "+ prices);
    
    const data = {
      name: text_id,
      price: prices,
    }
  });//out of bound.