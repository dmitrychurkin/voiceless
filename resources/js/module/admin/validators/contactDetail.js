import * as Yup from 'yup';
import { email, phone, unique } from '../helpers/validationRules';

export const RANGES = {
    contactDetails: {
        phone: {
            MAX: 20
        },
        email: {
            MAX: 255
        },
        address: {
            MAX: 200
        },
        contactPerson: {
            MAX: 100
        },
        MAX: 10
    },
};

export const validationSchema = Yup.object().shape({
    contactDetails: unique(
        Yup.array()
            .of(
                Yup.object().shape({
                    phone: phone(
                        Yup.string()
                            .required('Phone number is required')
                    ).max(RANGES.contactDetails.phone.MAX, `Phone should be less then ${RANGES.contactDetails.phone.MAX} characters`),
                    email: email(
                        Yup.string()
                            .required('Email is required')
                    ).max(RANGES.contactDetails.email.MAX, `Email should be less then ${RANGES.contactDetails.email.MAX} characters`),
                    address: Yup.string()
                        .required('Address is required')
                        .max(RANGES.contactDetails.address.MAX, `Address should be less then ${RANGES.contactDetails.address.MAX} characters`),
                    contactPerson: Yup.string()
                        .required('Contact person full name is required')
                        .max(RANGES.contactDetails.contactPerson.MAX, `Contact person full name should be less then ${RANGES.contactDetails.contactPerson.MAX} characters`)
                })
            )
    ).max(RANGES.contactDetails.MAX, `Maximum of ${RANGES.contactDetails.MAX} contacts`)
});
