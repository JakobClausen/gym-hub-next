import { BaseRoutes, DashboardRouts } from '../constants/routes';

export const activeBottomNav = (pathName: string) => {
  switch (true) {
    case pathName === BaseRoutes.DASHBOARD:
      return BaseRoutes.DASHBOARD;
    case pathName.includes(DashboardRouts.WHITEBOARD):
      return DashboardRouts.WHITEBOARD;
    case pathName.includes(DashboardRouts.REMOTE):
      return DashboardRouts.REMOTE;
    case pathName.includes(DashboardRouts.SCHEDULE):
      return DashboardRouts.SCHEDULE;
    case pathName.includes(DashboardRouts.SETTINGS):
      return DashboardRouts.SETTINGS;
  }
};
