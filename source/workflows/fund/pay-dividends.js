import { cryptoYen } from '../../domains/crypto-yen';
import { deployerAddress } from '../../domains/deployer';
import { fund1 } from '../../domains/funds';
import { investor1 } from '../../domains/investors';

export function payDividends() {
  return fund1.methods
    .dividendsRightsOf(investor1)
    .call()
    .then((balance) => {
      return fund1.methods
        .releaseDividendsRights(investor1, balance)
        .send({ from: deployerAddress })
        .then(() => {
          cryptoYen.methods
            .transferFrom(fund1._address, investor1, balance)
            .send({ from: investor1 });
        });
    });
}
