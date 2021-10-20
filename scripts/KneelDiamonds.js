
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { setStyle, setMetal, setSize, orderBuild } from "./database.js"

const orders = orderBuild()
const style = setStyle()
const metal = setMetal()
const size = setSize()

document.addEventListener(
    "click",
    (event) => {
        // for (const order of orders) {
            if (event.target.id === "orderButton") {

                // window.alert(`User has chosen Style ${order.styleId}, Metal ${order.metalId}, at Size ${order.sizeId} `)
                orderBuild()
            }
        }
        // window.alert(`User has chosen Style ${order.styleId}, Metal ${order.metalId}, at Size ${order.sizeId} `)
    // }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

