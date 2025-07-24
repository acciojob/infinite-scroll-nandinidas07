//your code here!
const list = document.getElementById('infinite-list');

let itemCount = 0;

function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.innerText = Item ${itemCount};
    list.appendChild(li);
  }
}


addItems(10);

list.addEventListener('scroll', function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); 
  }
});
