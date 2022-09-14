



 function pushing(){
   
     var new_name = document.getElementById('biz_name').value
     var nname = ['']
     nname.push(new_name)  
     document.write('<h1>Имя которое вы ввели</h1> ')
     for(var i = 0; i < nname.length; i++){
        document.write('<p id="tagp" class="text-center" style="font-size: 40px;">' + nname[i] + "</p>")
        console.log(new_name)
     }
}





// https://www.youtube.com/watch?v=3-bZ7gLVSzo
// https://www.w3schools.com/jsref/jsref_push.asp
// https://www.w3schools.com/js/js_arrays.asp
// https://www.youtube.com/watch?v=RBB2N341tr0
// https://www.youtube.com/watch?v=lq7tFgvdf4k
// https://www.youtube.com/watch?v=CVClHLwv-4I
// https://www.youtube.com/watch?v=AZ4PdALMqx0
