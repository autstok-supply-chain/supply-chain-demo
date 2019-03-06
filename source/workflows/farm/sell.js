import web3 from 'web3';
import { web3Service } from '../../domains/web3/service';
import { asset1 } from '../../domains/assets';
import { fund1 } from '../../domains/funds';
import { assetOwners } from '../../domains/asset-owners';

window.asset1 = asset1;
window.fund1 = fund1;
window.w3 = web3;

export function sell() {
  return web3Service.getWalletAddress().then((walletAddress) => {
    if (walletAddress.toLowerCase() !== assetOwners[0]) {
      alert('Please switch to asset 1 owner account in metamask');
      return;
    }

    return asset1.methods
      .transfer(fund1, web3.utils.toWei('10'))
      .send({ from: walletAddress })
      .catch((error) => {
        console.error(error);
      });
  });
}
