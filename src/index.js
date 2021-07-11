console.log('%c HI', 'color: firebrick')

function fetchDogImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4').then(function(response) {
        return response.json();
    }).then(function(json) {
        const urlArray = json['message'];
        urlArray.forEach(renderDogImages);
    })
};

function renderDogImages(url) {
    const imageGallery = document.getElementById('dog-image-container');
    let newImg = document.createElement('img')
    imageGallery.append(newImg);
    newImg.setAttribute('src', url);
};

document.addEventListener('DOMContentLoaded', function() {
    fetchDogImages();
    
});