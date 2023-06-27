import ChampionAnalysis from './components/ChampionAnalysis';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './Root';
import Home from './components/Home';

const router =  createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/', element: <Home/>},
      {path: '/championanalysis', element: <ChampionAnalysis/>},
      {path: '/gamemode', element: <ChampionAnalysis/>},
      {path: '/statistics', element: <ChampionAnalysis/>},
      {path: '/leaderboard', element: <ChampionAnalysis/>},
      {path: '/progames', element: <ChampionAnalysis/>},
      {path: '/multiplesearch', element: <ChampionAnalysis/>}
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
