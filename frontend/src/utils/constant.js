export const USER_API_END_POINT="http://localhost:8000/api/v1/user";
export const TWEET_API_END_POINT="http://localhost:8000/api/v1/tweet";
export const timeSince = (timestamp) => {
  try {
    // Check if timestamp is a Date object or a string
    const time = typeof timestamp === 'object' ? timestamp.getTime() : Date.parse(timestamp);
    const now = Date.now();
    const secondsPast = (now - time) / 1000;
    const suffix = 'ago';

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    };

    // Iterate over intervals to find the appropriate time unit
    for (const i in intervals) {
      const interval = intervals[i];
      if (secondsPast >= interval) {
        const count = Math.floor(secondsPast / interval);
        return `${count} ${i}${count > 1 ? 's' : ''} ${suffix}`;
      }
    }

    // Fallback for cases less than a second
    return `less than a second ${suffix}`;
  } catch (error) {
    console.error('Error in timeSince function:', error);
    return 'Invalid date';
  }
};
