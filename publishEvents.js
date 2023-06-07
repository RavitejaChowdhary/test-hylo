let par = document.getElementById("sel1");
par.addEventListener("click", create(), { once: true });
function create() {

    fetch('http://localhost:8080/venues')
        .then(x => x.json())
        .then(y => {
            console.log(y);
            for (var i = 0; i < y.length; i++) {
                var opo = document.createElement("option");
                opo.text = y[i].name + " " + y[i].city + " " + y[i].pincode + " " + y[i].state + " " + y[i].country;
                opo.value = y[i].id;
                par.appendChild(opo);
            }
        });

}
