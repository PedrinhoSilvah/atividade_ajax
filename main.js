$(document).ready(function(){
    const endpoint = `https://api.github.com/users/PedrinhoSilvah`;
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const repositoryElement = document.querySelector('#Repository');
    const followersElement = document.querySelector('#Seguidores');
    const followingElement = document.querySelector('#Seguindo');
    const linkElement = document.querySelector('#link');

    fetch(endpoint).then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        linkElement.href = json.html_url;
        followersElement.innerHTML = json.bio;
         followingElement.innerText = json.following;
        followersElement.innerText = json.followers;
        repositoryElement.innerText = json.public_repos;
        
    })
    .catch(function(erro){
        alert('ocorreu um erro de carregamento, por favor tente mais tarde');
    })
})