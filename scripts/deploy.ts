import { ethers } from 'hardhat';

async function main() {
  const voting_SMC = await ethers.deployContract('voting_SMC');

  await voting_SMC.waitForDeployment();

  console.log('voting_SMC Contract Deployed at ' + voting_SMC.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});