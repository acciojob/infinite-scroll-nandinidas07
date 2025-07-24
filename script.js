window.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("infi-list");
  let itemCount = 0;


  function addItems(count) {
    for (let i = 0; i < count; i++) {
      itemCount++;
      const li = document.createElement("li");
      li.innerText = Item ${itemCount};
      list.appendChild(li);
    }
  }

 
  addItems(10);

  list.addEventListener("scroll", () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      addItems(2);
    }
  });
});