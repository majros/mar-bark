import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from '../axios/axios-vacancies';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorIndicator from "./error-indicator";
// import Switch from '@material-ui/core/Switch';

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
    switchBtn: {
        display: 'flex',
        justifyContent: 'flex-end',
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

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

class VacanciesTable extends Component {
    state = {
        rows: [],
        loading: true,
        error: false
    }

    renderTables () {
        return this.state.rows.map(row => {
            return (
                <StyledTableRow key={row.key}>
                    <StyledTableCell  align="center">{row.openPosition}</StyledTableCell>
                    <StyledTableCell  component="th" scope="row">{row.position}</StyledTableCell >
                    <StyledTableCell  align="center">{row.shipType}</StyledTableCell>
                    <StyledTableCell  align="center">{row.dwt}</StyledTableCell>
                    <StyledTableCell  align="center">{row.salary}</StyledTableCell>
                    <StyledTableCell  align="center">{row.duration}</StyledTableCell>
                    <StyledTableCell  align="center">{row.joinDate}</StyledTableCell>
                    <StyledTableCell  align="left">{row.additionalInfo}</StyledTableCell>
                </StyledTableRow>
            )
        })
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
            this.onError()
        }
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    render() {
        const { classes } = this.props;
        const { loading, error } = this.state;

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
                        { this.renderTables() }
                    </TableBody>
                </Table>
            </TableContainer>
            : null;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={3} >
                    { errorMessage }
                    { spinner }
                    { content }
                    {/*<div className={classes.switchBtn}>*/}
                    {/*    <Switch*/}
                    {/*        size="small"*/}
                    {/*        defaultChecked*/}
                    {/*        color="default"*/}

                    {/*    />*/}
                    {/*</div>*/}
                </Paper>
            </div>
        );
    }
}

export default withStyles(useStyles)(VacanciesTable);