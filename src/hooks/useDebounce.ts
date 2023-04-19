import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number = 1000): string => {
	const [debouncedValue, setDebouncedValue] = useState<string>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(handler);
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;
