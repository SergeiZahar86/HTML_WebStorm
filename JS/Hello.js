alert( 'Привет, мир!' );
let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет!
let isBoss = confirm("Ты здесь главный?");
alert( isBoss ); // true, если нажата OK
function showMessage() {
    alert( 'Всем привет!' );
}

showMessage();
showMessage();

for (let i = 0; i < 5; i++) {
    console.log("value,", i);
}
showMessage();