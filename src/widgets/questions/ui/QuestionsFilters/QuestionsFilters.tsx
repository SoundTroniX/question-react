import QuestionSearch from '@features/question/ui/QuestionSearch/QuestionSearch'
import styles from './style.module.css'
import QuestionSpecialization from '@features/question/ui/QuestionSpecialization/QuestionSpecialization'
import QuestionSkills from '@features/question/ui/QuestionSkills/QuestionSkills'
import QuestionComplexity from '@features/question/ui/QuestionComplexity/QuestionComplexity'
import QuestionRating from '@features/question/ui/QuestionRating/QuestionRating'
export default function QuestionsFilters() {
  return (
    <aside className={styles.filters}>
      <QuestionSearch></QuestionSearch>
      <QuestionSpecialization></QuestionSpecialization>
      <QuestionSkills></QuestionSkills>
      <QuestionComplexity></QuestionComplexity>
      <QuestionRating></QuestionRating>
    </aside>
  )
}
