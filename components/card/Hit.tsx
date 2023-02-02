import Image from "next/image";
import styles from '../../styles/card.module.scss';

const Hit:React.FC = () => {
    return (
        <div className={styles.hit}>
            <Image src={'/hit.png'} width={64} height={24} alt='hit'/>
        </div>
    )
}

export default Hit