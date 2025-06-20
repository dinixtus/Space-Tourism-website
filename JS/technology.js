let technoButton = document.querySelectorAll('.technoButton'),
    infoPart = document.getElementById('infoPart'),
    imgPart = document.getElementById('imgPart');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        technoButton.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                for(let i = 0; i < technoButton.length; i++) {
                    technoButton[i].classList.remove('active')
                }
                btn.classList.add('active');

                infoPart.style.transform = 'translateY(-35%)';
                infoPart.style.opacity = '0';

                imgPart.style.transform = 'translateY(-20%)';
                imgPart.style.opacity = '0';

                setTimeout(() => {
                    infoPart.firstElementChild.nextElementSibling.innerHTML = `${data.technology[index].name}`;
                    infoPart.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = `${data.technology[index].description}`;
                    infoPart.style.transform = 'translateY(35%)';

                    imgPart.firstElementChild.setAttribute('src', `${data.technology[index].images.portrait}`);
                    imgPart.style.transform = 'translateY(20%)';

                    setTimeout(() => {
                        infoPart.style.opacity = '1';
                        infoPart.style.transform = 'translateY(0)';

                        imgPart.style.opacity = '1';
                        imgPart.style.transform = 'translateY(0)';
                    }, 500)
                }, 900)
            })
        })
    })