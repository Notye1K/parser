import pkg from "@prisma/client";
import fs from "fs";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const data = prisma.repositories.findMany({
  where: { hasSponsorship: true },
});

data.then((result) =>
  fs.writeFileSync("sponsored-repos.json", JSON.stringify(result))
);
