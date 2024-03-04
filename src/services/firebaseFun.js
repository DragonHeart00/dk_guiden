import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

export const addStore = async (formData) => {
    const storeCollectionRef = collection(db, "store");

    try {
        await addDoc(storeCollectionRef, {
            store_name: formData.store_name,
            cvr_nr: formData.cvr_nr,
            postNumber: formData.postNumber,
            address: formData.address,
            city: formData.city,
            email: formData.email,
            name: formData.name,
            category: formData.category, // Add category field
            lastName: formData.lastName,
            phone: formData.phone,
            // Add additional fields as needed
        });
    } catch (error) {
        throw new Error("Error adding store: " + error.message);
    }
};
