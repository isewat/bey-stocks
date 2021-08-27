import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { VolumeDown } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

const columns = [
  { id: 'name', label: 'Stock', minWidth: 170 },
  { id: 'volume', label: 'Volume', minWidth: 100 },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'ordertype',
    label: 'Ordertype',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'total',
    label: 'Total',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

// function createData(name, volume, price, ordertype) {
//   const total = price * volume;
//   return { name, volume, price, ordertype, total };
// }





// const rows = [
//   createData('Microsoft', 4, 240.5, "buy"),
//   createData('Apple', 20, 124.2, "sell"),
//   createData('Cellink', 143, 53.4, "buy"),
//   createData('Adobe', 9, 524.6, "buy"),
//   createData('Amazon', 3, 3134.2, "buy"),
//   createData('Gazprom', 9, 6.4, "sell"),
//   createData('NIO', 26, 34.6, "buy"),
//   createData('Abcellera Biologics', 14, 13.90, "sell"),
//   createData('POST', 20, 52.3, "buy"),
//   createData('Volkswagen', 4, 201.2, "buy"),
//   createData('Mynaric', 36, 74.7, "sell"),
//   createData('MSCI World ETF', 70, 73.4, "buy"),
//   createData('Alfen', 20, 80.2, "sell"),
//   createData('UiPath', 100, 53.2, "buy"),
//   createData('PayPal', 18, 222.6, "buy"),
// ];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 1500,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };



  useEffect(() => {
    fetch("http://localhost:8000/stocks")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setRows(data);
      })
  }, [])

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const colorMap = {
    buy: "#44cc2c",
    sell: "red"
  }

  const getCellColor = (row) => {
    /* switch (row.ordertype) {
      case "buy": return "red"
      case "sell": return "lightgreen"
      default: return undefined
    } */

    return colorMap[row.ordertype]
  }



  return (
    <div classname="list">
      <a href="/add">
        <button id="button1"> Add order </button>
      </a>
      {rows && <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
             <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ color: column.id === "ordertype" ? getCellColor(row) : undefined }}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}

                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>}
    </div>
  );
}
















