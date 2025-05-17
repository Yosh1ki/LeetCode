class RecentCounter {
  private queue: number[];

  constructor() {
    this.queue = [];
  }
  /**
   * t ミリ秒でのリクエストを追加し、
   * 過去 3000ms（[t-3000, t]）に含まれるリクエスト数を返す
   * @param t 現在の時刻（ミリ秒）
   * @returns 直近 3000ms 以内のリクエスト数
   */
  ping(t: number): number {
    this.queue.push(t);
    const lowerBound = t - 3000;

    while (this.queue.length && this.queue[0] < lowerBound) {
      this.queue.shift();
    }
    return this.queue.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
