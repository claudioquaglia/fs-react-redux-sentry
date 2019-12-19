import { ERROR } from '../constants/actionTypes';
import FullStory from '@fullstorydev/browser';

const recordAction = () => next => action => {
  if (typeof action !== 'function') {
    FullStory.log(`${action.type === ERROR ? 'error': 'log'}`, `Redux action: ${action.type}`);
  }
  else { 
    FullStory.log('Redux action is a thunk');
  }
  return next(action);
};

export default recordAction;