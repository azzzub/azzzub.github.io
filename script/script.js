let modal = document.getElementById('myModal');

document.getElementById('port1').onclick = () => {
  modal.style.display = 'block';
  document.getElementById('modal-title').innerHTML = '💡 Smart Street Light';
  document.getElementById('modal-main').innerHTML = `
	<img src="/assets/portfolio/detail/port1/port1-1.png" class="image-det">
  <img src="/assets/portfolio/port2.png" class="image-det">
	<img src="/assets/portfolio/detail/port1/port1-3.png" class="image-det">
	<img src="/assets/portfolio/detail/port1/port1-4.png" class="image-det">
  <img src="/assets/portfolio/detail/port1/port1-5.png" class="image-det">`;
  document.getElementById('modal-desc').innerHTML = `
  Lectro app was developed to integrate the smart street light (PJU - Penerangan Jalan Umum)
	that able to receive the battery usage to the client with using the Lectro app.
	Client can see their street light condition, location, and all the smart street light data
  from the app.<br><br><i>On this app, I do fullstack developer</i> 💪`;
  document.getElementById('modal-tech').innerHTML = `
  This app uses:
  <img class="tech-det" src="/assets/icons/react-icon.png" />
  <img class="tech-det" src="/assets/icons/redux-icon.png" />
  <img class="tech-det" src="/assets/icons/angular-icon.png" />
  <img class="tech-det" src="/assets/icons/html-icon.png" />
  <img class="tech-det" src="/assets/icons/css-icon.png" />
  <img class="tech-det" src="/assets/icons/php-icon.png" />
  <img class="tech-det" src="/assets/icons/mysql-icon.png" />
  <img class="tech-det" src="/assets/icons/bootstrap-icon.png" />
  <img class="tech-det" src="/assets/icons/github-icon.png" />
  <img class="tech-det" src="/assets/icons/figma-icon.png" />`;
};

document.getElementById('port2').onclick = () => {
  modal.style.display = 'block';
  document.getElementById('modal-title').innerHTML = '💧 Irigation Water Quality Monitoring';
  document.getElementById('modal-main').innerHTML = `
  <img src="/assets/portfolio/port1.png" class="image-det">
  <img src="/assets/portfolio/detail/port2/port2-3.png" class="image-det">
  <img src="/assets/portfolio/detail/port2/port2-2.png" class="image-det">
  <img src="/assets/portfolio/detail/port2/port2-1.png" class="image-det-web">`;
  document.getElementById('modal-desc').innerHTML = `
  Irigation Water Quality Monitoring app builds to give the client better interfaces to monitor
  their water quality that supply to their agricultural field. This app connected to the hardware
  through bluetooth connection and access able with internet connection for better interface such as
  a graph line and tables to display the data. We can set our requirement for each sensor with some
  settings in the app.<br><br><i>On this app, I do fullstack developer</i> 💪`;
  document.getElementById('modal-tech').innerHTML = `
  This app uses:
  <img class="tech-det" src="/assets/icons/androidstudio-icon.png" />
  <img class="tech-det" src="/assets/icons/html-icon.png" />
  <img class="tech-det" src="/assets/icons/css-icon.png" />
  <img class="tech-det" src="/assets/icons/php-icon.png" />
  <img class="tech-det" src="/assets/icons/mysql-icon.png" />
  <img class="tech-det" src="/assets/icons/github-icon.png" />
  <img class="tech-det" src="/assets/icons/figma-icon.png" />`;
};

document.getElementById('modal-close').onclick = () => {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
