// Generated by dts-bundle v0.7.3

declare module 'shftjs' {
    import { drag } from 'shftjs/drag';
    import { drop } from 'shftjs/drop';
    import { is, matches, clear } from 'shftjs/util';
    import { DragData, DropData } from 'shftjs/core';
    function defaultmove(e: MouseEvent): void;
    const _default: {
        drag: typeof drag;
        drop: typeof drop;
        util: {
            clear: typeof clear;
            defaultmove: typeof defaultmove;
            is: typeof is;
            matches: typeof matches;
        };
        _GLOBAL: {
            drags: WeakMap<Element, DragData>;
            drops: WeakMap<Element, DropData>;
        };
    };
    export default _default;
}

declare module 'shftjs/drag' {
    export function drag(el: Element): void;
}

declare module 'shftjs/drop' {
    export function drop(el: any, options?: {
        accepts?: string;
        overlap?: number;
    }): void;
}

declare module 'shftjs/util' {
    export function clamp(value: number, min?: number, max?: number): number;
    export function matches(el: Element, selectors?: string | string[]): boolean;
    export function overlapPct(el: Element, other: Element): number;
    export function is(el: Element, type?: 'drag' | 'drop' | 'draggable' | 'droppable' | null): boolean;
    export function clear(el: any): void;
    export function canDrop(droppable: Element, dragged: Element): boolean;
    export function _chain(...fns: Function[]): (arg: any) => any;
}

declare module 'shftjs/core' {
    type ShftJsData = {
            drags: WeakMap<Element, DragData>;
            drops: WeakMap<Element, DropData>;
    };
    export interface DragData {
            onmousedown: (ev: MouseEvent) => any;
            onmousemove: (ev: MouseEvent) => any;
            onmouseup: (ev: MouseEvent) => any;
    }
    export interface DropData {
            accepts?: string | string[] | null;
            overlap?: number | null;
            content: WeakSet<Element>;
            ondragstart: (e: ShftEvent) => any;
            ondrag: (e: ShftEvent) => any;
            ondragend: (e: ShftEvent) => any;
    }
    export const _GLOBAL: ShftJsData;
    export interface ShftEvent extends MouseEvent {
            shftTarget?: Element;
    }
    /**
        * Copies and returns `MouseEventInit` properties from an existing `MouseEvent`.
        * @param e
        * @param overrides
        */
    export function eventInit(e: MouseEvent, overrides?: object): MouseEventInit;
    /**
        * Constructs and dispatches a custom `MouseEvent` with property `shftTarget` set to `element`.
        * @param element
        * @param typeArg
        * @param options
        * @returns The constructed event.
        */
    export function dispatch(element: Element, typeArg: string, options?: MouseEventInit): MouseEvent;
    export {};
}

