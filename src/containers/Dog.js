import { connect } from 'react-redux';
import { requestDog, requestDogError } from '../ducks/dog/actions';
import { getDogUrl, getDogLoading, getDogError } from '../ducks/dog/selectors';
import ImageView from '../components/imageView';

export default connect(
  (state) => ({
    loading: getDogLoading(state),
    src: getDogUrl(state),
    error: getDogError(state),
    link: '/cat',
    linkText: 'See Cats',
  }),
  { loadImage: requestDog, makeBadRequest: requestDogError },
)(ImageView);
