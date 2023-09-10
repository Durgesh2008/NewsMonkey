import {  BrowserRouter,Routes,Route} from "react-router-dom";
import Navar from "./component/Navar";
import News from "./component/News";
function App() {
  let pageSize=6
  // 
  return (
    <>
     < BrowserRouter>
      <Navar/>
      <Routes>
      <Route exact path='/' element={ <News  pagesize={pageSize} key='general' country={'in'} category={'general'}/>}> </Route>
        <Route exact  path='/business' element={ <News  pagesize={pageSize} key='business' country={'in'} category={'business'}/>}> </Route>
        <Route exact path='/entertainment' element={ <News  pagesize={pageSize} key='entertainment' country={'in'} category={'entertainment'}/>}> </Route>
        <Route exact path='/health' element={ <News  pagesize={pageSize} key='health' country={'in'} category={'health'}/>}> </Route>
        <Route exact path='/science' element={ <News  pagesize={pageSize} key='science' country={'in'} category={'science'}/>}> </Route>
        <Route exact path='/sports' element={ <News  pagesize={pageSize} key='sports' country={'in'} category={'sports'}/>}> </Route>
        <Route exact path='/technology' element={ <News  pagesize={pageSize} key='technology' country={'in'} category={'technology'}/>}> </Route>
         </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
