import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { visuallyHidden } from "@mui/utils";
import { getComparator, Order, stableSort } from "@/utils/Sorts";
import { useRecoilValue } from "recoil";
import { monthState } from "@/globalStates/date/month";
import { yearState } from "@/globalStates/date/year";

interface Data {
  date: string;
  category: string;
  store: string;
  item: string;
  money: string;
  payment: string;
  remarks: string;
}

function createData(
  date: string,
  category: string,
  store: string,
  item: string,
  money: string,
  payment: string,
  remarks: string
): Data {
  return {
    date,
    category,
    store,
    item,
    money,
    payment,
    remarks,
  };
}

const rows = [
  createData("20230101", "J:COM", "J:COM", "", "9878", "MasterCard", "12月分"),
  createData(
    "20230102",
    "フォーサイト",
    "フォーサイト",
    "",
    "800",
    "MasterCard",
    "12月分"
  ),
  createData(
    "20230103",
    "雑貨",
    "サンドラック",
    "",
    "1226",
    "MasterCard",
    "12月分"
  ),
  createData(
    "20230104",
    "食品",
    "コストコ",
    "",
    "13245",
    "MasterCard",
    "12月分"
  ),
  createData(
    "20230105",
    "灯油",
    "ロイヤル",
    "30リットル",
    "3420",
    "MasterCard",
    "12月分"
  ),
  createData("20230106", "食品", "カスミ", "", "497", "MasterCard", "12月分"),
  createData(
    "20230107",
    "生命保険",
    "メディケア保険",
    "",
    "10370",
    "MasterCard",
    "12月分"
  ),
  createData(
    "20230108",
    "雑貨",
    "サンドラック",
    "",
    "695",
    "MasterCard",
    "12月分"
  ),
  createData("20230109", "食品", "カスミ", "", "497", "MasterCard", "12月分"),
  createData(
    "20230110",
    "ガソリン",
    "エネオス",
    "17.06リットル",
    "2576",
    "MasterCard",
    "12月分"
  ),
  createData(
    "20230111",
    "朝日新聞",
    "朝日新聞",
    "",
    "4400",
    "MasterCard",
    "12月分"
  ),
  createData(
    "20230112",
    "東京電力",
    "東京電力",
    "",
    "12410",
    "MasterCard",
    "12月分"
  ),
  createData(
    "20230112",
    "車点検費",
    "ネッツトヨタ",
    "",
    "9647",
    "MasterCard",
    "12月分"
  ),
];

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "日付",
  },
  {
    id: "category",
    numeric: true,
    disablePadding: false,
    label: "分類",
  },
  {
    id: "store",
    numeric: true,
    disablePadding: false,
    label: "店舗",
  },
  {
    id: "item",
    numeric: true,
    disablePadding: false,
    label: "商品",
  },
  {
    id: "money",
    numeric: true,
    disablePadding: false,
    label: "金額",
  },
  {
    id: "payment",
    numeric: true,
    disablePadding: false,
    label: "支払方法",
  },
  {
    id: "remarks",
    numeric: true,
    disablePadding: false,
    label: "備考",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}: EnhancedTableProps) {
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar({ numSelected }: EnhancedTableToolbarProps) {
  const selectedMonth = useRecoilValue(monthState);
  const selectedYear = useRecoilValue(yearState);
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} 件選択
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {selectedYear} 年 {selectedMonth} 月の詳細
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="削除">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="新規追加">
          <IconButton>
            <PostAddIcon fontSize="large" sx={{ color: "black" }} />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

export default function Page() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("date");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [dense, setDense] = React.useState(false);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.date);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice()
                .map((row, index) => {
                  const isItemSelected = isSelected(row.date);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.date)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.date}
                      </TableCell>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.store}</TableCell>
                      <TableCell align="right">{row.item}</TableCell>
                      <TableCell align="right">{row.money}</TableCell>
                      <TableCell align="right">{row.payment}</TableCell>
                      <TableCell align="right">{row.remarks}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="行間を詰める"
      />
    </Box>
  );
}
