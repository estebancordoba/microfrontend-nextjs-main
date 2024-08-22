import dynamic from 'next/dynamic';

const ReactApp = dynamic(() => import('reactApp/ReactApp'), { ssr: false });
const AngularApp = dynamic(() => import('angularApp/AngularApp'), { ssr: false });

const MicrofrontendsPage = () => {
  return (
    <div>
      <h1>Microfrontends Page</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>React Microfrontend</h2>
        <ReactApp />
      </div>
      <div>
        <h2>Angular Microfrontend</h2>
        <AngularApp />
      </div>
    </div>
  );
};

export default MicrofrontendsPage;
