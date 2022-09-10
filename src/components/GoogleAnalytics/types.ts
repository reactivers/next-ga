export interface IGoogleAnalyticsProps {
    gaId: string;
    strategy?: 'afterInteractive' | 'lazyOnload' | 'beforeInteractive' | 'worker';
}