//the first decision

// const leftButton = document.querySelector('#left');
// const rightButton = document.querySelector('#right');
// const items = document.querySelector('#items');

// const computedStyle = getComputedStyle(items);

// leftButton.addEventListener("click", function(event){
//   event.preventDefault();
//   let rightPosition = parseInt(computedStyle.right);
//   if(rightPosition > 0) {
//     items.style.right = `${rightPosition - 100}px`;
//   }
// })

// rightButton.addEventListener("click", function(event){
//   event.preventDefault();

//   let rightPosition = parseInt(computedStyle.right);
//   if (rightPosition < 500){
//      items.style.right = `${rightPosition + 100}px`;
//   }

// })

//the second decision

// const leftButton = document.querySelector('#left');
// const rightButton = document.querySelector('#right');
// const itemsList = document.querySelector('#items');
// const computedStyle = window.getComputedStyle(itemsList);
// const items = document.querySelectorAll('.item');

// const minRight = 0;
// const itemWidth = getComputedStyle(items[0]).width;
// const step = parseInt(itemWidth);
// const visibleItems = 300 / step;
// const maxRight = (items.length - visibleItems) * step;
// let rightPosition = 0;

// itemsList.style.right = rightPosition;

// rightButton.addEventListener('click', function(event){
//   event.preventDefault();

//   if(rightPosition < maxRight){
//     rightPosition += step;
//     itemsList.style.right = `${rightPosition}px`;
//   }
// })

// leftButton.addEventListener('click', function(event){
//   event.preventDefault();

//   if(rightPosition > minRight){
//     rightPosition -= step;
//     itemsList.style.right = `${rightPosition}px`;

//   }
// })

//the third decision

const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const itemsList = document.querySelector('#items');


const loop = function(direction, event) {
  event.preventDefault();

  if(direction == rightButton){
    itemsList.appendChild(itemsList.firstElementChild);
  } else {
    itemsList.insertBefore(itemsList.lastElementChild, itemsList.firstElementChild);
  }
}

rightButton.addEventListener("click", function(event){
loop(rightButton, event);
})

leftButton.addEventListener("click", function(event){
loop(leftButton, event);
})