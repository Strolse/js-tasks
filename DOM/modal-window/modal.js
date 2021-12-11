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
      if(even.target.classList.contains("overlay")){
        closeElement.click();  
      }
  
      // if(even.target == overlayField){
      //   closeElement.click();
      // }
    })
  
    const containerField = document.createElement("div");
    containerField.classList.add("modal-container");
  
    const contentField = document.createElement("div");
    contentField.classList.add("content");
  
    contentField.innerHTML = content;
  
    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";
  
    closeElement.addEventListener("click", function(even){
      event.preventDefault();
      body.removeChild(overlayField);
    })
  
    overlayField.appendChild(containerField);
    contentField.appendChild(closeElement);
    containerField.appendChild(contentField);  

  return overlayField;
};