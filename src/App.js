import './App.css';
import Enrutador from './Enrutador';
import { ChakraProvider,Box } from '@chakra-ui/react'
import ToggleColorMode from './componentes/toggleColorMode';


function App() {
  return (
    <ChakraProvider>
    <div className="App">
    <Box border='1px' w="100%" borderColor='#000'>
    <Enrutador/>
    <ToggleColorMode />
    </Box>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
