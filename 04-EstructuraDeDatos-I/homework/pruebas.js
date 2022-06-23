
class Queue {
    constructor(){
        this.queue = []
    }
    enqueue(val) {
      this.queue.push(val);
    }
    dequeue() {
      return this.queue.shift();
    }
    size() {
      return this.queue.length;
    }
  }

  var NuevosMensajes = new Queue();

  NuevosMensajes.enqueue('uno');
  NuevosMensajes.enqueue('dos');
  NuevosMensajes.enqueue('tres');
  console.log();(NuevosMensajes.dequeue());
  console.log();(NuevosMensajes.dequeue());
  console.log(NuevosMensajes.queue);
  console.log(NuevosMensajes.size());

  var set = new Set();
  set.add(1);
  set.add(1);