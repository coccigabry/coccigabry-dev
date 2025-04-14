import Link from "next/link"

const Navbar = () => {
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* LOGO */}
            <div className="bg-black rounded-xl p-1">
                <Link href="/" className="text-sm bg-white rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-blue-800 mr-1">Cocci</span>
                    <span className="w-15 h-8 rounded bg-blue-800 text-white flex items-center justify-center px-2">Gabry</span>
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div>
                
            </div>
        </div>
    )
}
export default Navbar