import "./assets/ItemDetailContainer.css";
import { useState, useEffect, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    getProduct();
  }, [itemId]);

  const getProduct = () => {
    if (loading) return;
    setLoading(true);
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const product = { ...data, id: response.id };

        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;

//logica vieja

/*useEffect(() => {
    getProductsById(itemId)
    .then(response => {
        setProduct(response)
    })
    .catch(error => {
        console.error(error)
    })
}, [itemId] )

return (
    <div className="ItemDetailContainer">
        <ItemDetail {...product} />
    </div>
)*/
