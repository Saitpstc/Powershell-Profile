const axios = require('axios');

async function fetchBTCPrice() {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const btcPrice = response.data.bitcoin.usd;
    return btcPrice;
}

async function fetchUSDTRYRate() {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    const usdtryRate = response.data.rates.TRY;
    return usdtryRate;
}


var Table = require('cli-table3');

// instantiate
var table = new Table({

     colWidths: [10, 10]
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends



/*
function formatOutput(btcPrice, usdtryRate) {
    console.log('-------------------------');
    console.log('    BTC Price & USD/TRY   ');
    console.log('-------------------------');
    console.log('BTC Price: $' + btcPrice);
    console.log('-------------------------');
}
*/

async function run() {
    try {
        const btcPrice = await fetchBTCPrice();
        const usdtryRate = await fetchUSDTRYRate();
        table.push(
            ['\x1b[35mBTC/USD\x1b[0m', `\x1b[35m${btcPrice}\x1b[0m`]
            , ['\x1b[35mUSD/TRY\x1b[0m', `\x1b[35m${usdtryRate}\x1b[0m`]
        );
        console.log(table.toString());
    } catch (error) {
        console.log('An error occurred:', error.message);
    }
}


run();