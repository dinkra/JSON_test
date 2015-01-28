$(document).ready(function(){

console.log('Dinara');

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}





// $(function(){
//   $('#search-form').submit(function(event){
//     event.preventDefault();
//     var searchTerm = $('#query').val();
//     getRequest(searchTerm);
//   });
// });

// function getRequest(searchTerm){
//   var params = {
//     q: searchTerm,
//     r: 'json',
//     part: 'snippet',
//     key: 'AIzaSyDbGD1IIFOwfqNaZQg2o3EJZip4DeUNa-Y'
//   };
//   url = 'https://www.googleapis.com/youtube/v3/search';

//   $.getJSON(url, params, function(data){
//     showResults(data.Search);
//   });
// }

// function showResults(results){
//     var html = "";
//     $.each(results, function(index,value){
//       html += '<p>' + value.Title + '</p>';
//       console.log(value.Title);
//     });
//     $('#search-results').html(html);
//   }



});
    