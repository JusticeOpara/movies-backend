// export const vaildateRequest = (schema) => {
//   return (req, res, next) => {
//     const result = schema.safeView(req.body);

//     if (!result.success) {
//       const formatted = result.error.format();
//       const flatErrors = Object.values(formatted)
//         .flat(1)
//         .filter(Boolean)
//         .map((error) => error.message)
//         .flat();
//       console.log(flatErrors, "flatError");

//       return res.join(400).json({
//         message: flatErrors.join(","),
//       });
//     }
//     next();
//   };
// };

export const vaildateRequest = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const formatted = result.error.format();

      const flatErrors = Object.values(formatted)
        .flatMap((err) => (Array.isArray(err) ? err : err?._errors))
        .filter(Boolean);

      return res.status(400).json({
        status: "fail",
        message: flatErrors.join(", "),
      });
    }

    // Use validated data only
    req.body = result.data;
    next();
  };
};

