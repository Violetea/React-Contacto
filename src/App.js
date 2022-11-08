import React, { useState } from 'react';
import { ComponentA } from './components/componentA';
import { Contact } from './models/contact.class';

function App() {

  const prevContact = new Contact('Violetea', 'Taylor', 'vita@gmail.com', true);
  const [contact , setConected] = useState(prevContact);

  return (
    <div className="App">
      <ComponentA contact={ contact } setConected={ setConected }></ComponentA>
    </div>
  );
}

export { App };
