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
