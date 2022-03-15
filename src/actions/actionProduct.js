import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { typesProduct } from '../types/types'


// search

export const productSearch = (product) => {
    return async (dispatch) => {
        const getCollection = collection(db,'DbProducts')
        const q = query(getCollection, where('name', '>=', product, '<',  product + 'z'))
        const datos = await getDocs(q)

        const productSearch = []
        
        datos.forEach((docu) => {
            productSearch.push(docu.data())
        })
        console.log(datos);
        console.log(productSearch);
        dispatch(productSearchSyn(productSearch))
    }
}

export const productSearchSyn = (product) => {
    return {
        type: typesProduct.search,
        payload: product
    }
}


//update Product

export const productEdit = (sku, product) => {
    return async (dispatch) => {
        const getCollection = collection(db, 'DbProducts')
        const q = query(getCollection, where('sku', '==', sku))
        console.log(q);
        const datosQ = await getDocs(q)
        console.log(datosQ);
        let id
        datosQ.forEach(async(docu) => {
            id = docu.id
        })
        console.log(id);

        const docRef = doc(db, 'DbProducts', id)
        await updateDoc(docRef, product)
        .then(() => showProduct())
    }
}

export const productEditSyn = ( product ) => {
    return  {
        type: typesProduct.edit,
        payload: product
    }
}

// Delete Product

export const productDelete = ( sku ) =>{
    return async(dispatch) => {

        const getCollection = collection(db,'DbProducts');
        const q = query(getCollection,where("sku","==", sku))
       
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db,"DbProducts",docu.id));
        })
        dispatch(deleteSyn(sku));
    }
}

export const deleteSyn = ( product ) => {
    return{
        type: typesProduct.delete,
        payload: product
    }
}

//List Product

export const showProduct = () => {
    return async (dispatch) => {
        console.log('listStart');
        const data = await getDocs(collection(db, 'DbProducts'));
        const productCollection = [];
        console.log('listar',productCollection);
        data.forEach((doc) => {
            productCollection.push({
                ...doc.data()
            })
        });
        dispatch(showProductSync(productCollection));
    }
}

export const showProductSync = (product) => {
    return {
        type: typesProduct.list,
        payload: product
    }
}


//Create Product

export const productRegister = (product) => {
    return(dispatch) => {
        addDoc(collection(db,'DbProducts'), product)
        .then(resp => {
            dispatch(productRegisterSinc(product))
            dispatch(showProduct()) 
        })
        .catch (error => {
            console.log(error);
        })
    }
}

export const productRegisterSinc = (product) => {
    return {
        type: typesProduct.create,
        payload: product
    }
}