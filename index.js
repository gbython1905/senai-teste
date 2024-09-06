const titulo = document.querySelector('.titulo');
const imagemPerfil = document.querySelector('.image-perfil');
const loginPerfil = document.querySelector('.login-perfil');
const segPerfil = document.querySelector('.seg-perfil');
const repPerfil = document.querySelector('.rep-perfil');
const bioPerfil = document.querySelector('.bio')

const getInfo = async () =>{
    const response = await fetch('https://api.github.com/users/gbython1905');
    const data = await response.json();
    console.log(data);
    titulo.innerHTML = data.name;
    
    repPerfil.innerHTML = data.public_repos + ' repositorio(s)';
    imagemPerfil.setAttribute('src',data.avatar_url)
    bioPerfil.innerHTML = data.bio
    segPerfil.innerHTML = `Seguidores ${data.followers} e seguindo ${data.following} perfis`
}

getInfo()