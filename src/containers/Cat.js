import { connect } from 'react-redux';
import { requestCat, requestCatError } from '../ducks/cat/actions';
import { getCatUrl, getCatLoading, getCatError } from '../ducks/cat/selectors';
import ImageView from '../components/imageView';

export default connect(
  (state) => ({
    loading: getCatLoading(state),
    src: getCatUrl(state),
    error: getCatError(state),
    link: '/dog',
    linkText: 'See Dogs',
  }),
  { loadImage: requestCat, makeBadRequest: requestCatError },
)(ImageView);
