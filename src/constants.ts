import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  FUJI = 43113,
  SHIBARIUM = 719,
  CRYPTOSEALS = 6942069,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xBB6e8C136ca537874a6808dBFC5DaebEd9a57554',
  [ChainId.SHIBARIUM]: '0x3587B8c0136c2C3605a9E5B03ab54Da3e4044b50',
  [ChainId.CRYPTOSEALS]: '0x1b55417301ba66e2E53E82B28EF87FeEd98663b7',
}

export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xff99ac007cf1fdec4433d14d805e534a66720236eeec1657964ea15adacd258b',
  [ChainId.SHIBARIUM]: '0x81dbf51ab39dc634785936a3b34def28bf8007e6dfa30d4284c4b8547cb47a51',
  [ChainId.CRYPTOSEALS]: '0x81dbf51ab39dc634785936a3b34def28bf8007e6dfa30d4284c4b8547cb47a51',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
