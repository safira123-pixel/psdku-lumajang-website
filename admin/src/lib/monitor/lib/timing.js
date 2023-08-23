import tracker from '../utils/tracker';
import onload from '../utils/onload';
import getLastEvent from '../utils/getLastEvent';
import getSelector from '../utils/getSelector';
export function timing() {
     let FMP, LCP;
     // Add an observer for performance items
     if (PerformanceObserver) {
         new PerformanceObserver((entryList, observer) => {
             let perfEntries = entryList. getEntries();
             FMP = perfEntries[0];//startTime after 2000
             observer.disconnect();//no longer observe
         }).observe({ entryTypes: ['element'] });//observe the meaningful elements in the page

         new PerformanceObserver((entryList, observer) => {
             let perfEntries = entryList. getEntries();
             LCP = perfEntries[0];
             observer.disconnect();//no longer observe
         }).observe({ entryTypes: ['largest-contentful-paint'] });//Observe the meaningful elements in the page

         new PerformanceObserver((entryList, observer) => {
             let lastEvent = getLastEvent();
             let firstInput = entryList. getEntries()[0];
             console.log('FID', firstInput);
             if (firstInput) {
                 //processingStart start processing time startTime open click time difference is processing delay
                 let inputDelay = firstInput.processingStart - firstInput.startTime;
                 let duration = firstInput.duration;//Time-consuming processing
                 if (inputDelay > 0 || duration > 0) {
                     tracker. send({
                         kind: 'experience', //User experience indicators
                         type: 'firstInputDelay',//first input delay
                         inputDelay,//delay time
                         duration,//processing time
                         startTime: firstInput. startTime,
                         selector: lastEvent ? getSelector(lastEvent.path || lastEvent.target) : ''
                     });
                 }

             }
             observer.disconnect();//no longer observe
         }).observe({ type: 'first-input', buffered: true });//observe meaningful elements in the page
     }

     //The user's first interaction clicks on the page
     onload(function () {
         setTimeout(() => {
             const {
                 fetchStart,
                 connectStart,
                 connectEnd,
                 requestStart,
                 responseStart,
                 responseEnd,
                 domLoading,
                 domInteractive,
                 domContentLoadedEventStart,
                 domContentLoadedEventEnd,
                 loadEventStart
             } = performance.timing;
             tracker. send({
                 kind: 'experience', //User experience indicators
                 type: 'timing',//Statistics of the time of each stage
                 connectTime: connectEnd - connectStart,//connection time
                 ttfbTime: responseStart - requestStart,//The arrival time of the first byte
                 responseTime: responseEnd - responseStart,//The reading time of the response
                 parseDOMTime: loadEventStart - domLoading, //DOM parsing time
                 domContentLoadedTime: domContentLoadedEventEnd - domContentLoadedEventStart,
                 timeToInteractive: domInteractive - fetchStart,//The first interactive time
                 loadTIme: loadEventStart - fetchStart //Complete loading time
             });


             let FP = performance. getEntriesByName('first-paint')[0];
             let FCP = performance. getEntriesByName('first-contentful-paint')[0];
             //Start sending performance indicators
             console.log('FP', FP);
             console.log('FCP', FCP);
             console.log('FMP', FMP);
             console.log('LCP', LCP);
             tracker. send({
                 kind: 'experience', //User experience indicators
                 type: 'paint',//Statistics of the time of each stage
                 firstPaint: FP. startTime,
                 firstContentfulPaint: FCP. startTime,
                 firstMeaningfulPaint: FMP. startTime,
                 largestContentfulPaint: LCP. startTime
             });
         }, 3000);
     });

}