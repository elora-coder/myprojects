// Знаходимо елементи інтерфейсу
const btn = document.getElementById('btn');
const input = document.getElementById('userName');
const result = document.getElementById('result');

// Додаємо обробник події "клік"
btn.addEventListener('click', async () => {
    const name = input.value.trim();
    
    // Перевірка, чи не порожнє поле
    if (!name) {
        result.textContent = 'Будь ласка, введіть ім’я.';
        return;
    }

    result.textContent = 'Завантаження...';

    try {
        const response = await fetch(`https://api.agify.io/?name=${name}&country_id=UA`);
        
        if (!response.ok) throw new Error('Помилка сервера: ' + response.status);
        
        // Отримуємо JSON дані
        const data = await response.json();

        if (data.age) {
            result.textContent = `Для імені ${data.name} статистичний вік становить: ${data.age} років.`;
        } else {
            result.textContent = `На жаль, для імені "${data.name}" немає даних.`;
        }

    } catch (err) {
        result.textContent = 'Помилка: ' + err.message;
    }
});