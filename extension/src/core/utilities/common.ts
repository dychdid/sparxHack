import { storages } from '@handlers/state';

const { preferences } = storages;

const name = {
    defaults: {
        firstName: 'Najm',
        lastName: 'Ajmal'
    },

    get firstName() {
        return preferences.get('shouldUseCuteName')
            ? preferences.get('cuterFirstName') || this.defaults.firstName
            : preferences.get('firstName')
    },

    get lastName() {
        return preferences.get('shouldUseCuteName')
            ? preferences.get('cuterLastName') || this.defaults.lastName
            : preferences.get('lastName')
    }
};

const repository = {
    plain: 'https://github.com/NajmAjmal/sparxmaths',
    raw: 'https://raw.githubusercontent.com/NajmAjmal/sparxmaths'
};
const getImage = (name: string) => `${repository.raw}/main/extension/assets/${name}`;
const capitalize = (s: string) => s.trim().replace(/^\w/, m => m.toUpperCase());
const noop = () => { };

export default {
    name,
    repository,
    getImage,
    capitalize,
    noop
}
