import Nav from "../components/Nav";
import { useOwnedNFTs, useContract, useAddress } from "@thirdweb-dev/react";
const DROP = process.env.NEXT_PUBLIC_DROP_ADDRESS!;

export default function Me() {
  const address = useAddress();
  const { contract } = useContract(DROP, "nft-drop");
  const { data: nfts } = useOwnedNFTs(contract, address);

  return (
    <>
      <Nav />
      <main style={{maxWidth:960,margin:"40px auto"}}>
        <h1>My Franchise Cards</h1>
        {!address && <p>Connect your wallet to view holdings.</p>}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px,1fr))",gap:16}}>
          {nfts?.map((n)=>(
            <div key={n.metadata.id} style={{border:"1px solid #333",padding:12,borderRadius:8}}>
              <img src={n.metadata.image as string} style={{width:"100%",borderRadius:6}}/>
              <div style={{marginTop:8,fontWeight:600}}>{n.metadata.name}</div>
              <div>Token #{n.metadata.id}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}