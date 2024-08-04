export interface SupportData {
  protocol: string;
  windows: boolean;
  macos: boolean;
  linux: boolean;
  android: boolean;
  ios: boolean;
  router: boolean;
}

export const supportMatrix: SupportData[] = [
  { protocol: "OpenVPN", windows: true, macos: true, linux: true, android: true, ios: true, router: true },
  { protocol: "Wireguard", windows: true, macos: true, linux: true, android: true, ios: true, router: true },
  { protocol: "AmnesiaWG", windows: true, macos: true, linux: true, android: true, ios: true, router: false },
  { protocol: "OpenVPN over Cloak", windows: true, macos: true, linux: true, android: true, ios: true, router: false },
  { protocol: "OpenVPN ShadowSocks", windows: true, macos: true, linux: true, android: false, ios: false, router: false },
  { protocol: "IPsec (IKEv2)", windows: true, macos: false, linux: false, android: false, ios: false, router: false },
  { protocol: "SFTP", windows: true, macos: true, linux: false, android: false, ios: false, router: false },
  { protocol: "Website in TOR", windows: true, macos: true, linux: true, android: true, ios: true, router: false },
  { protocol: "Own DNS", windows: true, macos: true, linux: true, android: true, ios: true, router: false },
];
