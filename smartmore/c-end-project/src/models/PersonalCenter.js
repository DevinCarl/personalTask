import { query,score,member } from '../services/service'
export default {

  namespace: 'PersonalCenter',

  state: {
  	list:[],
  	score:[],
  	member: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    	history.listen((location) => {
        const pathname = location.pathname;
        if(pathname == '/personalCenter') {
          dispatch({ type: 'member'},{payload:{}})
        }else if(pathname == '/pointsDetail') {
        	dispatch({ type: 'score'},{payload:{}})
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
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
    },
    *query({payload}, { call, put }){
    	console.log(payload)
      const data = yield call(query,payload)
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
    *score({payload}, { call, put }){
    	console.log(payload)
      const data = yield call(score,payload)
      console.log(data.data)
      if (data) {
        yield put({
          type: 'changeScore',
          list: {
            score: data.data
          },
        })
      }
    },
  },

  reducers: {
    changeState(state, action) {
      return { ...state, ...action.payload,...action.list};
    },
    changeScore(state, action) {
      return { ...state, ...action.payload,...action.list};
    },
    changeMember(state, action) {
      return { ...state, ...action.payload};
    }
  },

};
