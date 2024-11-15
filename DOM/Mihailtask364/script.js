// №1
document.querySelector("#task1-input").addEventListener("blur", function () {
    const input = this.value;
    document.querySelector("#task1-paragraph").textContent += input;
});

// №2
document.querySelector("#task2-btn").addEventListener("click", function () {
    const inputs = document.querySelectorAll(".task2-input");
    let sum = 0;
    inputs.forEach(input => sum += Number(input.value));
    document.querySelector("#task2-result").textContent = `Sum: ${sum}`;
});

// №3
document.querySelector("#task3-input").addEventListener("blur", function () {
    const number = this.value.split('').map(Number).reduce((a, b) => a + b, 0);
    console.log(number);
});

// №4
document.querySelector("#task4-input").addEventListener("blur", function () {
    const numbers = this.value.split(',').map(Number);
    const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    console.log(average);
});

// №5
document.querySelector("#task5-input").addEventListener("blur", function () {
    const [last, first, middle] = this.value.split(" ");
    document.querySelector("#task5-lastname").value = last;
    document.querySelector("#task5-firstname").value = first;
    document.querySelector("#task5-middlename").value = middle;
});

// №6
document.querySelector("#task6-input").addEventListener("blur", function () {
    const formatted = this.value.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    this.value = formatted;
});

// №7
document.querySelector("#task7-input").addEventListener("blur", function () {
    const wordCount = this.value.trim().split(/\s+/).length;
    console.log(wordCount);
});

// №8
document.querySelector("#task8-input").addEventListener("blur", function () {
    const [day, month, year] = this.value.split(".");
    this.value = `${year}-${month}-${day}`;
});

// №9
document.querySelector("#task9-btn").addEventListener("click", function () {
    const word = document.querySelector("#task9-input").value;
    const isPalindrome = word === word.split("").reverse().join("");
    console.log(isPalindrome);
});

// №10
document.querySelector("#task10-input").addEventListener("blur", function () {
    console.log(this.value.includes("3"));
});

// №11
document.querySelector("#task11-btn").addEventListener("click", function () {
    document.querySelectorAll(".task11-paragraph").forEach((p, i) => {
        p.textContent += ` ${i + 1}`;
    });
});

// №12
document.querySelectorAll("a").forEach(link => {
    link.textContent += ` (${link.href})`;
});

// №13
document.querySelectorAll("a").forEach(link => {
    if (link.href.startsWith("http://")) {
        link.innerHTML += " &rarr;";
    }
});

// №14
document.querySelectorAll(".task14-paragraph").forEach(p => {
    p.addEventListener("click", function () {
        const num = Number(this.textContent);
        this.textContent = num * num;
    });
});

// №15
document.querySelector("#task15-input").addEventListener("blur", function () {
    const [day, month, year] = this.value.split(".");
    const date = new Date(`${year}-${month}-${day}`);
    console.log(date.toLocaleString("en", { weekday: "long" }));
});

// №16
document.querySelector("#task16-increment").addEventListener("click", function () {
    const input = document.querySelector("#task16-input");
    input.value = Math.max(0, Number(input.value) + 1);
});
document.querySelector("#task16-decrement").addEventListener("click", function () {
    const input = document.querySelector("#task16-input");
    input.value = Math.max(0, Number(input.value) - 1);
});

// №17
document.querySelectorAll(".task17-paragraph").forEach(p => {
    p.addEventListener("click", function () {
        const input = document.querySelector("#task17-input");
        input.value = Number(input.value) + 1;
    });
});

// №18
document.querySelectorAll(".task18-div").forEach(div => {
    const truncated = div.textContent.slice(0, 10) + "...";
    div.textContent = truncated;
});

// №19
document.querySelector("#task19-btn").addEventListener("click", function () {
    const randomString = Math.random().toString(36).substring(2, 10);
    document.querySelector("#task19-input").value = randomString;
});

// №20
document.querySelector("#task20-btn").addEventListener("click", function () {
    const input = document.querySelector("#task20-input");
    const shuffled = input.value.split('').sort(() => Math.random() - 0.5).join('');
    input.value = shuffled;
});

// №21
document.querySelector("#task21-btn").addEventListener("click", function () {
    const fahrenheit = Number(document.querySelector("#task21-input").value);
    const celsius = ((fahrenheit - 32) * 5) / 9;
    document.querySelector("#task21-result").textContent = celsius.toFixed(2);
});

// №22
document.querySelector("#task22-btn").addEventListener("click", function () {
    const num = Number(document.querySelector("#task22-input").value);
    const factorial = num => (num <= 1 ? 1 : num * factorial(num - 1));
    document.querySelector("#task22-result").textContent = factorial(num);
});

// №23
document.querySelector("#task23-btn").addEventListener("click", function () {
    const a = Number(document.querySelector("#task23-a").value);
    const b = Number(document.querySelector("#task23-b").value);
    const c = Number(document.querySelector("#task23-c").value);
    const discriminant = b ** 2 - 4 * a * c;
    const result = document.querySelector("#task23-result");

    if (discriminant < 0) {
        result.textContent = "No roots";
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        result.textContent = `Root: ${root}`;
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.textContent = `Roots: ${root1}, ${root2}`;
    }
});
