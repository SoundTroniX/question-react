import BaseLayout from "@app/layouts/BaseLayout";
import Skeleton from "@shared/ui/Skeleton/Skeleton";
import { lazy, Suspense } from "react";
// import { NotFoundPage } from "@pages/NotFoundPage";
// import QuestionDetailsPage from "@pages/questionDetailsPage/ui/QuestionDetailsPage";
// import QuestionsMainPage from "@pages/questionMainPage/ui/QuestionsMainPage";

const NotFoundPage = lazy(() => import("@pages/NotFoundPage"));
const QuestionDetailsPage = lazy(() => import("@pages/questionDetailsPage"));
const QuestionsMainPage = lazy(() => import("@pages/questionMainPage"));
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Skeleton count={10}></Skeleton>}>
            <QuestionsMainPage></QuestionsMainPage>
          </Suspense>
        ),
      },
      {
        path: "/detail/:questionId",
        element: (
          <Suspense fallback={<Skeleton count={5}></Skeleton>}>
            <QuestionDetailsPage></QuestionDetailsPage>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Skeleton count={5}></Skeleton>}>
        <NotFoundPage></NotFoundPage>
      </Suspense>
    ),
  },
]);
