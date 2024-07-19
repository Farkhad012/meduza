import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { PathName } from './constants';
import { 
  HomePage,

} from './pages/HomePage';

import { Layout } from './layout';

import './App.scss';


function App() {
  return (
    <div className="app">

      <Routes>

        <Route path={PathName.Home} element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path={PathName.SignIn} element={<SignIn />} /> */}
          {/* <Route path={PathName.SignUp} element={<SignUp />} /> */}
          {/* <Route path={PathName.ActiveServices} element={<ActiveServices />} /> */}
          {/* <Route path={PathName.AllTickets} element={<AllTickets />} /> */}
          {/* <Route path={PathName.CreateTicket} element={<CreateTicket />} /> */}
          {/* <Route path={PathName.Dashboard} element={<Dashboard />} /> */}
          {/* <Route path={PathName.Home} element={<Home />} /> */}
          {/* <Route path={PathName.LoginPasswordChange} element={<LoginPasswordChange />} /> */}
          {/* <Route path={PathName.OrderPage} element={<OrderPage />} /> */}
          {/* <Route path={PathName.PaymentDetails} element={<PaymentDetails />} /> */}
          {/* <Route path={PathName.PaymentDetailsChange} element={<PaymentDetailsChange />} /> */}
          {/* <Route path={PathName.PaymentsHistory} element={<PaymentsHistory />} /> */}
          {/* <Route path={PathName.ServiceManagement} element={<ServiceManagement />} /> */}
          {/* <Route path={PathName.TopUpBalance} element={<TopUpBalance />} /> */}
        </Route>

      </Routes>


    </div>
  );
}

export default App;
