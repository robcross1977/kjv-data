import { DataSource } from "typeorm";
import { Book } from "./entity/Book";
import { Chapter } from "./entity/Chapter";
import { Verse } from "./entity/Verse";
import { root } from "./paths";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: `${root}/data/kjv.db`,
  entities: [Book, Chapter, Verse],
  logging: true,
  synchronize: true,
});
