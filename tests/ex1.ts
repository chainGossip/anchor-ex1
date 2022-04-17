import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Ex1 } from "../target/types/ex1";

describe("ex1", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Ex1 as Program<Ex1>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
