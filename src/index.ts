import { App } from 'vue';
import * as components from './components/index';
import setup from './utils/setup';
import { setVueInstance } from './utils/config/index';
import { Defaults } from './utils/defaults';
import './styles/main.css';

const install = (app: App, defaults: Defaults = {}) => {
  setVueInstance(app);
  app.use(setup, defaults);
  let prefix = app.config.globalProperties.$VCalendar.componentPrefix;
  prefix = prefix.toUpperCase() + prefix.slice(1);
  for (const componentKey in components) {
    const component = (components as any)[componentKey];
    app.component(`Jalali${prefix}${component.name}`, component);
  }
};

export default { install };
export * from './components';
export { setup as SetupCalendar };
export { default as Screens } from './utils/screens';
