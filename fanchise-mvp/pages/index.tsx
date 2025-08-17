import React, { useState } from "react";
import Nav from "../components/Nav";
import { useAddress, useContract, Web3Button } from "@thirdweb-dev/react";

const DROP = process.env.NEXT_PUBLIC_DROP_ADDRESS!;

export default function Home() {
  const { contract } = useContract(DROP, "nft-drop");
  const address = useAddress();

  return (
    <>
      <Nav />
      <main style={{maxWidth:960,margin:"40px auto"}}>
        <h1>Own a Franchise NFT • Earn Yield from the League Treasury</h1>
        <p>Mint limited team cards. Principal stays in treasury; rewards come from yield.</p>
        <div style={{marginTop:24}}>
          <Web3Button contractAddress={DROP} action={async (c)=> await c.erc721.claim(1)}>
            Mint Franchise Card
          </Web3Button>
        </div>
        <Standings />
      </main>
    </>
  );
}

function Standings() {
  const url = process.env.NEXT_PUBLIC_STANDINGS_SHEET_URL!;
  const [rows, setRows] = useState<string[][]>([]);
  React.useEffect(()=>{
    fetch(url).then(r=>r.text()).then(txt=>{
      const lines = txt.trim().split("\n").map(l=>l.split(","));
      setRows(lines);
    });
  },[url]);
  if (!rows.length) return null;
  return (
    <div style={{marginTop:32}}>
      <h2>Live Standings</h2>
      <table>
        <thead><tr>{rows[0].map((h,i)=><th key={i}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.slice(1).map((r,i)=>(
            <tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}