export default class Searcher {
  // 線形探索
  static linearSearch(tickets: any, target: any) {
    const result = { count: 1, ticket: null }
    for (const ticket of tickets) {
      if (ticket.id === target) {
        result.ticket = ticket
        return result
      }
      result.count++
    }
    return null
  }

  // 二分探索
  static binarySearch(tickets: string | any[], target: number) {
    if (tickets.length <= 0) {
      return null
    }
    const result = { count: 1, ticket: null }

    let left = 0
    let right = tickets.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (tickets[mid].id === target) {
        result.ticket = tickets[mid]
        return result
      } else if (tickets[mid].id < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
      result.count++
    }
    return null
  }
}
