// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PathName } from 'constants/';
import { Layout } from 'layout';
import {
  HomePage,
  ActiveServices,
  AccountPage,
  UserAccount,
  LoginPasswordChange,
  Order,
  PaymentDetails,
  PaymentDetailsChange,
  PaymentsHistory,
  ServiceManagement,
  TopUpBalance,
  AllTickets,
} from 'pages';

import {
  PrivateRoute,
  Glow,
} from 'components';

import './App.scss';

function App() {
  return (
    <div className="app balls-paper">
      <Routes>
        <Route path={PathName.Home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={PathName.LoginPasswordChange} element={<LoginPasswordChange />} />
          <Route
            path={PathName.AccountPage}
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          >
            <Route index element={<UserAccount />} />
            <Route path={PathName.LoginPasswordChange} element={<LoginPasswordChange />} />
            <Route path={PathName.Order} element={<Order />} />
            <Route path={PathName.PaymentDetails} element={<PaymentDetails />} />
            <Route path={PathName.PaymentDetailsChange} element={<PaymentDetailsChange />} />
            <Route path={PathName.PaymentsHistory} element={<PaymentsHistory />} />
            <Route path={PathName.ServiceManagement} element={<ServiceManagement />} />
            <Route path={PathName.TopUpBalance} element={<TopUpBalance />} />
            <Route path={PathName.ActiveServices} element={<ActiveServices />} />
            <Route path={PathName.AllTickets} element={<AllTickets />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
