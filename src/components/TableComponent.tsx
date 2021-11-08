import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type TableComponentProps = {
  datasource: any[];
};

class TableComponent extends React.Component<TableComponentProps> {
  render() {
    const { datasource } = this.props;
    const headers =
      datasource && datasource[0] ? Object.keys(datasource[0]) : [];
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((header: string, index) => (
                <TableCell key={header} align="right">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datasource.map((row, index) => (
              <>
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {headers.map((header: string) => (
                    <TableCell align="right">{row[header]}</TableCell>
                  ))}
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default TableComponent;
