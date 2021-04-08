import Searcher from './searcher'
import ticketGenerator from './search_util'

// @ts-ignore
test('test linear search', () => {
  const tickets = ticketGenerator(10)
  const res = Searcher.linearSearch(tickets, 5)
  // @ts-ignore
  expect(res).toEqual(expect.anything())
  // @ts-ignore
  expect(res.ticket.id).toEqual(5)
  // @ts-ignore
  expect(res.count).toEqual(5)
})

// @ts-ignore
test('test binary search', () => {
  const tickets = ticketGenerator(10)
  const res = Searcher.binarySearch(tickets, 5)
  // @ts-ignore
  expect(res).toEqual(expect.anything())
  // @ts-ignore
  expect(res.ticket.id).toEqual(5)
  // @ts-ignore
  expect(res.count).toEqual(1)
})
