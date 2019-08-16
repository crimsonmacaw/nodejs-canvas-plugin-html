import moment from 'moment';
import 'moment-timezone/builds/moment-timezone-with-data';

export const formatdate = {
  name: 'formatdate',
  fn: (ts, format, timezone) => {
    timezone = timezone == undefined ? 'UTC' : timezone;
    return moment.utc(new Date(ts)).tz(timezone).format(format);
  }
};
