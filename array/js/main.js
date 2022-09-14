



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



