import { useEffect, useRef, useState } from "react";

export enum Platform {
	MAC = "MAC",
	WIN = "WIN",
}

export const usePlatform = () => {
	const [platform, setPlatform] = useState<Platform>();
	const isWinRef = useRef(false);
	const isMacRef = useRef(false);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const userAgent = window.navigator.userAgent;
		const isWin = userAgent.includes("Windows");
		const isMac = userAgent.includes("Mac");
		isWinRef.current = isWin;
		isMacRef.current = isMac;

		if (isMac) setPlatform(Platform.MAC);
		else if (isWin) setPlatform(Platform.WIN);
		else setPlatform(Platform.WIN);
	}, []);

	return {
		platform,
		setPlatform,
		isWindows: isWinRef.current,
		isMacOS: isMacRef.current,
	};
};
