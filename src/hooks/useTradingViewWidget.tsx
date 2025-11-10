'use client';
import React, { useEffect, useRef } from 'react';

const useTradingViewWidget = (
	scriptUrl: string,
	config: Record<string, unknown>,
	height: number = 600
) => {
	const widgetRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!widgetRef.current || !scriptUrl) return;
		if (widgetRef.current.dataset.loaded === 'true') return;

		// Clear any existing content
		widgetRef.current.innerHTML = '';

		// Create script element
		const script = document.createElement('script');
		script.src = scriptUrl;
		script.async = true;
		script.type = 'text/javascript';
		script.innerHTML = JSON.stringify(config);

		// Append script to widget container
		widgetRef.current.appendChild(script);
		widgetRef.current.dataset.loaded = 'true';

		return () => {
			if (widgetRef.current) {
				widgetRef.current.innerHTML = '';
				widgetRef.current.dataset.loaded = '';
			}
		};
	}, [scriptUrl, config, height]);

	return widgetRef;
};

export default useTradingViewWidget;
