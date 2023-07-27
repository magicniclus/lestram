import { getDatabase, ref, set } from "firebase/database";
import { database } from "./firebase.config";

export function writeUserData(userId, nom, prenom, email, telephone, civilité) {
  // Pour obtenir la date et l'heure actuelles au format français
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Les mois sont indexés à partir de 0 en JavaScript
  const year = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  const dateEtHeure = `${day}/${month}/${year} ${hour}:${minute}:${second}`;

  return new Promise((resolve, reject) => {
    set(ref(database, "contactsLEstran/" + userId), {
      nom,
      prenom,
      email,
      telephone,
      civilité,
      dateEtHeure,
    })
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
      });
  });
}
