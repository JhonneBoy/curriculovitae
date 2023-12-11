document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    mobileMenuButton.addEventListener('click', function () {
        navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
    });
});function inicializarMapa() {
    // Substitua LATITUDE e LONGITUDE pelos valores reais de sua localização
    var myLatLng = { lat: -23.593923503602642, lng: -46.51240937513977 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Sua Localização'
    });
}

function enviarComentario() {
    var comentarioTexto = document.getElementById('comentarioTexto').value;

    // Aqui você pode adicionar lógica para salvar o comentário no banco de dados.
    // Por exemplo, usando AJAX para enviar os dados para um servidor.

    // Em seguida, você pode exibir o comentário na seção "Comentários Salvos".
    var comentariosSalvos = document.getElementById('comentariosSalvos');
    comentariosSalvos.innerHTML += '<p>' + comentarioTexto + '</p>';
}