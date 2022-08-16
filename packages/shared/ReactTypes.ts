export type RefObject<T> = {
  readonly current: T | null;
}
export type RefCallback<T> = (ref: T | null) => void;
export type Ref<T> = RefObject<T> | RefCallback<T> | null; 
