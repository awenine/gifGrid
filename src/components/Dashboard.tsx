import React, { useState } from 'react';
import DisplayGrid from './DisplayGrid';
import Form from './Form';

export interface DashboardProps {
  
}
 
const Dashboard: React.SFC<DashboardProps> = () => {
  const [test, setTest] = useState("");
  return ( 
    <div className="flex flex-col items-center">
      <Form />
      <DisplayGrid />
      {test}
    </div>
   );
}
 
export default Dashboard;