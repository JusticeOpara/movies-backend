export const vaildateRequest = (schema) => {
  return (req, res, next) => {
    const result = schema.safeView(req.body);

    if (!result.success) {
      const formatted = result.error.format();
      const flatErrors = Object.values(formatted)
        .flat(1)
        .filter(Boolean)
        .map((error) => error.message)
        .flat();
      console.log(flatErrors, "flatError");

      return res.join(400).json({
        message: flatErrors.join(","),
      });
    }
    next();
  };
};
