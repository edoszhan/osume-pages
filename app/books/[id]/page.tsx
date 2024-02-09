"use client"

import MainLayout from "@/app/layouts/MainLayout";

export default function Book({ params }) {
    return (
            <div>
                <h1>Book</h1>
                <p>Book ID: {params.id}</p>
            </div>
    );
}
