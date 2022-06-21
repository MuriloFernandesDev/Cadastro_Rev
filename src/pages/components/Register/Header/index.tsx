import Image from 'next/image'
import { ActiveLink } from '../ActiveLink'
import styles from './styles.module.scss'

export function Register() {
    return (
        <>
            <div className="mx-auto bg-Loja h-28  flex items-end justify-center pb-4">
                <img src="/logowhite.png" alt="Logo BuyPhone" />
            </div>

            {/* <ul className="flex w-full items-center h-10 bg-black text-white">
                <ActiveLink activeClassName={styles.active} href="/Page1">
                    <a>Home</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="/Page1">
                    <a>Page 1</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="/Page1">
                    <a>Videos</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="/Page1">
                    <a>Games</a>
                </ActiveLink>
            </ul> */}
        </>
    )
}
