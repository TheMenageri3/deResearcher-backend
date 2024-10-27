/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";
import { type AddPeerReview, addPeerReviewBeet } from "../types/AddPeerReview";

/**
 * @category Instructions
 * @category AddPeerReview
 * @category generated
 */
export type AddPeerReviewInstructionArgs = {
  addPeerReview: AddPeerReview;
};
/**
 * @category Instructions
 * @category AddPeerReview
 * @category generated
 */
export const AddPeerReviewStruct = new beet.FixableBeetArgsStruct<
  AddPeerReviewInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ["instructionDiscriminator", beet.u8],
    ["addPeerReview", addPeerReviewBeet],
  ],
  "AddPeerReviewInstructionArgs"
);
/**
 * Accounts required by the _AddPeerReview_ instruction
 *
 * @property [_writable_, **signer**] reviewerAcc
 * @property [_writable_] researcherProfilePdaAcc
 * @property [_writable_] paperPdaAcc
 * @property [_writable_] peerReviewPdaAcc
 * @property [] systemProgramAcc
 * @category Instructions
 * @category AddPeerReview
 * @category generated
 */
export type AddPeerReviewInstructionAccounts = {
  reviewerAcc: web3.PublicKey;
  researcherProfilePdaAcc: web3.PublicKey;
  paperPdaAcc: web3.PublicKey;
  peerReviewPdaAcc: web3.PublicKey;
  systemProgramAcc: web3.PublicKey;
};

export const addPeerReviewInstructionDiscriminator = 3;

/**
 * Creates a _AddPeerReview_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AddPeerReview
 * @category generated
 */
export function createAddPeerReviewInstruction(
  accounts: AddPeerReviewInstructionAccounts,
  args: AddPeerReviewInstructionArgs,
  programId = new web3.PublicKey("BdtzNv4J5DSCA52xK6KLyKG5qorajuwfmJV2WivPkRsW")
) {
  const [data] = AddPeerReviewStruct.serialize({
    instructionDiscriminator: addPeerReviewInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.reviewerAcc,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.researcherProfilePdaAcc,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.paperPdaAcc,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.peerReviewPdaAcc,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgramAcc,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}