import '@telegram-apps/telegram-ui/dist/styles.css';

import { AppRoot, Input, List, Placeholder, Select, Tappable } from '@telegram-apps/telegram-ui';

function App() {
  return (
    <List>
      <Select header="Category">
        <option>Select category...</option>
        <option>Hello</option>
        <option>Okay</option>
      </Select>
      <Input placeholder='Type amount...' header='Amount' />
      <Input placeholder='Type comment' header='Comment' />
    </List>)
}


export default App;
