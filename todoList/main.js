$(document).ready(init);

function init(){
  // renderNames(names);//re-render the DOM

  $('.addTodos').on('click',addList);
  $('.appendItHere').on('click', 'th.delete', deleteName);
  $('.appendItHere').on('click','th.done', addCheck);
  var names = getNames();  // read and parse
  renderNames(names);

}

function addCheck(event){
  console.log("clicked");


  var index = $(this).parent().index();
// //   //
  var names = getNames();
  console.log(names.doneD);
  console.log(names[index]);
  // console.log(names.doneD);
// //   //
//   names.splice(index, 1);
// //   //
//   writeNames(names);  // stringify, write
//   $('tbody.appendItHere').empty()
//   renderNames(names); // re-render DOM
//
//   console.log($(this).prop);
}

function deleteName(event){
//   // console.log($(this).index());
  console.log("clicked");
  console.log($(this).parent());

//   // console.log($(this).index());
//
//   //
//   //   var name = $(this).text();
    var index = $(this).parent().index();
//   //
    var names = getNames();
//   //
    names.splice(index, 1);
//   //
    writeNames(names);  // stringify, write
    $('tbody.appendItHere').empty()
    renderNames(names); // re-render DOM
}

function addList(){
$('tbody.appendItHere').empty()

  var $inputName = $('#name');
  var name = $inputName.val();

  var $inputDueDate = $('#dueDate');
  var dueDate = $inputDueDate.val();
  var doneD = $('.checkBox').attr("");
  // console.log($done.attr());

  var names = getNames();
  names.push({name:name,dueDate:dueDate,done:doneD})

  writeNames(names);//stringify,write
  renderNames(names);//re-render the DOM

}

function getNames() {
  // retrieve array from localStorage
  var str = localStorage.names;
  try {
    // 'risky' code
    var names = JSON.parse(str);
  } catch(err) {
    // runs if the try block throws an error
    var names = [];
  }
  return names;
}

function writeNames(names) {
  // stringify array, and write to storage
  var namesStr = JSON.stringify(names);
  localStorage.names = namesStr;
}

function renderNames(names) {
  // console.log(names);
  // input array of names
  // create element for each name
  // empty the list
  // append elements to list
console.log(names);
    var $trs = names.map(name =>{
       var $tr = $('.theRow').clone();
       $tr.removeClass("theRow")
      //  console.log('$tr', $tr);
       $tr.find('.desc').text(name.name);
      //  console.log('here', $tr.find('.desc').text());
       $tr.find('.date').text(name.dueDate);
      //  $tr.find('.done>input').attr('checked', 'checked');
      //  console.log($tr);
      // console.log(name.doneD.attr);
      // $tr.find('.done').attr(name.doneD);
       return $tr;
     });

  // var $lis = names.map(name => {
  //   var $li = $('.template').clone();
  //   $li.removeClass('template');
  //   $li.find('.name').text(name);
  //
  //   return $li;
  // });
  // console.log($('tbody.appendItHere'));
  // debugger
  $('tbody.appendItHere').empty().append($trs);
}
