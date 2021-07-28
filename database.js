const db = [
    {
        phoneNumber: process.env.MY_PHONE_NUMBER,
        orderStatus: 'Out For Delivery',
        deliveryDate: '5th September at 2pm',
        orderItem: 'Twilio Red Sneakers',
        orderNumber: 123456
    },
    {
        phoneNumber: process.env.MY_PHONE_NUMBER,
        orderStatus: 'Will be Dispatched Shortly',
        deliveryDate: '1st January at 2pm',
        orderItem: 'Twilio Black',
        orderNumber: 654321
    }
]


function getOrderByPhoneNumber(number) {
    return db.find(order => order.phoneNumber === number);
}

exports.getOrderByPhoneNumber = getOrderByPhoneNumber

function getOrderByOrderNumber(number) {
    return db.find(order => order.orderNumber === number);
}

exports.getOrderByOrderNumber = getOrderByOrderNumber
