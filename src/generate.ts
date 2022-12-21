import { Book } from "./entity/Book";
import { AppDataSource } from "./data-source";
import { DataSource } from "typeorm";
import { Chapter } from "./entity/Chapter";
import { Verse } from "./entity/Verse";

// Book Objects
import OneChronicles from "./books/1Chronicles";
import OneCorinthians from "./books/1Corinthians";
import OneJohn from "./books/1John";
import OneKings from "./books/1Kings";
import OnePeter from "./books/1Peter";
import OneSamuel from "./books/1Samuel";
import OneThessalonians from "./books/1Thessalonians";
import OneTimothy from "./books/1Timothy";
import TwoChronicles from "./books/2Chronicles";
import TwoCorinthians from "./books/2Corinthians";
import TwoJohn from "./books/2John";
import TwoKings from "./books/2Kings";
import TwoPeter from "./books/2Peter";
import TwoSamuel from "./books/2Samuel";
import TwoThessalonians from "./books/2Thessalonians";
import TwoTimothy from "./books/2Timothy";
import ThreeJohn from "./books/3John";
import Acts from "./books/Acts";
import Amos from "./books/Amos";
import Colossians from "./books/Colossians";
import Daniel from "./books/Daniel";
import Deuteronomy from "./books/Deuteronomy";
import Ecclesiastes from "./books/Ecclesiastes";
import Ephesians from "./books/Ephesians";
import Esther from "./books/Esther";
import Exodus from "./books/Exodus";
import Ezekiel from "./books/Ezekiel";
import Ezra from "./books/Ezra";
import Galatians from "./books/Galatians";
import Genesis from "./books/Genesis";
import Habakkuk from "./books/Habakkuk";
import Haggai from "./books/Haggai";
import Hebrews from "./books/Hebrews";
import Hosea from "./books/Hosea";
import Isaiah from "./books/Isaiah";
import James from "./books/James";
import Jeremiah from "./books/Jeremiah";
import Job from "./books/Job";
import Joel from "./books/Joel";
import John from "./books/John";
import Jonah from "./books/Jonah";
import Joshua from "./books/Joshua";
import Jude from "./books/Jude";
import Judges from "./books/Judges";
import Lamentations from "./books/Lamentations";
import Leviticus from "./books/Leviticus";
import Luke from "./books/Luke";
import Malachi from "./books/Malachi";
import Mark from "./books/Mark";
import Matthew from "./books/Matthew";
import Micah from "./books/Micah";
import Nahum from "./books/Nahum";
import Nehemiah from "./books/Nehemiah";
import Numbers from "./books/Numbers";
import Obadiah from "./books/Obadiah";
import Philemon from "./books/Philemon";
import Philippians from "./books/Philippians";
import Proverbs from "./books/Proverbs";
import Psalms from "./books/Psalms";
import Revelation from "./books/Revelation";
import Romans from "./books/Romans";
import Ruth from "./books/Ruth";
import SongofSolomon from "./books/SongofSolomon";
import Titus from "./books/Titus";
import Zechariah from "./books/Zechariah";
import Zephaniah from "./books/Zephaniah";

const bibleToSql = async (db: DataSource, book: Book) => {
  console.log(`Creating book ${book.name}`);

  const newBook: Book = new Book();
  newBook.name = book.name;
  newBook.chapters = book.chapters.map<Chapter>((chapter) => {
    const newChapter = new Chapter();
    newChapter.bookName = book.name;
    newChapter.number = chapter.number;
    newChapter.verses = chapter.verses.map<Verse>((verse) => {
      const newVerse = new Verse();
      newVerse.bookName = book.name;
      newVerse.chapterNumber = chapter.number;
      newVerse.number = verse.number;
      newVerse.text = verse.text;
      return newVerse;
    });
    return newChapter;
  });

  const result = await db.manager.save(newBook);

  console.log(`Created ${result}`);
};

(async () => {
  try {
    const db = await AppDataSource.initialize();

    await Promise.all([
      bibleToSql(db, <Book>OneChronicles),
      bibleToSql(db, <Book>OneCorinthians),
      bibleToSql(db, <Book>OneJohn),
      bibleToSql(db, <Book>OneKings),
      bibleToSql(db, <Book>OnePeter),
      bibleToSql(db, <Book>OneSamuel),
      bibleToSql(db, <Book>OneThessalonians),
      bibleToSql(db, <Book>OneTimothy),
      bibleToSql(db, <Book>TwoChronicles),
      bibleToSql(db, <Book>TwoCorinthians),
      bibleToSql(db, <Book>TwoJohn),
      bibleToSql(db, <Book>TwoKings),
      bibleToSql(db, <Book>TwoPeter),
      bibleToSql(db, <Book>TwoSamuel),
      bibleToSql(db, <Book>TwoThessalonians),
      bibleToSql(db, <Book>TwoTimothy),
      bibleToSql(db, <Book>ThreeJohn),
      bibleToSql(db, <Book>Acts),
      bibleToSql(db, <Book>Amos),
      bibleToSql(db, <Book>Colossians),
      bibleToSql(db, <Book>Daniel),
      bibleToSql(db, <Book>Deuteronomy),
      bibleToSql(db, <Book>Ecclesiastes),
      bibleToSql(db, <Book>Ephesians),
      bibleToSql(db, <Book>Esther),
      bibleToSql(db, <Book>Exodus),
      bibleToSql(db, <Book>Ezekiel),
      bibleToSql(db, <Book>Ezra),
      bibleToSql(db, <Book>Galatians),
      bibleToSql(db, <Book>Genesis),
      bibleToSql(db, <Book>Habakkuk),
      bibleToSql(db, <Book>Haggai),
      bibleToSql(db, <Book>Hebrews),
      bibleToSql(db, <Book>Hosea),
      bibleToSql(db, <Book>Isaiah),
      bibleToSql(db, <Book>James),
      bibleToSql(db, <Book>Jeremiah),
      bibleToSql(db, <Book>Job),
      bibleToSql(db, <Book>Joel),
      bibleToSql(db, <Book>John),
      bibleToSql(db, <Book>Jonah),
      bibleToSql(db, <Book>Joshua),
      bibleToSql(db, <Book>Jude),
      bibleToSql(db, <Book>Judges),
      bibleToSql(db, <Book>Lamentations),
      bibleToSql(db, <Book>Leviticus),
      bibleToSql(db, <Book>Luke),
      bibleToSql(db, <Book>Malachi),
      bibleToSql(db, <Book>Mark),
      bibleToSql(db, <Book>Matthew),
      bibleToSql(db, <Book>Micah),
      bibleToSql(db, <Book>Nahum),
      bibleToSql(db, <Book>Nehemiah),
      bibleToSql(db, <Book>Numbers),
      bibleToSql(db, <Book>Obadiah),
      bibleToSql(db, <Book>Philemon),
      bibleToSql(db, <Book>Philippians),
      bibleToSql(db, <Book>Proverbs),
      bibleToSql(db, <Book>Psalms),
      bibleToSql(db, <Book>Revelation),
      bibleToSql(db, <Book>Romans),
      bibleToSql(db, <Book>Ruth),
      bibleToSql(db, <Book>SongofSolomon),
      bibleToSql(db, <Book>Titus),
      bibleToSql(db, <Book>Zechariah),
      bibleToSql(db, <Book>Zephaniah),
    ]);

    console.log("JOB COMPLETE!");
  } catch (e) {
    console.error(`something went wrong: ${e}`);
  }
})();
