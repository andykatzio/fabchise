import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Nav() {
  return (
    <nav style={{display:"flex",justifyContent:"space-between",padding:"12px"}}>
      <Link href="/">FanChise</Link>
      <div style={{display:"flex",gap:16}}>
        <Link href="/me">My Profile</Link>
        <Link href="/admin">Admin</Link>
        <ConnectWallet theme="light" />
      </div>
    </nav>
  );
}