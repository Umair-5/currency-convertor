const countryList = {
    USD: "US",
    EUR: "EU",
    JPY: "JP",
    CZK: "CZ",
    BGN: "BG",
    DKK: "DK",
    GBP: "GB",
    HUF: "HU",
    PLN: "PL",
    RON: "RO",
    SEK: "SE",
    CHF: "CH",
    ISK: "IS",
    NOK: "NO",
    HRK: "HR",
    RUB: "RU",
    TRY: "TR",
    AUD: "AU",
    BRL: "BR",
    CAD: "CA",
    CNY: "CN",
    HKD: "HK",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    KRW: "KR",
    MXN: "MX",
    MYR: "MY",
    NZD: "NZ",
    PHP: "PH",
    SGD: "SG",
    THB: "TH",
    ZAR: "ZA"
};
for (const key in countryList) {
    const select = document.getElementById("selector2");
    const option = document.createElement("option")
    option.innerText = key
    select.appendChild(option)
    const select2 = document.getElementById("selector");
    const option2 = document.createElement("option")
    option2.innerText = key
    select2.appendChild(option2)
}
function flag() {
    const selector1 = document.getElementById("selector");
    const selector2 = document.getElementById("selector2");
    const selectedCurrency1 = selector1.value;
    const selectedCurrency2 = selector2.value;
    const country_code1 = countryList[selectedCurrency1];
    const country_code2 = countryList[selectedCurrency2];
    const newFlagURL1 = `https://flagsapi.com/${country_code1}/flat/32.png`;
    const newFlagURL2 = `https://flagsapi.com/${country_code2}/flat/32.png`;
    const flagImgs = document.getElementsByClassName("flag-img");
    flagImgs[0].setAttribute("src", newFlagURL1);
    flagImgs[1].setAttribute("src", newFlagURL2);
}
async function convert() {
    let amount = document.getElementById("amount").value
    const baseurl = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_58wDFv6dwuOqCbxYE9tBRfhaX2vJwZBA3mnqUoZE"
    const currencies = document.getElementById("selector2").value;
    const base_currency = document.getElementById("selector").value;
    const url = `${baseurl}&currencies=${currencies}&base_currency=${base_currency}`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data.data[currencies];
    let inp2 = document.getElementById("inp2");
    if(amount<1 ){
        amount=1 
        inp2.value = (1 * rate).toFixed(4)
        document.getElementById("amount").value=1
    }
    inp2.value = (amount * rate).toFixed(4)
    document.getElementById("exchangeRate").innerText = "* 1 " + base_currency + " = " + rate.toFixed(4) + " " + currencies;

}


function darkmode() {
    let checkbox = document.getElementById("checkbox");
    if (checkbox.checked) {
        document.body.classList.add("dark");
        document.getElementById("sun").style.display = "unset";
        document.getElementById("moon").style.display = "none";

    }
    else {
        document.body.classList.remove("dark");
        document.getElementById("sun").style.display = "none";
        document.getElementById("moon").style.display = "unset";

    }
}
darkmode()

let swap =  ()=>{
    const selector1 = document.getElementById("selector");
    const selector2 = document.getElementById("selector2");
    const selectedCurrency1 = selector1.value;
    const selectedCurrency2 = selector2.value;
    selector1.value = selectedCurrency2;
    selector2.value = selectedCurrency1;
    flag()
}