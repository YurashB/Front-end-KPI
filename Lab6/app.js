let contentElement = document.getElementById("content");
let rowContentElement = contentElement.children[0];
let dataCount = 5;

fetch(`https://randomuser.me/api/?results=${dataCount}`)
    .then(response => response.json())
    .then(respData => respData.results)
    .then(results => {
        let personsData = []

        results.forEach(person => {
            personsData.push({
                name: person.name.title + " " + person.name.first + " " + person.name.last,
                picture: person.picture.large,
                country: person.location.country,
                coordinates: person.location.coordinates.latitude + " " + person.location.coordinates.longitude,
                email: person.email,
                cell: person.cell
            })
        })

        return personsData;
    }).then(persons => reloadContentPage(rowContentElement, persons))

function reloadContentPage(element, data) {
    element.innerHTML = "";

    data.forEach(person => {
        console.log(getCardHTML(person))
        element.innerHTML += getCardHTML(person)
    })
}

function getCardHTML(person) {
    return `<div class="col mb-sm-3">
                <div class="card">
                    <img src="${person.picture}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${person.name}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Email: ${person.email}</li>
                            <li class="list-group-item">Country: ${person.country}</li>
                            <li class="list-group-item">Coordinates: ${person.coordinates}</li>
                            <li class="list-group-item">Cell: ${person.cell}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}