var cnum = 1;
function add_items(Num)
{
	var div_element = document.createElement("div");
	div_element.innerHTML = '' +
	'<div id="Item'+ Num +'" style="text-align:right">' +
		'<div class="col-sm-6" >' +
			'<input type="text" class="form-control" placeholder="Item">' +
		'</div>' +
		'<div class="col-sm-6" id="Item'+ Num +'">' + 
			'<input type="text" class="form-control" placeholder="Contents">' +
		'</div>' +
		'<button type="button" class="btn btn-small btn-default" onclick="del_items('+ Num +')">delete</button>' +
	'</div>';
	var parent_object = document.getElementById("Items"+Num);
	parent_object.appendChild(div_element);
}

function del_items(Num)
{
	$('#Item' + Num ).remove();
}

function add_cate()
{
	cnum = cnum + 1;
	var div_element = document.createElement("div");
	div_element.innerHTML = '' +
	'<div class="well">' +
		'<div class="form-group">' +
			'<label>Sub Category</label>' +
			'<input class="form-control" placeholder="ex.) blood test" type="text">' +
		'</div>' +
		'<div class="col-md-12" style="margin: 3px;" id="Items'+ cnum + '">' +
			'<div class="col-sm-6">' +
				'<input type="text" class="form-control" placeholder="Item">' +
			'</div>' +
			'<div class="col-sm-6">' +
				'<input type="text" class="form-control" placeholder="Contents">' +
			'</div>' +
		'</div>' +
		'<div class="form-block" style="text-align: center; margin-top: 5px;">' +
			'<button type="button" class="btn btn-small btn-default" onclick="add_items('+ cnum + ');">add item</button>' +
		'</div>' +
	'</div>';
	var parent_object = document.getElementById("subcate");
	parent_object.appendChild(div_element);
}