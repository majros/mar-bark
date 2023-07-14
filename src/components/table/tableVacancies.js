import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import {Typography} from "@material-ui/core";
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from '../../axios/axios-vacancies';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorIndicator from "../error-indicator";
import Switch from '@material-ui/core/Switch';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import editTable from "./editTable";
import viewTable from "./viewTable";
// import {rows} from './_listVacancies'

const useStyles = theme => ({
    root: {
        margin: "auto",
        marginTop: '10px',
        width: '98%',
        position: "relative",
    },
    paper: {
        padding: theme.spacing(1),
    },
    btnDiv: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    btnDownloads: {
        display: 'flex',
        alignItems: 'center'
    },
    spinner: {
        display: 'flex',
        margin: 'auto',
    }
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.secondary.alt,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
        color: theme.palette.common.black,
    },
}))(TableCell);

class VacanciesTable extends Component {
    state = {
        rows: [],
        loading: true,
        login: true ,
        error: false
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/ListOfJobs.json')
            const rows = response.data

            this.setState({
                rows,
                loading: false
            })
        } catch (e) {
            this.onError(e)
        }
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };

    render() {
        const { classes } = this.props;
        const { loading, error, login } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <CircularProgress className={classes.spinner} color="secondary"/> : null;
        const content = hasData
            ? <TableContainer>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>OPEN POSITIONS</StyledTableCell>
                            <StyledTableCell>POSITION</StyledTableCell>
                            <StyledTableCell>SHIP TYPE</StyledTableCell>
                            <StyledTableCell>DWT</StyledTableCell>
                            <StyledTableCell>SALARY (USD)</StyledTableCell>
                            <StyledTableCell>DURATION</StyledTableCell>
                            <StyledTableCell>JOIN DATE</StyledTableCell>
                            <StyledTableCell>ADDITIONAL INFO</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {viewTable(this.state.rows)}
                        {/*{ !login ? viewTable(this.state.rows) : editTable(this.state.rows) }*/}
                    </TableBody>
                </Table>
            </TableContainer>
            : null;

        const auth = !loading
            ? <div className={classes.btnDiv}>
                {login
                    ? <div className={classes.btnDownloads}>
                        <AddCircleIcon style={{ color: '#388e3c' }} fontSize="large"/>
                        <Typography>Add new line</Typography>
                      </div>
                    : <div/>}
                <Switch
                    defaultChecked
                    color="default"
                    fontSize="small"
                />
              </div>
            : null

        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={3} >
                    { errorMessage }
                    { spinner }
                    { content }
                    {/*{ auth }*/}
                </Paper>
            </div>
        );
    }
}

export default withStyles(useStyles)(VacanciesTable);