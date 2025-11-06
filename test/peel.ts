// types.ts
export interface Point {
  x: number;
  y: number;
}

export interface PeelOptions {
  corner?: Point;
}

export interface LineSegment {
  p1: Point;
  p2: Point;
}

// utils.ts
export class MathUtils {
  static readonly PRECISION = 100; // 2 decimal places

  static round(n: number): number {
    return Math.round(n * this.PRECISION) / this.PRECISION;
  }

  static clamp(n: number, min = 0, max = 1): number {
    return Math.max(min, Math.min(max, n));
  }

  static degToRad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  static radToDeg(rad: number): number {
    return rad * (180 / Math.PI);
  }
}

export class PointImpl implements Point {
  constructor(public x: number, public y: number) {}

  add(p: Point): PointImpl {
    return new PointImpl(this.x + p.x, this.y + p.y);
  }

  subtract(p: Point): PointImpl {
    return new PointImpl(this.x - p.x, this.y - p.y);
  }

  scale(n: number): PointImpl {
    return new PointImpl(this.x * n, this.y * n);
  }

  getLength(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  getAngle(): number {
    return MathUtils.radToDeg(Math.atan2(this.y, this.x));
  }

  rotate(deg: number): PointImpl {
    const rad = MathUtils.degToRad(deg);
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    return new PointImpl(
      this.x * cos - this.y * sin,
      this.x * sin + this.y * cos
    );
  }

  static fromVector(deg: number, len: number): PointImpl {
    const rad = MathUtils.degToRad(deg);
    return new PointImpl(Math.cos(rad) * len, Math.sin(rad) * len);
  }
}

export class LineSegmentImpl implements LineSegment {
  constructor(public p1: Point, public p2: Point) {}

  getAngle(): number {
    const vector = new PointImpl(
      this.p2.x - this.p1.x,
      this.p2.y - this.p1.y
    );
    return vector.getAngle();
  }

  getIntersectPoint(other: LineSegment): PointImpl|null {
    const x1 = this.p1.x;
    const y1 = this.p1.y;
    const x2 = this.p2.x;
    const y2 = this.p2.y;
    const x3 = other.p1.x;
    const y3 = other.p1.y;
    const x4 = other.p2.x;
    const y4 = other.p2.y;

    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (denominator === 0) return null;

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
      return new PointImpl(
        x1 + t * (x2 - x1),
        y1 + t * (y2 - y1)
      );
    }
    return null;
  }

  getPointDeterminant(p: Point): number {
    return (p.x - this.p1.x) * (this.p2.y - this.p1.y) - 
           (p.y - this.p1.y) * (this.p2.x - this.p1.x);
  }
}

export class Polygon {
  private points: Point[] = [];

  addPoint(point: Point): void {
    this.points.push(point);
  }

  getPoints(): Point[] {
    return this.points;
  }

  static getArea(points: Point[]): number {
    let sum1 = 0;
    let sum2 = 0;
    
    points.forEach((point, index) => {
      const next = points[(index + 1) % points.length];
      sum1 += point.x * next.y;
      sum2 += point.y * next.x;
    });
    
    return (sum1 - sum2) / 2;
  }
}

// dom-utils.ts
export class DomUtils {
  static getElement(element: string | HTMLElement): HTMLElement {
    if (typeof element === 'string') {
      const el = document.querySelector(element);
      if (!el) {
        throw new Error(`Element not found: ${element}`);
      }
      return el as HTMLElement;
    }
    return element;
  }

  static createElement(parent: HTMLElement, className: string): HTMLElement {
    const element = document.createElement('div');
    element.classList.add(className);
    parent.appendChild(element);
    return element;
  }

  static addClass(element: HTMLElement, className: string): void {
    element.classList.add(className);
  }

  static setTransform(element: HTMLElement, transform: string): void {
    const properties = ['transform', 'webkitTransform', 'mozTransform'];
    const property = properties.find(prop => prop in element.style) || 'transform';
    element.style[property as any] = transform;
  }

  static setStyle(element: HTMLElement, styles: Partial<CSSStyleDeclaration>): void {
    Object.assign(element.style, styles);
  }
}

// svg-clip.ts
export class SvgClip {
  private readonly svg: SVGElement;
  private readonly polygon: SVGPolygonElement;
  private readonly clipPath: SVGClipPathElement;

  constructor(private readonly element: HTMLElement) {
    this.svg = this.createSvgElement();
    this.clipPath = this.createClipPathElement();
    this.polygon = this.createPolygonElement();
    
    this.setupClipPath();
  }

  private createSvgElement(): SVGElement {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    DomUtils.setStyle(svg as unknown as HTMLElement, {
      position: 'absolute',
      top: '-10000px',
      left: '-10000px',
      width: '1px',
      height: '1px',
      opacity: '0',
    });
    return svg;
  }

  private createClipPathElement(): SVGClipPathElement {
    const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    const id = `peel-clip-${Math.random().toString(36).substring(2, 11)}`;
    clipPath.setAttribute('id', id);
    return clipPath;
  }

  private createPolygonElement(): SVGPolygonElement {
    return document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  }

  private setupClipPath(): void {
    this.clipPath.appendChild(this.polygon);
    
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.appendChild(this.clipPath);
    this.svg.appendChild(defs);
    document.body.appendChild(this.svg);

    const id = this.clipPath.getAttribute('id')!;
    this.element.style.clipPath = `url(#${id})`;
    this.element.style.webkitClipPath = `url(#${id})`;
  }

  setPoints(points: Point[]): void {
    const pointsString = points
      .map(point => `${MathUtils.round(point.x)},${MathUtils.round(point.y)}`)
      .join(' ');
    this.polygon.setAttribute('points', pointsString);
  }

  destroy(): void {
    if (this.svg.parentNode) {
      this.svg.parentNode.removeChild(this.svg);
    }
  }
}

// peel.ts
export class Peel {
  private static readonly CSS_PREFIX = 'peel-';
  private static readonly DEFAULT_OPTIONS: Required<PeelOptions> = {
    corner: { x: 0, y: 0 },
  };

  private readonly options: Required<PeelOptions>;
  private readonly width: number;
  private readonly height: number;
  private readonly center: PointImpl;

  private topLayer!: HTMLElement;
  private backLayer!: HTMLElement;
  private topClip!: SvgClip;
  private backClip!: SvgClip;

  private peelLineSegment: LineSegmentImpl|null = null;

  constructor(
    private readonly element: HTMLElement,
    options: PeelOptions = {}
  ) {
    this.options = { ...Peel.DEFAULT_OPTIONS, ...options };
    this.width = element.offsetWidth;
    this.height = element.offsetHeight;
    this.center = new PointImpl(this.width / 2, this.height / 2);

    this.validateEnvironment();
    this.setupLayers();
    this.setCorner(this.options.corner);
    this.initialize();
  }

  private validateEnvironment(): void {
    if (typeof document === 'undefined') {
      throw new Error('Peel requires a DOM environment');
    }
  }

  private setupLayers(): void {
    this.topLayer = this.findOrCreateLayer('top', this.element, 2);
    this.backLayer = this.findOrCreateLayer('back', this.element, 3);

    this.topClip = new SvgClip(this.topLayer);
    this.backClip = new SvgClip(this.backLayer);
  }

  private findOrCreateLayer(
    id: string, 
    parent: HTMLElement, 
    zIndex: number
  ): HTMLElement {
    const className = `${Peel.CSS_PREFIX}${id}`;
    let layer = parent.querySelector<HTMLElement>(`.${className}`);
    
    if (!layer) {
      layer = DomUtils.createElement(parent, className);
    }
    
    DomUtils.addClass(layer, `${Peel.CSS_PREFIX}layer`);
    DomUtils.setStyle(layer, {
      zIndex: zIndex.toString(),
    });
    
    return layer;
  }

  setCorner(corner: Point): void {
    this.options.corner = corner;
  }

  setPeelPosition(x: number, y: number): void {
    const position = new PointImpl(x, y);
    this.peelLineSegment = this.calculatePeelLineSegment(position);
    this.updateClipping();
    this.updateBackTransform(position);
  }

  private calculatePeelLineSegment(position: PointImpl): LineSegmentImpl {
    const corner = new PointImpl(this.options.corner.x, this.options.corner.y);
    const halfToCorner = corner.subtract(position).scale(0.5);
    const midpoint = position.add(halfToCorner);

    if (halfToCorner.x === 0 && halfToCorner.y === 0) {
      const centerToPosition = position.subtract(this.center);
      halfToCorner.x = centerToPosition.x;
      halfToCorner.y = centerToPosition.y;
    }

    const length = halfToCorner.getLength();
    const multiplier = (Math.max(this.width, this.height) / length) * 10;
    const half = halfToCorner.rotate(-90).scale(multiplier);

    const point1 = midpoint.add(half);
    const point2 = midpoint.subtract(half);

    return new LineSegmentImpl(point1, point2);
  }

  private updateClipping(): void {
    if (!this.peelLineSegment) return;

    const topPolygon = new Polygon();
    const backPolygon = new Polygon();
    const boundingBox = this.getBoundingBox();

    boundingBox.forEach(side => {
      this.distributeLineByPeelLine(side, topPolygon, backPolygon);
    });

    this.topClip.setPoints(topPolygon.getPoints());
    this.backClip.setPoints(backPolygon.getPoints());
  }

  private getBoundingBox(): LineSegmentImpl[] {
    return [
      new LineSegmentImpl(new PointImpl(0, 0), new PointImpl(this.width, 0)),
      new LineSegmentImpl(new PointImpl(this.width, 0), new PointImpl(this.width, this.height)),
      new LineSegmentImpl(new PointImpl(this.width, this.height), new PointImpl(0, this.height)),
      new LineSegmentImpl(new PointImpl(0, this.height), new PointImpl(0, 0)),
    ];
  }

  private distributeLineByPeelLine(
    segment: LineSegmentImpl,
    topPolygon: Polygon,
    backPolygon: Polygon
  ): void {
    const intersect = this.peelLineSegment!.getIntersectPoint(segment);
    
    this.distributePointByPeelLine(segment.p1, topPolygon, backPolygon);
    
    if (intersect) {
      this.distributePointByPeelLine(intersect, topPolygon, backPolygon);
    }
  }

  private distributePointByPeelLine(
    point: Point,
    topPolygon: Polygon,
    backPolygon: Polygon
  ): void {
    if (!point || !this.peelLineSegment) return;

    const determinant = this.peelLineSegment.getPointDeterminant(point);
    
    if (determinant <= 0) {
      topPolygon.addPoint(point);
    }
    
    if (determinant >= 0) {
      const flippedPoint = this.flipPointHorizontally(point);
      backPolygon.addPoint(flippedPoint);
    }
  }

  private flipPointHorizontally(point: Point): PointImpl {
    return new PointImpl(
      point.x - ((point.x - this.center.x) * 2),
      point.y
    );
  }

  private updateBackTransform(position: PointImpl): void {
    if (!this.peelLineSegment) return;

    const corner = new PointImpl(this.options.corner.x, this.options.corner.y);
    const mirroredCorner = this.flipPointHorizontally(corner);
    const rotation = (this.peelLineSegment.getAngle() - 90) * 2;
    const translation = position.subtract(mirroredCorner.rotate(rotation));

    const transform = `translate(${MathUtils.round(translation.x)}px, ${MathUtils.round(translation.y)}px) rotate(${MathUtils.round(rotation)}deg)`;
    DomUtils.setTransform(this.backLayer, transform);
  }

  private initialize(): void {
    DomUtils.addClass(this.element, `${Peel.CSS_PREFIX}ready`);
  }

  destroy(): void {
    this.topClip.destroy();
    this.backClip.destroy();
  }

  // Convenience static method
  static create(selector: string | HTMLElement, options?: PeelOptions): Peel {
    const element = DomUtils.getElement(selector);
    return new Peel(element, options);
  }
}

// Export main class as default
export default Peel;
