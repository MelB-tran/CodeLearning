# Multi-threading with web workers
[Source 1, Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
[Source 2, ](https://codeburst.io/why-web-workers-make-javascript-more-than-a-single-thread-3d489ffad502)

Web workers are basically background processes running at the same time as your main process. If the browser supports Worker API you can run it.
You need two files, one with the main code, and another for the worker/bg thread.


## A few points:
- Workers run in another global context that is different from the current ``window``.
- There's two different types of these contexts:
    - DedicatedWorkerGlobalScope object (in the case of dedicated workers - workers that are utilized by a single script), or 
    - SharedWorkerGlobalScope (in the case of shared workers - workers that are shared between multiple scripts)
- Data transferred between main thread and bg thread is actually copied, not transferred
- Data is transferred using `` postMessage ()`` method to send and `` onMessage()`` to receive, message itself contained in ``data`` property
- You can run any type code with some exceptions, including manipulating the DOM or default methods and properties in the ``window`` object. For available methods, see [here](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- There are different types of workesr: Dedicated, Shared, Audio, Chrome 
- Shared workers can be used by *multiple* scripts in multiple places like windows, Iframes, etc as long as they're in the same domain as the worker. They also use an active port for communication
- If a worker needs to be immediately terminated from the main thread, the ``terminate`` method can be called
``` myWorker.terminate(); ```
- Within the worker thread, workers can close themselves by their own close method ``close();``