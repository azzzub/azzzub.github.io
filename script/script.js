let modal = document.getElementById('myModal');

document.getElementById('port1').onclick = () => {
  modal.style.display = 'block';
  // document.getElementById('modal-content').innerHTML =
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
