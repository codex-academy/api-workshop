/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
    var optionsTemplateSource = document.querySelector('#options_template').innerHTML;
    var optionsTemplate = Handlebars.compile(optionsTemplateSource);
    var colors = document.querySelector('.color-options');
    var cars = document.querySelector('.cars');
    var carsTemplateSource = document.querySelector('#cars_template').innerHTML;
    var carsTemplate = Handlebars.compile(carsTemplateSource);
    var brands = document.querySelector('.brand-options');
    var filterBtn = document.querySelector('.filter-btn');

    axios.get('http://api-tutor.herokuapp.com/v1/colors')
        .then((response) => {
            colors.innerHTML = optionsTemplate(
                { options: response.data }
            );
        });
    axios.get('http://api-tutor.herokuapp.com/v1/cars')
        .then((response) => {
            cars.innerHTML = carsTemplate(
                { cars: response.data }
            );
        });
    axios.get('http://api-tutor.herokuapp.com/v1/makes')
        .then((response) => {
            brands.innerHTML = optionsTemplate(
                { options: response.data }
            );
        });

    filterBtn.addEventListener('click', () => {
        var colorSelected = document.querySelector('.color-options').value;
        var brandSelected = document.querySelector('.brand-options').value;

        if (colorSelected !== '' && brandSelected !== '') {
            axios.get(`http://api-tutor.herokuapp.com/v1/cars/make/${brandSelected}/color/${colorSelected}`)
                .then((response) => {
                    cars.innerHTML = carsTemplate(
                        { cars: response.data }
                    );
                });
        } else if (colorSelected !== '') {
            axios.get(`http://api-tutor.herokuapp.com/v1/cars/color/${colorSelected}`)
                .then((response) => {
                    cars.innerHTML = carsTemplate(
                        { cars: response.data }
                    );
                });
        } else if (brandSelected !== '') {
            axios.get(`http://api-tutor.herokuapp.com/v1/cars/make/${brandSelected}`)
                .then((response) => {
                    cars.innerHTML = carsTemplate(
                        { cars: response.data }
                    );
                });
        }

        // `/v1/cars/color/:color``/v1/cars/make/:make``/v1/cars/make/:make/color/:car_color`;
    });
});
