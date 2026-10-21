import { useState } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const navItems = [
        {key: "الرئيسية", path: '/'},
        {key: "من انا", path: '#about'},
        {key: "المهارات", path: '#skills'}
    ]
  return (
    <>
    <div className='w-full font-kufam text-md text-[#f7ede2] fixed z-50 top-0 py-6 px-10'>
        <div className='md:flex justify-between items-center p-4 hidden'>
            <ul className='flex gap-4'>
                {navItems.map((item) => (
                    <li key={item.key}><a href={item.path} className='hover:underline'>{item.key}</a></li>
                ))}
            </ul>
            <a href="#footer">تواصل معي</a>
        </div>

        <div className='md:hidden flex justify-end p-2'>
            <button
                id="mobile-menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                className='flex flex-col gap-[5px] cursor-pointer z-50 relative'
                aria-label="toggle menu"
            >
                <span className={`block h-[2px] w-6 bg-[#f7ede2] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-[2px] w-6 bg-[#f7ede2] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-[2px] w-6 bg-[#f7ede2] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
        </div>
    </div>

    <div className={`fixed inset-0 z-40 bg-[#00002e]/95 flex flex-col items-center justify-center gap-10 font-kufam text-[#f7ede2] text-3xl transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navItems.map((item) => (
            <a key={item.key} href={item.path} onClick={() => setMenuOpen(false)} className='hover:underline'>
                {item.key}
            </a>
        ))}
        <a href="#footer" onClick={() => setMenuOpen(false)} className='hover:underline'>تواصل معي</a>
    </div>
    </>
  )
}

export default Header