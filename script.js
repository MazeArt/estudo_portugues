
var table = document.createElement('table');
table.classList.add('table');

var thead = document.createElement('thead');
var headRow = document.createElement('tr');
var columnNames = ["Verbo", "Pers", "Presente", "Pret Imperfeito"];

for (var i = 0; i < 4; i++) {
  var th = document.createElement('th');
  th.appendChild(document.createTextNode(columnNames[i]));
  headRow.appendChild(th);
}

thead.appendChild(headRow);

var tbody = document.createElement('tbody');

for (var i = 0; i < 10; i++) {
  var tr = document.createElement('tr');

  for (var j = 0; j < 4; j++) {
    var td = document.createElement('td');

    if (j > 1) {
      td.classList.add("input");
      var input = document.createElement('input');
      input.type = "text";
      td.appendChild(input);
      tr.appendChild(td);
      input.id=i+'_'+j
      continue;
    }
    td.appendChild(document.createTextNode("x"));
    tr.appendChild(td);
  }

  tbody.appendChild(tr);
}

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);