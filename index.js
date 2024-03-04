const data = [
    { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];
let searchElem = document.querySelector("#search");
let datas = document.getElementById("datas");
let notFoundImg = document.querySelector(".notFound");
const nameCol = document.getElementById("nameColumn")
const tickCol = document.getElementById("tickColumn")
tableRender(data);
function tableRender(arr) {
    datas.innerHTML = "";
    arr.forEach(item => {
        let changeNum = Number(item.change.slice(0, -1))
        datas.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.ticker}</td>
            <td>${item.value}</td>
            <td style="${changeNum < 0 ? "color:red" : "color:green"}">${item.change}</td>
        </tr>`
    }
    );
}

searchElem.addEventListener("keyup", (e) => {
    let inputValue = e.target.value.trim().toLowerCase();
    let filteredData = data.filter(item => {
        let name = item.name.toLowerCase();
        let ticker = item.ticker.toLowerCase();
        let value = item.value;
        if (name.includes(inputValue) || ticker.includes(inputValue) || value.includes(inputValue)) {
            return item;
        }
    })
    if (filteredData.length) {
        notFoundImg.style.display = "none"
    } else {
        notFoundImg.style.display = "block"
    }
    tableRender(filteredData);
})
let sorted = false;
nameCol.addEventListener("click", () => {
    if (!sorted) {
        data.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        sorted = true;
    } else {
        data.sort((a, b) => {
            return b.name.localeCompare(a.name)
        })
        sorted = false;
    }
    tableRender(data)
});
tickCol.addEventListener("click", () => {
    if (!sorted) {
        data.sort((a, b) => {
            return a.ticker.localeCompare(b.ticker)
        })
        sorted = true;
    } else {
        data.sort((a, b) => {
            return b.ticker.localeCompare(a.ticker)
        })
        sorted = false;
    }
    tableRender(data)
})