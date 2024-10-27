export declare function getContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D;
export declare function createCanvas(width: number, height: number): [HTMLCanvasElement, CanvasRenderingContext2D];
export declare function fillCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number): void;
export declare function obtainImageData(canvas: HTMLCanvasElement): ImageData;
export declare function obtainPixelArray(canvas: HTMLCanvasElement): Uint8ClampedArray;
export declare function trimCanvas(canvas: HTMLCanvasElement): HTMLCanvasElement;