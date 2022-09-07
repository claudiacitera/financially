import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarEntrata: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarUscita: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));
