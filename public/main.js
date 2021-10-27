function addOrder() {
  let customerName = document.querySelector('.customerName').value
  let customerOrder = document.querySelector('.customerOrder').value
  document.querySelector('.thanks').innerText = 'Thanks for your order, ' + customerName + '!'
  // let body = document.querySelector('.hide')
  // body.getElementsByClassName.display = 'none'
  fetch('orders', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'customerName': customerName,
      'customerOrder': customerOrder,
    })
  })

    .then(response => {
      if (response.ok) {
        document.querySelector('.thanks').innerText = 'Thanks for your order, ' + customerName + '!'
        // let body = document.querySelector('.hide')
        // body.getElementsByClassName.display = 'none'
        // document.querySelector('#thanksGif').src = "thanks.gif"      
        // window.location.reload(true)
      }
    })
}

function completeOrder(orderId, user, customerName) {
  console.log('id:' + orderId + 'user:' + user)
  fetch('orders', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'orderId': orderId,
      'barista': user
    })
  })
    .then(response => {
      console.log(response)
      if (response.ok) {
        var msg = new SpeechSynthesisUtterance();
        msg.text = "Order for " + customerName + " is ready";
        window.speechSynthesis.speak(msg);
        window.location.reload(true)
      }
    })
}

function deleteList(orderId) {
  fetch('orders', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'orderId': orderId,
    })
  })
    .then(response => {
      console.log(response)
      if (response.ok) {
        window.location.reload(true)
      }
    })
}

// function addTask() {
//   let taskAdded = document.querySelector('.task').value
//   let nameEntered = document.querySelector('.name').value
//   console.log(taskAdded)

//   fetch('tasks', {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       'newTasks': taskAdded,
//       'name': nameEntered,
//     })
//   })
//     .then(response => {
//       if (response.ok) {
//         window.location.reload(true)
//       }
//     })
// }

// function deleteTask(e) {
//   console.log(e.target.getAttribute('data-id'))
//   fetch('tasks', {
//     method: 'delete',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       'taskIdToDelete': e.target.getAttribute('data-id'),
//     })
//   })
//     .then(response => {
//       if (response.ok) {
//         window.location.reload(true)
//       }
//     })
// }
