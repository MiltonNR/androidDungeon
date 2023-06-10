import { useState} from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")


    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="From" >
                <label className="Label" style={{ marginRight: '10px' }}>
                    Nombre: 
                    <input
                    className="Input"
                    type="text"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    placeholder="Ingresá tu nombre"
                    ></input>
                </label>
                <label className="Label" style={{ marginRight: '10px' }}>
                    Telefono: 
                    <input
                    className="Input"
                    type="text"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                    placeholder="De linea o celular"
                    ></input>
                </label>
                <label className="Label">
                    Email: 
                    <input
                    className="Input"
                    type="text"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="tumail@tuservidor.com"
                    ></input>
                </label>
                <div className="Label">
                      {name !== '' && phone !== '' && email !== '' ? (
                        <button type="submit" className="OptionCart" style={{ marginTop: '10px' }}>
                          Crear Orden
                        </button>
                         ) : null}
                 </div>

            </form>

        </div>
    )


}


export default CheckoutForm