import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = withStyles({
  root: {
    color: '#CD0CFF',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-40px',
    marginLeft: '-40px',
    animation: 'MuiCircularProgress-keyframes-circular-rotate 2.4s linear infinite',
  },
})(CircularProgress);

export default Loading;
