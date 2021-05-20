/**
 * Exercises the token program
 *
 * @flow
 */

import {
  loadTokenProgram,
  createMint,
  createAccount,
  transfer,
  mintTo,
  runDeposit,
  withDraw,
  runGetFullBalance,
  runApproveChecked
} from './token-test';

async function main() {
  console.log("********** NoVa FINaNCe NTOKEN PROJECT **********");
  console.log('Run test: loadTokenProgram');
  await loadTokenProgram();
  console.log('Run test: createMint');
  await createMint();
  console.log("Run test: createAccount");
  await createAccount();
  console.log('Run test: mintTo');
  await mintTo();
  // console.log ("Run test: runGetFullBalance ")
  // await runGetFullBalance();
  console.log("Run test: approveChecked");
  await runApproveChecked();
  console.log("Run test: runDeposit");
  await runDeposit();
 // console.log('Run test: transfer');
  // await transfer();
  console.log('Run test: withDraw');
  await withDraw();
  console.log( " *************** Finish *************** ");
}

main()
  .catch(err => {
    console.error(err);
    process.exit(-1);
  })
  .then(() => process.exit());
