var verificacao = 0; 

var amanha = document.getElementById('amanha');
  amanha.addEventListener('click', function(event) {
    divSelecionada = 1;
    if (event.target === amanha) {
        amanha.style['boxShadow'] = '-1px 0px 0px 2px #00ca65';
        outraData.style['boxShadow'] = '0px 0px 0px 0px #00ca65';
        depoisAmanha.style['boxShadow'] = '0px 0px 0px 0px #00ca65';
        verificacao = 1;
    }
  });

  var depoisAmanha = document.getElementById('depoisAmanha');
  depoisAmanha.addEventListener('click', function(event) {
    if (event.target === depoisAmanha) {
        amanha.style['boxShadow'] = '0px 0px 0px 0px #00ca65';
        outraData.style['boxShadow'] = '0px 0px 0px 0px #00ca65';
        depoisAmanha.style['boxShadow'] = '0px 0px 0px 1.5px #00ca65';
        verificacao = 1;
    }
  });

  var outraData = document.getElementById('outraData');
  outraData.addEventListener('click', function(event) {
    if (event.target === outraData) {
        amanha.style['boxShadow'] = '0px 0px 0px 0px #00ca65';
        depoisAmanha.style['boxShadow'] = '0px 0px 0px 0px #00ca65';
        outraData.style['boxShadow'] = '1px 0px 0px 2px #00ca65';
        verificacao = 1;
    }
  });

function redirectToPage() {
    if (verificacao==1) {  
    window.location.href = "agendamento_profissional.html";
    }
  }