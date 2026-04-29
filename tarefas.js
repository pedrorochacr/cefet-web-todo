const tarefas = [
  { nome: 'Comprar leite', categoria: 'compras', realizada: false },
  { nome: 'Escutar chimbinha', categoria: 'lazer', realizada: true },
];

function insereTarefaNaPagina(tarefa) {
  const lista = document.querySelector('#lista-tarefas');
  const item = document.createElement('li');

  item.classList.add('item-tarefa');
  item.classList.add(`categoria-${tarefa.categoria}`);
  if (tarefa.realizada) {
    item.classList.add('marcado');
  }
  item.textContent = tarefa.nome;

  lista.appendChild(item);
}

const lista = document.querySelector('#lista-tarefas');
lista.innerHTML = '';
tarefas.forEach(insereTarefaNaPagina);

const botao = document.querySelector('#incluir-nova-tarefa');
botao.addEventListener('click', function () {
  const nome = document.querySelector('#nova-tarefa-nome').value;
  const categoria = document.querySelector('#nova-tarefa-categoria').value;

  const novaTarefa = { nome, categoria, realizada: false };
  tarefas.push(novaTarefa);
  insereTarefaNaPagina(novaTarefa);
});
