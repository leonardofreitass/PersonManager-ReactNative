import * as scenes from './../scenes/'

const SCENES_CONFIG = {
    "index": {
        name: "Início",
        component: scenes.IndexScene
    }
};

const FIRST_SCENE = SCENES_CONFIG.index;

export default {SCENES_CONFIG, FIRST_SCENE};