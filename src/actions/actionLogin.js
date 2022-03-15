import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { facebook, google } from "../firebase/firebaseConfig";
import { types } from "../types/types";


export const login = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email,password)
        .then(({user}) => {
            dispatch(
                loginSin(user.uid, user.displayName)
            )
            console.log('Bienvenid@');
        })
        .catch(e => {
            console.log(e);
            console.log('El usuario no existe');
        })
    }
}

//google

export const loginGoogle = () => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            dispatch(loginSin(user.uid, user.displayName))
        })
        .catch (e => {
            console.log(e);
        })
    }
}

//login sincrónico

export const loginSin = (id, displayname) => {
    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}


// Facebook 

export const loginFacebook = () => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,facebook)
        .then(({user}) => {
            dispatch(loginSin(user.uid, user.displayName))
        })
        .catch (e => {
            console.log(e);
        })
    }
}


/* Logout */

export const logout = () => {
    return(dispatch) => {
        const auth = getAuth()
        signOut(auth)
        .then (user => {
            dispatch(logoutSyn())
        })
        .catch (e => {
            console.log(e);
        })
    }
    
}

export const logoutSyn = () => {
    return {
        type: types.logout
    }
}