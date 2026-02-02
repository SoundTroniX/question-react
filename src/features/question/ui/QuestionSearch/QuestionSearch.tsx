import { useAppDispatch, useAppSelector } from "@app/providers/store";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { useDebounce } from "@shared/hooks/useDebounce";
import { setSearch } from "@features/question/model/questionsFilterSlice";
export default function QuestionSearch() {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.questionFilters.keywords);
  const [localInputValue, setLocalValue] = useState("");
  const debouncedValue = useDebounce(localInputValue, 500);
   useEffect(() => {
    setLocalValue(searchQuery.join(' '));
  }, [searchQuery]);
  useEffect(() => {
    dispatch(setSearch(debouncedValue));
  }, [debouncedValue, dispatch]);
  return (
    <div className={styles.search}>
      <span className={styles.icon}></span>
      <input
        type="text"
        value={localInputValue}
        placeholder="Введите запрос..."
        className={styles.input}
        onChange={(e) => setLocalValue(e.target.value)}
      />
    </div>
  );
}
