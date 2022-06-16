import TreeView from '@/layouts/TreeView';
import { useEffect, useState } from 'react';


const Index = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 5000);
  }, [])
  return (
    <div>
      {show && <TreeView />}
    </div>
  );
};

export default Index;
