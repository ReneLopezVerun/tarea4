import Image from 'next/image'
import styles from '../image/image.module.css'

function MyImage() {
  return (
    <div className={styles.containerImages}>
      <Image src="/image5.svg" alt="image" fill />
    </div>
  )
}

export default MyImage
