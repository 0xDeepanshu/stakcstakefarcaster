./components/TargetCursor.tsx:48:16
Type error: Cannot assign to 'current' because it is a read-only property.
  46 |
  47 |     const cursor = cursorRef.current;
> 48 |     cornersRef.current = cursor.querySelectorAll<HTMLDivElement>('.target-cursor-corner');
     |                ^
  49 |
  50 |     let activeTarget: Element | null = null;
  51 |     let currentTargetMove: ((ev: Event) => void) | null = null;
 ELIFECYCLE  Command failed with exit code 1.
Cannot assign to 'current' because it is a read-only property.ts(2540)
(property) RefObject<gsap.core.Timeline>.current: any
The current value of the ref.
