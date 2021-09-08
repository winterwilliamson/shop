import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    background: 'rgb(131,58,180)',
background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(71,140,228,1) 100%, rgba(252,176,69,1) 100%)',
  
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));