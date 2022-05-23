import { NavItem, SceneItem } from './common/scenes/index';
import IntroPageScene from './scenes/IntroPage';

export const SCENE_ITEMS:SceneItem[]=[
    new SceneItem({
        sceneName: 'IntroPageScene',
        sceneComponent: IntroPageScene,
        navigationItem: new NavItem({
          route: '/',
          link: '/',
          exact: true,
        }),
      })
]
