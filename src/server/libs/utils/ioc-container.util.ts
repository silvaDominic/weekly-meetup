import { PlainObject } from '../types/object-literal.type';

/**
 * A utility class used to register and store dependencies with dynamic loading functionality.
 */
export class IocContainer {
  private readonly services: PlainObject;
  // eslint-disable-next-line no-undef
  [k: string]: any;

  constructor() {
    this.services = {};
  }

  /**
   * Registers a dependency by name and callback.
   *
   * A name and associated function are defined on the instance. Object.define allows for defining a corresponding
   * getter function that will handle conditionally setting and returning the dependency. When called, if the dependency
   * is found, it is returned -- if it is not, it is defined and its corresponding callback function is executed.
   * If the callback includes any references to the IoC container as well, the process repeats until the dependency tree
   * is resolved. This provides 2 advantages:
   * - Prevents a user from having to register dependencies in their respective order.
   * - Only instantiates the dependency when it's used.
   * @param name
   * @param callback
   */
  register(name: string, callback: (args: any) => any): any {
    Object.defineProperty(this, name, {
      get: (): any => {
        // eslint-disable-next-line no-prototype-builtins
        if (!this.services.hasOwnProperty(name)) {
          this.services[name] = callback(this);
        }
        return this.services[name];
      },
      configurable: true, // Allows for redefining properties (for testing)
      enumerable: true, // Provides an enumerated list of props
    });
    return this;
  }
}
