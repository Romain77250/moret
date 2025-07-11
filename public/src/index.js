import React from 'react';
import ReactDOM from 'react-dom/client';
import CampaignPage from './CampaignPage'; // ce fichier doit exister

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CampaignPage />
  </React.StrictMode>
);
