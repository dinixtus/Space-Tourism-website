let planetButton = document.querySelectorAll('.planetButton'),
    planetName = document.getElementById('planetName'),
    planetInfo = document.getElementById('planetInfo'),
    distance = document.getElementById('distance'),
    planetPicture = document.getElementById('planetPicture'),
    travelTime = document.getElementById('travelTime');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        planetButton.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                if(!this.firstElementChild.classList.contains('active')) {
                    for(let i = 0; i < planetButton.length; i++) {
                    planetButton[i].firstElementChild.classList.remove('active');
                    }
                    this.firstElementChild.classList.add('active');

                    planetName.style.transform = 'translateX(30%)';
                    planetName.style.opacity = '0';

                    planetInfo.style.opacity = '0';

                    distance.style.opacity = '0';

                    travelTime.style.opacity = '0';

                    planetPicture.style.top = '0';
                    planetPicture.style.left = '40%';
                    planetPicture.style.opacity = '0';
                    planetPicture.style.transform = 'scale(0.2)';

                    setTimeout(() => {
                        planetName.innerHTML = `${data.destinations[index].name}`
                        planetName.style.transform = 'translateX(0%)';
                        planetName.style.opacity = '1';  

                        planetInfo.innerHTML = `${data.destinations[index].description}`
                        planetInfo.style.opacity = '1';

                        distance.innerHTML = `${data.destinations[index].distance}`
                        distance.style.opacity = '1';

                        travelTime.innerHTML = `${data.destinations[index].travel}`
                        travelTime.style.opacity = '1';

                        planetPicture.setAttribute('src', `${data.destinations[index].images.png}`)
                        planetPicture.style.left = '-45%'
                        setTimeout(() => {
                            planetPicture.style.top = '30%';
                            planetPicture.style.left = '17%';
                            planetPicture.style.transform = 'scale(1)';
                            planetPicture.style.opacity = '1'
                        }, 500);
                    }, 1000);
                }
                
            });
        });
    })
    .catch(error => {
        console.error('Ошибка загрузки JSON:', error);
    });

