import { recommend } from '../services/service'
export default {

  namespace: 'IndexPage',

  state: {
  	list:[],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    	history.listen((location) => {
        const pathname = location.pathname;
        if(pathname == '/') {
          dispatch({ type: 'recommend'},{payload:{}})
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *recommend({payload}, { call, put }){
    	console.log(payload)
      const data = yield call(recommend,payload)
      console.log(data.data)
      if (data) {
        yield put({
          type: 'changeState',
          list: {
            list: data.data
          },
        })
      }
    },
    
  },

  reducers: {
    changeState(state, action) {
      return { ...state, ...action.payload,...action.list};
    }
  },

};
