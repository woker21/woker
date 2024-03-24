import Link from 'next/link'


const Menu = () => {
    return (
    <>
    <ul>
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
        <li>

        </li>
    </ul>
    </>
    );
}

export default Menu;