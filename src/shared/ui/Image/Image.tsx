import styles from '../Image/style.module.css'

interface Props {
    image: string
}

export default function Image({ image }: Props) {
  return (
    <div className={styles.wrapper}>
        {image ? <img className={styles.img} src={image} alt="yeahub logo" /> : null}
    </div>
  )
}
