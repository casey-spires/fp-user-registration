import {iso, Newtype} from "newtype-ts"; 
import {PositiveInteger} from "newtype-ts/lib/PositiveInteger"; 

export type UserRegistrationDto = {
    firstName: string,
    lastName: string,
    age: number,
    sex: string,
    country: string,
};

export type Gender = 'M' | 'F' | 'X'; 

export type Europe = {
    readonly _type: 'Europe',
}
export type NorthAmerica = {
    readonly _type: 'NorthAmerica',
}
export type Other = {
    readonly _type: 'Other',
}
export type Region = Europe | NorthAmerica | Other; 

export interface FirstName 
    extends Newtype<{ readonly FirstName: unique symbol }, string> {} 

export interface LastName
    extends Newtype<{ readonly LastName: unique symbol }, string> {} 

export const firstNameIso = iso<FirstName>(); 
export const lastNameIso = iso<LastName>(); 

export type User = {
    firstName: FirstName,
    lastName: LastName,
    age: PositiveInteger,
    gender: Gender,
    region: Region,
}