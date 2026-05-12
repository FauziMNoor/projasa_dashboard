import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TableContainer from '@mui/material/TableContainer';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import { DashboardContent } from 'src/layouts/dashboard';
import {
  getDashboardStats,
  getOrdersEnriched,
  ORDER_STATUS_COLORS,
  ORDER_STATUS_LABELS,
} from 'src/_mock/_projasa';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { Chart, useChart } from 'src/components/chart';

import { useMockedUser } from 'src/auth/hooks';

// ----------------------------------------------------------------------

const QUICK_ACTIONS = [
  { label: 'Buat Pesanan',       icon: 'solar:add-circle-bold',          color: 'primary',   path: paths.dashboard.orders.new },
  { label: 'Tambah Pelanggan',   icon: 'solar:user-plus-bold',           color: 'success',   path: paths.dashboard.customers.new },
  { label: 'Tambah Layanan',     icon: 'solar:settings-bold',            color: 'secondary', path: paths.dashboard.services.new },
  { label: 'Laporan Keuangan',   icon: 'solar:chart-2-bold',             color: 'warning',   path: paths.dashboard.finance.root },
  { label: 'Tambah Portofolio',  icon: 'solar:gallery-wide-bold',        color: 'info',      path: paths.dashboard.portfolios.new },
  { label: 'Kelola Pengguna',    icon: 'solar:users-group-rounded-bold', color: 'error',     path: paths.dashboard.users.list },
];

// ----------------------------------------------------------------------

function StatCard({ title, value, icon, color = 'primary', subtitle }) {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4">{value}</Typography>
            {subtitle && (
              <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                {subtitle}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: `${color}.lighter`,
              color: `${color}.main`,
            }}
          >
            <Iconify icon={icon} width={28} />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

function RecentOrdersTable({ orders }) {
  return (
    <Card>
      <CardHeader
        title="Permintaan Terbaru"
        subheader="5 pesanan masuk terakhir"
        action={
          <Button
            component={RouterLink}
            href={paths.dashboard.orders.list}
            size="small"
            endIcon={<Iconify icon="solar:arrow-right-linear" />}
          >
            Lihat Semua
          </Button>
        }
      />

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>No. Registrasi</TableCell>
              <TableCell>Pelanggan</TableCell>
              <TableCell>Layanan</TableCell>
              <TableCell>Tanggal</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.slice(0, 5).map((order) => (
              <TableRow key={order.id} hover>
                <TableCell>
                  <Typography
                    component={RouterLink}
                    href={paths.dashboard.orders.details(order.id)}
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      textDecoration: 'none',
                      fontFamily: 'monospace',
                    }}
                  >
                    {order.nomor_registrasi}
                  </Typography>
                </TableCell>
                <TableCell>{order.customer?.nama ?? '-'}</TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>
                  {order.service?.nama_layanan ?? '-'}
                </TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>{fDate(order.created_at)}</TableCell>
                <TableCell align="center">
                  <Label color={ORDER_STATUS_COLORS[order.status]}>
                    {ORDER_STATUS_LABELS[order.status]}
                  </Label>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

// ----------------------------------------------------------------------

function QuickActionsCard() {
  return (
    <Card>
      <CardHeader title="Aksi Cepat" subheader="Pintasan menu yang sering digunakan" />
      <CardContent>
        <Grid container spacing={2}>
          {QUICK_ACTIONS.map((action) => (
            <Grid key={action.label} size={{ xs: 6, sm: 4 }}>
              <Button
                component={RouterLink}
                href={action.path}
                fullWidth
                variant="outlined"
                color={action.color}
                startIcon={<Iconify icon={action.icon} />}
                sx={{ justifyContent: 'flex-start', py: 1.5 }}
              >
                {action.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

function OrderStatusSummary({ stats }) {
  const theme = useTheme();

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    labels: ['Pending', 'Sedang Proses', 'Selesai'],
    colors: [theme.palette.warning.main, theme.palette.primary.main, theme.palette.success.main],
    stroke: { width: 0 },
    tooltip: { y: { formatter: (v) => `${v} pesanan` } },
    plotOptions: { pie: { donut: { size: '70%' } } },
  });

  return (
    <Card>
      <CardHeader title="Status Pesanan" subheader="Distribusi status saat ini" />
      <CardContent>
        <Chart
          type="donut"
          series={[stats.pendingOrders, stats.processingOrders, stats.finishedOrders]}
          options={chartOptions}
          sx={{ height: 200 }}
        />

        <Stack spacing={1} sx={{ mt: 2 }}>
          {[
            { label: 'Pending',       count: stats.pendingOrders,    color: 'warning' },
            { label: 'Sedang Proses', count: stats.processingOrders, color: 'primary' },
            { label: 'Selesai',       count: stats.finishedOrders,   color: 'success' },
          ].map((item) => (
            <Stack key={item.label} direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: `${item.color}.main`,
                  }}
                />
                <Typography variant="body2">{item.label}</Typography>
              </Stack>
              <Label color={item.color}>{item.count}</Label>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

export function OverviewAppView() {
  const { user } = useMockedUser();

  const stats = getDashboardStats();
  const enrichedOrders = getOrdersEnriched();

  return (
    <DashboardContent maxWidth="xl">
      {/* ── Header Sambutan ── */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
        <Box>
          <Typography variant="h4">
            Selamat datang kembali 👋, {user?.displayName ?? 'Admin'}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Dashboard PROJASA — pantau semua aktivitas operasional Anda di sini.
          </Typography>
        </Box>

        <Button
          component={RouterLink}
          href={paths.dashboard.orders.new}
          variant="contained"
          startIcon={<Iconify icon="solar:add-circle-bold" />}
        >
          Buat Pesanan Baru
        </Button>
      </Stack>

      <Grid container spacing={3}>
        {/* ── Summary Cards ── */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Total Pesanan"
            value={stats.totalOrders}
            icon="solar:clipboard-list-bold"
            color="primary"
            subtitle="Seluruh waktu"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Menunggu"
            value={stats.pendingOrders}
            icon="solar:clock-circle-bold"
            color="warning"
            subtitle="Perlu ditindaklanjuti"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Pemasukan Bulan Ini"
            value={fCurrency(stats.incomeThisMonth)}
            icon="solar:wallet-money-bold"
            color="success"
            subtitle="Bulan berjalan"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Pengeluaran Bulan Ini"
            value={fCurrency(stats.expenseThisMonth)}
            icon="solar:card-send-bold"
            color="error"
            subtitle="Bulan berjalan"
          />
        </Grid>

        {/* ── Tabel Pesanan Terbaru ── */}
        <Grid size={{ xs: 12, md: 8 }}>
          <RecentOrdersTable orders={enrichedOrders} />
        </Grid>

        {/* ── Status Donut Chart ── */}
        <Grid size={{ xs: 12, md: 4 }}>
          <OrderStatusSummary stats={stats} />
        </Grid>

        {/* ── Quick Actions ── */}
        <Grid size={{ xs: 12 }}>
          <QuickActionsCard />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
