import createElement from "./createElement.js";

const createTitle = (title) => {
    const h1 = createElement('h1', {
        className: 'title',
        textContent: title,
    });
    return h1;
};

const createMain = () => {
    const main = createElement('main', {
        className: 'person-data',
    });

    return main;
};

const createFirstForm = (data) => {
    const form = createElement('form', {
        className: 'field',
    });

    const labelTour = createElement('lebel', {
        className: 'field__label',
        for:'tour',
        textContent: 'Choose tour',
    });

    const select = createElement('select', {
        className: 'field__select',
        id: 'tour',
        name: 'tour',
    });

    const options = data.map(item => createElement('option', {
        value: item.id,
        textContent: item.tour,
        }));

        select.append(...options)

    const label = createElement('label', {
        className: 'field__label',
        textContent: 'indicate the number of passengers (max: 6)',
    });

    const input = createElement('input', {
        className: 'field__input',
        id: "count",
        name: "count",
        type: "number",
        placeholder: "choose number of passengers",
        min: "1",
        max: "6",
        required: true,
    });

    const button = createElement('button', {
        className: 'btn-confirm',
        type: 'submit',
        textContent: 'confirm'
    });

    form.append(labelTour, select, label, input, button);

    return form;
};


const start = (app, title, data) => {
    const h1 = createTitle(title);
    const main = createMain();
    const firstform = createFirstForm(data);

    main.append(firstform);
    app.append(h1, main);

    return {
        main, firstform, h1,
    }
};

export default start;