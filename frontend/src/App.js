import Error from './pages/Error'
import Exercise3Form from './pages/Exercise3Form'

import './App.css';
import { Box, Typography } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

function App() {


    return (
        <Box sx={{marginTop: 4}}>
            <div className="App">
                <Routes>
                    <Route path='*' element={<Error/>}/>
                    <Route path='/' element={<Exercise3Form />}/>
                </Routes>

            </div>
        </Box>
    );
}

export default App;
