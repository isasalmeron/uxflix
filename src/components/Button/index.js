import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const PrimaryButton = withStyles({
  root: {
    color: 'white',
    backgroundColor: '#CD0CFF',
    textTransform: 'inherit',
    padding: '8px 24px',
    fontSize: '16px',
    fontWeight: 'normal',

    '@media (min-width: 800px)': {
      fontSize: '18px',
      padding: '10px 24px',
    },

    '&:hover, &$focusVisible': {
      opacity: '0.8',
      backgroundColor: '#CD0CFF',
      transition: 'opacity .3s ',
    },
  },
})(Button);

export const SecondaryButton = withStyles({
  root: {
    backgroundColor: 'black',
    border: '1px solid #CD0CFF',

    '@media (min-width: 800px)': {
      fontSize: '16px',
      padding: '8px 28px',
    },

    '&:hover, &$focusVisible': {
      opacity: '1',
      border: '2px solid #CD0CFF',
      backgroundColor: 'black',
    },
  },
})(PrimaryButton);

export const InformationButton = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    border: '1px solid #CD0CFF',

    '@media (min-width: 800px)': {
      fontSize: '18px',
      padding: '10px 24px',
    },

    '&:hover, &$focusVisible': {
      opacity: '0.8',
      backgroundColor: 'black',
      transition: 'opacity .3s ',
    },
  },
})(PrimaryButton);
