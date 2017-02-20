import {AsyncStorage} from 'react-native';

export default class DataStorage{
    static get(key){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key)
                .then((result) => {
                    resolve(JSON.parse(result));
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    static set(key, value){
        return new Promise((resolve, reject) => {
            let object = JSON.stringify(value);
            AsyncStorage.setItem(key, object)
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}