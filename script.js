const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const aInput = document.getElementById("a");

const resultEl = document.getElementById("result");
const detailsEl = document.getElementById("details");
const errorEl = document.getElementById("error");

const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");

function calculate() {
  const x = parseFloat(xInput.value);
  const y = parseFloat(yInput.value);
  const a = parseFloat(aInput.value);

  // Сбросим ошибки и старые результаты
  errorEl.textContent = "";
  detailsEl.textContent = "";
  resultEl.textContent = "—";

  // Проверка на пустые или неверные значения
  if (isNaN(x) || isNaN(y) || isNaN(a)) {
    errorEl.textContent = "Заполните все поля числами.";
    return;
  }

  if (y <= 0) {
    errorEl.textContent = "Количество делений (y) должно быть больше 0.";
    return;
  }

  // Формула для расчета z
  const z = (x - (a * (y - 1))) / y;

  // Вывод результата
  resultEl.textContent = z.toFixed(2);
  detailsEl.textContent = `z = (${x} - (${a} × (${y} - 1))) / ${y} = ${z.toFixed(2)}`;
}

function clearFields() {
  // Очистить все поля
  xInput.value = "";
  yInput.value = "";
  aInput.value = "50";
  resultEl.textContent = "—";
  detailsEl.textContent = "";
  errorEl.textContent = "";
}

// Связываем обработчики событий с кнопками
calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clearFields);
