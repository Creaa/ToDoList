export default theme => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-start'
        }
    },
    paperContainer: {
        width: '50%',
        height: '700px',
        borderRadius: 10,
        overflowX: 'scroll',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100vh'
        }
    },
    button: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        textAlign: 'center'
    },
    icon: {
        width: 80,
        height: 80,
        color: 'orange',
        cursor: 'pointer'
    }
})