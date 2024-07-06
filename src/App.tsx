import '@telegram-apps/telegram-ui/dist/styles.css';

import { AppRoot, Input, List, Placeholder, Select, Tappable } from '@telegram-apps/telegram-ui';
import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk'

function App() {

  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (amount.length > 0 && comment.length > 0) {
      console.log("event")
      WebApp.sendData(JSON.stringify({ amount, comment }))
    }
  }, [amount, comment])

  return (
    <>
      {/* <Select header="Category">
        <option>Select category...</option>
        <option>Hello</option>
        <option>Okay</option>
      </Select> */}
      <Input placeholder='Type amount...' header='Amount' onChange={(event) => setAmount(event.target.value)} />
      <Input placeholder='Type comment' header='Comment' onChange={(event) => setComment(event.target.value)} />
    </>)
}


export default App;
