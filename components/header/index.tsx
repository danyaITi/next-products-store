import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';

const Header:React.FC = () => {
    return(
        <div className={styles.header}>
            <Link href={'/favorites'}>
                <Image src={'/favorites.png'} height={50} width={50} alt='favorites'/>
            </Link>

            <Link href={'/cart'}>
                <Image src={'/cart.png'} height={40} width={60} alt='cart'/>
            </Link>
        </div>
    )
}

export default Header