const firstButton = document.querySelector(".step_one_button");
const numberInput = document.getElementById("number");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const small = document.querySelectorAll("small");
const toggleCheckbox = document.querySelector(".toggle-checkbox");
const yearlyOptions = document.querySelector(".options.yearly");
const monthlyOptions = document.querySelector(".options.monthly");
const yearlyText = document.querySelector("p.yearly");
const monthlyText = document.querySelector("p.monthly");
const nav = document.querySelector(".second_step_nav");
const navButton = document.querySelector(".second_step_nav button");
const thirdNav = document.querySelector(".third_step_nav");
const thirdNavButton = document.querySelector(".third_step_nav button");
const goBack = document.querySelector(".second_step_nav p");
const goBackThird = document.querySelector(".third_step_nav p");
const firstStep = document.getElementById("first_step");
const secondStep = document.getElementById("second_step");
const thirdStep = document.getElementById("third_step");
const fourthStep = document.getElementById("fourth_step");
const lastStep = document.getElementById("last_step");
const allGameName = document.querySelector(".game_name");
const allGamePrice = document.querySelector(".game_price");
const allarcadeOptions = document.querySelectorAll(".options_arcade");
const thirdMonthlyOption = document.querySelector(".third_options.monthly");
const thirdYearlyOption = document.querySelector(".third_options.yearly");
const checkoutPricing = document.querySelector(".checkout_pricing");
const totalPricing = document.querySelector(".total_price");
const confirm = document.querySelector(".confirm");
const number = document.querySelector(".number");
const numberTwo = document.querySelector(".number.two");
const numberThree = document.querySelector(".number.three");
const numberFour = document.querySelector(".number.last");
const total = document.querySelector(".total");
const goBackLast = document.querySelector(".go_back");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const checkbox4 = document.getElementById("checkbox4");
const checkbox5 = document.getElementById("checkbox5");
const checkbox6 = document.getElementById("checkbox6");
const allFirstOptions = document.querySelectorAll(".options_first");
const div = document.createElement("div");
div.setAttribute("class", "checkout");
fourthStep.insertBefore(div, checkoutPricing);
const div2 = document.createElement("div");
div2.setAttribute("class", "game_details");
div.appendChild(div2);
const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.setAttribute("class", "fourth_text_first");
p2.setAttribute("class", "fourth_text");
div2.appendChild(p1);
div2.appendChild(p2);
const hr = document.createElement("hr");
hr.setAttribute("class", "line");
div.appendChild(hr);
let codeExecuted = false;

firstButton.addEventListener("click", (e) => {
  if (numberInput.value.trim() === "") {
    e.preventDefault();
    numberInput.style.border = "2px solid hsl(354, 84%, 57%)";
    small.forEach((sm) => {
      sm.style.visibility = "visible";
    });
  } else {
    numberInput.style.border = "";
    small.forEach((sm) => {
      sm.style.visibility = "";
    });
    secondStep.classList.remove("none");
    firstStep.classList.add("none");
  }
  if (nameInput.value.trim() === "") {
    e.preventDefault();
    nameInput.style.border = "2px solid hsl(354, 84%, 57%)";
    small.forEach((sm) => {
      sm.style.visibility = "visible";
    });
  } else {
    nameInput.style.border = "";
    small.forEach((sm) => {
      sm.style.visibility = "";
    });
    secondStep.classList.remove("none");
    firstStep.classList.add("none");
  }
  if (emailInput.value.trim() === "") {
    e.preventDefault();
    emailInput.style.border = "2px solid hsl(354, 84%, 57%)";
    small.forEach((sm) => {
      sm.style.visibility = "visible";
    });
  } else {
    emailInput.style.border = "";
    small.forEach((sm) => {
      sm.style.visibility = "";
    });
    secondStep.classList.remove("none");
    firstStep.classList.add("none");
    number.classList.add("transparent");
    numberTwo.classList.remove("transparent");
  }
});
goBack.addEventListener("click", () => {
  firstStep.classList.remove("none");
  secondStep.classList.add("none");
  number.classList.remove("transparent");
  numberTwo.classList.add("transparent");
});

goBackThird.addEventListener("click", () => {
  firstStep.classList.add("none");
  secondStep.classList.remove("none");
  thirdStep.classList.add("none");
  numberThree.classList.add("transparent");
  numberTwo.classList.remove("transparent");
});

function handleCheckout() {
  allarcadeOptions.forEach((options) => {
    options.addEventListener("click", () => {
      options.style.backgroundColor = "hsl(217, 100%, 97%)";
      const gamePrice = options.querySelector(".game_price");
      const gameName = options.querySelector(".game_name");
      p1.textContent = `${gameName.textContent}`;
      p2.textContent = gamePrice.textContent;
      const data = totalPricing.setAttribute("data-value", p2.textContent);
    });
  });

  function handleCheckboxClick(event) {
    const checkbox = event.target;
    const checkboxWrapper = checkbox.parentElement;
    if (checkbox.checked) {
      checkboxWrapper.style.backgroundColor = "hsl(217, 100%, 97%)";
      const online = checkboxWrapper.querySelector(".online");
      const price = checkboxWrapper.querySelector(".extra");

      const div3 = document.createElement("div");
      div3.setAttribute("class", "add_ons");
      div.appendChild(div3);
      const p3 = document.createElement("p");
      p3.setAttribute("class", "extrass");
      p3.textContent = online.textContent;
      div3.appendChild(p3);
      const p4 = document.createElement("p");
      p4.setAttribute("class", "onlineee");
      p4.textContent = price.textContent;
      div3.appendChild(p4);
      const data = totalPricing.getAttribute("data-value");
      const data2 = p4.setAttribute("data-value", p4.textContent);
      const data3 = p4.getAttribute("data-value");
      const parsed = parseInt(data.match(/\d+/)[0]);
      const parsed2 = parseInt(data3.match(/\d+/)[0]);

      if (toggleCheckbox.checked && !codeExecuted) {
        const content = `(${yearlyText.textContent})`;
        p1.append(content);
        total.append(`(per year)`);
        totalPricing.textContent = `$${parsed + parsed2}/yr`;
        codeExecuted = true;
      } else if (!toggleCheckbox.checked && !codeExecuted) {
        const content = `(${monthlyText.textContent})`;
        p1.append(content);
        total.append(`(per month)`);
        totalPricing.textContent = `$${parsed + parsed2}/mo`;
      }
    } else {
      checkboxWrapper.style.backgroundColor = "";
      checkboxChecked = false;
    }
  }

  checkbox1.addEventListener("click", handleCheckboxClick);
  checkbox2.addEventListener("click", handleCheckboxClick);
  checkbox3.addEventListener("click", handleCheckboxClick);
  checkbox4.addEventListener("click", handleCheckboxClick);
  checkbox5.addEventListener("click", handleCheckboxClick);
  checkbox6.addEventListener("click", handleCheckboxClick);
}

navButton.addEventListener("click", () => {
  secondStep.classList.add("none");
  thirdStep.classList.remove("none");
  numberThree.classList.remove("transparent");
  numberTwo.classList.add("transparent");
});

thirdNavButton.addEventListener("click", () => {
  thirdStep.classList.add("none");
  fourthStep.classList.remove("none");
  numberThree.classList.add("transparent");
  numberFour.classList.remove("transparent");
});

handleCheckout();

confirm.addEventListener("click", () => {
  fourthStep.classList.add("none");
  lastStep.classList.remove("none");
  numberFour.classList.add("transparent");
});

goBackLast.addEventListener("click", () => {
  fourthStep.classList.add("none");
  thirdStep.classList.remove("none");
  numberFour.classList.add("transparent");
  numberThree.classList.remove("transparent");
});

toggleCheckbox.addEventListener("change", function () {
  if (this.checked) {
    yearlyOptions.classList.remove("none");
    monthlyOptions.classList.add("none");
    yearlyText.style.color = "hsl(213, 96%, 18%)";
    monthlyText.style.color = "hsl(231, 11%, 63%)";
    thirdYearlyOption.classList.remove("none");
    thirdMonthlyOption.classList.add("none");
  } else {
    yearlyOptions.classList.add("none");
    monthlyOptions.classList.remove("none");
    monthlyText.style.color = "hsl(213, 96%, 18%)";
    yearlyText.style.color = "hsl(231, 11%, 63%)";
    thirdYearlyOption.classList.add("none");
    thirdMonthlyOption.classList.remove("none");
  }
});
