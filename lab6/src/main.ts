import { fetchAge } from "./api.js";

const btn = document.getElementById("btn") as HTMLButtonElement | null;
const input = document.getElementById("userName") as HTMLInputElement | null;
const result = document.getElementById("result") as HTMLDivElement | null;

if (btn && input && result) {
    btn.addEventListener("click", async () => {
        const name = input.value.trim();

        if (!name) {
            result.textContent = "Будь ласка, введіть ім’я.";
            return;
        }

        result.textContent = "Завантаження...";

        try {
            const data = await fetchAge(name);

            if (data.age !== null) {
                result.textContent = `Для імені ${data.name} статистичний вік: ${data.age} років.`;
            } else {
                result.textContent = `Немає даних для імені "${data.name}".`;
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                result.textContent = "Помилка: " + err.message;
            }
        }
    });
}