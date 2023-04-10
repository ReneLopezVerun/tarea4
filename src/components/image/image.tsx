import Image from 'next/image'
import styles from '../image/image.module.css'

function MyImage() {
  return (
    <div className={styles.containerImages}>
      <Image src="/image5.svg" alt="image" width="1920" height="497" />
    </div>
  )
}

export default MyImage
