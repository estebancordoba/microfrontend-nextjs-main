import dynamic from 'next/dynamic';
const ReactApp = dynamic(() => import('reactApp/ReactApp'), { ssr: false });

const ReactPage = () => {
  return (
    <div>
      <h1>React Microfrontend</h1>
      <ReactApp />
    </div>
  );
};

export default ReactPage;
