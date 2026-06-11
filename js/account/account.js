// Función para simular la navegación entre vistas (Landing y Dashboard)
function showView(viewId) {
    // 1. Ocultar todas las secciones principales
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.remove('active');
    });
    
    // 2. Mostrar la vista solicitada añadiendo la clase 'active'
    document.getElementById(viewId).classList.add('active');
}
