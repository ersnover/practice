let btnSave = document.getElementById('save')
let cityText = document.getElementById('cityBox')
let cityPic = document.getElementById('picBox')
let vacationListDiv = document.getElementById('vacationListDiv')

btnSave.addEventListener("click", function() {
    let city = cityText.value   //use anonymous function because only called on button click
    let cityImageURL = cityPic.value

    let vacationDiv = document.createElement("div")             //create vacation div

    let vacationTitleSpan = document.createElement("span")      // create title span
    vacationTitleSpan.innerHTML = city                          // set html text

    let vacationCityImage = document.createElement("img")       // create image tag
    vacationCityImage.src = cityImageURL                        // set attribute "src="
    vacationCityImage.className = "vacation-image"          // add class (set styles in css code)

    vacationDiv.appendChild(vacationTitleSpan)              //add span and img to div container
    vacationDiv.appendChild(vacationCityImage)


    vacationListDiv.appendChild(vacationDiv)
})