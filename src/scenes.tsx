import { NavItem, SceneItem } from './common/scenes/index';
import IntroPageScene from './scenes/IntroPage';
import OwnBooksCardScene from './scenes/OwnBooksCard';

export const SCENE_ITEMS:SceneItem[]=[
    new SceneItem({
        sceneName: 'IntroPageScene',
        sceneComponent: IntroPageScene,
        navigationItem: new NavItem({
          route: '/',
          link: '/',
          exact: true,
        }),
      }),
    new SceneItem({
        sceneName: 'OwnBooksPageScene',
        sceneComponent: OwnBooksCardScene,
        navigationItem: new NavItem({
          route: '/own/books/page',
          link: '/own/books/page',
          exact: true,
        }),
      })
]
