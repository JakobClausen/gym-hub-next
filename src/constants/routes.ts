export enum DashboardRouts {
  REMOTE = '/remote',
  SCHEDULE = '/schedule',
  SETTINGS = '/settings',
  WHITEBOARD = '/whiteboard',
}

export enum BaseRoutes {
  INDEX = '/',
  LOGIN = '/login',
  TIMER = '/timer',
  DASHBOARD = '/dashboard',
}

export const bottomNav = [
  {
    src: '/icons/dashboard.svg',
    endpoint: BaseRoutes.DASHBOARD,
  },
  {
    src: '/icons/whiteboard.png',
    endpoint: DashboardRouts.WHITEBOARD,
  },
  {
    src: '/icons/remote.png',
    endpoint: DashboardRouts.REMOTE,
  },
  {
    src: '/icons/remote.png',
    endpoint: DashboardRouts.SCHEDULE,
  },
  {
    src: '/icons/settings.png',
    endpoint: DashboardRouts.SETTINGS,
  },
];
