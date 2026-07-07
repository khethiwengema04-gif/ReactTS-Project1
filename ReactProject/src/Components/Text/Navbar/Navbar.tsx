import React from 'react'
import styles from './Navbar.module.css'
import { Text } from '../Text'

export const Navbar: React.FC<any> = ({ name, surname }) => {
    console.log({ name, surname })


    return (
        <nav>
            <div className={styles.content}>
                <Text varient={'h1'} >Furniture</Text>
                <a href='/#' className={styles.link}>Home</a>
                <a href='/#' className={styles.link}>Contact</a>
                <a href='/#' className={styles.link}>About</a>
                <a href='/#' className={styles.link}>Search</a>
                <div className={styles['profile icon']}>
                    <Text varient={'span'}>FS</Text>
                </div>

            </div>

        </nav>





    )
}
