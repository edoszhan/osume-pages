"use client"


export default function Header() {
    return (
        <>
        <div id="Header" className="border-b"> 
            <div className="container mx-auto flex justify-between items-center py-4">
                <div>
                    <a href="/" className="text-2xl font-bold">Osume Pages </a>
                </div>
                <div>
                    <a href="/login" className="mr-4">Login</a>
                    <a href="/register">Register</a>
                </div>
            </div>

        </div>
        </>
    )
}
