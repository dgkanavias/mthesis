
// Add the contents of options[0] to #foo:
function query(){
    var text = $('#myselect').val();
alert(text);
}


function exploreEndpoint() {

var xmlhttp = new XMLHttpRequest();
if(endpointUrl.value == '')
{
var url = 'http://ip.jsontest.com/';
}
else
{
    var url = endpointUrl.value;
}
xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
             // document.getElementById("classes").innerHTML = xmlhttp.responseText;
        var response = xmlhttp.responseText;
var result = response.substring(1, response.length-1);
//$("#checkboxes").append("<ul>")
$.each(JSON.parse(response), function () {
    //$('"#checkboxes"').append($("<input class= 'class-button' >").attr('type', 'button').val(this.name)
   //);
   $('#myselect').append($('<option>').text(this.name).attr('value', this.name))
});
//$("#checkboxes").on('change', '[type=checkbox]', function () {
   //this is now the checkbox; this.value is the id.
//});
$('#myselect').multiSelect({
  selectableHeader: "<div class='custom-header'>Selectable Classes</div>",
  selectionHeader: "<div class='custom-header'>Selection Classes</div>"
});
document.getElementById("query").style.display = "block";

}
         // var obj = JSON.parse(xmlhttp.responseText);
         // alert(obj.count);
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };     
xmlhttp.open('GET', url, true);
xmlhttp.send(); 
}
