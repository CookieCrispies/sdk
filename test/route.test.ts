import { Token, WBONE, ChainId, Pair, TokenAmount, Route, CAVAX } from '../src'

describe('Route', () => {
  const token0 = new Token(ChainId.SHIBARIUM, '0x0000000000000000000000000000000000000001', 18, 't0')
  const token1 = new Token(ChainId.SHIBARIUM, '0x0000000000000000000000000000000000000002', 18, 't1')
  const weth = WBONE[ChainId.SHIBARIUM]
  const pair_0_1 = new Pair(new TokenAmount(token0, '100'), new TokenAmount(token1, '200'), ChainId.SHIBARIUM)
  const pair_0_weth = new Pair(new TokenAmount(token0, '100'), new TokenAmount(weth, '100'), ChainId.SHIBARIUM)
  const pair_1_weth = new Pair(new TokenAmount(token1, '175'), new TokenAmount(weth, '100'), ChainId.SHIBARIUM)

  it('constructs a path from the tokens', () => {
    const route = new Route([pair_0_1], token0)
    expect(route.pairs).toEqual([pair_0_1])
    expect(route.path).toEqual([token0, token1])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(token1)
    expect(route.chainId).toEqual(ChainId.SHIBARIUM)
  })

  it('can have a token as both input and output', () => {
    const route = new Route([pair_0_weth, pair_0_1, pair_1_weth], weth)
    expect(route.pairs).toEqual([pair_0_weth, pair_0_1, pair_1_weth])
    expect(route.input).toEqual(weth)
    expect(route.output).toEqual(weth)
  })

  it('supports ether input', () => {
    const route = new Route([pair_0_weth], CAVAX)
    expect(route.pairs).toEqual([pair_0_weth])
    expect(route.input).toEqual(CAVAX)
    expect(route.output).toEqual(token0)
  })

  it('supports ether output', () => {
    const route = new Route([pair_0_weth], token0, CAVAX)
    expect(route.pairs).toEqual([pair_0_weth])
    expect(route.input).toEqual(token0)
    expect(route.output).toEqual(CAVAX)
  })
})
