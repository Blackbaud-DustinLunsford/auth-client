//#region imports

import {
  BBOmnibarNavigationItem
} from './omnibar-navigation-item';

//#endregion

export interface BBOmnibarToastContainerInitArgs {

  envId: string;

  leId: string;

  pushNotificationsChangeCallback: (notifications: any[]) => void;

  openMenuCallback: () => void;

  navigateCallback: (navItem: BBOmnibarNavigationItem) => void;

  navigateUrlCallback: (url: string) => void;

  svcId: string;

  url: string;

}
