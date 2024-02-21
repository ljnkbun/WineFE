import Dropdown from "./Dropdown";
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import styles from '../../styles/Navbar.module.css';

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
    };

    const closeDropdown = () => {
        dropdown && setDropdown(false);
    };

    return (
        <li
            className={styles.navlink}
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeDropdown}>
            {items.path && items.submenu ? (
                <>
                    <button
                        type="button" className={styles.cusbutton}
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => toggleDropdown()}>
                        <Link href={items.path}>{items.name}</Link>
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : !items.path && items.submenu ? (
                <>
                    <button
                        type="button" className={styles.cusbutton}
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}>
                        {items.name}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <Link href={items.path}>{items.name}</Link>
            )}
        </li>
    );
};

export default MenuItems;