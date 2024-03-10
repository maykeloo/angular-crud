export type RepositoryMethods<T> = {
  [P in keyof T as `$${string & P}`]: unknown;
}