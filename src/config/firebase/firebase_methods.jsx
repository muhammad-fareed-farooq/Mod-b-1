import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "./index";
import { ref, set } from "firebase/database";

const create_account = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     // Signed up 
    //     const user = userCredential.user;
    //     // ...
    //     console.log(user);
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    // })
}

const login_Account = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}


function write_user_data(user_id, data) {
    set(ref(database, 'users/' + user_id), {
        ...data
    });
}
// function write_Donater_data( data) {
    
//     const id = Math.floor(Math.random() *3)
    
//     set(ref(database, 'Donater/' + id), {
//         ...data
//     });
// }

const read_user_data = () => {
    const reference = ref(database, "users/" + userId);
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
    });
  };

export { create_account, login_Account, write_user_data} 