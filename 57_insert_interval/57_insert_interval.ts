function insert(intervals: number[][], newInterval: number[]): number[][] {
  let res: number[][] = [];

  for (let interval of intervals) {
    if (newInterval[1] < interval[0]) {
      res.push(newInterval);
      newInterval = interval;
    } else if (newInterval[0] > interval[1]) {
      res.push(interval);
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }
  res.push(newInterval);
  return res;
}
