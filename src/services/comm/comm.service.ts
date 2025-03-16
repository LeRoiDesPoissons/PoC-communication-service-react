interface Channel<T = unknown> {
  value: T;
  subscribers: Map<number, (arg: T) => void>;
}

class CommService {
  private _channel1: Channel<string> = {
    value: '',
    subscribers: new Map(),
  };

  get channel1(): string {
    return this._channel1.value;
  }

  set channel1(arg: string) {
    this._channel1.value = arg;
    this._channel1.subscribers.forEach(cb => cb(arg));
  }

  addSubscriber(cb: (arg: string) => void) {
    const rand = this.generateId();
    this._channel1.subscribers.set(rand, cb);

    return rand;
  }

  removeSubscriber(identifier: number) {
    this._channel1.subscribers.delete(identifier);
  }

  private generateId(): number {
    const rand = Math.round(Math.random() * 1000000);
    if (this._channel1.subscribers.has(rand)) {
      return this.generateId();
    }

    return rand;
  }
}

export default new CommService();
