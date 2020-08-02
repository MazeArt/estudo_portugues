
var table = document.createElement('table');
table.classList.add('table');

var thead = document.createElement('thead');
var headRow = document.createElement('tr');

const temposVerbales=['Presente','Preterito Imperfeito'];
const pessoaGramatical=['eu', 'você / ele / ela','nós','vocês / eles / elas'];
const verbos=['ser'];
var columnNames = ["Verbo", "Pers", 'PRESENTE',	'PRET PERFEITO','PRET IMPERFEITO',	'FUTURO DO PRESENTE',	'FUTURO DO PRETERITO'];
var tempCodes = ['prs','ptp','pti','fps','fpt']
var pessoaCodes =['1s','3s','1p','3p']
 

for (var i = 0; i < columnNames.length; i++) {
  var th = document.createElement('th');
  th.appendChild(document.createTextNode(columnNames[i]));
  headRow.appendChild(th);
}

thead.appendChild(headRow);

var tbody = document.createElement('tbody');

var numRows=pessoaGramatical.length*verbos.length

for (var i = 0; i < numRows; i++) {

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
      input.id=tempCodes[j-2]+'_'+pessoaCodes[i];
      input.size='10';
      span.id=tempCodes[j-2]+'_'+pessoaCodes[i]+'_a';
      //input.class="search";
      //input.onkeypress='process(event, this)';
      input.onkeypress= new Function("return process(event, this)");
      continue;
    }
    if (j == 1) {
      td.appendChild(document.createTextNode(pessoaGramatical[i]));
    }
    if (j == 0) {
      td.appendChild(document.createTextNode("ser"));
    }
   
    tr.appendChild(td);
  }

  tbody.appendChild(tr);
}

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);



const ser=['']

let verbosA = [{verbo: 'ser',
  prs_1s: 'sou',
  prs_3s: 'é',
  prs_1p: 'somos',
  prs_3p: 'são',
  ptp_1s: 'fui',
  ptp_3s: 'foi',
  ptp_1p: 'fomos',
  ptp_3p: 'foram',
  pti_1s: 'era',
  pti_3s: 'era',
  pti_1p: 'éramos',
  pti_3p: 'eram',
  fps_1s: 'serei',
  fps_3s: 'será',
  fps_1p: 'seremos',
  fps_3p: 'serão',
  fpt_1s: 'seria',
  fpt_3s: 'seria',
  fpt_1p: 'seríamos',
  fpt_3p: 'seriam'
}];


let customers = [{
  name: 'ABC Inc',
  credit: 100
}, {
  name: 'ACME Corp',
  credit: 200
}, {
  name: 'IoT AG',
  credit: 300
}];

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
    //add verbo to obj.id search
    var correctAns=pppp[obj.id] //e.g. obj.id is 'prs_1s'
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
    $(this).next().find('input[type=text]').focus()
  }
}

var pppp= verbosA.find(c => c.verbo =='ser')
//pppp.pr1p = 'sou'