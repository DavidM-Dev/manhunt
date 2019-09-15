
function gotDataDisplayQuizzes(data) {
    var table = document.getElementById("scoreboardTable");
    var data = data.val();

    for (var i in data) {

/*        var buttonnode= document.createElement('input');
        buttonnode.setAttribute('type','button');
        buttonnode.setAttribute('class', 'btn btn-light btn-sm');
        buttonnode.setAttribute('value','GO');
        buttonnode.setAttribute('onClick', "initializeQuiz(this.parentNode)");*/

        var row = table.insertRow(1);
        row.insertCell(0).innerHTML = i;
        row.insertCell(1).innerHTML = data[i].author;
        row.appendChild(buttonnode);
    }

}