// Type definitions for maquette
// Project: http://maquettejs.org/
// Definitions by: Johan Gorter <https://github.com/johan-gorter>
// Definitions: https://github.com/johan-gorter/DefinitelyTyped

declare module maquette {

  export var dom: MaquetteDom;

  export function createCache(): CalculationCache;

  export function createProjector(options? : any) : Projector;
  
  export function h(selector: string, properties?: any, children?: Array<string|VNode>): VNode;

  export interface VNode {
  }

  // Not used anywhere in the maquette sourcecode, but it is a widely used pattern.
  export interface Component {
    renderMaquette() : VNode;
  }

  export interface CalculationCache {
    invalidate(): void;
    result(inputs: Array<any>, calculation: () => any):any;
  }

  export interface Mapping {
    results: Array<any>;
    map(newSources: Array<any>): void;
  }

  export interface MaquetteDom {
    append(parentNode: Element, vnode: VNode, projectionOptions?: any): Projection;
    create(vnode: VNode, projectionOptions?: any): Projection;
    insertBefore(beforeNode: Element, vnode: VNode): Projection;
    merge(domNode: Element, vnode: VNode): Projection;
  }

  export interface Projection {
    update(updatedVnode:VNode): void;
    domNode: Element;
  }

  
  export interface Projector {
    append(parentNode: Element, renderMaquette: () => VNode): void;
    evaluateHyperscript(rootNode: Element, parameters: any): void;
    insertBefore(beforeNode: Element, renderMaquette: () => VNode): void;
    merge(domNode: Element, renderMaquette: () => VNode): void;
    replace(domNode: Element, renderMaquette: () => VNode): void;
    resume(): void;
    scheduleRender(): void;
    stop(): void;
  }
}

declare module 'maquette' {
  export = maquette;
}
