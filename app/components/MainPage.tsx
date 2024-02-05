"use client"

export default function MainPage() {
    return (
        <>
        <div id="MainPage">
            <div className="container mx-auto py-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Welcome to My App</h1>
                    <br></br>
                    <br></br>
                        <div className="text-center">
                        <img src={"../assets/LOGO.jpg"} alt="Logo" className="h-8 w-8 inline-block" width={64}/>
                        </div>
                    <br></br>
                    <br></br>
                    <p className="text-lg">This is the main page of the app.</p> 
                </div>
            </div>
        </div>
        </>
    )
}
