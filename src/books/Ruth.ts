import { DeepPartial } from "typeorm";
import { Book } from "../entity/Book";

const Ruth: DeepPartial<Book> = {
  name: "Ruth",
  chapters: [
    {
      number: 1,
      verses: [
        {
          number: 1,
          text: "Now it came to pass in the days when the judges ruled, that there was a famine in the land. And a certain man of Bethlehemjudah went to sojourn in the country of Moab, he, and his wife, and his two sons.",
        },
        {
          number: 2,
          text: "And the name of the man was Elimelech, and the name of his wife Naomi, and the name of his two sons Mahlon and Chilion, Ephrathites of Bethlehemjudah. And they came into the country of Moab, and continued there.",
        },
        {
          number: 3,
          text: "And Elimelech Naomi\u2019s husband died; and she was left, and her two sons.",
        },
        {
          number: 4,
          text: "And they took them wives of the women of Moab; the name of the one was Orpah, and the name of the other Ruth: and they dwelled there about ten years.",
        },
        {
          number: 5,
          text: "And Mahlon and Chilion died also both of them; and the woman was left of her two sons and her husband.",
        },
        {
          number: 6,
          text: "Then she arose with her daughters in law, that she might return from the country of Moab: for she had heard in the country of Moab how that the LORD had visited his people in giving them bread.",
        },
        {
          number: 7,
          text: "Wherefore she went forth out of the place where she was, and her two daughters in law with her; and they went on the way to return unto the land of Judah.",
        },
        {
          number: 8,
          text: "And Naomi said unto her two daughters in law, Go, return each to her mother\u2019s house: the LORD deal kindly with you, as ye have dealt with the dead, and with me.",
        },
        {
          number: 9,
          text: "The LORD grant you that ye may find rest, each of you in the house of her husband. Then she kissed them; and they lifted up their voice, and wept.",
        },
        {
          number: 10,
          text: "And they said unto her, Surely we will return with thee unto thy people.",
        },
        {
          number: 11,
          text: "And Naomi said, Turn again, my daughters: why will ye go with me? are there yet any more sons in my womb, that they may be your husbands?",
        },
        {
          number: 12,
          text: "Turn again, my daughters, go your way; for I am too old to have an husband. If I should say, I have hope, if I should have an husband also to night, and should also bear sons;",
        },
        {
          number: 13,
          text: "Would ye tarry for them till they were grown? would ye stay for them from having husbands? nay, my daughters; for it grieveth me much for your sakes that the hand of the LORD is gone out against me.",
        },
        {
          number: 14,
          text: "And they lifted up their voice, and wept again: and Orpah kissed her mother in law; but Ruth clave unto her.",
        },
        {
          number: 15,
          text: "And she said, Behold, thy sister in law is gone back unto her people, and unto her gods: return thou after thy sister in law.",
        },
        {
          number: 16,
          text: "And Ruth said, Intreat me not to leave thee, or to return from following after thee: for whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God:",
        },
        {
          number: 17,
          text: "Where thou diest, will I die, and there will I be buried: the LORD do so to me, and more also, if ought but death part thee and me.",
        },
        {
          number: 18,
          text: "When she saw that she was stedfastly minded to go with her, then she left speaking unto her.",
        },
        {
          number: 19,
          text: "So they two went until they came to Bethlehem. And it came to pass, when they were come to Bethlehem, that all the city was moved about them, and they said, Is this Naomi?",
        },
        {
          number: 20,
          text: "And she said unto them, Call me not Naomi, call me Mara: for the Almighty hath dealt very bitterly with me.",
        },
        {
          number: 21,
          text: "I went out full, and the LORD hath brought me home again empty: why then call ye me Naomi, seeing the LORD hath testified against me, and the Almighty hath afflicted me?",
        },
        {
          number: 22,
          text: "So Naomi returned, and Ruth the Moabitess, her daughter in law, with her, which returned out of the country of Moab: and they came to Bethlehem in the beginning of barley harvest.",
        },
      ],
    },
    {
      number: 2,
      verses: [
        {
          number: 1,
          text: "And Naomi had a kinsman of her husband\u2019s, a mighty man of wealth, of the family of Elimelech; and his name was Boaz.",
        },
        {
          number: 2,
          text: "And Ruth the Moabitess said unto Naomi, Let me now go to the field, and glean ears of corn after him in whose sight I shall find grace. And she said unto her, Go, my daughter.",
        },
        {
          number: 3,
          text: "And she went, and came, and gleaned in the field after the reapers: and her hap was to light on a part of the field belonging unto Boaz, who was of the kindred of Elimelech.",
        },
        {
          number: 4,
          text: "And, behold, Boaz came from Bethlehem, and said unto the reapers, The LORD be with you. And they answered him, The LORD bless thee.",
        },
        {
          number: 5,
          text: "Then said Boaz unto his servant that was set over the reapers, Whose damsel is this?",
        },
        {
          number: 6,
          text: "And the servant that was set over the reapers answered and said, It is the Moabitish damsel that came back with Naomi out of the country of Moab:",
        },
        {
          number: 7,
          text: "And she said, I pray you, let me glean and gather after the reapers among the sheaves: so she came, and hath continued even from the morning until now, that she tarried a little in the house.",
        },
        {
          number: 8,
          text: "Then said Boaz unto Ruth, Hearest thou not, my daughter? Go not to glean in another field, neither go from hence, but abide here fast by my maidens:",
        },
        {
          number: 9,
          text: "Let thine eyes be on the field that they do reap, and go thou after them: have I not charged the young men that they shall not touch thee? and when thou art athirst, go unto the vessels, and drink of that which the young men have drawn.",
        },
        {
          number: 10,
          text: "Then she fell on her face, and bowed herself to the ground, and said unto him, Why have I found grace in thine eyes, that thou shouldest take knowledge of me, seeing I am a stranger?",
        },
        {
          number: 11,
          text: "And Boaz answered and said unto her, It hath fully been shewed me, all that thou hast done unto thy mother in law since the death of thine husband: and how thou hast left thy father and thy mother, and the land of thy nativity, and art come unto a people which thou knewest not heretofore.",
        },
        {
          number: 12,
          text: "The LORD recompense thy work, and a full reward be given thee of the LORD God of Israel, under whose wings thou art come to trust.",
        },
        {
          number: 13,
          text: "Then she said, Let me find favour in thy sight, my lord; for that thou hast comforted me, and for that thou hast spoken friendly unto thine handmaid, though I be not like unto one of thine handmaidens.",
        },
        {
          number: 14,
          text: "And Boaz said unto her, At mealtime come thou hither, and eat of the bread, and dip thy morsel in the vinegar. And she sat beside the reapers: and he reached her parched corn, and she did eat, and was sufficed, and left.",
        },
        {
          number: 15,
          text: "And when she was risen up to glean, Boaz commanded his young men, saying, Let her glean even among the sheaves, and reproach her not:",
        },
        {
          number: 16,
          text: "And let fall also some of the handfuls of purpose for her, and leave them, that she may glean them, and rebuke her not.",
        },
        {
          number: 17,
          text: "So she gleaned in the field until even, and beat out that she had gleaned: and it was about an ephah of barley.",
        },
        {
          number: 18,
          text: "And she took it up, and went into the city: and her mother in law saw what she had gleaned: and she brought forth, and gave to her that she had reserved after she was sufficed.",
        },
        {
          number: 19,
          text: "And her mother in law said unto her, Where hast thou gleaned to day? and where wroughtest thou? blessed be he that did take knowledge of thee. And she shewed her mother in law with whom she had wrought, and said, The man\u2019s name with whom I wrought to day is Boaz.",
        },
        {
          number: 20,
          text: "And Naomi said unto her daughter in law, Blessed be he of the LORD, who hath not left off his kindness to the living and to the dead. And Naomi said unto her, The man is near of kin unto us, one of our next kinsmen.",
        },
        {
          number: 21,
          text: "And Ruth the Moabitess said, He said unto me also, Thou shalt keep fast by my young men, until they have ended all my harvest.",
        },
        {
          number: 22,
          text: "And Naomi said unto Ruth her daughter in law, It is good, my daughter, that thou go out with his maidens, that they meet thee not in any other field.",
        },
        {
          number: 23,
          text: "So she kept fast by the maidens of Boaz to glean unto the end of barley harvest and of wheat harvest; and dwelt with her mother in law.",
        },
      ],
    },
    {
      number: 3,
      verses: [
        {
          number: 1,
          text: "Then Naomi her mother in law said unto her, My daughter, shall I not seek rest for thee, that it may be well with thee?",
        },
        {
          number: 2,
          text: "And now is not Boaz of our kindred, with whose maidens thou wast? Behold, he winnoweth barley to night in the threshingfloor.",
        },
        {
          number: 3,
          text: "Wash thyself therefore, and anoint thee, and put thy raiment upon thee, and get thee down to the floor: but make not thyself known unto the man, until he shall have done eating and drinking.",
        },
        {
          number: 4,
          text: "And it shall be, when he lieth down, that thou shalt mark the place where he shall lie, and thou shalt go in, and uncover his feet, and lay thee down; and he will tell thee what thou shalt do.",
        },
        {
          number: 5,
          text: "And she said unto her, All that thou sayest unto me I will do.",
        },
        {
          number: 6,
          text: "And she went down unto the floor, and did according to all that her mother in law bade her.",
        },
        {
          number: 7,
          text: "And when Boaz had eaten and drunk, and his heart was merry, he went to lie down at the end of the heap of corn: and she came softly, and uncovered his feet, and laid her down.",
        },
        {
          number: 8,
          text: "And it came to pass at midnight, that the man was afraid, and turned himself: and, behold, a woman lay at his feet.",
        },
        {
          number: 9,
          text: "And he said, Who art thou? And she answered, I am Ruth thine handmaid: spread therefore thy skirt over thine handmaid; for thou art a near kinsman.",
        },
        {
          number: 10,
          text: "And he said, Blessed be thou of the LORD, my daughter: for thou hast shewed more kindness in the latter end than at the beginning, inasmuch as thou followedst not young men, whether poor or rich.",
        },
        {
          number: 11,
          text: "And now, my daughter, fear not; I will do to thee all that thou requirest: for all the city of my people doth know that thou art a virtuous woman.",
        },
        {
          number: 12,
          text: "And now it is true that I am thy near kinsman: howbeit there is a kinsman nearer than I.",
        },
        {
          number: 13,
          text: "Tarry this night, and it shall be in the morning, that if he will perform unto thee the part of a kinsman, well; let him do the kinsman\u2019s part: but if he will not do the part of a kinsman to thee, then will I do the part of a kinsman to thee, as the LORD liveth: lie down until the morning.",
        },
        {
          number: 14,
          text: "And she lay at his feet until the morning: and she rose up before one could know another. And he said, Let it not be known that a woman came into the floor.",
        },
        {
          number: 15,
          text: "Also he said, Bring the vail that thou hast upon thee, and hold it. And when she held it, he measured six measures of barley, and laid it on her: and she went into the city.",
        },
        {
          number: 16,
          text: "And when she came to her mother in law, she said, Who art thou, my daughter? And she told her all that the man had done to her.",
        },
        {
          number: 17,
          text: "And she said, These six measures of barley gave he me; for he said to me, Go not empty unto thy mother in law.",
        },
        {
          number: 18,
          text: "Then said she, Sit still, my daughter, until thou know how the matter will fall: for the man will not be in rest, until he have finished the thing this day.",
        },
      ],
    },
    {
      number: 4,
      verses: [
        {
          number: 1,
          text: "Then went Boaz up to the gate, and sat him down there: and, behold, the kinsman of whom Boaz spake came by; unto whom he said, Ho, such a one! turn aside, sit down here. And he turned aside, and sat down.",
        },
        {
          number: 2,
          text: "And he took ten men of the elders of the city, and said, Sit ye down here. And they sat down.",
        },
        {
          number: 3,
          text: "And he said unto the kinsman, Naomi, that is come again out of the country of Moab, selleth a parcel of land, which was our brother Elimelech\u2019s:",
        },
        {
          number: 4,
          text: "And I thought to advertise thee, saying, Buy it before the inhabitants, and before the elders of my people. If thou wilt redeem it, redeem it: but if thou wilt not redeem it, then tell me, that I may know: for there is none to redeem it beside thee; and I am after thee. And he said, I will redeem it.",
        },
        {
          number: 5,
          text: "Then said Boaz, What day thou buyest the field of the hand of Naomi, thou must buy it also of Ruth the Moabitess, the wife of the dead, to raise up the name of the dead upon his inheritance.",
        },
        {
          number: 6,
          text: "And the kinsman said, I cannot redeem it for myself, lest I mar mine own inheritance: redeem thou my right to thyself; for I cannot redeem it.",
        },
        {
          number: 7,
          text: "Now this was the manner in former time in Israel concerning redeeming and concerning changing, for to confirm all things; a man plucked off his shoe, and gave it to his neighbour: and this was a testimony in Israel.",
        },
        {
          number: 8,
          text: "Therefore the kinsman said unto Boaz, Buy it for thee. So he drew off his shoe.",
        },
        {
          number: 9,
          text: "And Boaz said unto the elders, and unto all the people, Ye are witnesses this day, that I have bought all that was Elimelech\u2019s, and all that was Chilion\u2019s and Mahlon\u2019s, of the hand of Naomi.",
        },
        {
          number: 10,
          text: "Moreover Ruth the Moabitess, the wife of Mahlon, have I purchased to be my wife, to raise up the name of the dead upon his inheritance, that the name of the dead be not cut off from among his brethren, and from the gate of his place: ye are witnesses this day.",
        },
        {
          number: 11,
          text: "And all the people that were in the gate, and the elders, said, We are witnesses. The LORD make the woman that is come into thine house like Rachel and like Leah, which two did build the house of Israel: and do thou worthily in Ephratah, and be famous in Bethlehem:",
        },
        {
          number: 12,
          text: "And let thy house be like the house of Pharez, whom Tamar bare unto Judah, of the seed which the LORD shall give thee of this young woman.",
        },
        {
          number: 13,
          text: "So Boaz took Ruth, and she was his wife: and when he went in unto her, the LORD gave her conception, and she bare a son.",
        },
        {
          number: 14,
          text: "And the women said unto Naomi, Blessed be the LORD, which hath not left thee this day without a kinsman, that his name may be famous in Israel.",
        },
        {
          number: 15,
          text: "And he shall be unto thee a restorer of thy life, and a nourisher of thine old age: for thy daughter in law, which loveth thee, which is better to thee than seven sons, hath born him.",
        },
        {
          number: 16,
          text: "And Naomi took the child, and laid it in her bosom, and became nurse unto it.",
        },
        {
          number: 17,
          text: "And the women her neighbours gave it a name, saying, There is a son born to Naomi; and they called his name Obed: he is the father of Jesse, the father of David.",
        },
        {
          number: 18,
          text: "Now these are the generations of Pharez: Pharez begat Hezron,",
        },
        {
          number: 19,
          text: "And Hezron begat Ram, and Ram begat Amminadab,",
        },
        {
          number: 20,
          text: "And Amminadab begat Nahshon, and Nahshon begat Salmon,",
        },
        {
          number: 21,
          text: "And Salmon begat Boaz, and Boaz begat Obed,",
        },
        {
          number: 22,
          text: "And Obed begat Jesse, and Jesse begat David.",
        },
      ],
    },
  ],
};

export default Ruth;
