const botaoAdd = document.getElementById('addGmt');
const botaoSub = document.getElementById('subGmt');
const valor = document.getElementById('atualGMT');

let valorAtual = 0;

botaoAdd.addEventListener('click', function() {
  console.log('Soma');

  if (valorAtual >= 11) {
    console.log('Valor máximo atingido');
    botaoAdd.disabled = true; 
  } else {
    botaoAdd.disabled = false; 
  }
  valorAtual++;
  valor.value = valorAtual;

  if (valorAtual < 11) {
    botaoSub.disabled = false;
  }
});

botaoSub.addEventListener('click', function(){
  console.log('subtração');

  if (valorAtual <= -11) {
    console.log('Valor mínimo atingido');
    botaoSub.disabled = true; 
  } else {
    botaoSub.disabled = false;
  }
  valorAtual--;
  valor.value = valorAtual;

  if (valorAtual > -11) {
    botaoAdd.disabled = false;
  }
});

valor.addEventListener('input', function() {
  valorAtual = parseInt(valor.value);
  botaoAdd.disabled = false;
  botaoSub.disabled = false;
});


function getTime(zone, success) {
    var url = 'http://json-time.appspot.com/time.json?tz=' + zone,
        ud = 'json' + (+new Date());
    window[ud]= function(o){
        success && success(new Date(o.datetime));
    };
    document.getElementsByTagName('head')[0].appendChild((function(){
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = url + '&callback=' + ud;
        return s;
    })());
}

getTime('GMT', function(time){
    // This is where you do whatever you want with the time:
    alert(time);
});