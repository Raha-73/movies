import { Fragment, useState } from "react";
import { menu } from '../data'

export default function Menu(){

    const [filter,changeFilterData] = useState(menu)

    const renderAll = () => {
        return filter.map(({title,price,category}) => {
            return (
                <li className="bg-red">
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <p>{price}</p>
                </li>
            )
        })
    }
    const filterFood = () => {
        const filter = menu.filter((item,index) => {
            return item.category == 'breakfast'
        })
        changeFilterData(filter)
    }
    const reset = () => {
        changeFilterData(menu)
    }
    return(
        <Fragment>
            <h1>Menu</h1>
            <button  onClick={reset}>all</button>
            <button  onClick={filterFood}>breakfast</button>
            <ul>{renderAll()}</ul>
        </Fragment>
    );
}