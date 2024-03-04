"use client"


export default function Header() {
    return (
        <>
        <div id="Header" className="border-b"> 
            <div className="container mx-auto flex justify-between items-center py-4">
                <div>
                    <img src={'/LOGO.jpg'} alt="Logo" width={80}></img> 
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
