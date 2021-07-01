import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  buttons: {
    [theme.breakpoints.up('xs')]: {
      marginRight: '200px',
    },
    left: "40%",
  },
  emptyButton: {
    minWidth: '150px',
    borderRadius: "20px",
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    borderRadius: "20px",
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    marginBottom:  '10%',
    marginLeft: '30%',
    width: '100%',
    position: 'center',
    justifyContent: 'space-between',
  },
}));