export const PathName = {
  Home: '/',
  Order: 'order',
  SignIn: 'sign-in',
  SignUp: 'sign-up',
  AccountPage: 'account-page',
  UserAccount: 'user-account',
  AllTickets: 'all-tickets',
  CreateTicket: 'create-ticket',
  ServiceManagement: 'service-management',
  ActiveServices: 'active-services',
  TopUpBalance: 'top-up-balance',
  PaymentsHistory: 'payments-history',
  PaymentDetails: 'payment-details',
  PaymentDetailsChange: 'payment-details-change',
  LoginPasswordChange: 'login-password-change',
} as const;

export type PathName = typeof PathName[keyof typeof PathName];