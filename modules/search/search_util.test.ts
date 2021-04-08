import ticketGenerator from './search_util'

// @ts-ignore
test('test ticketGenerator', () => {
  // ticketGenerator を実際に動かして結果を res に入れる
  const res = ticketGenerator(10)

  // 想定されるチケットの配列を記載する
  // contents はランダムなので、検証を省略する
  const expected = [
    {
      id: 1,
      contents: '',
    },
    {
      id: 2,
      contents: '',
    },
    {
      id: 3,
      contents: '',
    },
    {
      id: 4,
      contents: '',
    },
    {
      id: 5,
      contents: '',
    },
    {
      id: 6,
      contents: '',
    },
    {
      id: 7,
      contents: '',
    },
    {
      id: 8,
      contents: '',
    },
    {
      id: 9,
      contents: '',
    },
    {
      id: 10,
      contents: '',
    },
  ]

  // 先程作成したチケットの配列と id が一致するか比較する
  res.forEach((r, i) => {
    // @ts-ignore
    expect(r.id).toEqual(expected[i].id)
  })
  // 結果の配列の長さが同じか検証する
  // @ts-ignore
  expect(res.length).toEqual(10)
})
