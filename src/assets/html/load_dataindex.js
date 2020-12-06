$(document).ready(function(){
 var limit = 15;
 var start = 0;
 var action = 'inactive';
 function load_country_data(limit, start)
 {
  $.ajax({
   url:"load_index",
   method:"POST",
   data:{limit:limit, start:start},
   cache:false,
   success:function(data)
   {
    $('#load_dataindex').append(data);
    if(data == '')
    {
     $('#load_data_messageindex').html("<button type='button'>No Data Found</button>");
     action = 'active';
    }
    else
    {
     $('#load_data_messageindex').html("<button type='button' class='btn btn-danger' >Load More </button>");
     action = "inactive";
    }
   }
  });
 }
if(action == 'inactive')
 {
  action = 'active';
  load_country_data(limit, start);
 }
  $(window).click(function(){
  if($(window).scrollTop() + $(window).height() > $("#load_dataindex").height() && action == 'inactive')
  {
   action = 'active';
   start = start + limit;
   setTimeout(function(){
    load_country_data(limit, start);
   }, 100);
  }
 });
});