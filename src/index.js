document.addEventListener('DOMContentLoaded', () => {
  // your code here
  function addTask(e) {
    e.preventDefault()
    const task = document.getElementById('new-task-description').value

    const node = document.createElement('li')

    const textnode = document.createTextNode(task)

    node.appendChild(textnode)

    document.getElementById('tasks').appendChild(node)
  }

  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', addTask)
})
