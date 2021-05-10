/**
 * Exercises the token program
 *
 * @flow
 */

import {
  loadTokenProgram,
  createMint,
  createAccount,
  createAssociatedAccount,
  transfer,
  transferChecked,
  transferCheckedAssociated,
  approveRevoke,
  failOnApproveOverspend,
  setAuthority,
  mintTo,
  mintToChecked,
  multisig,
  burn,
  burnChecked,
  freezeThawAccount,
  closeAccount,
  nativeToken,
  runDeposit,
} from './token-test';

async function main() {
  console.log('Run test: loadTokenProgram');
  await loadTokenProgram();
  console.log('Run test: createMint');
  await createMint();
  console.log(" Run Depsit");
  await runDeposit();
}

main()
  .catch(err => {
    console.error(err);
    process.exit(-1);
  })
  .then(() => process.exit());
