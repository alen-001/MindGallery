import React from 'react'
import { MoonIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
function Nav() {
return (
    <header className="flex items-center justify-between p-4 font-roboto border-b border-white border-opacity-25 border-thin mt-4 ">
    <Link to="/" className="text-2xl font-roboto font-[200] ml-4">
        MindGallery
    </Link>
    <nav className="flex items-center gap-6 font-roboto font-[100] mr-4">
        <Link to="/collections" className="hover:text-gray-300">
            Collections
        </Link>
        <Link to="/login" className="hover:text-gray-300">
            Login
        </Link>
        <Button variant="ghost" size="icon">
            <MoonIcon className="h-5 w-5" />
        </Button>
    </nav>
</header>
)
}

export default Nav
