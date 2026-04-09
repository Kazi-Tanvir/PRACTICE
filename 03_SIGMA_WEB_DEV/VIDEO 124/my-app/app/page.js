"use client";
import { submitForm } from "@/app/actions/form";

export default function Home() {
  return (
    
      <div className="form-container flex flex-col gap-4">
        <form action={submitForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Name" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Email" id="email" />
          <label htmlFor="message">Message:</label>
          <textarea name="message" placeholder="Message" id="message"></textarea>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
  
  );
}
