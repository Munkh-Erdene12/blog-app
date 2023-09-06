export async function middleware(req, res, next) {
  try {
    await Promise.resolve(fn(req, res, next));
  } catch (err) {
    console.error(err);
    return next(err);
  }
}
