import { AgeResponse } from "./types.js";

export async function fetchAge(name: string): Promise<AgeResponse> {
    const response = await fetch(`https://api.agify.io/?name=${name}&country_id=UA`);

    if (!response.ok) {
        throw new Error("Помилка сервера: " + response.status);
    }

    return response.json();
}