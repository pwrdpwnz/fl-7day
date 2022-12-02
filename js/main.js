function getAction(){
	var from_select = document.getElementById("from-code").innerHTML;
	var from_to  = document.getElementById("to-code").innerHTML;
	var input_from = parseFloat(document.getElementById("out-price").value.replace(/,/, '.'));
	var input_to = parseFloat(document.getElementById("in-price").value.replace(/,/, '.'));
	var to_json = JSON.stringify([from_select,from_to,input_from,input_to]);

	$.ajax({
		type:'POST',
		url:'/api/getCurrency',
		data:{'transaction':to_json},
		success:(data)=>{
				document.getElementById("in-price").value = data;
				if(data != ""){
					document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("price")[0].innerHTML = data;
				}
				if(document.getElementById("out-price").value != ""){
					document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("price")[0].innerHTML = document.getElementById("out-price").value;
				}



				document.getElementById("exc_input_from").value = parseFloat(document.getElementById("out-price").value.replace(/,/, '.'))
				document.getElementById("exc_input_to").value = data;

				document.getElementById("exc_from_select").value = document.getElementById("from-code").innerHTML;
				document.getElementById("exc_from_to").value = document.getElementById("to-code").innerHTML;


				document.getElementById("exc_input_from_main").value = document.getElementById("step-chage-inde1").getElementsByClassName("name")[0].innerHTML;
				document.getElementById("exc_input_to_main").value = document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML;

				document.getElementById("exc_img_select").value = document.getElementById("step-chage-val-inde1").querySelector(".img img").src;
				document.getElementById("exc_img_to").value = document.getElementById("step-chage-val-inde2").querySelector(".img img").src;



		}
	});

}
try{
function error_enable(){

	document.getElementsByClassName("js_account1_error")[0].innerHTML = "";
document.getElementsByClassName("js_account2_error")[0].innerHTML = "";
document.getElementsByClassName("js_account3_error")[0].innerHTML = "";
document.getElementsByClassName("js_account4_error")[0].innerHTML = "";
document.getElementsByClassName("js_account5_error")[0].innerHTML = "";
document.getElementsByClassName("js_account6_error")[0].innerHTML = "";
document.getElementsByClassName("js_cf12_error")[0].innerHTML = "";
document.getElementsByClassName("js_cf6_error")[0].innerHTML = "";
document.getElementsByClassName("js_cf4_error")[0].innerHTML = "";


document.getElementById("account1").style.display = "none";
	document.getElementById("account2").style.display = "none";
	document.getElementById("account3").style.display = "none";
	document.getElementById("account4").style.display = "none";
	document.getElementById("account5").style.display = "none";
	document.getElementById("account6").style.display = "none";

	document.getElementById("name-input").style.display = "none";
	document.getElementById("tel-input").style.display = "none";

	}



	function no_active_right(){
	var right_item_razd = document.getElementsByClassName("js_item_right_redz");
	for(var t=0;t<right_item_razd.length;t++){
		right_item_razd[t].style.display = "flex"
		if(right_item_razd[t].classList.contains('active')){
			right_item_razd[t].classList.remove("active");
		}
	}
		var js_icon_right_redz = document.getElementsByClassName("js_icon_right_redz");
		for(var t1=0;t1<js_icon_right_redz.length;t1++){
			js_icon_right_redz[t1].style.display = "block";
		}

}
	}catch{}



function no_active_left(){
	try{
		var left_item_razd1 = document.getElementsByClassName("js_item_left_redz");

	for(let i__=0;i__<left_item_razd1.length;i__++){
		if(left_item_razd1[i__].classList.contains('active')){
			left_item_razd1[i__].classList.remove("active");
		}
	}

	}
	catch{}

}
function remove_left_item(item, left_or_right){
	try{
	var left_item = document.getElementsByClassName(left_or_right);
	console.log(item);
	for(var y=0;y<left_item.length;y++){
		if(left_item[y].dataset.type != item){
			console.log(item+"--"+left_item[y].dataset.realType)
			left_item[y].style.display = "none";
		}
	}
	}catch(e){
		console.log(e);
	}

}




function add_metka_right(){
	var right_item = document.getElementsByClassName("js_item_right_redz");
	for(var b=0;b<right_item.length;b++){
		if(right_item[b].style.display == "flex"){
			right_item[b].dataset.metka = "1";
		}
	}
}
setTimeout(function(){
try{
document.getElementById("reg").onclick = function(){
var email = document.getElementById('email-reg').value;
var name = document.getElementById('name-reg').value;
var pass = document.getElementById('password-reg').value;
var pass_more = document.getElementById('password-more-reg').value;
if(document.getElementById('check_rule').checked == true){
	var check = 1;
}else{
	var check = 0;
}
$.ajax({
			type:'POST',
			url:'/php/action.php',
			data:{'email':email,'pass':pass,'pass_more':pass_more,'reg':"yes", "name":name, "check":check},
			success:(data)=>{
				console.log(data);
				json_decode = JSON.parse(data);
				document.getElementById("email-reg").style = "border:none;";
				document.getElementById("password-reg").style = "border:none;";
				document.getElementById("password-more-reg").style = "border:none;";
				document.getElementById("name-reg").style = "border:none;";
				document.getElementById("error-reg-1").style.display = "none";
				document.getElementById("error-reg-2").style.display = "none";
				document.getElementById("error-reg-3").style.display = "none";
				document.getElementById("error-reg-5").style.display = "none";
				document.getElementById("error-reg-6").style.display = "none";
					for(let i=0; i< json_decode.length;i++){
						if(json_decode[i] == 1){
							document.getElementById("email-reg").style = "border:1px solid red;";
							document.getElementById("error-reg-1").style.display = "block";
						}
						if(json_decode[i] == 2){
							document.getElementById("password-reg").style = "border:1px solid red;";
							document.getElementById("error-reg-2").style.display = "block";
						}
						if(json_decode[i] == 3){
							document.getElementById("password-more-reg").style = "border:1px solid red;";
							document.getElementById("error-reg-3").style.display = "block";
						}
						if(json_decode[i] == 4){
							document.getElementById("password-reg").style = "border:1px solid red;";
							document.getElementById("error-reg-4").style.display = "block";
						}
						if(json_decode[i] == 5){
							document.getElementById("name-reg").style = "border:1px solid red;";
							document.getElementById("error-reg-5").style.display = "block";
						}
						if(json_decode[i] == 6){
							document.getElementById("error-reg-6").style.display = "block";
						}
						if(json_decode[i] == 0){
							document.getElementsByClassName("resultfalse")[1].style.display = "block";
							setTimeout(function(){
								location.reload();
							},2000)
						}
					}

			}
		});


}
}catch{

}
try{
document.getElementById("auth").onclick = function(){
var email = document.getElementById('email-auth').value;
var pass = document.getElementById('password-auth').value;
$.ajax({
			type:'POST',
			url:'/php/action.php',
			data:{'email':email,'pass':pass,'auth':"auth"},
			success:(data)=>{
				console.log(data);
				if(data == 1){
					document.getElementsByClassName("resultfalse")[0].style.display = "block";
					document.getElementById("email-auth").style = "border:1px solid red;";
					document.getElementById("password-auth").style = "border:1px solid red;";
				}else{
					document.getElementsByClassName("resultfalse")[0].style.display = "none";
					document.getElementById("email-auth").style = "border:none";
					document.getElementById("password-auth").style = "border:none;";
					setTimeout(function(){
						location.reload();
					},2000)

				}
			}
		});


}
}catch{}

try {
document.getElementById("remind").onclick = function(){
var email = document.getElementById('remind-email').value;
$.ajax({
			type:'POST',
			url:'/php/action.php',
			data:{'email':email,'remind':"remind"},
			success:(data)=>{
				console.log(data);
				if(data == 1){
					document.getElementById("error-remind-1").style.display = "block";
					document.getElementById("remind-email").style = "border:1px solid red;";
					document.getElementById("error-remind-2").style.display = "none";
				}
				else if(data == 2){
					document.getElementById("error-remind-2").style.display = "block";
					document.getElementById("remind-email").style = "border:1px solid red;";
					document.getElementById("error-remind-1").style.display = "none";
				}
				else{
					document.getElementById("error-remind-1").style.display = "none";
					document.getElementById("error-remind-2").style.display = "none";
					document.getElementById("remind-email").style = "border:1px solid black;";
					document.getElementById("success-remind").style.display = "block";
					setTimeout(function(){
						location.reload();
					},2000)

				}
			}
		});
}


}catch{}
try{
document.getElementById("change-pass").onclick = function(){
var old_pass = document.getElementById('change-old-pass').value;
var new_pass = document.getElementById('change-new-pass').value;
var new_more_pass = document.getElementById('change-new-more-pass').value;
$.ajax({
			type:'POST',
			url:'/php/action.php',
			data:{'old_pass':old_pass,'new_pass':new_pass,'new_more_pass':new_more_pass,'change':"change"},
			success:(data)=>{
				console.log(data);

				if(data == 1){
					document.getElementById("error-change-1").style.display = "block";
					document.getElementById("change-old-pass").style = "border:1px solid red;";
					document.getElementById("change-new-more-pass").style = "border:1px solid black;";
					document.getElementById("change-new-pass").style = "border:1px solid black;";
					document.getElementById("error-change-2").style.display = "none";
					document.getElementById("error-change-3").style.display = "none";
				}
				else if(data == 2){
					document.getElementById("error-change-2").style.display = "block";
					document.getElementById("change-new-pass").style = "border:1px solid red;";
					document.getElementById("change-new-more-pass").style = "border:1px solid red;";
					document.getElementById("change-old-pass").style = "border:1px solid black;";
					document.getElementById("error-change-1").style.display = "none";
					document.getElementById("error-change-3").style.display = "none";
				}
				else if(data == 3){
					document.getElementById("error-change-3").style.display = "block";
					document.getElementById("change-new-pass").style = "border:1px solid red;";
					document.getElementById("change-new-more-pass").style = "border:1px solid red;";
					document.getElementById("change-new-pass").style = "border:1px solid black;";
					document.getElementById("change-new-more-pass").style = "border:1px solid black;";
					document.getElementById("error-change-1").style.display = "none";
					document.getElementById("error-change-2").style.display = "none";
				}
				else{
					document.getElementById("error-change-1").style.display = "none";
					document.getElementById("error-change-2").style.display = "none";
					document.getElementById("error-change-3").style.display = "none";
					document.getElementById("change-old-pass").style = "border:1px solid black;";
					document.getElementById("change-new-pass").style = "border:1px solid black;";
					document.getElementById("change-new-more-pass").style = "border:1px solid black;";
					document.getElementById("success-change").style.display = "block";
					setTimeout(function(){
						location.reload();
					},2000)

				}
			}
		});


}
}catch{}
try{
document.getElementById("logout_account").onclick = function(){
var logout = "logout;"
$.ajax({
			type:'POST',
			url:'/php/action.php',
			data:{'logout':logout},
			success:(data)=>{
				setTimeout(function(){
					location.reload();
				},2000)
			}
		});
}

}catch{}

try{
document.getElementById("feedback-butt").onclick = function(){
var name = document.getElementById("feedback-name");
var email = document.getElementById("feedback-email");
var text_ = document.getElementById("feedback-text");
var check = document.getElementById("tpd").checked;
var true_ = 1;

document.getElementsByClassName("feedback_errors")[0].style.display = "none";
document.getElementsByClassName("feedback_errors")[1].style.display = "none";
document.getElementsByClassName("feedback_errors")[2].style.display = "none";
document.getElementsByClassName("feedback_errors")[3].style.display = "none";

name.style.border = "none";
email.style.border = "none";
text_.style.border = "none";

if(!name.value){
	document.getElementsByClassName("feedback_errors")[0].style.display = "block";
	name.style.border = "1px solid red";
	true_ = 0;
}
if(!email.value){
	document.getElementsByClassName("feedback_errors")[1].style.display = "block";
	email.style.border = "1px solid red";
	true_ = 0;
}
if(!text_.value){
	document.getElementsByClassName("feedback_errors")[2].style.display = "block";
	text_.style.border = "1px solid red";
	true_ = 0;
}
if(check == false){
	document.getElementsByClassName("feedback_errors")[3].style.display = "block";
	check.style.border = "1px solid red";
	true_ = 0;
}
if(true_ == 1){
	document.getElementById("feedback_true").style.display = "block";

}
}
}
catch{

}

var left_item_razd = document.getElementsByClassName("js_item_left_redz");
for(let i=0;i<left_item_razd.length;i++){
left_item_razd[i].onclick = function(){
	for(let i_=0;i_<left_item_razd.length;i_++){
		if(left_item_razd[i_].classList.contains('active')){
			left_item_razd[i_].classList.remove("active");
		}
	}
	error_enable();
	no_active_left();
	no_active_right();

	this.classList.add("active");
	document.getElementById("step-chage-val-inde1").getElementsByClassName("label")[0].innerHTML = this.dataset.name;
	document.getElementById("step-chage-val-inde1").querySelector(".img img").src = this.dataset.img;
	document.getElementById("from-code").innerHTML = this.dataset.realType;


	document.getElementById("step-chage-inde1").getElementsByClassName("name")[0].innerHTML = this.dataset.name;
	document.getElementById("step-chage-inde1").querySelector(".icon img").src = this.dataset.img;
	document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = this.dataset.realType;
	document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("price")[0].innerHTML = this.dataset.min;

		document.getElementById("out-price").value = this.dataset.min;
		if(this.dataset.name == "Advcash RUB" || this.dataset.name == "Advcash USD"){
			document.getElementById("btc").style.display = "none";
			document.getElementById("eth").style.display = "none";
			document.getElementById("teather_erc20_usdt").style.display = "none";
			document.getElementById("teather_erc20_usdt1").style.display = "none";
			document.getElementById("ada").style.display = "none";
			document.getElementById("dash").style.display = "none";
			document.getElementById("doge").style.display = "none";
			document.getElementById("bnb").style.display = "none";
			document.getElementById("eth_clasic").style.display = "none";
			document.getElementById("ltc").style.display = "none";
			document.getElementById("monero").style.display = "none";
			document.getElementById("xrp").style.display = "none";
			document.getElementById("trx").style.display = "none";
			document.getElementById("tusd").style.display = "none";
			document.getElementById("zec").style.display = "none";
			document.getElementById("advcash_rub").style.display = "none";
			document.getElementById("tks_qr_code").style.display = "none";
			document.getElementById("all_bank_rub").style.display = "none";
			document.getElementById("gazprombank_rub").style.display = "none";
			document.getElementById("otkritie_rub").style.display = "none";
			document.getElementById("pochta_bank_rub").style.display = "none";
			document.getElementById("promcvyaz_rub").style.display = "none";
			document.getElementById("rayvazen_rub").style.display = "none";
			document.getElementById("yandex_rub").style.display = "none";
			document.getElementById("advacash_usd").style.display = "none";

			document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = document.getElementById("sberbank_rub").dataset.name;
			document.getElementById("step-chage-val-inde2").querySelector(".img img").src = document.getElementById("sberbank_rub").dataset.img;
			document.getElementById("to-code").innerHTML = document.getElementById("sberbank_rub").dataset.realType;

			document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = document.getElementById("sberbank_rub").dataset.name;
			document.getElementById("step-chage-inde2").querySelector(".icon img").src = document.getElementById("sberbank_rub").dataset.img;
			document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("sberbank_rub").dataset.realType;
			document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = document.getElementById("sberbank_rub").dataset.rezerv;

			document.getElementById("sberbank_rub").classList.add("active");

			document.getElementsByClassName("js_icon_right_redz")[2].style.display = "none";
			document.getElementsByClassName("js_icon_right_redz")[3].style.display = "none";



			document.getElementById("type-exc").value = "2";


			document.getElementById("name-input").style.display = "block";
			document.getElementById("tel-input").style.display = "block";

			document.getElementById("account1").style.display = "block";
			document.getElementById("account2").style.display = "block";
		}
		if(this.dataset.name == "Сбербанк RUB" || this.dataset.name == "Альфа-банк RUB" || this.dataset.name == "Тинькофф RUB" || this.dataset.name == "ВТБ RUB" || this.dataset.name == "Visa/MasterCard RUB" || this.dataset.name == "Любой банк RUB" || this.dataset.name == "Газпромбанк RUB" || this.dataset.name == "Открытие RUB" || this.dataset.name == "Почта Банк RUB" || this.dataset.name == "Промсвязьбанк RUB" || this.dataset.name == "Райффайзен RUB"){
			document.getElementById("tusd").style.display = "none";
			document.getElementById("alfabank_rub").style.display = "none";
			document.getElementById("tinkof_rub").style.display = "none";
			document.getElementById("tks_qr_code").style.display = "none";
			document.getElementById("vtb_rub").style.display = "none";
			document.getElementById("visa_rub").style.display = "none";
			document.getElementById("all_bank_rub").style.display = "none";
			document.getElementById("gazprombank_rub").style.display = "none";
			document.getElementById("otkritie_rub").style.display = "none";
			document.getElementById("pochta_bank_rub").style.display = "none";
			document.getElementById("promcvyaz_rub").style.display = "none";
			document.getElementById("rayvazen_rub").style.display = "none";
			document.getElementById("yandex_rub").style.display = "none";

			if(this.dataset.name == "Любой банк RUB" || this.dataset.name == "Газпромбанк RUB" || this.dataset.name == "Открытие RUB" || this.dataset.name == "Почта Банк RUB" || this.dataset.name == "Промсвязьбанк RUB" || this.dataset.name == "Райффайзен RUB"){
				document.getElementById("advcash_rub").style.display = "none";
				document.getElementById("advacash_usd").style.display = "none";

			}

			document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = document.getElementById("btc").dataset.name;
			document.getElementById("step-chage-val-inde2").querySelector(".img img").src = document.getElementById("btc").dataset.img;
			document.getElementById("to-code").innerHTML = document.getElementById("btc").dataset.realType;

			document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = document.getElementById("btc").dataset.name;
			document.getElementById("step-chage-inde2").querySelector(".icon img").src = document.getElementById("btc").dataset.img;
			document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("btc").dataset.realType;
			document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = document.getElementById("btc").dataset.rezerv;

			document.getElementById("btc").classList.add("active");

			document.getElementById("type-exc").value = "3";

			document.getElementById("name-input").style.display = "block";
			document.getElementById("tel-input").style.display = "block";

			document.getElementById("account5").style.display = "block";
			document.getElementById("account3").style.display = "block";
		}
		if(this.dataset.name == "ТКС QR-коды RUB"){
			document.getElementById("teather_erc20_usdt1").style.display = "none";
			document.getElementById("ada").style.display = "none";
			document.getElementById("bnb").style.display = "none";
			document.getElementById("dash").style.display = "none";
			document.getElementById("eth_clasic").style.display = "none";
			document.getElementById("trx").style.display = "none";
			document.getElementById("tusd").style.display = "none";
			document.getElementById("zec").style.display = "none";
			document.getElementById("advcash_rub").style.display = "none";
			document.getElementById("tks_qr_code").style.display = "none";
			document.getElementById("all_bank_rub").style.display = "none";
			document.getElementById("gazprombank_rub").style.display = "none";
			document.getElementById("otkritie_rub").style.display = "none";
			document.getElementById("pochta_bank_rub").style.display = "none";
			document.getElementById("promcvyaz_rub").style.display = "none";
			document.getElementById("rayvazen_rub").style.display = "none";
			document.getElementById("yandex_rub").style.display = "none";
			document.getElementById("advacash_usd").style.display = "none";

			document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = document.getElementById("btc").dataset.name;
			document.getElementById("step-chage-val-inde2").querySelector(".img img").src = document.getElementById("btc").dataset.img;
			document.getElementById("to-code").innerHTML = document.getElementById("btc").dataset.realType;
			document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].querySelector("span").innerHTML = document.getElementById("btc").dataset.rezerv;

			document.getElementById("btc").classList.add("active");

			js_icon_right_redz[2].style.display = "none";
			js_icon_right_redz[3].style.display = "none";
			js_icon_right_redz[4].style.display = "none";
			document.getElementById("type-exc").value = "4";
			document.getElementById("name-input").style.display = "block";
			document.getElementById("tel-input").style.display = "block";

			document.getElementById("account3").style.display = "block";
		}
		if(this.dataset.type == "COIN"){
			try{
			document.getElementById(this.dataset.idname).style.display = "none";
			}catch{}
			if(this.dataset.realType == "BTC"){
				document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = document.getElementById("eth").dataset.name;
				document.getElementById("step-chage-val-inde2").querySelector(".img img").src = document.getElementById("eth").dataset.img;
				document.getElementById("to-code").innerHTML = document.getElementById("eth").dataset.realType;

				document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = document.getElementById("eth").dataset.name;
				document.getElementById("step-chage-inde2").querySelector(".icon img").src = document.getElementById("eth").dataset.img;
				document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("eth").dataset.realType;
				document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = document.getElementById("eth").dataset.rezerv;

				document.getElementById("eth").classList.add("active");

				document.getElementById("type-exc").value = "1";

				document.getElementById("account3").style.display = "block";
			}else{
				document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = document.getElementById("btc").dataset.name;
				document.getElementById("step-chage-val-inde2").querySelector(".img img").src = document.getElementById("btc").dataset.img;
				document.getElementById("to-code").innerHTML = document.getElementById("btc").dataset.realType;

				document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = document.getElementById("btc").dataset.name;
				document.getElementById("step-chage-inde2").querySelector(".icon img").src = document.getElementById("btc").dataset.img;
				document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("btc").dataset.realType;
				document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = document.getElementById("btc").dataset.rezerv;

				document.getElementById("btc").classList.add("active");

				document.getElementById("type-exc").value = "1";

				document.getElementById("account3").style.display = "block";
			}
		}

		getAction();
	}
}

var right_item_razd = document.getElementsByClassName("js_item_right_redz");
for(let i=0;i<right_item_razd.length;i++){
right_item_razd[i].onclick = function(){
	for(let i_=0;i_<right_item_razd.length;i_++){
		if(right_item_razd[i_].classList.contains('active')){
			right_item_razd[i_].classList.remove("active");
		}
	}
	document.getElementsByClassName("js_account1_error")[0].innerHTML = "";
document.getElementsByClassName("js_account2_error")[0].innerHTML = "";
document.getElementsByClassName("js_account3_error")[0].innerHTML = "";
document.getElementsByClassName("js_account4_error")[0].innerHTML = "";
document.getElementsByClassName("js_account5_error")[0].innerHTML = "";
document.getElementsByClassName("js_account6_error")[0].innerHTML = "";
document.getElementsByClassName("js_cf12_error")[0].innerHTML = "";
document.getElementsByClassName("js_cf6_error")[0].innerHTML = "";
document.getElementsByClassName("js_cf4_error")[0].innerHTML = "";
	this.classList.add("active");
	document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = this.dataset.name;
	document.getElementById("step-chage-inde2").querySelector(".icon img").src = this.dataset.img;
	document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = this.dataset.realType;
	document.getElementById("to-code").innerHTML = this.dataset.realType;

	document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = this.dataset.name;
	document.getElementById("step-chage-val-inde2").querySelector(".img img").src = this.dataset.img;

	document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("price")[0].innerHTML = this.dataset.min;
	document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = this.dataset.rezerv;


	document.getElementById("account2").style.display = "none";
	document.getElementById("account3").style.display = "none";
	document.getElementById("account4").style.display = "none";

	if(this.dataset.name == "Advcash RUB" || this.dataset.name == "Advcash USD"){
		document.getElementById("account4").style.display = "block";
		document.getElementById("name-input").style.display = "block";
		document.getElementById("tel-input").style.display = "block";
		try{
		js_icon_right_redz[2].style.display = "none";
		js_icon_right_redz[3].style.display = "none";
		}catch{}
	}
	if(this.dataset.name == "Сбербанк RUB" || this.dataset.name == "Альфа-банк RUB" || this.dataset.name == "Тинькофф RUB" || this.dataset.name == "ВТБ RUB" || this.dataset.name == "Visa/MasterCard RUB" || this.dataset.name == "Любой банк RUB" || this.dataset.name == "Газпромбанк RUB" || this.dataset.name == "Открытие RUB" || this.dataset.name == "Почта Банк RUB" || this.dataset.name == "Промсвязьбанк RUB" || this.dataset.name == "Райффайзен RUB"){
		document.getElementById("account2").style.display = "block";
		document.getElementById("name-input").style.display = "block";
		document.getElementById("tel-input").style.display = "block";
	}
	if(this.dataset.type == "COIN"){
		if(document.getElementById("from-code").innerHTML == "USD" || document.getElementById("from-code").innerHTML == "RUB"){
			document.getElementById("name-input").style.display = "block";
			document.getElementById("tel-input").style.display = "block";
			document.getElementById("account3").style.display = "block";
		}else{
			document.getElementById("name-input").style.display = "none";
			document.getElementById("tel-input").style.display = "none";
			document.getElementById("account3").style.display = "block";
		}
	}



	getAction();
}
}


document.getElementById("out-price").onkeyup = function(){
getAction();
}
document.getElementById("in-price").onkeyup = function(){
getAction();
}

document.getElementById("butt_obmen").onclick = function(){
var main_tittle = document.getElementById("step-chage-val-inde1").getElementsByClassName("label")[0].innerHTML;
var main_tittle1 = document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML;
var cur = document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML;
var cur1 = document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML;
var error_il = 0;
document.getElementsByClassName("js_account1_error")[0].innerHTML = "";
document.getElementsByClassName("js_account2_error")[0].innerHTML = "";
document.getElementsByClassName("js_account3_error")[0].innerHTML = "";
document.getElementsByClassName("js_account4_error")[0].innerHTML = "";
document.getElementsByClassName("js_account5_error")[0].innerHTML = "";
document.getElementsByClassName("js_account6_error")[0].innerHTML = "";
document.getElementsByClassName("js_cf12_error")[0].innerHTML = "";
document.getElementsByClassName("js_cf6_error")[0].innerHTML = "";
document.getElementsByClassName("js_cf4_error")[0].innerHTML = "";

var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


if(cur == "RUB" || cur == "USD" || cur1 == "RUB" || cur1 == "USD"){
		if(document.getElementsByClassName("js_account1")[0].style.display != "none"){
			if(document.getElementsByClassName("js_account1")[0].value == ""){
				document.getElementsByClassName("js_account1_error")[0].innerHTML = "Заполните пожалуйста номер счета";
				error_il = 1;
			}
		}
		if(document.getElementsByClassName("js_account5")[0].style.display != "none"){
			if(document.getElementsByClassName("js_account5")[0].value == ""){
				document.getElementsByClassName("js_account5_error")[0].innerHTML = "Заполните пожалуйста корректно номер карты";
				error_il = 1;
		}
		}
		if(document.getElementsByClassName("js_account6")[0].style.display != "none"){
			if(document.getElementsByClassName("js_account6")[0].value == "none"){
				document.getElementsByClassName("js_account6_error")[0].innerHTML = "Заполните пожалуйста кошелек";
				error_il = 1;
		}
		}
		if(document.getElementsByClassName("js_account2")[0].style.display != "none"){
			if(document.getElementsByClassName("js_account2")[0].value == ""){
				document.getElementsByClassName("js_account2_error")[0].innerHTML = "Заполните пожалуйста корректно номер карты";
				error_il = 1;
		}
		}
		if(document.getElementsByClassName("js_account3")[0].style.display != "none"){
			if(document.getElementsByClassName("js_account3")[0].value == "none"){
				document.getElementsByClassName("js_account3_error")[0].innerHTML = "Заполните пожалуйста кошелек";
				error_il = 1;
		}
		}
		if(document.getElementsByClassName("js_account4")[0].style.display != "none"){
			if(document.getElementsByClassName("js_account4")[0].value == ""){
				document.getElementsByClassName("js_account4_error")[0].innerHTML = "Заполните пожалуйста номер счета";
				error_il = 1;
			}
		}
		if(document.getElementsByClassName("js_cf12")[0].style.display != "none"){
			if(document.getElementsByClassName("js_cf12")[0].value == ""){
				document.getElementsByClassName("js_cf12_error")[0].innerHTML = "Ввведите пожалуйста имя и фамилию";
				error_il = 1;
			}
		}
		if(document.getElementsByClassName("js_cf6")[0].style.display != "none"){
			if(document.getElementsByClassName("js_cf6")[0].value == ""){
				document.getElementsByClassName("js_cf6_error")[0].innerHTML = "Заполните пожалуйста e-mail";
				error_il = 1;
			}
		}
		if(document.getElementsByClassName("js_cf4")[0].style.display != "none"){
			if(document.getElementsByClassName("js_cf4")[0].value == ""){
				document.getElementsByClassName("js_cf4_error")[0].innerHTML = "Заполните пожалуйста номер счета";
				error_il = 1;
			}
		}
		if(error_il == 0){
			document.getElementById("exc_error").innerHTML = "Обмен по даному направлению пока что не возможен. Решаем возникшую проблему.";
		}else{
			document.getElementById("exc_error").innerHTML = "";
		}
}else{
	document.getElementById("exc_error").innerHTML = "";
	if(document.getElementById("account3").value == ""){
		document.getElementsByClassName("js_account3_error")[0].innerHTML = "Ввведите кошелек, на который нужно перевести деньги";
		document.getElementsByClassName("js_cf6_error")[0].innerHTML = "";
	}else if(!re.test(String(document.getElementById("email-input").value).toLowerCase())){
		document.getElementsByClassName("js_cf6_error")[0].innerHTML = "Ввведите корректный email";
		document.getElementsByClassName("js_account3_error")[0].innerHTML = "";
	}else{
		btn.addEventListener("click", () => {
			const outPrice = document.querySelector("#out-price").value;
			const inPrice = document.querySelector("#in-price").value;
			const labelLeft = document.querySelector("#label-left").innerHTML;
			const labelRight = document.querySelector("#label-right").innerHTML;
			const icoLeft = document.querySelector("#step-chage-val-inde1").innerHTML;
			const icoRight = document.querySelector(".item-left").innerHTML;
			const emailInput = document.querySelector("#email-input").value;
			const bankCardInput = document.querySelector("#account3").value;
			const fromCode = document.querySelector('#from-code').innerHTML
			const toCode = document.querySelector('#to-code').innerHTML
		  
		  
			const data = {
			  outPrice,
			  inPrice,
			  labelLeft,
			  icoLeft,
			  labelRight,
			  icoRight,
			  emailInput,
			  bankCardInput,
			  fromCode,
			  toCode
			};
			sessionStorage.setItem("data", JSON.stringify(data));
			
			window.location = "form.html";
		  });
	}

}

}

try{

document.getElementsByClassName("js_icon_left_redz")[1].onclick = function(){
error_enable();
no_active_left();
no_active_right();

remove_left_item("RUB","js_item_left_redz");

var js_icon_left_redz = document.getElementsByClassName("js_icon_left_redz");
var js_icon_right_redz = document.getElementsByClassName("js_icon_right_redz");

	document.getElementById("advcash_rub1").classList.add("active");
	document.getElementById("step-chage-val-inde1").getElementsByClassName("label")[0].innerHTML = document.getElementById("advcash_rub1").dataset.name;
	document.getElementById("step-chage-val-inde1").querySelector(".img img").src = document.getElementById("advcash_rub1").dataset.img;
	document.getElementById("from-code").innerHTML = document.getElementById("advcash_rub1").dataset.realType;


	document.getElementById("step-chage-inde1").getElementsByClassName("name")[0].innerHTML = document.getElementById("advcash_rub1").dataset.name;
	document.getElementById("step-chage-inde1").querySelector(".icon img").src = document.getElementById("advcash_rub1").dataset.img;
	document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("advcash_rub1").dataset.realType;
	document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("price")[0].innerHTML = document.getElementById("advcash_rub1").dataset.min;

	document.getElementById("out-price").value = document.getElementById("advcash_rub1").dataset.min;

	js_icon_left_redz[1].classList.add("active");
	document.getElementsByClassName("js_icon_right_redz")[1].classList.add("active");

	document.getElementById("btc").style.display = "none";
			document.getElementById("eth").style.display = "none";
			document.getElementById("teather_erc20_usdt").style.display = "none";
			document.getElementById("teather_erc20_usdt1").style.display = "none";
			document.getElementById("ada").style.display = "none";
			document.getElementById("dash").style.display = "none";
			document.getElementById("doge").style.display = "none";
			document.getElementById("bnb").style.display = "none";
			document.getElementById("eth_clasic").style.display = "none";
			document.getElementById("ltc").style.display = "none";
			document.getElementById("monero").style.display = "none";
			document.getElementById("xrp").style.display = "none";
			document.getElementById("trx").style.display = "none";
			document.getElementById("tusd").style.display = "none";
			document.getElementById("zec").style.display = "none";
			document.getElementById("advcash_rub").style.display = "none";
			document.getElementById("tks_qr_code").style.display = "none";
			document.getElementById("all_bank_rub").style.display = "none";
			document.getElementById("gazprombank_rub").style.display = "none";
			document.getElementById("otkritie_rub").style.display = "none";
			document.getElementById("pochta_bank_rub").style.display = "none";
			document.getElementById("promcvyaz_rub").style.display = "none";
			document.getElementById("rayvazen_rub").style.display = "none";
			document.getElementById("yandex_rub").style.display = "none";
			document.getElementById("advacash_usd").style.display = "none";

			document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = document.getElementById("sberbank_rub").dataset.name;
			document.getElementById("step-chage-val-inde2").querySelector(".img img").src = document.getElementById("sberbank_rub").dataset.img;
			document.getElementById("to-code").innerHTML = document.getElementById("sberbank_rub").dataset.realType;

			document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = document.getElementById("sberbank_rub").dataset.name;
			document.getElementById("step-chage-inde2").querySelector(".icon img").src = document.getElementById("sberbank_rub").dataset.img;
			document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("sberbank_rub").dataset.realType;
			document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = document.getElementById("sberbank_rub").dataset.rezerv;

			document.getElementById("sberbank_rub").classList.add("active");

			js_icon_right_redz[2].style.display = "none";
			js_icon_right_redz[3].style.display = "none";

			js_icon_left_redz[2].style.display = "none";
			js_icon_left_redz[3].style.display = "none";



			document.getElementById("type-exc").value = "2";


			document.getElementById("name-input").style.display = "block";
			document.getElementById("tel-input").style.display = "block";

			document.getElementById("account1").style.display = "block";
			document.getElementById("account2").style.display = "block";
			document.getElementsByClassName("js_icon_left_redz")[0].classList.remove("active");
			document.getElementsByClassName("js_icon_right_redz")[0].classList.remove("active");

getAction();

		}

document.getElementsByClassName("js_icon_left_redz")[2].onclick = function(){
error_enable();
no_active_left();
no_active_right();

remove_left_item("USD","js_item_left_redz");

var js_icon_left_redz = document.getElementsByClassName("js_icon_left_redz");
var js_icon_right_redz = document.getElementsByClassName("js_icon_right_redz");

	document.getElementById("advacash_usd1").classList.add("active");
	document.getElementById("step-chage-val-inde1").getElementsByClassName("label")[0].innerHTML = document.getElementById("advacash_usd1").dataset.name;
	document.getElementById("step-chage-val-inde1").querySelector(".img img").src = document.getElementById("advacash_usd1").dataset.img;
	document.getElementById("from-code").innerHTML = document.getElementById("advacash_usd1").dataset.realType;


	document.getElementById("step-chage-inde1").getElementsByClassName("name")[0].innerHTML = document.getElementById("advacash_usd1").dataset.name;
	document.getElementById("step-chage-inde1").querySelector(".icon img").src = document.getElementById("advacash_usd1").dataset.img;
	document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("advacash_usd1").dataset.realType;
	document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("price")[0].innerHTML = document.getElementById("advacash_usd1").dataset.min;

	document.getElementById("out-price").value = document.getElementById("advacash_usd1").dataset.min;

	js_icon_left_redz[2].classList.add("active");
	document.getElementsByClassName("js_icon_right_redz")[1].classList.add("active");

	document.getElementById("btc").style.display = "none";
			document.getElementById("eth").style.display = "none";
			document.getElementById("teather_erc20_usdt").style.display = "none";
			document.getElementById("teather_erc20_usdt1").style.display = "none";
			document.getElementById("ada").style.display = "none";
			document.getElementById("dash").style.display = "none";
			document.getElementById("doge").style.display = "none";
			document.getElementById("bnb").style.display = "none";
			document.getElementById("eth_clasic").style.display = "none";
			document.getElementById("ltc").style.display = "none";
			document.getElementById("monero").style.display = "none";
			document.getElementById("xrp").style.display = "none";
			document.getElementById("trx").style.display = "none";
			document.getElementById("tusd").style.display = "none";
			document.getElementById("zec").style.display = "none";
			document.getElementById("advcash_rub").style.display = "none";
			document.getElementById("tks_qr_code").style.display = "none";
			document.getElementById("all_bank_rub").style.display = "none";
			document.getElementById("gazprombank_rub").style.display = "none";
			document.getElementById("otkritie_rub").style.display = "none";
			document.getElementById("pochta_bank_rub").style.display = "none";
			document.getElementById("promcvyaz_rub").style.display = "none";
			document.getElementById("rayvazen_rub").style.display = "none";
			document.getElementById("yandex_rub").style.display = "none";
			document.getElementById("advacash_usd").style.display = "none";

			document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = document.getElementById("sberbank_rub").dataset.name;
			document.getElementById("step-chage-val-inde2").querySelector(".img img").src = document.getElementById("sberbank_rub").dataset.img;
			document.getElementById("to-code").innerHTML = document.getElementById("sberbank_rub").dataset.realType;

			document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = document.getElementById("sberbank_rub").dataset.name;
			document.getElementById("step-chage-inde2").querySelector(".icon img").src = document.getElementById("sberbank_rub").dataset.img;
			document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("sberbank_rub").dataset.realType;
			document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = document.getElementById("sberbank_rub").dataset.rezerv;

			document.getElementById("sberbank_rub").classList.add("active");

			js_icon_right_redz[2].style.display = "none";
			js_icon_right_redz[1].style.display = "none";

			js_icon_left_redz[3].style.display = "none";
			js_icon_left_redz[1].style.display = "none";



			document.getElementById("type-exc").value = "2";


			document.getElementById("name-input").style.display = "block";
			document.getElementById("tel-input").style.display = "block";

			document.getElementById("account1").style.display = "block";
			document.getElementById("account2").style.display = "block";
			document.getElementsByClassName("js_icon_left_redz")[0].classList.remove("active");

getAction();

}
document.getElementsByClassName("js_icon_left_redz")[0].onclick = function(){
error_enable();
no_active_left();
no_active_right();
var js_icon_left_redz = document.getElementsByClassName("js_icon_left_redz");
var js_icon_right_redz = document.getElementsByClassName("js_icon_right_redz");
js_icon_right_redz[0].style.display = "block";
js_icon_right_redz[1].style.display = "block";
js_icon_right_redz[2].style.display = "block";
js_icon_right_redz[3].style.display = "block";

js_icon_left_redz[0].style.display = "block";
js_icon_left_redz[1].style.display = "block";
js_icon_left_redz[2].style.display = "block";
js_icon_left_redz[3].style.display = "block";


document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = document.getElementById("eth").dataset.name;
document.getElementById("step-chage-val-inde2").querySelector(".img img").src = document.getElementById("eth").dataset.img;
document.getElementById("to-code").innerHTML = document.getElementById("eth").dataset.realType;

document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = document.getElementById("eth").dataset.name;
document.getElementById("step-chage-inde2").querySelector(".icon img").src = document.getElementById("eth").dataset.img;
document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("eth").dataset.realType;
document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = document.getElementById("eth").dataset.rezerv;

var all_left = document.getElementsByClassName("js_item_left_redz");
for(var e=0;e<all_left.length;e++){
		all_left[e].style.display = "flex";
}
document.getElementById("type-exc").value = "1";

document.getElementById("account3").style.display = "block";

document.getElementById("btc1").classList.add("active");
	document.getElementById("step-chage-val-inde1").getElementsByClassName("label")[0].innerHTML = document.getElementById("btc1").dataset.name;
	document.getElementById("step-chage-val-inde1").querySelector(".img img").src = document.getElementById("btc1").dataset.img;
	document.getElementById("from-code").innerHTML = document.getElementById("btc1").dataset.realType;


	document.getElementById("step-chage-inde1").getElementsByClassName("name")[0].innerHTML = document.getElementById("btc1").dataset.name;
	document.getElementById("step-chage-inde1").querySelector(".icon img").src = document.getElementById("btc1").dataset.img;
	document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("btc1").dataset.realType;
	document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("price")[0].innerHTML = document.getElementById("btc1").dataset.min;
js_icon_left_redz[0].classList.add("active");
document.getElementsByClassName("js_icon_right_redz")[0].classList.add("active");
document.getElementById("eth").classList.add("active");

document.getElementById("btc").style.display = "none";

var head_butt = document.getElementsByClassName("js_icon_left_redz");
if(head_butt[1].classList.contains('active')){
			head_butt[1].classList.remove("active");
}
if(head_butt[2].classList.contains('active')){
			head_butt[2].classList.remove("active");
}
if(head_butt[3].classList.contains('active')){
	head_butt[3].classList.remove("active");
}
var head_butt = document.getElementsByClassName("js_icon_right_redz");
if(head_butt[1].classList.contains('active')){
			head_butt[1].classList.remove("active");
}
if(head_butt[2].classList.contains('active')){
			head_butt[2].classList.remove("active");
}
if(head_butt[3].classList.contains('active')){
	head_butt[3].classList.remove("active");
}


getAction();
}

document.getElementsByClassName("js_icon_left_redz")[3].onclick = function(){
error_enable();
no_active_left();
no_active_right();

remove_left_item("COIN","js_item_left_redz");

var js_icon_left_redz = document.getElementsByClassName("js_icon_left_redz");
var js_icon_right_redz = document.getElementsByClassName("js_icon_right_redz");
js_icon_right_redz[0].style.display = "block";
js_icon_right_redz[1].style.display = "block";
js_icon_right_redz[2].style.display = "block";
js_icon_right_redz[3].style.display = "block";

js_icon_left_redz[0].style.display = "block";
js_icon_left_redz[1].style.display = "block";
js_icon_left_redz[2].style.display = "block";
js_icon_left_redz[3].style.display = "block";


document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = document.getElementById("eth").dataset.name;
document.getElementById("step-chage-val-inde2").querySelector(".img img").src = document.getElementById("eth").dataset.img;
document.getElementById("to-code").innerHTML = document.getElementById("eth").dataset.realType;

document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = document.getElementById("eth").dataset.name;
document.getElementById("step-chage-inde2").querySelector(".icon img").src = document.getElementById("eth").dataset.img;
document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("eth").dataset.realType;
document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = document.getElementById("eth").dataset.rezerv;


document.getElementById("type-exc").value = "1";

document.getElementById("account3").style.display = "block";

document.getElementById("btc1").classList.add("active");
	document.getElementById("step-chage-val-inde1").getElementsByClassName("label")[0].innerHTML = document.getElementById("btc1").dataset.name;
	document.getElementById("step-chage-val-inde1").querySelector(".img img").src = document.getElementById("btc1").dataset.img;
	document.getElementById("from-code").innerHTML = document.getElementById("btc1").dataset.realType;


	document.getElementById("step-chage-inde1").getElementsByClassName("name")[0].innerHTML = document.getElementById("btc1").dataset.name;
	document.getElementById("step-chage-inde1").querySelector(".icon img").src = document.getElementById("btc1").dataset.img;
	document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = document.getElementById("btc1").dataset.realType;
	document.getElementById("step-chage-inde1").getElementsByClassName("course")[0].getElementsByClassName("price")[0].innerHTML = document.getElementById("btc1").dataset.min;
js_icon_left_redz[3].classList.add("active");
document.getElementsByClassName("js_icon_right_redz")[3].classList.add("active");
document.getElementById("eth").classList.add("active");

document.getElementById("btc").style.display = "none";
js_icon_left_redz[1].style.display = "none";
js_icon_left_redz[2].style.display = "none";
document.getElementsByClassName("js_icon_left_redz")[0].classList.remove("active");

getAction();
}
}catch(e){
console.log(e);
}
document.getElementsByClassName("js_icon_right_redz")[1].onclick = function(){
add_metka_right();

document.getElementById("account2").style.display = "none";
document.getElementById("account3").style.display = "none";
document.getElementById("account4").style.display = "none";

var right = document.getElementsByClassName("js_item_right_redz");
var num = 0;
for(var q=0;q<right.length;q++){

	if(right[q].style.display == "flex" && right[q].dataset.type == "RUB" && num == 0){
		document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = right[q].dataset.name;
		document.getElementById("step-chage-val-inde2").querySelector(".img img").src = right[q].dataset.img;
		document.getElementById("to-code").innerHTML = right[q].dataset.realType;

		document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = right[q].dataset.name;
		document.getElementById("step-chage-inde2").querySelector(".icon img").src = right[q].dataset.img;
		document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = right[q].dataset.realType;
		document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = right[q].dataset.rezerv;
		num = 1;
		right[q].classList.add("active");
		var name_item = right[q].dataset.name;
	}
	console.log(right[q].style.display);
	if(right[q].dataset.type != "RUB"){
		right[q].style.display = "none";
	}

}
	if(name_item == "Advcash RUB"){
		document.getElementById("account4").style.display = "block";
		document.getElementById("name-input").style.display = "block";
		document.getElementById("tel-input").style.display = "block";

	}else{
		document.getElementById("account2").style.display = "block";
		document.getElementById("name-input").style.display = "block";
		document.getElementById("tel-input").style.display = "block";
	}
	document.getElementsByClassName("js_icon_right_redz")[1].style.display="block";
	document.getElementsByClassName("js_icon_right_redz")[1].classList.add("active");
	document.getElementsByClassName("js_icon_right_redz")[0].classList.remove("active");
	document.getElementsByClassName("js_icon_right_redz")[2].style.display="none";
	document.getElementsByClassName("js_icon_right_redz")[3].style.display="none";

	document.getElementsByClassName("js_icon_left_redz")[0].classList.remove("active");
	getAction();


}
document.getElementsByClassName("js_icon_right_redz")[2].onclick = function(){
add_metka_right();

document.getElementById("account2").style.display = "none";
document.getElementById("account3").style.display = "none";
document.getElementById("account4").style.display = "none";

var right = document.getElementsByClassName("js_item_right_redz");
var num = 0;
for(var q=0;q<right.length;q++){

	if(right[q].style.display == "flex" && right[q].dataset.type == "USD" && num == 0){
		document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = right[q].dataset.name;
		document.getElementById("step-chage-val-inde2").querySelector(".img img").src = right[q].dataset.img;
		document.getElementById("to-code").innerHTML = right[q].dataset.realType;

		document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = right[q].dataset.name;
		document.getElementById("step-chage-inde2").querySelector(".icon img").src = right[q].dataset.img;
		document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = right[q].dataset.realType;
		document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = right[q].dataset.rezerv;
		num = 1;
		right[q].classList.add("active");
		var name_item = right[q].dataset.name;
	}
	console.log(right[q].style.display);
	if(right[q].dataset.type != "USD"){
		right[q].style.display = "none";
	}

}
	if(name_item == "Advcash USD"){
		document.getElementById("account4").style.display = "block";
		document.getElementById("name-input").style.display = "block";
		document.getElementById("tel-input").style.display = "block";

	}else{
		document.getElementById("account2").style.display = "block";
		document.getElementById("name-input").style.display = "block";
		document.getElementById("tel-input").style.display = "block";
	}
	document.getElementsByClassName("js_icon_right_redz")[2].style.display="block";
	document.getElementsByClassName("js_icon_right_redz")[2].classList.add("active");
	document.getElementsByClassName("js_icon_right_redz")[0].classList.remove("active");
	document.getElementsByClassName("js_icon_right_redz")[1].style.display="none";
	document.getElementsByClassName("js_icon_right_redz")[3].style.display="none";


	getAction();


}
document.getElementsByClassName("js_icon_right_redz")[3].onclick = function(){
add_metka_right();

document.getElementById("account2").style.display = "none";
document.getElementById("account3").style.display = "none";
document.getElementById("account4").style.display = "none";

var right = document.getElementsByClassName("js_item_right_redz");
var num = 0;
for(var q=0;q<right.length;q++){

	if(right[q].style.display == "flex" && right[q].dataset.type == "COIN" && num == 0){
		document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = right[q].dataset.name;
		document.getElementById("step-chage-val-inde2").querySelector(".img img").src = right[q].dataset.img;
		document.getElementById("to-code").innerHTML = right[q].dataset.realType;

		document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = right[q].dataset.name;
		document.getElementById("step-chage-inde2").querySelector(".icon img").src = right[q].dataset.img;
		document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = right[q].dataset.realType;
		document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = right[q].dataset.rezerv;
		num = 1;
		right[q].classList.add("active");
		var name_item = right[q].dataset.name;
	}
	console.log(right[q].style.display);
	if(right[q].dataset.type != "COIN"){
		right[q].style.display = "none";
	}

}

		document.getElementById("name-input").style.display = "none";
		document.getElementById("tel-input").style.display = "none";
		document.getElementById("account3").style.display = "block";

	document.getElementsByClassName("js_icon_right_redz")[3].style.display="block";
	document.getElementsByClassName("js_icon_right_redz")[3].classList.add("active");
	document.getElementsByClassName("js_icon_right_redz")[0].classList.remove("active");
	document.getElementsByClassName("js_icon_right_redz")[1].style.display="none";
	document.getElementsByClassName("js_icon_right_redz")[2].style.display="none";


	getAction();


}

document.getElementsByClassName("js_icon_right_redz")[0].onclick = function(){
add_metka_right();

document.getElementById("account2").style.display = "none";
document.getElementById("account3").style.display = "none";
document.getElementById("account4").style.display = "none";

var right = document.getElementsByClassName("js_item_right_redz");
var num = 0;
for(var q=0;q<right.length;q++){

	if(right[q].dataset.metka == "COIN" && num == 0 && right[q].dataset.metka == 1){
		document.getElementById("step-chage-val-inde2").getElementsByClassName("label")[0].innerHTML = right[q].dataset.name;
		document.getElementById("step-chage-val-inde2").querySelector(".img img").src = right[q].dataset.img;
		document.getElementById("to-code").innerHTML = right[q].dataset.realType;

		document.getElementById("step-chage-inde2").getElementsByClassName("name")[0].innerHTML = right[q].dataset.name;
		document.getElementById("step-chage-inde2").querySelector(".icon img").src = right[q].dataset.img;
		document.getElementById("step-chage-inde2").getElementsByClassName("course")[0].getElementsByClassName("cur")[0].innerHTML = right[q].dataset.realType;
		document.getElementById("step-chage-inde2").getElementsByClassName("reserve")[0].querySelector("span").innerHTML = right[q].dataset.rezerv;
		num = 1;
		right[q].classList.add("active");
		var name_item = right[q].dataset.name;
	}
	console.log(right[q].style.display);
	if(right[q].dataset.metka){
		right[q].style.display = "flex";
	}

}

		document.getElementById("name-input").style.display = "none";
		document.getElementById("tel-input").style.display = "none";
		document.getElementById("account3").style.display = "block";


	for(var z=0; z<4;z++ ){
		if(document.getElementsByClassName("js_icon_right_redz")[z].classList.contains('active')){
			document.getElementsByClassName("js_icon_right_redz")[z].classList.remove("active");
		}
	}

	document.getElementsByClassName("js_icon_right_redz")[1].style.display="block";
	document.getElementsByClassName("js_icon_right_redz")[2].style.display="block";
	document.getElementsByClassName("js_icon_right_redz")[3].style.display="block";
	document.getElementsByClassName("js_icon_right_redz")[0].style.display="block";
	document.getElementsByClassName("js_icon_right_redz")[0].classList.add("active");


	getAction();
	var head_butt = document.getElementsByClassName("js_icon_right_redz");
if(head_butt[1].classList.contains('active')){
			head_butt[1].classList.remove("active");
}
if(head_butt[2].classList.contains('active')){
			head_butt[2].classList.remove("active");
}
if(head_butt[3].classList.contains('active')){
	head_butt[3].classList.remove("active");
}


}




},2000
);
