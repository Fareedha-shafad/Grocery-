
function loadDoc()
{
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
         {
            var response=JSON.parse(this.responseText);
            //console.log(response);
             var data=response.GROCERY;
            // console.log(data);
             var output="";
        
            for(var i=0;i<data.length;i++)
            {
                
                output+=`<tr>
               <td>${data[i].SLNo}</td>
               <td>${data[i].NAME}</td>
               <td>${data[i].QUANTITY}</td>
               <td>${data[i].UNIT}</td>
               <td>${data[i].DEPARTMENT}</td>
               <td>${data[i].NOTES}</td>
                </tr>`;
                //console.log(output);
                 document.getElementById("Jdata").innerHTML=output;
            } 
             
        }
    };
    xhttp.open("GET", "GROCERY.JSON", true);
    xhttp.send();
}
