import React from 'react';
import { orderSet } from '../../utilitis/orderSet';

const Card = (props) => {
    console.log(props)
    const addToCard = (name)=>{
        orderSet(name)
    }
    // console.log(props.name)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={props.img} alt="Shoes" className="rounded-xl" />
                </figure>

                <div className="card-body items-center text-center h-64 overflow-scroll overflow-x-hidden">
                    <h2 className="card-title">{props.name}</h2>
                    <p>{props.description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={()=>addToCard(props.name)}>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;