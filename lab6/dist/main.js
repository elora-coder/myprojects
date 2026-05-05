var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchAge } from "./api.js";
const btn = document.getElementById("btn");
const input = document.getElementById("userName");
const result = document.getElementById("result");
if (btn && input && result) {
    btn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        const name = input.value.trim();
        if (!name) {
            result.textContent = "Будь ласка, введіть ім’я.";
            return;
        }
        result.textContent = "Завантаження...";
        try {
            const data = yield fetchAge(name);
            if (data.age !== null) {
                result.textContent = `Для імені ${data.name} статистичний вік: ${data.age} років.`;
            }
            else {
                result.textContent = `Немає даних для імені "${data.name}".`;
            }
        }
        catch (err) {
            if (err instanceof Error) {
                result.textContent = "Помилка: " + err.message;
            }
        }
    }));
}
