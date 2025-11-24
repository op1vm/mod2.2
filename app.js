document.getElementById("btn").addEventListener("click", function () {
    const num = Number(document.getElementById("number").value);
    const result = document.getElementById("result");

    if (num < 0) {
        result.textContent = "Факторіал від’ємного числа не існує!";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    result.textContent = `Факторіал ${num} = ${factorial}`;
});
