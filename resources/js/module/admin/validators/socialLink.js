import * as Yup from 'yup';
import { unique, url } from '../helpers/validationRules';

export const RANGES = {
    socialLinks: {
        name: {
            MAX: 50
        },
        url: {
            MAX: 255
        },
        MAX: 10
    },
};

export const socialLinksValidationSchema = Yup.object().shape({
    socialLinks: unique(
        Yup.array()
            .of(
                Yup.object().shape({
                    name: Yup.string()
                        .required('Social link name is required')
                        .max(RANGES.socialLinks.name.MAX, `Social link name should be less then ${RANGES.socialLinks.name.MAX} characters`),
                    url: url(
                        Yup.string()
                            .required('Social link URL is required')
                    ).max(RANGES.socialLinks.url.MAX, `Social link URL should be less then ${RANGES.socialLinks.url.MAX} characters`)
                })
            ),
        'Duplicate URL is not allowed',
        a => a.url
    ).max(RANGES.socialLinks.MAX, `Maximum of ${RANGES.socialLinks.MAX} social links`)
});

