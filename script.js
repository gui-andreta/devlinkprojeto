function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    /*
    if(html.classList.contains('light')) {
        html.classList.remove('light');
    }else{
        html.classList.add('light')
    }
    */

    //pegar img
    const img = document.querySelector("#profile img");
    
    //substituir imagem dependendo light ou dork mode
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-lightmode.png')
    }else{
        img.setAttribute('src', './assets/avatar.png')
    }

}