import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      whiteText: string;
      inactiveGymClass: string;
      activeGymClass: string;
    };
    fontSize: {
      small: string;
    };
    padding: {
      border: string;
    };
    margin: {
      bottom: string;
      top: string;
    };
    spacing: {
      button: string;
    };
    timer: {
      color: {
        background: string;
      };
      padding: {
        border: string;
      };
    };
  }
}
