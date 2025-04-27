import { faker } from '@faker-js/faker';

export const fakeUser = {
    firstName: faker.person.firstName('female'),
    lastName: faker.person.lastName(),
    avatar: faker.image.personPortrait({ sex: 'female', size: 128 })
};