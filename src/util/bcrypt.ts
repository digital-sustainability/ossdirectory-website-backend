import { compare, genSalt, hash } from "bcrypt";

export async function hashPassword(password: string): Promise<string> {

    const promise = new Promise<string>((resolve, reject) => {
        genSalt(10)
        .then((saltResult) => {
            hash(password, saltResult)
                .then((hashResult) => {
                    resolve(hashResult);
                })
                .catch((hashError) => {
                    reject(hashError);
                });
        })
        .catch((saltError) => {
            reject(saltError);
        });
    });
    return promise;
}

export async function comparePassword(password, encryptedPassword): Promise<boolean> {

    const promise = new Promise<boolean>((resolve, reject) => {
        compare(password, encryptedPassword, (compareError, compareResult) => {
            if (compareError || !compareResult) {
                reject(compareError);
            } else {
                resolve(compareResult);
            }
        });
    });
    return promise;
}
