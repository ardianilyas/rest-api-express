import { ZodType } from "zod";

export function validate<T>(
  schema: ZodType<T>,
  data: unknown,
  field = ""
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.issues.map((issue) => ({
      field: issue.path.length > 0
        ? issue.path.join(".")
        : field,
      message: issue.message,
    }));

    throw new ValidationError(errors);
  }

  return result.data;
}

export class ValidationError extends Error {
  constructor(
    public errors: { field: string; message: string }[]
  ) {
    super("Validation failed");
    this.name = "ValidationError";
  }
}
