/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useControls } from "leva";
import type { Schema } from "leva/dist/declarations/src/types";

const isDev = import.meta.env.DEV;

type ControlsResult<T> = {
  [K in keyof T]: T[K] extends { value: infer V } ? V : never;
};

export function useStudioControls<T extends Schema>(
  folder: string,
  schema: T
): ControlsResult<T> {
  if (isDev) {
    return useControls(folder, schema) as ControlsResult<T>;
  }

  // prod → возвращаем дефолтные значения
  return Object.fromEntries(
    Object.entries(schema).map(([key, config]) => [key, (config as any).value])
  ) as ControlsResult<T>;
}
