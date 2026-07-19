import {

    doc,
    
    setDoc,
    
    serverTimestamp
    
    } from "firebase/firestore";
    
    import {
    
    db
    
    } from "./firebase";
    
    export async function saveUser(user){
    
    await setDoc(
    
    doc(db,"users",user.uid),
    
    {
    
    uid:user.uid,
    
    name:user.displayName,
    
    email:user.email,
    
    photo:user.photoURL,
    
    role:"engineer",
    
    department:"Maintenance",
    
    company:"IndustrialMind",
    
    isActive:true,
    
    createdAt:serverTimestamp(),
    
    lastLogin:serverTimestamp()
    
    },
    
    {
    
    merge:true
    
    }
    
    );
    
    }