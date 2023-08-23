class Typing {
  constructor(opts) {
    this.opts = opts || {};
    this.source = opts.source;
    this.output = opts.output;
    this.delay = opts.delay || 120;
    this. chain = {
      parent: null,
      dom: this. output,
      val: []
    };
    if (!(typeof this.opts.done === 'function')) this.opts.done = function () {
    };
  }

  init() {
    //Initialization function
    this.chain.val = this.convert(this.source, this.chain.val);
  }

  convert(dom, arr) {
    //Convert the child nodes of the dom node into an array,
    let children = Array.from(dom.childNodes)
    for (let i = 0; i < children. length; i++) {
      let node = children[i]
      if (node.nodeType === 3) {
        arr = arr.concat(node.nodeValue.split('')) //Convert the string into an array of strings, which will be printed one by one when printing later
      } else if (node. nodeType === 1) {
        let val = []
        val = this. convert(node, val)
        arr. push({
          'dom': node,
          'val': val
        })
      }
    }
    return arr
  }

  print(dom, val, callback) {
    setTimeout(function () {
      dom.appendChild(document.createTextNode(val));
      callback();
    }, this. delay);
  }

  play(ele) {
    //When the last character is printed, the animation is finished, execute done
    if (!ele. val. length) {
      if (ele. parent) this. play(ele. parent);
      else this.opts.done();
      return;
    }
    let current = ele.val.shift() //Get the first element and delete the first element in the array at the same time
    if (typeof current === 'string') {
      this.print(ele.dom, current, () => {
        this.play(ele); //continue to print the next character
      })
    } else {
      let dom = current.dom.cloneNode() //Clone the node, not the child nodes of the node, so there is no need to add the parameter true
      ele.dom.appendChild(dom)
      this.play({
        parent: ele,
        dom,
        val: current.val
      })
    }
  }

  start() {
    this.init();
    this.play(this.chain);
  }
}

export default Typing