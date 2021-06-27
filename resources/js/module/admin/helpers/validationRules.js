import * as Yup from 'yup';

Yup.addMethod(Yup.array, 'unique', function (message, mapper = a => a) {
    return this.test('unique', message, list => list.length === new Set(list.map(mapper)).size);
});

export const phone = (yup = Yup.string(), message = 'Phone number is not valid') => yup.matches(
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
    message
);

export const unique = (yup, message = 'Duplicate email is not allowed', mapper = a => a.email) => yup.unique(message, mapper);

export const email = (yup = Yup.string(), message = 'Email is not valid') => yup.email(message);

export const url = (yup = Yup.string(), message = 'URL is not valid') => yup.matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    message
);
