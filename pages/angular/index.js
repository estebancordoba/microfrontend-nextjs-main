import dynamic from 'next/dynamic';
const AngularApp = dynamic(() => import('angularApp/AngularApp'), { ssr: false });

const AngularPage = () => {
  return (
    <div>
      <h1>Angular Microfrontend</h1>
      <AngularApp />
    </div>
  );
};

export default AngularPage;
