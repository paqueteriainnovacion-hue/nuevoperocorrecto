// Mostrar notificación de éxito después de enviar
const form = document.getElementById('registro');
const notif = document.getElementById('notif');

form.addEventListener('submit', (e) => {
  notif.textContent = "Enviando...";
  notif.classList.add('show');
  setTimeout(() => notif.classList.remove('show'), 2500);
});
