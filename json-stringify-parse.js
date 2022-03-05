
// JSON stringify, parse

const shop = {
    name: 'lala shop',
    address: 'lalaBazar',
    profit: 4500,
    product: ['laptop', 'phone'],
    owner: {
        name: 'alia bhutt',
        professon: 'actor'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
const convert = JSON.parse(shopStringified);
console.log(convert);