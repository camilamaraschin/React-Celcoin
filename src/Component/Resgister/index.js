import { useState } from "react";
import Product from "../Product";

export default function Register() {
    const products = [
        { name: "Bolo de aniversário", icon: "🎂", price: 20.9 },
        { name: "Balão", icon: "🎈", price: 5.6 },
        { name: "Confete", icon: "🎉", price: 2.9 },
        { name: "Suco de caixinha", icon: "🧃", price: 1.9 },
        { name: "Doces diversos", icon: "🍬", price: 12.3 }
    ];
    const [total, setTotal] = useState(0)

    return (
        <>
       
            <div className="register">
                <b>Total da compra:</b>
                R$<span>{total.toFixed(2).toString().replace(".", ",")}</span>
            </div>
            <div>
                {products.map((product, index) => {
                    const { name, icon, price } = product;
                    return (
                        <Product
                            name={name}
                            icon={icon}
                            price={price}
                            setTotal={setTotal}
                            total={total}
                            index={index}
                        />
                    )
                })}
            </div>
           
        </>
    )
}