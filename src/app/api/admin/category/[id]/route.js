import { NextResponse } from "next/server";
import categoryModel from "../../../../database/models/category";
import contentModel from "../../../../database/models/content";

export async function GET(req, { params }) {
  const category = await categoryModel.findByPk(params.id, {
    include: [
      {
        model: contentModel,
      },
    ],
  });

  if (!category) {
    return NextResponse.json({ message: "Category not found" }, 404);
  }

  return NextResponse.json({ message: "success", category });
}
