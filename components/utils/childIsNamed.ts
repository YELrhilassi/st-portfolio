import React, { Children } from "react";

/** Broad element type: function component or intrinsic string */
type FCElement = React.ReactElement & { type: any };

type WrappedChildren = React.ReactNode[] & {
  getComponent: (name: string) => FCElement | undefined;
  getComponents: (name: string) => FCElement[];
  getComponentByType: (type: any) => FCElement | undefined;
  getComponentsByType: (type: any) => FCElement[];
  hasComponent: (name: string) => boolean;

  findBy: (predicate: (el: FCElement) => boolean) => FCElement | undefined;
  filterBy: (predicate: (el: FCElement) => boolean) => FCElement[];

  mapComponents: <T = any>(name: string, mapper: (el: FCElement) => T) => T[];

  groupByType: () => Record<string, FCElement[]>;

  getSet: <T extends string>(...names: T[]) => Record<T, FCElement | undefined>;

  replace: (name: string, newEl: FCElement) => void;
  replaceAll: (name: string, newEl: FCElement) => void;
  replaceBy: (predicate: (el: FCElement) => boolean, newEl: FCElement) => void;

  withReplace: (name: string, newEl: FCElement) => WrappedChildren;
  withReplaceAll: (name: string, newEl: FCElement) => WrappedChildren;
  withReplaceBy: (
    predicate: (el: FCElement) => boolean,
    newEl: FCElement,
  ) => WrappedChildren;
};

/** Detect real React element */
const isElement = (el: any): el is FCElement => React.isValidElement(el);

/** Normalize component name safely */
function getComponentNameFromType(type: any): string {
  if (typeof type === "string") return type.toLowerCase();
  const t: any = type;
  return (t.displayName || t.name || "").toLowerCase();
}

/** Primary matching helper:
 *  - If element has props.slot or props['data-slot'], prefer that
 *  - Then try strict type equality (component reference)
 *  - Then fall back to name matching (displayName/name/tag)
 */
function elementMatchesNameOrType(el: any, nameOrType: string | any): boolean {
  if (!isElement(el)) return false;

  // If consumer passed a string name:
  if (typeof nameOrType === "string") {
    const wanted = nameOrType.toLowerCase();

    // 1) explicit slot/data-slot prop wins (recommended)
    const slot = (el.props && (el.props.slot ?? el.props["data-slot"])) as
      | string
      | undefined;
    if (slot && slot.toLowerCase() === wanted) return true;

    // 2) component type name/displayName or intrinsic tag
    const compName = getComponentNameFromType(el.type);
    if (compName && compName === wanted) return true;

    // no match
    return false;
  }

  // If consumer passed a component constructor/function, do strict equality
  if (typeof nameOrType === "function" || typeof nameOrType === "object") {
    return el.type === nameOrType;
  }

  return false;
}

export function childrenWraper(children: React.ReactNode): WrappedChildren {
  const arr = Children.toArray(children);

  const wrap = (list: React.ReactNode[]): WrappedChildren =>
    new Proxy(list, {
      get(target, prop: string | symbol) {
        if (prop === "getComponent") {
          return (name: string) =>
            target.find((el) =>
              elementMatchesNameOrType(el, name),
            ) as FCElement;
        }

        if (prop === "getComponents") {
          return (name: string) =>
            target.filter((el) =>
              elementMatchesNameOrType(el, name),
            ) as FCElement[];
        }

        if (prop === "getComponentByType") {
          return (type: any) =>
            target.find((el) => isElement(el) && el.type === type) as FCElement;
        }

        if (prop === "getComponentsByType") {
          return (type: any) =>
            target.filter(
              (el) => isElement(el) && el.type === type,
            ) as FCElement[];
        }

        if (prop === "hasComponent") {
          return (name: string) =>
            target.some((el) => elementMatchesNameOrType(el, name));
        }

        if (prop === "findBy") {
          return (fn: (el: FCElement) => boolean) =>
            target.find((el) => isElement(el) && fn(el)) as FCElement;
        }

        if (prop === "filterBy") {
          return (fn: (el: FCElement) => boolean) =>
            target.filter((el) => isElement(el) && fn(el)) as FCElement[];
        }

        if (prop === "mapComponents") {
          return <T>(name: string, mapper: (el: FCElement) => T) =>
            target
              .filter((el) => elementMatchesNameOrType(el, name))
              .map(mapper as any) as T[];
        }

        if (prop === "groupByType") {
          return () => {
            const groups: Record<string, FCElement[]> = {};
            target.forEach((el) => {
              if (!isElement(el)) return;
              const name = getComponentNameFromType(el.type) || "anonymous";
              (groups[name] ||= []).push(el);
            });
            return groups;
          };
        }

        if (prop === "getSet") {
          return <T extends string>(...names: T[]) => {
            const out: Record<string, FCElement | undefined> = {};
            names.forEach((name) => {
              out[name] = target.find((el) =>
                elementMatchesNameOrType(el, name),
              ) as FCElement | undefined;
            });
            return out as Record<T, FCElement | undefined>;
          };
        }

        /** Mutating replacements (operate on raw target array) */
        if (prop === "replace") {
          return (name: string, newEl: FCElement) => {
            const idx = target.findIndex((el) =>
              elementMatchesNameOrType(el, name),
            );
            if (idx >= 0) target[idx] = newEl;
          };
        }

        if (prop === "replaceAll") {
          return (name: string, newEl: FCElement) => {
            for (let i = 0; i < target.length; i++) {
              if (elementMatchesNameOrType(target[i], name)) target[i] = newEl;
            }
          };
        }

        if (prop === "replaceBy") {
          return (pred: (el: FCElement) => boolean, newEl: FCElement) => {
            for (let i = 0; i < target.length; i++) {
              if (isElement(target[i]) && pred(target[i])) target[i] = newEl;
            }
          };
        }

        /** Immutable replace helpers */
        if (prop === "withReplace") {
          return (name: string, newEl: FCElement) =>
            wrap(
              target.map((el) =>
                elementMatchesNameOrType(el, name) ? newEl : el,
              ),
            );
        }

        if (prop === "withReplaceAll") {
          return (name: string, newEl: FCElement) =>
            wrap(
              target.map((el) =>
                elementMatchesNameOrType(el, name) ? newEl : el,
              ),
            );
        }

        if (prop === "withReplaceBy") {
          return (pred: (el: FCElement) => boolean, newEl: FCElement) =>
            wrap(target.map((el) => (isElement(el) && pred(el) ? newEl : el)));
        }

        return (target as any)[prop];
      },
    }) as WrappedChildren;

  return wrap(arr);
}
