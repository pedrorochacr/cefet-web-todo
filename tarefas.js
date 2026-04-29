const tarefas = [
  { nome: 'Comprar leite', categoria: 'compras', realizada: false },
  { nome: 'Escutar chimbinha', categoria: 'lazer', realizada: true },
];

function insereTarefaNaPagina(tarefa) {
  const lista = document.querySelector('#lista-tarefas');
  const item = document.createElement('li');

  item.classList.add('item-tarefa');
  if (tarefa.realizada) {
    item.classList.add('marcado');
  }
  item.dataset.categoria = tarefa.categoria;
  item.textContent = tarefa.nome;

  lista.appendChild(item);
}

tarefas.forEach(insereTarefaNaPagina);
