/*


*/

var table = document.createElement('table');
table.classList.add('table');
//table.id="MyTable" here goes the CSS tbale design

var thead = document.createElement('thead');
var headRow = document.createElement('tr');

const temposVerbales=['Presente','Preterito Imperfeito'];
const pessoaGramatical=['eu', 'você / ele / ela','nós','vocês / eles / elas'];
var columnNames = ["Verbo", "Pers", 'PRESENTE',	'PRET PERFEITO','PRET IMPERFEITO',	'FUTURO DO PRESENTE',	'FUTURO DO PRETERITO'];
var tempCodes = ['prs','ptp','pti','fps','fpt']
var pessoaCodes =['1s','3s','1p','3p']


for (var i = 0; i < columnNames.length; i++) {
  var th = document.createElement('th');
  th.appendChild(document.createTextNode(columnNames[i]));
  headRow.appendChild(th);
}
num_verbos=verbosB.length

let verbos=[];
for(var i=0;i<verbosB.length;i++){
  var get_verbo_from_list=verbosB[i][Object.keys(verbosB[i])[0]];
  verbos.push(get_verbo_from_list)
console.log(verbos)
}

var numRows=pessoaGramatical.length*verbos.length

thead.appendChild(headRow);
var tbody = document.createElement('tbody');
for (var v = 0; v < verbos.length; v++) {
  for (var i = 0; i < pessoaGramatical.length; i++) {

    var tr = document.createElement('tr');

    for (var j = 0; j < columnNames.length; j++) {
      var td = document.createElement('td');

      if (j > 1) { //tempos cols
        td.classList.add("CellWithComment");
        var input = document.createElement('input');
        var span = document.createElement('span')
        input.type = "text";
        span.classList.add("CellComment0")
        td.appendChild(input);
        td.appendChild(span);
        tr.appendChild(td);
        input.id=verbos[v]+"_"+tempCodes[j-2]+'_'+pessoaCodes[i];
        input.size='10';
        span.id=verbos[v]+"_"+tempCodes[j-2]+'_'+pessoaCodes[i]+'_a';
        //input.class="search";
        //input.onkeypress='process(event, this)';
        input.onkeypress= new Function("return process(event, this)");
        continue;
      }
      if (j == 1) {
        td.appendChild(document.createTextNode(pessoaGramatical[i]));
      }
      if (j == 0) {
        td.appendChild(document.createTextNode(verbos[v]));
      }
    
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }
} 

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);


function search(ele) {
  if(event.key === 'Enter') {
      console.log(ele.value);        
  }
}

//another way of doing keylisten https://stackoverflow.com/questions/48485307/how-to-focus-on-next-input-box-after-pressing-enter-jquery
function process(e,obj) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 13) { //Enter keycode

    // contrast input vs correct
    //split verbo from obj.id 
    var split_str=obj.id.split("_");
    console.log(split_str);
    verbo_str=split_str[0];
    temp_pessoa=split_str[1]+"_"+split_str[2];
    console.log(verbo_str);

    var pppp= verbosB.find(c => c.verbo == verbo_str)

    var correctAns=pppp[temp_pessoa] //e.g. temp_pessoa is 'prs_1s'
    var typedAns=obj.value
    if(typedAns==correctAns){
      obj.style.backgroundColor='#90EE90';
      document.getElementById(obj.id+"_a").innerHTML='no deberia salir esto'
      document.getElementById(obj.id+"_a").classList.remove("CellComment1")
      document.getElementById(obj.id+"_a").classList.add("CellComment0") 
      
    }else{
      //alert("Wrong! the correct ans is : " + correctAns);
      obj.style.backgroundColor='yellow';
      document.getElementById(obj.id+"_a").innerHTML=correctAns
     // document.getElementById(obj.id+"_a").style.display="block" // how to change "hover" property here?
     document.getElementById(obj.id+"_a").classList.remove("CellComment0")
     document.getElementById(obj.id+"_a").classList.add("CellComment1") // how to change "hover" property here?
    }
   // $(this).next().find('input[type=text]').focus() //not working focus
  }
}

//pppp.pr1p = 'sou'

//TODO https://stackoverflow.com/questions/13845003/tooltips-for-cells-in-html-table-no-javascript
//implementation of table style
