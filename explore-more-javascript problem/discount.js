// 1. if ticket number is less than 100, per ticket price :100;
// 2. if ticket number is more than 100 but less than 200, First 100 tickets will be 100/tickets and rest ticket will be 90tk/ ticket
// 3. if ticket number is more than 200, first 100 will be 100tk/ticket and last 100 will be 90tk/ticket and 200+ ticket price will be 70tk/ ticket

function totalTicketPrice(ticketQuantity){
    
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
//    else if(ticketQuantity <= 200){
//     const price = ticketQuantity * second100Rate;
//     return price;
//    } 
//    else if ( ticketQuantity <= 300){
//     const price = ticketQuantity * restTicketPrice;
//     return price;
//    }
}
const ticketPrice = totalTicketPrice(220);
console.log(ticketPrice);