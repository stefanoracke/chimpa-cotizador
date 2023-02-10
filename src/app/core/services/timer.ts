export class Timer  {
    constructor(public callback:any, public delay:any){}
    timerId:any 
    start!:any 
    remaining = this.delay

    pause(){
        window.clearTimeout(this.timerId);
        this.timerId = null;
        this.remaining -= Date.now() - this.start;
    };

    resume(){
        if (this.timerId) {
            return;
        }

        this.start = Date.now();
        this.timerId = window.setTimeout(this.callback, this.remaining);
    };

    
};



