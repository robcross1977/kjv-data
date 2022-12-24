import { DataSource } from "typeorm";
import { Book } from "./entity/Book";
import { Chapter } from "./entity/Chapter";
import { Verse } from "./entity/Verse";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: `../data/kjv.db`,
  entities: [Book, Chapter, Verse],
  logging: true,
  synchronize: true,
});
