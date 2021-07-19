// Contagem regressiva
var countDownDate = new Date("Nov 26, 2021 00:00:00").getTime()
  , x = setInterval(function() {
    var e = (new Date).getTime()
      , a = countDownDate - e
      , t = Math.floor(a / 864e5)
      , n = Math.floor(a % 864e5 / 36e5)
      , o = Math.floor(a % 36e5 / 6e4)
      , i = Math.floor(a % 6e4 / 1e3);
    document.getElementById("days-value").innerHTML = t + "<a style='position: relative; left: 16px'>:</a>",
    document.getElementById("hours-value").innerHTML = n + "<a style='position: relative; left: 16px'>:</a>",
    document.getElementById("minutes-value").innerHTML = o + "<a style='position: relative; left: 25px'>:</a>",
    document.getElementById("seconds-value").innerHTML = i,
    a < 0 && (clearInterval(x),
    $("#x-countdown").innerHTML = "EXPIRADO")
}, 1e3);

//Formulário
document.getElementById("btn-register").onclick = function() {user_data = get_data()};

function get_data(){
  let user_name = document.querySelector("#name");
  let user_email = document.querySelector("#email");
  let data_temp = {Nome: user_name.value, Email: user_email.value}
  localStorage.setItem("user_data", JSON.stringify(data_temp));
}




