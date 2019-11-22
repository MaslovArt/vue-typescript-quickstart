import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { IAppState } from './storeTypes';

@Module({
    name: 'AppModule',
    namespaced: true,
})
export default class AppModule extends VuexModule {
    public appState: IAppState = {
        val: 1
    }

    @Action
    public updateVal() {
        this.context.commit('setVal', 2);
    }

    @Mutation setVal(val: number) {
        this.appState.val = val;
    }
}