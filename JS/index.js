// let popup = document.getElementById("popup");
// document.getElementById('popup').style.visibility = 'hidden';
// function open_popup(){
//     document.getElementById('popup').style.visibility = 'visible';
//     // popup.classList.add()
    
// } 



function open_Popup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';

    const buttonBlur = document.querySelector('.button-blur');
    buttonBlur.style.transform = 'scale(1)';
  }

  function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

    const buttonBlur = document.querySelector('.button-blur');
    buttonBlur.style.transform = 'scale(1.2)';
  }