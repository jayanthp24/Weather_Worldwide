const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {
    const cityDetails = data.cityDetails;
    const weather = data.weather;
    let exact = weather.LocalObservationDateTime.slice(11, 19);
    let date = weather.LocalObservationDateTime.slice(0, 10);


    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-5 my-2">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
            <span>||</span>
            <span>${weather.Temperature.Imperial.Value}</span>
            <span>&deg;F</span>
        </div>
        <div class="display-5 my-2">
            <span>${exact}</span>
        </div>
        <div class="my-3">${date}</div>
    `;

    let iconSource = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSource);

    let imgSource = null;
    if(weather.IsDayTime) {
        imgSource = 'img/day.jpg'
    } else {
        imgSource = 'img/night.jpg'
    }
    time.setAttribute('src', imgSource);
    
}

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
});
