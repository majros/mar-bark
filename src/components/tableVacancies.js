import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {rows} from './_listVacancies';

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
    return (
        <TableContainer component="span">
            <Table component="span" aria-label="customized table">
                <TableHead component="span">
                    <TableRow component="span">
                        <StyledTableCell component="span">POSITION</StyledTableCell>
                        <StyledTableCell component="span">SHIP TYPE</StyledTableCell>
                        <StyledTableCell component="span">DWT</StyledTableCell>
                        <StyledTableCell component="span">SALARY (USD)</StyledTableCell>
                        <StyledTableCell component="span">DURATION (MONTHS)</StyledTableCell>
                        <StyledTableCell component="span">JOIN DATE</StyledTableCell>
                        <StyledTableCell component="span">ADDITIONAL INFO</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody component="span">
                    {rows.map((row) => (
                        <StyledTableRow component="span" key={row.key}>
                            <StyledTableCell component="span" scope="row">{row.position}</StyledTableCell >
                            <StyledTableCell component="span" align="center">{row.shipType}</StyledTableCell>
                            <StyledTableCell component="span" align="center">{row.dwt}</StyledTableCell>
                            <StyledTableCell component="span" align="center">{row.salary}</StyledTableCell>
                            <StyledTableCell component="span" align="center">{row.duration}</StyledTableCell>
                            <StyledTableCell component="span" align="center">{row.joinDate}</StyledTableCell>
                            <StyledTableCell component="span" align="left">{row.additionalInfo}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}