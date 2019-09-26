import {useSelector, useDispatch} from 'react-redux';
import {useRequest} from './useRequest';
import {getCatUrl, getCatLoading} from './ducks/cat/selectors';
import {fetchCat} from './ducks/cat/actions';

const useCatApi = () => {
  const src = useSelector(getCatUrl);
  const loading = useSelector(getCatLoading);

  const dispatch = useDispatch();
  const requestCat = () => dispatch(fetchCat());

  useRequest(requestCat, src);

  return {requestCat, src, loading};
}

export default useCatApi;
