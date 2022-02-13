import start from "./modules/start.js";
import getFormPerson from "./modules/formPerson.js";
import readyPlane from "./modules/readyPlane.js";
import getData from "./service/getTour.js";

const init = async(selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const data = await getData();

    const  {main, firstform, h1} = start(app, title, data)

    firstform.addEventListener('submit', (event) => {
        event.preventDefault();

        const tourData = data.find(tour => tour.id === firstform.tour.value)
        h1.textContent = tourData.tour;


        const forms = getFormPerson(firstform.count.value);

        firstform.remove();

        main.append(...forms);

        readyPlane(forms, main, tourData);
    })
};

init('.app', 'Choose your tour');