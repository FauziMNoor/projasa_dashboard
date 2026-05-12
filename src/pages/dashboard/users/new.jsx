import { CONFIG } from 'src/global-config';

// TODO: Implementasi halaman users new

const metadata = { title: `users new - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>
      <div>Halaman users new — dalam pengembangan</div>
    </>
  );
}
