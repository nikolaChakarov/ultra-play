export const formatDate = (dateStr) => {
	const date = new Date(dateStr);

	let day = date.getDate();
	day = day > 9 ? day : '0' + day;
	let month = date.toLocaleString('default', { month: 'short' });
	let hours = date.getHours();
	hours = hours > 9 ? hours : '0' + hours;
	let minutes = date.getMinutes();
	minutes = minutes > 9 ? minutes : '0' + minutes;

	return `${day} ${month} ${hours}:${minutes}`;
};
