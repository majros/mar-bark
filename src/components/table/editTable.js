import React from "react";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
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
        padding: '2px' //for_login
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const editTable = (rows) => {
    //console.log(rows)
    return rows.map(row => {
        return (
            <StyledTableRow key={row.key}>
                <StyledTableCell><TextField size="small" variant="outlined" multiline defaultValue={row.openPosition} /></StyledTableCell>
                <StyledTableCell><TextField size="small" variant="outlined" multiline defaultValue={row.position} /></StyledTableCell >
                <StyledTableCell><TextField size="small" variant="outlined" multiline defaultValue={row.shipType} /></StyledTableCell>
                <StyledTableCell><TextField size="small" variant="outlined" multiline defaultValue={row.dwt} /></StyledTableCell>
                <StyledTableCell><TextField size="small" variant="outlined" multiline defaultValue={row.salary} /></StyledTableCell>
                <StyledTableCell><TextField size="small" variant="outlined" multiline defaultValue={row.duration} /></StyledTableCell>
                <StyledTableCell><TextField size="small" variant="outlined" multiline defaultValue={row.joinDate} /></StyledTableCell>
                <StyledTableCell><TextField style={{minWidth: '250px'}} size="small" variant="outlined" multiline defaultValue={row.additionalInfo} /></StyledTableCell>
                <StyledTableCell><DeleteIcon fontSize="small" color="secondary"/></StyledTableCell>
            </StyledTableRow>
        )
    })
}

export default editTable;