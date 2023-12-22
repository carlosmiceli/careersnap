import React from "react"
import SignIn from "./sub/forms/SignIn"

function Footer() {
    return (
        <div className="flex flex-col bg-white border border-t-gray-400">
            <p className="w-full text-center text-black py-3">© 2023 - Career Snap created by <a href="https://carlosmiceli.com/">Carlos Miceli</a></p>
            <SignIn />
        </div>
    )
}   

export default Footer