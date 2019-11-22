import AppModule from './store/appModule';
import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { IModuleState } from './store/storeTypes'

Vue.use(Vuex);

const modules: ModuleTree<IModuleState> = {
    AppModule,
};

export default new Vuex.Store<IModuleState>({
    state: {
        version: '1.0.0',
    },
    modules,
  });