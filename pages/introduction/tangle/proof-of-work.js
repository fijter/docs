import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { lewi } from '../../../lib/data/team'

// prettier-ignore
export default withDoc({
  title: 'PoW on the Tangle',
  date: '20 Feburary 2018',
  authors: [lewi],
  editUrl: 'pages/introduction/tangle/proof-of-work.js',
})(markdown(components)`
IOTA uses PoW for spam protection, similar in spirit to the 
PoW used in [Hashcash](https://en.wikipedia.org/wiki/Hashcash).
 This is a short computational operation, 
which should not be confused with the expensive PoW employed in 
miner-based ledgers such as Bitcoin.

## Min Weight Magnitude
The difficulty of the PoW is set by a variable called Minimum Weight 
Magnitude (MWM). This refers to the number of trailing zeros (in trits) 
in transaction hash. MWM is proportional to the difficulty of the Proof of Work. 

The device which does the PoW will bruteforce the transaction
hash to find a \`nonce\` that, hashed together with the transaction's trits,
will result in a transaction hash that has the correct number of trailing 0's.
Every extra trailing zero to be found will increase the difficulty of PoW 
by 3 times. 

### MWM values 
- Mainnet MWM parameter: 14
- Testnet MWM parameter: 9
`)
