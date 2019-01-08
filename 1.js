//прием купюр
var paid= 0;
var money= document.getElementsByClassName('money');

money[0].onclick= getpaid; 
money[1].onclick= getpaid; 
money[2].onclick= getpaid; 
money[3].onclick= getpaid; 
money[4].onclick= getpaid; 
money[5].onclick= getpaid; 
money[6].onclick= getpaid; 

function getpaid() {
    bablo= parseInt(this.defaultValue, 10)
    paid+= bablo;
    document.getElementById('insertmoney').innerHTML= paid;
}

//выбор кофе
var mustpay= 0;
var selectedcoffee;

document.getElementById('coffee-panel').onclick= function coffeeselect(event) {
    mustpay= event.target.dataset.price;
    selectedcoffee= event.target.value;
    if (event.target.type== "submit") {
        document.getElementById('selected').innerHTML= selectedcoffee+ ' ' + mustpay;
    }
    else return false;
}

//налить
document.getElementById('give').onclick= function() {
    if (paid<mustpay) alert('Внесите деньги');
    else if (document.getElementById('selected').innerHTML=='') alert('Выберите кофе');
    else {
        paid= paid- mustpay;
        document.getElementById('insertmoney').innerHTML= paid;
        document.getElementById('selected').innerHTML= selectedcoffee+' готовится';
        document.getElementById('mousecatch').style.top= '0';
        setTimeout(function(){
            document.getElementById('mousecatch').style.top= ''; document.getElementById('selected').innerHTML=selectedcoffee+' готово!';
        },3000);
    }
}

//сдача
document.getElementById('giveback').onclick= function() {
    alert('Ваша сдача '+ paid +' рублей')
    document.getElementById('insertmoney').innerHTML= 'Внесите купюры'; 
    document.getElementById('selected').innerHTML= ''; 
}