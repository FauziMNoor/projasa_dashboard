import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Layanan',
    children: [
      { name: 'Izin Usaha', href: '/#layanan' },
      { name: 'Legalitas PT/CV', href: '/#layanan' },
      { name: 'PBG & SLF', href: '/#layanan' },
      { name: 'UKL-UPL', href: '/#layanan' },
      { name: 'SAMSAT', href: '/#layanan' },
      { name: 'Outsourcing', href: '/#layanan' },
    ],
  },
  {
    headline: 'Perusahaan',
    children: [
      { name: 'PT Projasa Legal Insani', href: '#' },
      { name: 'PT Projasa Nusantara Jaya', href: '#' },
      { name: 'PT Projasa Teknika Studio', href: '#' },
    ],
  },
  {
    headline: 'Kontak',
    children: [
      { name: '0812-5532-111', href: 'https://wa.me/628125532111' },
      { name: 'support@projasa.co.id', href: 'mailto:support@projasa.co.id' },
      { name: 'Jl. Pulau Batanta No.18 B, Denpasar, Bali', href: '#' },
    ],
  },
];

const SOCIALS = [
  { label: 'Instagram', icon: 'mdi:instagram', href: 'https://www.instagram.com/projasa.co.id/' },
  { label: 'TikTok', icon: 'ic:baseline-tiktok', href: 'https://www.tiktok.com/@projasa.co.id' },
  { label: 'Facebook', icon: 'mdi:facebook', href: 'https://web.facebook.com/projasa.co.id' },
  { label: 'WhatsApp', icon: 'mdi:whatsapp', href: 'https://wa.me/628125532111' },
];

// ----------------------------------------------------------------------

const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.vars.palette.background.default,
}));

export function Footer({ sx, layoutQuery = 'md', ...other }) {
  return (
    <FooterRoot sx={sx} {...other}>
      <Divider />

      <Container
        sx={(theme) => ({
          pb: 5,
          pt: 10,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        })}
      >
        <Logo />

        <Grid
          container
          sx={[
            (theme) => ({
              mt: 3,
              justifyContent: 'center',
              [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
            }),
          ]}
        >
          <Grid size={{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="body2"
              sx={(theme) => ({
                mx: 'auto',
                maxWidth: 280,
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              })}
            >
              Solusi legalitas bisnis terpercaya di Bali. Urus izin usaha, legalitas, dan dokumen
              teknis tanpa ribet bersama Projasa Group.
            </Typography>

            <Box
              sx={(theme) => ({
                mt: 3,
                mb: 5,
                display: 'flex',
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              })}
            >
              {SOCIALS.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Iconify icon={social.icon} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, [layoutQuery]: 6 }}>
            <Box
              sx={(theme) => ({
                gap: 5,
                display: 'flex',
                flexDirection: 'column',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
              })}
            >
              {LINKS.map((list) => (
                <Box
                  key={list.headline}
                  sx={(theme) => ({
                    gap: 2,
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  })}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © 2026 Projasa Group. Hak cipta dilindungi.
        </Typography>
      </Container>
    </FooterRoot>
  );
}

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }) {
  return (
    <FooterRoot
      sx={[
        {
          py: 5,
          textAlign: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Logo />
        <Box sx={{ mt: 1, typography: 'caption', color: 'text.secondary' }}>
          © 2026 Projasa Group. Hak cipta dilindungi.
        </Box>
      </Container>
    </FooterRoot>
  );
}
