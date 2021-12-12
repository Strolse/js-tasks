const button = document.querySelector('#openOverlay');
const body = document.body;
const successModal = createModal("Сообщение успешно отправлено!");

button.addEventListener("click", function(even){
  body.appendChild(successModal);
});

function createModal(content){
  const overlayField = document.createElement("div");
  overlayField.classList.add("overlay");

  overlayField.addEventListener("click", function(even){
    if(even.target == overlayField){
      closeElement.click();
    }
  })

  const template = document.querySelector("#overlayTemplate");
  overlayField.innerHTML = template.innerHTML;
  const closeElement = overlayField.querySelector(".close");

  closeElement.addEventListener("click", function(even){
    event.preventDefault();
    body.removeChild(overlayField);
  })

  const contentField = overlayField.querySelector(".content");
  contentField.innerHTML = content;

  return overlayField;
}

