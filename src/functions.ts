import * as E from 'fp-ts/lib/Either';
import { FieldsNotEmpty, ValidateAge, ValidateGender } from "./domain";

const fieldsNotEmpty: FieldsNotEmpty = (e) => {
    return e.firstName && e.lastName && e.age && e.sex && e.country ?
        E.right(e) : E.left('Not all required fields were filled in.');
};
const validateAge: ValidateAge = (e) => {
    return e.age >= 18 && e.age < 150 ?
        E.right(e) : E.left(`Received an invalid age of ${e.age}`);
};
const validateGender: ValidateGender = (e) => {
    return e.sex === 'M' || e.sex === 'F' || e.sex === 'X' ?
        E.right(e) : E.left(`Received an invalid sex ${e.sex}`);
};