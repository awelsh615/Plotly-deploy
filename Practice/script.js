d3.selectAll("body").on("change", updatePage);

/*
the id of the dropdown menu selectOption, is assigned the varuable dropdownMenuID
when a dropdown menu option is selected, its value is assigned the variable selectedOption
each time updatePage is triggered, the id value and selectedOption are printed to the console
*/


function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value; 
  
  console.log(selectedOption);

};