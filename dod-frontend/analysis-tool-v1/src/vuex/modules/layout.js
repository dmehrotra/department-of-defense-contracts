import * as types from '../mutation-types'

const state = {
  // layout 
  leftColPercGoal: 0.5,
  //resize element middle
  resizeElementWidth: 20,
  arrowWidth: 8,
  
  //search bar
  searchBarHeight: 80,

  //tab bar
  tabBarHeight: 30,
  tabHeight: 20,

  //reader
  readerMaxHeight: 200,
  readerHeightGoal: 0,
  
  //pane
  minPaneItemWidth: 130,
  paneItemHeight: 60,

  paneWidthPercentage: 40,
  readerHeight: 210,
  currentReaderHeight: 210,
  currentReaderId: '',
  currentReaderText: '',
  
}

const getters = {
  // layout 
  // main
  leftColPercGoalWatcher: state => () => state.leftColPercGoal,
  //resize element middle
  resizeElementWidth: state => state.resizeElementWidth,
  arrowWidth: state => state.arrowWidth,
  //search bar
  searchBarHeight: state => state.searchBarHeight,
  //tab bar
  tabBarHeight: state => state.tabBarHeight,
  tabHeight: state => state.tabHeight,

  //reader
  readerMaxHeight: state => state.readerMaxHeight,
  readerHeightGoalWatcher: state => () => state.readerHeightGoal,

  //pane
  minPaneItemWidth: state => state.minPaneItemWidth,
  paneItemHeight: state => state.paneItemHeight,


}

const mutations = {
  [types.CHANGE_LEFT_COL_PERC_GOAL] (state, data){
    state.leftColPercGoal = data;
  },
  [types.CHANGE_READER_HEIGHT_GOAL] (state, data){
    state.readerHeightGoal = data;
  },


  [types.TOGGLE_READER_HEIGHT] (state, data) {
    state.currentReaderHeight = state.readerHeight - state.currentReaderHeight;
  },
  [types.SET_READER_TEXT] (state, data) {
    if(state.currentReaderId == data.id){
      state.currentReaderHeight = 0;
    }else{
      state.currentReaderHeight = state.readerHeight;
      state.currentReaderId = data.id;
      state.currentReaderText = data.text;
    }
  },
}

const actions = {
  changeLeftColPerc({commit}, data){
    commit(types.CHANGE_LEFT_COL_PERC_GOAL, data);
  },
  changeReaderHeight({commit}, data){
    commit(types.CHANGE_READER_HEIGHT_GOAL, data);
  },

  toggleReader ({commit}, data){
    commit(types.TOGGLE_READER_HEIGHT);	
  },
  setReaderText ({commit}, data){
    commit(types.SET_READER_TEXT, data);	
  },
}
export default {
  state,
  mutations,
  getters,
  actions
}