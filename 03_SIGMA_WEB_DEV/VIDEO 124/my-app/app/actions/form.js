


"use server";

import { appendFile } from "fs/promises";


export async function submitForm(data) {
    console.log("Form data received:", {
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message"),
    });
    await appendFile(
        "form-data.txt",
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nMessage: ${data.get("message")}\n\n`
    );
}