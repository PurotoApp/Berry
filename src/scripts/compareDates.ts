export function compareDates(date) {
	const date1 = new Date(date).getTime();
	const date2 = new Date().getTime();
	const difference_ms = date2 - date1;
	const difference_days = Math.floor(difference_ms / (1000 * 3600 * 24));
	const difference_hours = Math.floor(difference_ms / (1000 * 3600));
	const difference_minutes = Math.floor(difference_ms / (1000 * 60));
	const difference_seconds = Math.floor(difference_ms / 1000);
	if (difference_days >= 7) {
		if (new Date(date).getFullYear() != new Date().getFullYear()) {
			// returns DD/MM/YYYY
			return `${new Date(date).getDate()} ${new Date(date).toLocaleString('default', {
				month: 'short'
			})} ${new Date(date).getFullYear()}`;
		} else {
			// returns DD/MM
			return `${new Date(date).getDate()} ${new Date(date).toLocaleString('default', {
				month: 'short'
			})}`;
		}
	} else if (difference_days > 0) {
		return `${difference_days} ${difference_days == 1 ? 'day' : 'days'} ago`;
	} else if (difference_hours > 0) {
		return `${difference_hours} ${difference_hours == 1 ? 'hour' : 'hours'} ago`;
	} else if (difference_minutes > 0) {
		return `${difference_minutes} ${difference_minutes == 1 ? 'minute' : 'minutes'} ago`;
	} else {
		if (difference_seconds > 0) {
			return `${difference_seconds} ${difference_seconds == 1 ? 'second' : 'seconds'} ago`;
		} else {
			return 'IN THE FUTUUUURE';
		}
	}
}
