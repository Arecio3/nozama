import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { useStateValue } from '../../Context/StateProvider';
import Order from '../order/Order';
import './orders.css'

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (user) {
            db
            // Accessing users collection
            .collection('users')
            // getting specific user
            .doc(user?.uid)
            //  Going into that users order db
            .collection('orders')
            // orders it by the most recent orders at the top and older orders descending 
            .orderBy('created', 'desc')
            // Gives us realtime response 
            .onSnapshot(snapshot => (
                // returns all orders as doc and maps over them and returns object
                // get Id of doc and store in a key
                // get data and put it in a key
                // set orders state to the array of objects 
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
        }, [user])
    return (
        <div className='orders'>
            <h1>Your Previous Orders</h1>

            <div className="ordersContainer">
                {orders?.map((order, i) => (
                    <Order order={order} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Orders
