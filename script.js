/* =============================================
   Portfólio - Jardel Scremin Magagnin
   Arquivo JavaScript (script.js)
   Funções:
   1. Alternar tema claro/escuro
   2. Validar e simular envio do formulário
   ============================================= */


/* -----------------------------------------------
   1. TEMA CLARO / ESCURO
   Salva a preferência do usuário no localStorage
   para manter o tema ao trocar de página
----------------------------------------------- */

// Quando a página carrega, verifica se o usuário já escolheu um tema antes
var temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
  document.body.classList.add('escuro');
  // Atualiza o texto do botão se ele existir nessa página
  if (document.getElementById('btnTema')) {
    document.getElementById('btnTema').textContent = '☀️ Tema claro';
  }
}

// Função chamada quando o usuário clica no botão de tema
function alternarTema() {
  // Verifica se o body tem a classe 'escuro'
  var estaEscuro = document.body.classList.contains('escuro');

  if (estaEscuro) {
    // Se estiver escuro, volta para o claro
    document.body.classList.remove('escuro');
    document.getElementById('btnTema').textContent = '🌙 Tema escuro';
    localStorage.setItem('tema', 'claro'); // salva preferência
  } else {
    // Se estiver claro, muda para escuro
    document.body.classList.add('escuro');
    document.getElementById('btnTema').textContent = '☀️ Tema claro';
    localStorage.setItem('tema', 'escuro'); // salva preferência
  }
}


/* -----------------------------------------------
   2. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
   Verifica os campos antes de "enviar"
----------------------------------------------- */

// Função chamada quando o usuário clica no botão "Enviar mensagem"
function validarFormulario() {

  // Pega os valores digitados nos campos
  var nome     = document.getElementById('nome').value;
  var email    = document.getElementById('email').value;
  var mensagem = document.getElementById('mensagem').value;

  // Limpa as mensagens de erro anteriores
  document.getElementById('erroNome').textContent     = '';
  document.getElementById('erroEmail').textContent    = '';
  document.getElementById('erroMensagem').textContent = '';

  // Variável para controlar se o formulário passou em todas as validações
  var formValido = true;

  // Verifica se o nome foi preenchido
  if (nome.trim() === '') {
    document.getElementById('erroNome').textContent = 'Por favor, informe seu nome.';
    formValido = false;
  }

  // Verifica se o e-mail foi preenchido e tem formato válido
  // O formato válido é: algo@algo.algo (ex: jardel@email.com)
  var formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() === '') {
    document.getElementById('erroEmail').textContent = 'Por favor, informe seu e-mail.';
    formValido = false;
  } else if (!formatoEmail.test(email)) {
    document.getElementById('erroEmail').textContent = 'E-mail inválido. Use o formato: usuario@dominio.com';
    formValido = false;
  }

  // Verifica se a mensagem foi preenchida
  if (mensagem.trim() === '') {
    document.getElementById('erroMensagem').textContent = 'Por favor, escreva uma mensagem.';
    formValido = false;
  }

  // Se tudo estiver correto, simula o envio
  if (formValido) {
    enviarFormulario();
  }
}

// Função que simula o envio (limpa o formulário e mostra mensagem de sucesso)
function enviarFormulario() {
  // Limpa os campos
  document.getElementById('nome').value     = '';
  document.getElementById('email').value    = '';
  document.getElementById('mensagem').value = '';

  // Esconde o formulário
  document.getElementById('formulario').style.display = 'none';

  // Mostra a mensagem de sucesso
  document.getElementById('mensagemSucesso').style.display = 'block';
}

// Função chamada quando o usuário quer enviar outra mensagem
function novasMensagem() {
  // Mostra o formulário novamente
  document.getElementById('formulario').style.display = 'block';

  // Esconde a mensagem de sucesso
  document.getElementById('mensagemSucesso').style.display = 'none';
}
