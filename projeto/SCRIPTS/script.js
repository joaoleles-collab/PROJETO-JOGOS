var cavalos = [
    ['White Arabian', 'https://s2-techtudo.glbimg.com/ASk7lHYDSiVBd0ruTLhIaNk62Do=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/c/B/s6BHo6TkywWKzSLwVqcw/red-dead-redemption-2-melhores-cavalos-lista-6.jpg', 'Saúde: 5', 'Estamina: 5', 'Velocidade: 6', 'Aceleração: 6'],

    ['Mustang – Tiger Striped Bay', 'https://static.wikia.nocookie.net/reddeadredemption/images/4/44/Tiger_Striped_Bay_Mustang.PNG/revision/latest/scale-to-width-down/250?cb=20240421231130', 'Saúde: 5', 'Estamina: 5', 'Velocidade: 4', 'Aceleração: 3'],

    ['Splashed White American Paint', 'https://preview.redd.it/i-used-to-love-this-horse-the-splashed-white-american-paint-v0-ik6yglap3qaa1.jpg?width=1080&crop=smart&auto=webp&s=ba0b96658ab1355453fdfaf73b6dcbd2dcda13c8', 'Saúde: 3', 'Estamina: 5', 'Velocidade: 3', 'Aceleração: 3']

];

cavalos.map(cadaCavalo => {

    document.getElementById("Ranking").innerHTML += `
     <div class="Cavalos">
                <img src="${cadaCavalo[1]}" alt="Cavalo">
                <h2>${cadaCavalo[0]}</h2>
                <p>${cadaCavalo[2]}</p>
                <p>${cadaCavalo[3]}</p>
                <p>${cadaCavalo[4]}</p>
                <p>${cadaCavalo[5]}</p>

            </div>
    
    `


})