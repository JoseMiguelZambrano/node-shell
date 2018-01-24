var comands = require('./comands.js')
process.stdout.write('prompt > ');
process.stdin.on('data', function(data){
    var input = data.toString().trim();
	var cmd = args.split(' ')[0]
	var argumentos = input.split(' ').slice(1);
	function done(output){
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
  }

	comands[cmd](done, argumentos); // esto equivale a todo lo comentado abajo      

      /*if(cmd==='pwd')  comands.pwd();
      if(cmd==='date') comands.date();
      if(cmd==='ls') comands.ls();
      if(cmd.split(' ')[0]==='echo') comands.echo(cmd);
      if(cmd.split(' ')[0]==='cat') comands.cat(cmd);
      if(cmd.split(' ')[0]==='head') comands.head(cmd);
      if(cmd.split(' ')[0]==='tail') comands.tail(cmd);
      if(cmd.split(' ')[0]==='sort') comands.sort(cmd);
      if(cmd.split(' ')[0]==='wc') comands.wc(cmd);
      if(cmd.split(' ')[0]==='uniq') comands.uniq(cmd);*/
//   process.stdout.write('You typed: ' + cmd);
  
});

// PUEDO REESCRIBIR ESTO PARA QUE CADA FUNCION DE COMANDS RECIBA 
//ADEMAS UNA FUNCION POR PARAMETRO Y LA EJECUTE AL FINAL COMO FUNCION "DONE". DE ESTA MANERA Y DECLARANDOLAS EN BASH.JS LE PUEDO PASAR A CADA COMANDO UNA FUNCION QUE QUIERO QUE EJECUTE SOBRE EL FINAL
