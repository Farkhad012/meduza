export const PathName = {
  Home: '/',
  OrderPage: '/orderPage',
  SignIn: '/signIn',
  SignUp: '/signUp',
  UserAccount: '/userAccount',
  AllTickets: '/allTickets',
  CreateTicket: '/createTicket',
  ServiceManagement: '/serviceManagement',
  ActiveServices: '/activeServices',
  PaymentsHistory: '/paymentsHistory',
  TopUpBalance: '/topUpBalance',
  PaymentDetails: '/paymentDetails',
  PaymentDetailsChange: '/paymentDetailsChange',
  LoginPasswordChange: '/loginPasswordChange',
} as const;

export type PathName = typeof PathName[keyof typeof PathName];