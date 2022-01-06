import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {rows} from './components/_listVacancies';

const useStyles = makeStyles({
    root: {
    },
    table: {
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.light,
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

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer >
            <Table aria-label="customized table" component="span">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>POSITION</StyledTableCell>
                        <StyledTableCell>SHIP TYPE</StyledTableCell>
                        <StyledTableCell>DWT</StyledTableCell>
                        <StyledTableCell>SALARY (USD)</StyledTableCell>
                        <StyledTableCell>DURATION (MONTHS)</StyledTableCell>
                        <StyledTableCell>JOIN DATE</StyledTableCell>
                        <StyledTableCell>ADDITIONAL INFO</StyledTableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    );
}