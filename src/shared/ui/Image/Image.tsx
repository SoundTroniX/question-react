import styles from '../Image/style.module.css'

interface Props {
    image: string
    alt: string
}

export default function Image({ image, alt }: Props) {
  return (
    <div className={styles.wrapper}>
        {image ? <img className={styles.img} src={image} alt={alt} /> : null}
    </div>
  )
}
