// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({ name: "alex" }),
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// ПЕРЕПИСЫВАНИЕ МЕТОДА POST В НОВЫЙ СТАНДАРТ
fetch("server.php", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(object),
  }).then(data=> {
      data.text()
  }).then((data) => {
      console.log(data);
      showThanksModal(message.success);
      form.reset();
      statusMessage.remove();
    }).catch(() => {
      showThanksModal(message.failure);
    }).finally(()=> {
      form.reset();
    })
  