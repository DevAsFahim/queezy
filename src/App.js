import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quizTopic/:quizId',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`) ,
          element: <Quiz></Quiz>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/statistic',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
