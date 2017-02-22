import * as scenes from './../scenes/'

const SCENES_CONFIG = {
    "index": {
        name: "Início",
        component: scenes.IndexScene
    },
    "personScene": {
        name: "{person.name}",
        component: scenes.PersonScene
    },
    "newPersonScene": {
        name: "Adicionar pessoa",
        component: scenes.NewPersonScene
    },
    "editPersonScene": {
        name: "Editar pessoa",
        component: scenes.EditPersonScene
    }
};

const FIRST_SCENE = SCENES_CONFIG.index;

export default {SCENES_CONFIG, FIRST_SCENE};