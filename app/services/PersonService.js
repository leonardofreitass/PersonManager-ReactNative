import DataStorage from './DataStorage';

export default class PersonService {
    static getPeople(){
        return new Promise((resolve, reject) => {
            DataStorage.get("people")
                .then((people) => {
                    resolve(people || []);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    static findPerson(email){
        return new Promise((resolve, reject) => {
            DataStorage.get("people")
                .then((people) => {
                    let result = people.map((person) => {
                        if (person.email === email){
                            return person;
                        }
                    });
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    static savePerson(person){
        return new Promise((resolve, reject) => {
            DataStorage.get("people")
                .then((people) => {
                    people.push(person);
                    DataStorage.set("people", people)
                        .then(() => {
                            resolve();
                        })
                        .catch((error) => {
                            reject(error);
                        });
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}