export async function PUT(req, { params }) {
  console.log(params);
  return new Response("hii");
}
