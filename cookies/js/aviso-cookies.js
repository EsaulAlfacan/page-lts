const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

const dataLayer = [];

if (localStorage.getItem('cookies-aceptadas') !== 'true') {
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({ 'event': 'cookies-aceptadas' });
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', 'true');

	dataLayer.push({ 'event': 'cookies-aceptadas' });
});
