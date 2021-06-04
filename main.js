var form = [];


var n = 1;
var x = 0;

function AddRow(event) {
    event.preventDefault()
    var AddRow = document.querySelector('#table').getElementsByTagName('tbody')[0];
    var NewRow = AddRow.insertRow('');

    let formData = {}
    formData.name = document.getElementById("pName").value;
    formData.link = document.getElementById("pLink").value;

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);

    cel1.innerHTML = formData.name;
    cel2.innerHTML = formData.link;

    n++;
    x++;

}