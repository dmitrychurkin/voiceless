import * as Yup from 'yup';
import { unique } from '../helpers/validationRules';

export const RANGES = {
    bankAccounts: {
        bankName: {
            MAX: 255
        },
        accountName: {
            MAX: 255
        },
        accountNumber: {
            MAX: 50
        },
        MAX: 10
    },
};

export const validationSchema = Yup.object().shape({
    bankAccounts: unique(
        Yup.array()
            .of(
                Yup.object().shape({
                    bankName: Yup.string()
                        .required('Bank name is required')
                        .max(RANGES.bankAccounts.bankName.MAX, `Bank name should be less then ${RANGES.bankAccounts.bankName.MAX} characters`),
                    accountName: Yup.string()
                        .required('Account name is required')
                        .max(RANGES.bankAccounts.accountName.MAX, `Account name should be less then ${RANGES.bankAccounts.accountName.MAX} characters`),
                    accountNumber: Yup.string()
                        .required('Account number is required')
                        .max(RANGES.bankAccounts.accountNumber.MAX, `Account number should be less then ${RANGES.bankAccounts.accountNumber.MAX} characters`)
                })
            ),
        'Duplicate accounts are not allowed',
        a => a.accountNumber
    ).max(RANGES.bankAccounts.MAX, `Maximum of ${RANGES.bankAccounts.MAX} bank accounts`)
});
