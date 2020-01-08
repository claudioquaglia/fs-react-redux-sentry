import { SAVE_QUERY, LOAD_QUERY } from '../constants/actionTypes';
import { createBrowserHistory } from 'history';
import parseQuery from '../util/parseQuery';

const history = createBrowserHistory();

const doSaveQuery = query => {
  history.push(`/?query=${encodeURIComponent(query)}`);
  if (query === 'unhandled exception') throw new Error("unhandled exception");
  return {
    type: SAVE_QUERY,
    query,
  };
};

const doLoadQuery = () => {
  const query = parseQuery(window.location.search);
  return { 
    type: LOAD_QUERY,
    query,
  };
};

export {
  doSaveQuery,
  doLoadQuery
}