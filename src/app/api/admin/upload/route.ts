import { writeFile, mkdir } from "fs/promises";
import path from "path";

// POST /api/admin/upload — image upload
export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return Response.json({ error: "No file provided" }, { status: 400 });
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
  if (!allowedTypes.includes(file.type)) {
    return Response.json({ error: "Invalid file type" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = file.name.split(".").pop() ?? "png";
  const safeName = file.name
    .replace(/[^a-zA-Z0-9.-]/g, "-")
    .toLowerCase()
    .replace(/-+/g, "-");
  const filename = `${Date.now()}-${safeName}`;

  const uploadDir = path.join(process.cwd(), "public", "projects");
  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, filename), buffer);

  return Response.json({ url: `/projects/${filename}`, ext });
}
