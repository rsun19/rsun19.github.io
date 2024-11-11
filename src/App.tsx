import Beginning from "./components/ModelPage/Beginning";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css';

function App() {
  return (
    <div id="App" style={{ overflow: 'hidden' }}>
      <MantineProvider>
        <Beginning />
      </MantineProvider>
    </div>
  );
}

export default App;
