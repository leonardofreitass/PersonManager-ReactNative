import * as scenes from './../scenes/'
import {NavTitle} from './../components/';

const SCENES_CONFIG = {
    "index": {
        component: scenes.IndexScene,
        titleComponent: NavTitle,
        titleProps: {
            title: "Início"
        }
    },
    "personScene": {
        component: scenes.PersonScene,
        titleComponent: NavTitle,
        titleProps: {
            title: "{{name}}"
        }
    },
    "newPersonScene": {
        component: scenes.NewPersonScene,
        titleComponent: NavTitle,
        titleProps: {
            title: "Adicionar pessoa"
        }
    },
    "editPersonScene": {
        component: scenes.EditPersonScene,
        titleComponent: NavTitle,
        titleProps: {
            title: "Editar {{name}}"
        }
    }
};

const FIRST_SCENE = SCENES_CONFIG.index;

export default {SCENES_CONFIG, FIRST_SCENE};