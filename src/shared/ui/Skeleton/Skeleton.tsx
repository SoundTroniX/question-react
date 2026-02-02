import styles from './Skeleton.module.css'

interface Props {
  count?: number
}
export default function Skeleton({count = 10}: Props) {
  return (
    <div className={styles.skeletonWrapper}>
			<article className={styles.content}>
				<ul className={styles.listSkeleton}>
					{[...Array(count)].map((_, i) => (
						<li key={i} className={`${styles.itemSkeleton} ${styles.skeletonPulse}`}>
						</li>
					))}
				</ul>
			</article>
		</div>
  )
}
