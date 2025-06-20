let buttonsCrew = document.querySelectorAll('.crewButton'),
    special = document.getElementById('special'),
    crewMember = document.getElementById('crewMember'),
    crewMemberInfo = document.getElementById('crewMemberInfo'),
    memberPic = document.getElementById('memberPic');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        buttonsCrew.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                if(!this.classList.contains('active')) {
                    for(let i = 0; i < buttonsCrew.length; i++) {
                        buttonsCrew[i].classList.remove('active');
                    }
                    this.classList.add('active');

                    special.style.opacity = '0';
                    special.style.transform = 'translateX(90%)';

                    crewMember.style.opacity = '0';
                    crewMember.style.transform = 'translateX(-50%)';

                    crewMemberInfo.style.opacity = '0';

                    memberPic.style.opacity = '0';

                    setTimeout(() => {
                        special.innerHTML = `${data.crew[index].role}`;
                        special.style.transform = 'translateX(0%)';
                        special.style.opacity = '1';

                        crewMember.innerHTML = `${data.crew[index].name}`;
                        crewMember.style.transform = 'translateX(0%)';
                        crewMember.style.opacity = '1';

                        crewMemberInfo.innerHTML = `${data.crew[index].bio}`;
                        crewMemberInfo.style.opacity = '1';

                        memberPic.setAttribute('src', `${data.crew[index].images.png}`);
                        memberPic.style.opacity = '1';
                    }, 1000);
                }
            })
        })
    })        
    .catch(error => {
        console.error('Ошибка загрузки JSON:', error);
    });