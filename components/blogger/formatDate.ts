import dayjs from 'dayjs';
export function formatDate(date: string) {
	return dayjs(date).format('DD.MM.YYYY');
}

export function formatTime(date: string) {
	return dayjs(date).format('hh:mm A');
}