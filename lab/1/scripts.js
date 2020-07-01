let converter = document.getElementById("converter")

converter.addEventListener("click", convertToVnd)

function getCurrency() {
    var radios = document.getElementsByName('currency');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            return radios[i].value;
        }
    }
}

function convertToVnd() {
    callApi(getCurrency())
    let amount = parseFloat(document.getElementById("amount").value)
    console.log(amount)
}

function callApi(currency) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://free.currconv.com/api/v7/convert?q=" + currency + "_VND&compact=ultra&apiKey=550d0f8189464b0e1611");
    xhr.onload = function () {
        if (xhr.status === 200) {
            data = currency + "_VND"
            console.log(JSON.parse(xhr.responseText)[data])
            updateResults(JSON.parse(xhr.responseText)[data]);
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}

function updateResults(response) {
    let result = document.getElementById("result")
    result.innerHTML = response
}