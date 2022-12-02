function generate4() {
    let min = 3600; //Change this value
    let max = 5000; //Change this value
  min = Math.ceil(min);
  max = Math.floor(max);

    const my_num = Math.floor(Math.random() * (max - min + 1)) + min;
    const timer = document.querySelector(".request").innerHTML = ` Заявка № ${my_num} создана `;
    console.log(timer);
}

generate4();

