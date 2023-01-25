import './App.css';

// import React, { Component } from 'react'    // this is for class based components
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
const App = () => {
  const pageSize = 6;
  const apiKey = "9407a00972944d729c9a17b817a43733"

  // this is used to for states in class based components
  // state = {
  //   progress: 0
  // }
  // setProgress = (progress) => {
  //   setState({ progress: progress })
  // }

  const [progress, setProgress] = useState(0)

  // render() {
  return (
    <>
      <Router>

        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />} />
        </Routes>
      </Router>
    </>
  )
}
// }
export default App;