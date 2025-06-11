let planetButton = document.querySelectorAll('.planetButton'),
    planetName = document.getElementById('planetName'),
    planetInfo = document.getElementById('planetInfo'),
    distance = document.getElementById('distance'),
    travelTime = document.getElementById('travelTime');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        planetButton.forEach(btn => {
            btn.addEventListener('click', function() {
                for(let i = 0; i < planetButton.length; i++) {
                    planetButton[i].firstElementChild.classList.remove('active');
                }
                this.firstElementChild.classList.add('active');
                
            });
        });
    })
    .catch(error => {
        console.error('Ошибка загрузки JSON:', error);
    });