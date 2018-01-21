import { recommend, member } from '../services/service'
export default {

  namespace: 'IndexPage',

  state: {
    list:[],
    member: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    	history.listen((location) => {
        const pathname = location.pathname;
        if(pathname == '/') {
          dispatch({ type: 'recommend'},{payload:{}})
          dispatch({ type: 'member'},{payload:{}})
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
    *member({payload}, { call, put }){
    	console.log(payload)
      const data = yield call(member, payload)
      console.log(data.data)
      if (data) {
        yield put({
          type: 'changeMember',
          payload: {
            member: data.data
          },
        })
      }
    }
    
  },

  reducers: {
    changeState(state, action) {
      return { ...state, ...action.payload,...action.list};
    },
    changeMember(state, action) {
      return { ...state, ...action.payload};
    }
  },

};
