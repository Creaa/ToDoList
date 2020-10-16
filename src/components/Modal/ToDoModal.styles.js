export default theme => ({
    modalWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paperWrapper: {
        width: '40%',
        height: '250px',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
})