import tracker from '../utils/tracker';
export function injectXHR() {
     let XMLHttpRequest = window.XMLHttpRequest;
     let oldOpen = XMLHttpRequest.prototype.open;
     XMLHttpRequest.prototype.open = function (method, url, async) {
         if (!url.match(/logstores/) && !url.match(/sockjs/)) {
             this.logData = { method, url, async };
         }
         return oldOpen.apply(this, arguments);
     }
     // There are two types behind axios if browser XMLHttpRequest node http
     let oldSend = XMLHttpRequest.prototype.send;
     //fetch how to monitor
     XMLHttpRequest.prototype.send = function (body) {
         if (this. logData) {
             let startTime = Date.now();//Record the start time before sending
             //XMLHttpRequest readyState 0 1 2 3 4
             //status 2xx 304 success, other is failure
             let handler = (type) => (event) => {
                 let duration = Date.now() - startTime;
                 let status = this.status;//200 500
                 let statusText = this.statusText;// OK Server Error
                 tracker. send({
                     kind: 'stability',
                     type: 'xhr',
                     eventType: type, //load error abort
                     pathname: this.logData.url, //request path
                     status: status + '-' + statusText,//status code
                     duration, //duration
                     response: this.response ? JSON.stringify(this.response) : '',//response body
                     params: body || ''
                 });
             }
             this. addEventListener('load', handler('load'), false);
             this.addEventListener('error', handler('error'), false);
             this.addEventListener('abort', handler('abort'), false);
         }
         return oldSend.apply(this, arguments);
     }
}