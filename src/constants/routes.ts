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
    src: '/icons/dashboard.png',
    endpoint: BaseRoutes.DASHBOARD,
    name: 'Dashboard',
  },
  {
    src: '/icons/whiteboard.png',
    endpoint: DashboardRouts.WHITEBOARD,
    name: 'Whiteboard',
  },
  {
    src: '/icons/remote.png',
    endpoint: DashboardRouts.REMOTE,
    name: 'Remote',
  },
  {
    src: '/icons/schedule.png',
    endpoint: DashboardRouts.SCHEDULE,
    name: 'Schedule',
  },
  {
    src: '/icons/settings.png',
    endpoint: DashboardRouts.SETTINGS,
    name: 'Settings',
  },
];
