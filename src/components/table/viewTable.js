import React from "react";
import {withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

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

const viewTable = (rows) => {
    return rows.map(row => {
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

export default viewTable;