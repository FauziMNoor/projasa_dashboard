import { useBoolean, usePopover } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fCurrency } from 'src/utils/format-number';
import { fDate, fTime } from 'src/utils/format-time';

import { ORDER_STATUS_COLORS, ORDER_STATUS_LABELS } from 'src/_mock/_projasa';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export function OrderTableRow({ row, selected, onSelectRow, onDeleteRow }) {
  const confirmDialog = useBoolean();
  const menuActions = usePopover();

  const detailsHref = paths.dashboard.orders.details(row.id);

  const renderPrimaryRow = () => (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={selected}
          onClick={onSelectRow}
          slotProps={{
            input: {
              id: `${row.id}-checkbox`,
              'aria-label': `${row.id} checkbox`,
            },
          }}
        />
      </TableCell>

      <TableCell>
        <Link component={RouterLink} href={detailsHref} color="inherit" underline="always">
          {row.nomor_registrasi}
        </Link>
      </TableCell>

      <TableCell>
        <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
          <Stack sx={{ typography: 'body2', flex: '1 1 auto', alignItems: 'flex-start' }}>
            <Box component="span" sx={{ fontWeight: 'bold' }}>{row.customer?.nama ?? '-'}</Box>
            <Box component="span" sx={{ color: 'text.disabled' }}>
              {row.customer?.email ?? row.customer?.telepon ?? '-'}
            </Box>
          </Stack>
        </Box>
      </TableCell>

      <TableCell>
        <ListItemText
          primary={row.service?.nama_layanan ?? '-'}
          secondary={row.service?.kategori ?? '-'}
          slotProps={{
            primary: { noWrap: true, sx: { typography: 'body2' } },
            secondary: { sx: { mt: 0.5, typography: 'caption' } },
          }}
        />
      </TableCell>

      <TableCell>
        <ListItemText
          primary={fDate(row.created_at)}
          secondary={fTime(row.created_at)}
          slotProps={{
            primary: { noWrap: true, sx: { typography: 'body2' } },
            secondary: { sx: { mt: 0.5, typography: 'caption' } },
          }}
        />
      </TableCell>

      <TableCell> {fCurrency(row.service?.harga ?? 0)} </TableCell>

      <TableCell>
        <Label variant="soft" color={ORDER_STATUS_COLORS[row.status] || 'default'}>
          {ORDER_STATUS_LABELS[row.status] || row.status}
        </Label>
      </TableCell>

      <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
        <IconButton color={menuActions.open ? 'inherit' : 'default'} onClick={menuActions.onOpen}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </TableCell>
    </TableRow>
  );

  const renderMenuActions = () => (
    <CustomPopover
      open={menuActions.open}
      anchorEl={menuActions.anchorEl}
      onClose={menuActions.onClose}
      slotProps={{ arrow: { placement: 'right-top' } }}
    >
      <MenuList>
        <MenuItem
          onClick={() => {
            confirmDialog.onTrue();
            menuActions.onClose();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Hapus
        </MenuItem>

        <li>
          <MenuItem component={RouterLink} href={detailsHref} onClick={() => menuActions.onClose()}>
            <Iconify icon="solar:eye-bold" />
            Detail
          </MenuItem>
        </li>
      </MenuList>
    </CustomPopover>
  );

  const renderConfirmDialog = () => (
    <ConfirmDialog
      open={confirmDialog.value}
      onClose={confirmDialog.onFalse}
      title="Hapus"
      content="Apakah Anda yakin ingin menghapus pesanan ini?"
      action={
        <Button variant="contained" color="error" onClick={onDeleteRow}>
          Hapus
        </Button>
      }
    />
  );

  return (
    <>
      {renderPrimaryRow()}
      {renderMenuActions()}
      {renderConfirmDialog()}
    </>
  );
}
