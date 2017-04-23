<<<<<<< HEAD

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
=======
var options = [
        set0 = ['Option 1','Option 2'],
        set1 = ['First Option','Second Option','Third Option']
    ];

function makeUL(array) 
{
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}
// Add the contents of options[0] to #foo:

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

function exploreEndpoint() {

document.getElementById('checkboxes').innerHTML = "";
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
        var yourString = xmlhttp.responseText;
var result = yourString.substring(1, yourString.length-1);
$.each(JSON.parse(xmlhttp.responseText), function () {
    $("#checkboxes").append("<ul></ul>").append($("<input class= 'class-button' >").attr('type', 'button').val(this.name)
    );
});
$("#checkboxes").on('change', '[type=checkbox]', function () {
   //this is now the checkbox; this.value is the id.
});
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



function parseExploreResults(results, status, jqXHR) {
    // hideSpinner();
    //   setTimeout(function() {$('#alertMsgServerWait').fadeOut('slow');}, fadeTime);
       
       var divRef;
       var arr = results.split('\$');
       
       //Create one button for each class and then we create the hierarchy
       //using the updateSuperButtons function.
     for (var i=0; i<arr.length-2; i++) {    
         if (arr[i] == 'null') {continue ;}
         if (checkForClass(arr[i])) {            
            // divRef = document.getElementById('exploreClasses');
            //createClassButton(arr[i], divRef);
            document.getElementById('foo').appendChild(makeUL(arr[i]));              
         }       
     }   
     
     //updateSuperButtons(arr);
     //updateBreadcrumbs(arr);
   }
>>>>>>> origin/master
