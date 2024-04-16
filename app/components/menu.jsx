import Link from 'next/link'



const Menu = () => {
    return (
    <>
    <ul className='flex gap-2.5 w-3/4	justify-around	mb-14	'>
    
        <li>
            <Link href={'/'}>Home</Link>
        </li>
        <li>
            <Link href={'/about'}>AboutMe</Link>
        </li>
        <li>
            <Link href={'/proyects'}>Proyects</Link>
        </li>
        <li>
            <Link href={'/contact'}>Contact</Link>
        </li>
        
    
    </ul>
    </>
    );
}

export default Menu;