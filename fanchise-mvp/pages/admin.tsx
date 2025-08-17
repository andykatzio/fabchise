import Nav from "../components/Nav";
import { useAddress } from "@thirdweb-dev/react";
const ADMIN = (process.env.ADMIN_WALLET||"").toLowerCase();

export default function Admin() {
  const address = (useAddress()||"").toLowerCase();
  const isAdmin = address === ADMIN;

  return (
    <>
      <Nav />
      <main style={{maxWidth:800,margin:"40px auto"}}>
        <h1>Admin</h1>
        {!isAdmin ? <p>Admin-only.</p> : (
          <>
            <p>Paste/confirm Google Sheet URL in Vercel env. Update weekly standings there.</p>
          </>
        )}
      </main>
    </>
  );
}