/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
    var listTemplateSource = document.querySelector('#list_template').innerHTML;
    var listTemplate = Handlebars.compile(listTemplateSource);
    var colorsElem = document.querySelector('.colors');
    var carsElem = document.querySelector('.cars');
    var carsTemplateSource = document.querySelector('#cars_template').innerHTML;
    var carsTemplate = Handlebars.compile(carsTemplateSource);
    var brandsElem = document.querySelector('.brands');

    axios.get('http://api-tutor.herokuapp.com/v1/colors')
        .then((response) => {
            colorsElem.innerHTML = listTemplate(
                { items: response.data }
            );
        });
    axios.get('http://api-tutor.herokuapp.com/v1/cars')
        .then((response) => {
            carsElem.innerHTML = carsTemplate(
                { cars: response.data }
            );
        });
    axios.get('http://api-tutor.herokuapp.com/v1/makes')
        .then((response) => {
            brandsElem.innerHTML = listTemplate(
                { items: response.data }
            );
        });
});
