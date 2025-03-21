const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(tarefas, callback) {
  const ul = document.querySelector(".tasks__list");
  ul.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    const title = tarefas[i].title;
    const type = tarefas[i].type;
    const result = callback(title, type);

    ul.appendChild(result);
  }
}

function createTaskItem(taskTitle, taskType) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const button = document.createElement("button");

  li.classList.add("task__item");
  div.classList.add("task-info__container");
  span.classList.add("task-type");

  if (taskType === "Urgente") {
    span.classList.add("span-urgent");
  } else if (taskType === "Importante") {
    span.classList.add("span-important");
  } else if (taskType === "Normal") {
    span.classList.add("span-normal");
  }

  p.innerHTML = taskTitle;
  button.classList.add("task__button--remove-task");

  li.appendChild(div);
  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(button);

  return li;
}

renderElements(tasks, createTaskItem);
