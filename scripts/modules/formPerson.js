import createElement from "./createElement.js";

const createFormPerson = (n) => {
    const form = createElement('form', {
        className: 'person',
    });

    const title = createElement('h2', {
        className: 'person__title',
        textContent: `Passenger #${n + 1}`,
    });

    const fieldName = createElement('div', {
        className: 'field',
    });

    const labelName = createElement('label', {
        className: 'field__label',
        for: `name${n}`,
        textContent: 'Full Name',
    });

    const inputName = createElement('input', {
        className: 'field__name',
        id: `name${n}`,
        name: 'name',
        type: 'text',
        placeholder: 'Enter full name',
        required: true
    });

    fieldName.append(labelName, inputName);

    const fieldTicket = createElement('div', {
        className: 'field',
    });

    const labelTicket = createElement('label', {
        className: 'field__label',
        for: `ticket${n}`,
        textContent: 'Ticket number (10 digits)',
    });

    const inputTicket = createElement('input', {
        className: 'field__name',
        id: `ticket${n}`,
        name: 'ticket',
        type: 'text',
        placeholder: 'Ticket number',
        required: true,
        minLength: 10,
        maxLength: 10,
    });
    
    fieldTicket.append(labelTicket, inputTicket);


    const button = createElement('button', {
        className: 'btn-confirm',
        type: 'submit', 
        textContent: 'Confirm'
    });

    form.append(title, fieldName, fieldTicket, button);

    return form;
};

const getFormPerson = (count) => {
    const forms = [];
    if (count > 6) count = 6;
    
    for (let i = 0; i < count; i++) {
        forms.push(createFormPerson(i));
    }
    return forms;
}

export default getFormPerson;