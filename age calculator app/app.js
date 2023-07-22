let day_input = document.querySelector("#day_input")
let month_inputh = document.querySelector("#month_input")
let year_inputh = document.querySelector("#year_input")
let arrow = document.querySelector("#arrow")
let display = document.querySelector(".display")
let years = document.querySelector("#years")
let months = document.querySelector("#months")
let days = document.querySelector("#days")

arrow.addEventListener("click", function () {
    if (day_input.value > "0" && day_input.value < "32") {
       days.innerText = day_input.value
    }
    else{
        day_input.style.border = "2px solid red"
        day_input.value = "error"
        day_input.style.color = "red"
        days.innerText = "--"
    }
    if (month_inputh.value >0  && month_inputh.value < 13) {
        months.innerText = month_inputh.value
    }
    else{
        month_inputh.style.border = "2px solid red"
        month_inputh.value = "error"
        month_inputh.style.color = "red"
        months.innerText = "--"
    }
    if (year_inputh.value > "1909" && year_inputh.value < "2024") {
       years.innerText = 2023-Number(year_inputh.value)
       console.log(years);
    }
    else{
        year_inputh.style.border = "2px solid red"
        year_inputh.value = "error"
        year_inputh.style.color = "red"
        years.innerText = "--"
    }
})
