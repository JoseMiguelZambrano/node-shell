var fs = require('fs');

var obj = {
    
  date: function(done){
    process.stdout.write(Date());
  },
  pwd: function(done){
    process.stdout.write(process.cwd());
  },
  ls: function(done, parametro){
    fs.readdir('.', function(err, files) {
      if (err) throw 'err';
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\t");
      })
      process.stdout.write("prompt > ");
    });
    done(files.join('\t'));
  },
  echo: function(done, data){       
    process.stdout.write(data.slice(5));
    done(argumentos.join());
  },
  cat: function(done, argumentos){
    var output = [];
    argumentos.forEach(function(arg, i){
      fs.readFile(file, function(err, data){
        if(error) throw error;
        output[i] = data.toString().split('\n').slice(0,5).join('\n');
        if(output.length === argumentos.length && output.every(e => !!e)){
          done(output.join('\n'));
        }
      })   
    })

    /*fs.readFile('./'+ argumentos, 'utf-8', function(err, text){
      if(err) throw 'error';
      process.stdout.write(text);
    }) */ 

  },

  head: function(done, parametro){
    var ruta = parametro.slice(5);
    fs.readFile('./'+ruta, 'utf-8', function(err, txt){
      if(err) throw 'error';
      var contador = 0;
      for(var i=0; i<txt.length; i++){
        if(txt[i]==='\n'){
          contador++
          if(contador===5){
            txt = txt.slice(0, i)
            return process.stdout.write(txt)
          }
        }
      }
    })
  },
  tail: function(done, parametro) {
    var ruta = parametro.slice(5);
    fs.readFile('./'+ruta, 'utf-8', function(err, txt){
      if(err) throw 'error';
      var contador = 0;
      for(i=txt.length-1; i>0; i--){
        if(txt[i]==='\n'){
          contador++
          if(contador===5){
            txt = txt.slice(i, txt.length-1)
            return process.stdout.write(txt);
          }    
        }        
      }
    })
  },
  sort: function(done, parametro) {
    var ruta = parametro.slice(5);
    fs.readFile('./'+ruta, 'utf-8', function(err, txt){
      if(err) throw 'error';
      var arrayAux = [];
      var arrayExtra = [];
      for(var i=0; i<txt.length; i++){
        if(txt[i]==='\n'){
          arrayAux.push(txt.slice(0, i));
        }
      }
      for(var i=0; i<arrayAux.length; i++){
        for(var j= i+1; j<arrayAux.length; j++){
          if(arrayAux[i]>arrayAux[j]){
            arrayExtra = arrayAux[i];
            arrayAux[i] = arrayAux[j];
            arrayAux[j] = arrayExtra;
          }
        }
      }
    process.stdout.write(arrayAux.join());
    return arrayAux;
    })
  },
  wc: function(done, parametro) {
    var ruta = parametro.slice(3);
    fs.readFile('./'+ruta, 'utf-8', function(err, txt){
      if(err) throw 'error';
      var arrayAux = [];
      for(var i=0; i<txt.length; i++){
        if(txt[i]==='\n'){
          arrayAux.push(txt.slice(0, i))
        }
      }
      return process.stdout.write(arrayAux.length);
    })
  },
  /* uniq: function(parametro){
    var arrayAux = sort(parametro)
      for (i=0; i<arrayAux.length; i++){
    }
  }*/
  // TENGO QUE INSTALAR EL REQUEST EN EL PACKAGE.JSON
  curl: function(done, url){
    request(String(url), function(err, resp, body){
    if (err) throw err;
      done(body);
    })
  }
}

module.exports = obj;