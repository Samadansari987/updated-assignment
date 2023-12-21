function openPopupWithDelay() {
    setTimeout(openPopup, 3000); 
  }
  
  function openPopup() {
    const personName = "Person's Name"; 
    const phoneNumber = "18883559278"; 
  
  const popupWrapper = document.getElementById("popup-wrapper");
    const personNameSpan = document.getElementById("person-name");
    const callButton = document.getElementById("call-button");
  
    popupWrapper.style.display = "block";
  personNameSpan.textContent = personName;
    callButton.href = `tel:${phoneNumber}`;
  
    
 popupWrapper.style.position = "fixed";
    popupWrapper.style.top = "50%";
    popupWrapper.style.left = "50%";
    popupWrapper.style.transform = "translate(-50%, -50%)";
  }
  
  function closePopup() {
    const popupWrapper = document.getElementById("popup-wrapper");
    popupWrapper.style.display = "none";
  }
  
 
 window.onload = openPopupWithDelay;
  
  
const closeButton = document.querySelector(".popup-close"); 
closeButton.addEventListener("click", closePopup); 
  
 
  const overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", closePopup);