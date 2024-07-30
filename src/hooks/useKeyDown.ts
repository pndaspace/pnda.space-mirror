import { useEffect } from "react"

const useKeyDown = (callback: () => void, keys: string[]) => {
	useEffect(() => {
		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.removeEventListener("keydown", onKeyDown)
		}
	});

	const onKeyDown = (event: { key: string; preventDefault: () => void; }) => {
		const isKeyPressed = keys.some((key) => event.key === key);
		if (isKeyPressed) {
			event.preventDefault();
			callback();
		}
	}
};

export default useKeyDown;