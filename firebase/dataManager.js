import { getDatabase, ref, set } from "firebase/database";
import { database } from "./firebase.config";

export function writeUserData(userId, nom, prenom, email, telephone, sexe) {
  return new Promise((resolve, reject) => {
    set(ref(database, "contacts/" + userId), {
      nom,
      prenom,
      email,
      telephone,
      sexe,
    })
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
      });
  });
}
