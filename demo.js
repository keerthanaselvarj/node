var fs=require('fs');
var fetch = require('readline').createInterface({
input: fs.createReadStream('India2011.csv')
//output: fs.createWriteStream('india2011.json')
});

var obj={};
var head =[];
var c=0;
fetch.on('line', function (line) 
{
 
 if(c == 0){
    head =line.split(',');
   
    c++;
 }

 else
 {
     var aa = line.split(',');
     for (var j=0;j<head.length;j++) {            
      if(j == 3)
         {            
             obj[head[j]]=aa[j];
              
         }
         if(j==5)
         {        
             obj[head[j]]=aa[j];
         }
         if(j==12)
         {             
             obj[head[j]]=aa[j];
         }

     }
     
    //console.log(obj);
     var jso=JSON.stringify(obj);
     fs.appendFile('India2011.json',jso,function(err){
           console.log(jso);
      });
   
 }

});