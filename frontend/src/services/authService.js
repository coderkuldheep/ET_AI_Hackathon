import {
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

import { auth } from "@/firebase/firebase";
import api from "@/services/api";

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {

    const result = await signInWithPopup(auth, provider);

    const idToken = await result.user.getIdToken();

    const response = await api.post("/auth/google", {
        idToken,
    });

    localStorage.setItem("jwt", response.data.token);

    localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
    );

    return response.data.user;
};

export const logout = async () => {

    await auth.signOut();

    localStorage.removeItem("jwt");

    localStorage.removeItem("user");
};