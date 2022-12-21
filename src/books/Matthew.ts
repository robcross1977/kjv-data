import { DeepPartial } from "typeorm";
import { Book } from "../entity/Book";

const Matthew: DeepPartial<Book> = {
  name: "Matthew",
  chapters: [
    {
      number: 1,
      verses: [
        {
          number: 1,
          text: "The book of the generation of Jesus Christ, the son of David, the son of Abraham.",
        },
        {
          number: 2,
          text: "Abraham begat Isaac; and Isaac begat Jacob; and Jacob begat Judas and his brethren;",
        },
        {
          number: 3,
          text: "And Judas begat Phares and Zara of Thamar; and Phares begat Esrom; and Esrom begat Aram;",
        },
        {
          number: 4,
          text: "And Aram begat Aminadab; and Aminadab begat Naasson; and Naasson begat Salmon;",
        },
        {
          number: 5,
          text: "And Salmon begat Booz of Rachab; and Booz begat Obed of Ruth; and Obed begat Jesse;",
        },
        {
          number: 6,
          text: "And Jesse begat David the king; and David the king begat Solomon of her that had been the wife of Urias;",
        },
        {
          number: 7,
          text: "And Solomon begat Roboam; and Roboam begat Abia; and Abia begat Asa;",
        },
        {
          number: 8,
          text: "And Asa begat Josaphat; and Josaphat begat Joram; and Joram begat Ozias;",
        },
        {
          number: 9,
          text: "And Ozias begat Joatham; and Joatham begat Achaz; and Achaz begat Ezekias;",
        },
        {
          number: 10,
          text: "And Ezekias begat Manasses; and Manasses begat Amon; and Amon begat Josias;",
        },
        {
          number: 11,
          text: "And Josias begat Jechonias and his brethren, about the time they were carried away to Babylon:",
        },
        {
          number: 12,
          text: "And after they were brought to Babylon, Jechonias begat Salathiel; and Salathiel begat Zorobabel;",
        },
        {
          number: 13,
          text: "And Zorobabel begat Abiud; and Abiud begat Eliakim; and Eliakim begat Azor;",
        },
        {
          number: 14,
          text: "And Azor begat Sadoc; and Sadoc begat Achim; and Achim begat Eliud;",
        },
        {
          number: 15,
          text: "And Eliud begat Eleazar; and Eleazar begat Matthan; and Matthan begat Jacob;",
        },
        {
          number: 16,
          text: "And Jacob begat Joseph the husband of Mary, of whom was born Jesus, who is called Christ.",
        },
        {
          number: 17,
          text: "So all the generations from Abraham to David are fourteen generations; and from David until the carrying away into Babylon are fourteen generations; and from the carrying away into Babylon unto Christ are fourteen generations.",
        },
        {
          number: 18,
          text: "Now the birth of Jesus Christ was on this wise: When as his mother Mary was espoused to Joseph, before they came together, she was found with child of the Holy Ghost.",
        },
        {
          number: 19,
          text: "Then Joseph her husband, being a just man, and not willing to make her a publick example, was minded to put her away privily.",
        },
        {
          number: 20,
          text: "But while he thought on these things, behold, the angel of the LORD appeared unto him in a dream, saying, Joseph, thou son of David, fear not to take unto thee Mary thy wife: for that which is conceived in her is of the Holy Ghost.",
        },
        {
          number: 21,
          text: "And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins.",
        },
        {
          number: 22,
          text: "Now all this was done, that it might be fulfilled which was spoken of the Lord by the prophet, saying,",
        },
        {
          number: 23,
          text: "Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us.",
        },
        {
          number: 24,
          text: "Then Joseph being raised from sleep did as the angel of the Lord had bidden him, and took unto him his wife:",
        },
        {
          number: 25,
          text: "And knew her not till she had brought forth her firstborn son: and he called his name JESUS.",
        },
      ],
    },
    {
      number: 2,
      verses: [
        {
          number: 1,
          text: "Now when Jesus was born in Bethlehem of Judaea in the days of Herod the king, behold, there came wise men from the east to Jerusalem,",
        },
        {
          number: 2,
          text: "Saying, Where is he that is born King of the Jews? for we have seen his star in the east, and are come to worship him.",
        },
        {
          number: 3,
          text: "When Herod the king had heard these things, he was troubled, and all Jerusalem with him.",
        },
        {
          number: 4,
          text: "And when he had gathered all the chief priests and scribes of the people together, he demanded of them where Christ should be born.",
        },
        {
          number: 5,
          text: "And they said unto him, In Bethlehem of Judaea: for thus it is written by the prophet,",
        },
        {
          number: 6,
          text: "And thou Bethlehem, in the land of Juda, art not the least among the princes of Juda: for out of thee shall come a Governor, that shall rule my people Israel.",
        },
        {
          number: 7,
          text: "Then Herod, when he had privily called the wise men, enquired of them diligently what time the star appeared.",
        },
        {
          number: 8,
          text: "And he sent them to Bethlehem, and said, Go and search diligently for the young child; and when ye have found him, bring me word again, that I may come and worship him also.",
        },
        {
          number: 9,
          text: "When they had heard the king, they departed; and, lo, the star, which they saw in the east, went before them, till it came and stood over where the young child was.",
        },
        {
          number: 10,
          text: "When they saw the star, they rejoiced with exceeding great joy.",
        },
        {
          number: 11,
          text: "And when they were come into the house, they saw the young child with Mary his mother, and fell down, and worshipped him: and when they had opened their treasures, they presented unto him gifts; gold, and frankincense, and myrrh.",
        },
        {
          number: 12,
          text: "And being warned of God in a dream that they should not return to Herod, they departed into their own country another way.",
        },
        {
          number: 13,
          text: "And when they were departed, behold, the angel of the Lord appeareth to Joseph in a dream, saying, Arise, and take the young child and his mother, and flee into Egypt, and be thou there until I bring thee word: for Herod will seek the young child to destroy him.",
        },
        {
          number: 14,
          text: "When he arose, he took the young child and his mother by night, and departed into Egypt:",
        },
        {
          number: 15,
          text: "And was there until the death of Herod: that it might be fulfilled which was spoken of the Lord by the prophet, saying, Out of Egypt have I called my son.",
        },
        {
          number: 16,
          text: "Then Herod, when he saw that he was mocked of the wise men, was exceeding wroth, and sent forth, and slew all the children that were in Bethlehem, and in all the coasts thereof, from two years old and under, according to the time which he had diligently enquired of the wise men.",
        },
        {
          number: 17,
          text: "Then was fulfilled that which was spoken by Jeremy the prophet, saying,",
        },
        {
          number: 18,
          text: "In Rama was there a voice heard, lamentation, and weeping, and great mourning, Rachel weeping for her children, and would not be comforted, because they are not.",
        },
        {
          number: 19,
          text: "But when Herod was dead, behold, an angel of the Lord appeareth in a dream to Joseph in Egypt,",
        },
        {
          number: 20,
          text: "Saying, Arise, and take the young child and his mother, and go into the land of Israel: for they are dead which sought the young child\u2019s life.",
        },
        {
          number: 21,
          text: "And he arose, and took the young child and his mother, and came into the land of Israel.",
        },
        {
          number: 22,
          text: "But when he heard that Archelaus did reign in Judaea in the room of his father Herod, he was afraid to go thither: notwithstanding, being warned of God in a dream, he turned aside into the parts of Galilee:",
        },
        {
          number: 23,
          text: "And he came and dwelt in a city called Nazareth: that it might be fulfilled which was spoken by the prophets, He shall be called a Nazarene.",
        },
      ],
    },
    {
      number: 3,
      verses: [
        {
          number: 1,
          text: "In those days came John the Baptist, preaching in the wilderness of Judaea,",
        },
        {
          number: 2,
          text: "And saying, Repent ye: for the kingdom of heaven is at hand.",
        },
        {
          number: 3,
          text: "For this is he that was spoken of by the prophet Esaias, saying, The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.",
        },
        {
          number: 4,
          text: "And the same John had his raiment of camel\u2019s hair, and a leathern girdle about his loins; and his meat was locusts and wild honey.",
        },
        {
          number: 5,
          text: "Then went out to him Jerusalem, and all Judaea, and all the region round about Jordan,",
        },
        {
          number: 6,
          text: "And were baptized of him in Jordan, confessing their sins.",
        },
        {
          number: 7,
          text: "But when he saw many of the Pharisees and Sadducees come to his baptism, he said unto them, O generation of vipers, who hath warned you to flee from the wrath to come?",
        },
        {
          number: 8,
          text: "Bring forth therefore fruits meet for repentance:",
        },
        {
          number: 9,
          text: "And think not to say within yourselves, We have Abraham to our father: for I say unto you, that God is able of these stones to raise up children unto Abraham.",
        },
        {
          number: 10,
          text: "And now also the axe is laid unto the root of the trees: therefore every tree which bringeth not forth good fruit is hewn down, and cast into the fire.",
        },
        {
          number: 11,
          text: "I indeed baptize you with water unto repentance: but he that cometh after me is mightier than I, whose shoes I am not worthy to bear: he shall baptize you with the Holy Ghost, and with fire:",
        },
        {
          number: 12,
          text: "Whose fan is in his hand, and he will throughly purge his floor, and gather his wheat into the garner; but he will burn up the chaff with unquenchable fire.",
        },
        {
          number: 13,
          text: "Then cometh Jesus from Galilee to Jordan unto John, to be baptized of him.",
        },
        {
          number: 14,
          text: "But John forbad him, saying, I have need to be baptized of thee, and comest thou to me?",
        },
        {
          number: 15,
          text: "And Jesus answering said unto him, Suffer it to be so now: for thus it becometh us to fulfil all righteousness. Then he suffered him.",
        },
        {
          number: 16,
          text: "And Jesus, when he was baptized, went up straightway out of the water: and, lo, the heavens were opened unto him, and he saw the Spirit of God descending like a dove, and lighting upon him:",
        },
        {
          number: 17,
          text: "And lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased.",
        },
      ],
    },
    {
      number: 4,
      verses: [
        {
          number: 1,
          text: "Then was Jesus led up of the Spirit into the wilderness to be tempted of the devil.",
        },
        {
          number: 2,
          text: "And when he had fasted forty days and forty nights, he was afterward an hungred.",
        },
        {
          number: 3,
          text: "And when the tempter came to him, he said, If thou be the Son of God, command that these stones be made bread.",
        },
        {
          number: 4,
          text: "But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.",
        },
        {
          number: 5,
          text: "Then the devil taketh him up into the holy city, and setteth him on a pinnacle of the temple,",
        },
        {
          number: 6,
          text: "And saith unto him, If thou be the Son of God, cast thyself down: for it is written, He shall give his angels charge concerning thee: and in their hands they shall bear thee up, lest at any time thou dash thy foot against a stone.",
        },
        {
          number: 7,
          text: "Jesus said unto him, It is written again, Thou shalt not tempt the Lord thy God.",
        },
        {
          number: 8,
          text: "Again, the devil taketh him up into an exceeding high mountain, and sheweth him all the kingdoms of the world, and the glory of them;",
        },
        {
          number: 9,
          text: "And saith unto him, All these things will I give thee, if thou wilt fall down and worship me.",
        },
        {
          number: 10,
          text: "Then saith Jesus unto him, Get thee hence, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve.",
        },
        {
          number: 11,
          text: "Then the devil leaveth him, and, behold, angels came and ministered unto him.",
        },
        {
          number: 12,
          text: "Now when Jesus had heard that John was cast into prison, he departed into Galilee;",
        },
        {
          number: 13,
          text: "And leaving Nazareth, he came and dwelt in Capernaum, which is upon the sea coast, in the borders of Zabulon and Nephthalim:",
        },
        {
          number: 14,
          text: "That it might be fulfilled which was spoken by Esaias the prophet, saying,",
        },
        {
          number: 15,
          text: "The land of Zabulon, and the land of Nephthalim, by the way of the sea, beyond Jordan, Galilee of the Gentiles;",
        },
        {
          number: 16,
          text: "The people which sat in darkness saw great light; and to them which sat in the region and shadow of death light is sprung up.",
        },
        {
          number: 17,
          text: "From that time Jesus began to preach, and to say, Repent: for the kingdom of heaven is at hand.",
        },
        {
          number: 18,
          text: "And Jesus, walking by the sea of Galilee, saw two brethren, Simon called Peter, and Andrew his brother, casting a net into the sea: for they were fishers.",
        },
        {
          number: 19,
          text: "And he saith unto them, Follow me, and I will make you fishers of men.",
        },
        {
          number: 20,
          text: "And they straightway left their nets, and followed him.",
        },
        {
          number: 21,
          text: "And going on from thence, he saw other two brethren, James the son of Zebedee, and John his brother, in a ship with Zebedee their father, mending their nets; and he called them.",
        },
        {
          number: 22,
          text: "And they immediately left the ship and their father, and followed him.",
        },
        {
          number: 23,
          text: "And Jesus went about all Galilee, teaching in their synagogues, and preaching the gospel of the kingdom, and healing all manner of sickness and all manner of disease among the people.",
        },
        {
          number: 24,
          text: "And his fame went throughout all Syria: and they brought unto him all sick people that were taken with divers diseases and torments, and those which were possessed with devils, and those which were lunatick, and those that had the palsy; and he healed them.",
        },
        {
          number: 25,
          text: "And there followed him great multitudes of people from Galilee, and from Decapolis, and from Jerusalem, and from Judaea, and from beyond Jordan.",
        },
      ],
    },
    {
      number: 5,
      verses: [
        {
          number: 1,
          text: "And seeing the multitudes, he went up into a mountain: and when he was set, his disciples came unto him:",
        },
        {
          number: 2,
          text: "And he opened his mouth, and taught them, saying,",
        },
        {
          number: 3,
          text: "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
        },
        {
          number: 4,
          text: "Blessed are they that mourn: for they shall be comforted.",
        },
        {
          number: 5,
          text: "Blessed are the meek: for they shall inherit the earth.",
        },
        {
          number: 6,
          text: "Blessed are they which do hunger and thirst after righteousness: for they shall be filled.",
        },
        {
          number: 7,
          text: "Blessed are the merciful: for they shall obtain mercy.",
        },
        {
          number: 8,
          text: "Blessed are the pure in heart: for they shall see God.",
        },
        {
          number: 9,
          text: "Blessed are the peacemakers: for they shall be called the children of God.",
        },
        {
          number: 10,
          text: "Blessed are they which are persecuted for righteousness\u2019 sake: for theirs is the kingdom of heaven.",
        },
        {
          number: 11,
          text: "Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake.",
        },
        {
          number: 12,
          text: "Rejoice, and be exceeding glad: for great is your reward in heaven: for so persecuted they the prophets which were before you.",
        },
        {
          number: 13,
          text: "Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men.",
        },
        {
          number: 14,
          text: "Ye are the light of the world. A city that is set on an hill cannot be hid.",
        },
        {
          number: 15,
          text: "Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house.",
        },
        {
          number: 16,
          text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
        },
        {
          number: 17,
          text: "Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil.",
        },
        {
          number: 18,
          text: "For verily I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled.",
        },
        {
          number: 19,
          text: "Whosoever therefore shall break one of these least commandments, and shall teach men so, he shall be called the least in the kingdom of heaven: but whosoever shall do and teach them, the same shall be called great in the kingdom of heaven.",
        },
        {
          number: 20,
          text: "For I say unto you, That except your righteousness shall exceed the righteousness of the scribes and Pharisees, ye shall in no case enter into the kingdom of heaven.",
        },
        {
          number: 21,
          text: "Ye have heard that it was said by them of old time, Thou shalt not kill; and whosoever shall kill shall be in danger of the judgment:",
        },
        {
          number: 22,
          text: "But I say unto you, That whosoever is angry with his brother without a cause shall be in danger of the judgment: and whosoever shall say to his brother, Raca, shall be in danger of the council: but whosoever shall say, Thou fool, shall be in danger of hell fire.",
        },
        {
          number: 23,
          text: "Therefore if thou bring thy gift to the altar, and there rememberest that thy brother hath ought against thee;",
        },
        {
          number: 24,
          text: "Leave there thy gift before the altar, and go thy way; first be reconciled to thy brother, and then come and offer thy gift.",
        },
        {
          number: 25,
          text: "Agree with thine adversary quickly, whiles thou art in the way with him; lest at any time the adversary deliver thee to the judge, and the judge deliver thee to the officer, and thou be cast into prison.",
        },
        {
          number: 26,
          text: "Verily I say unto thee, Thou shalt by no means come out thence, till thou hast paid the uttermost farthing.",
        },
        {
          number: 27,
          text: "Ye have heard that it was said by them of old time, Thou shalt not commit adultery:",
        },
        {
          number: 28,
          text: "But I say unto you, That whosoever looketh on a woman to lust after her hath committed adultery with her already in his heart.",
        },
        {
          number: 29,
          text: "And if thy right eye offend thee, pluck it out, and cast it from thee: for it is profitable for thee that one of thy members should perish, and not that thy whole body should be cast into hell.",
        },
        {
          number: 30,
          text: "And if thy right hand offend thee, cut it off, and cast it from thee: for it is profitable for thee that one of thy members should perish, and not that thy whole body should be cast into hell.",
        },
        {
          number: 31,
          text: "It hath been said, Whosoever shall put away his wife, let him give her a writing of divorcement:",
        },
        {
          number: 32,
          text: "But I say unto you, That whosoever shall put away his wife, saving for the cause of fornication, causeth her to commit adultery: and whosoever shall marry her that is divorced committeth adultery.",
        },
        {
          number: 33,
          text: "Again, ye have heard that it hath been said by them of old time, Thou shalt not forswear thyself, but shalt perform unto the Lord thine oaths:",
        },
        {
          number: 34,
          text: "But I say unto you, Swear not at all; neither by heaven; for it is God\u2019s throne:",
        },
        {
          number: 35,
          text: "Nor by the earth; for it is his footstool: neither by Jerusalem; for it is the city of the great King.",
        },
        {
          number: 36,
          text: "Neither shalt thou swear by thy head, because thou canst not make one hair white or black.",
        },
        {
          number: 37,
          text: "But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.",
        },
        {
          number: 38,
          text: "Ye have heard that it hath been said, An eye for an eye, and a tooth for a tooth:",
        },
        {
          number: 39,
          text: "But I say unto you, That ye resist not evil: but whosoever shall smite thee on thy right cheek, turn to him the other also.",
        },
        {
          number: 40,
          text: "And if any man will sue thee at the law, and take away thy coat, let him have thy cloak also.",
        },
        {
          number: 41,
          text: "And whosoever shall compel thee to go a mile, go with him twain.",
        },
        {
          number: 42,
          text: "Give to him that asketh thee, and from him that would borrow of thee turn not thou away.",
        },
        {
          number: 43,
          text: "Ye have heard that it hath been said, Thou shalt love thy neighbour, and hate thine enemy.",
        },
        {
          number: 44,
          text: "But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you;",
        },
        {
          number: 45,
          text: "That ye may be the children of your Father which is in heaven: for he maketh his sun to rise on the evil and on the good, and sendeth rain on the just and on the unjust.",
        },
        {
          number: 46,
          text: "For if ye love them which love you, what reward have ye? do not even the publicans the same?",
        },
        {
          number: 47,
          text: "And if ye salute your brethren only, what do ye more than others? do not even the publicans so?",
        },
        {
          number: 48,
          text: "Be ye therefore perfect, even as your Father which is in heaven is perfect.",
        },
      ],
    },
    {
      number: 6,
      verses: [
        {
          number: 1,
          text: "Take heed that ye do not your alms before men, to be seen of them: otherwise ye have no reward of your Father which is in heaven.",
        },
        {
          number: 2,
          text: "Therefore when thou doest thine alms, do not sound a trumpet before thee, as the hypocrites do in the synagogues and in the streets, that they may have glory of men. Verily I say unto you, They have their reward.",
        },
        {
          number: 3,
          text: "But when thou doest alms, let not thy left hand know what thy right hand doeth:",
        },
        {
          number: 4,
          text: "That thine alms may be in secret: and thy Father which seeth in secret himself shall reward thee openly.",
        },
        {
          number: 5,
          text: "And when thou prayest, thou shalt not be as the hypocrites are: for they love to pray standing in the synagogues and in the corners of the streets, that they may be seen of men. Verily I say unto you, They have their reward.",
        },
        {
          number: 6,
          text: "But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly.",
        },
        {
          number: 7,
          text: "But when ye pray, use not vain repetitions, as the heathen do: for they think that they shall be heard for their much speaking.",
        },
        {
          number: 8,
          text: "Be not ye therefore like unto them: for your Father knoweth what things ye have need of, before ye ask him.",
        },
        {
          number: 9,
          text: "After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name.",
        },
        {
          number: 10,
          text: "Thy kingdom come. Thy will be done in earth, as it is in heaven.",
        },
        { number: 11, text: "Give us this day our daily bread." },
        {
          number: 12,
          text: "And forgive us our debts, as we forgive our debtors.",
        },
        {
          number: 13,
          text: "And lead us not into temptation, but deliver us from evil: For thine is the kingdom, and the power, and the glory, for ever. Amen.",
        },
        {
          number: 14,
          text: "For if ye forgive men their trespasses, your heavenly Father will also forgive you:",
        },
        {
          number: 15,
          text: "But if ye forgive not men their trespasses, neither will your Father forgive your trespasses.",
        },
        {
          number: 16,
          text: "Moreover when ye fast, be not, as the hypocrites, of a sad countenance: for they disfigure their faces, that they may appear unto men to fast. Verily I say unto you, They have their reward.",
        },
        {
          number: 17,
          text: "But thou, when thou fastest, anoint thine head, and wash thy face;",
        },
        {
          number: 18,
          text: "That thou appear not unto men to fast, but unto thy Father which is in secret: and thy Father, which seeth in secret, shall reward thee openly.",
        },
        {
          number: 19,
          text: "Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal:",
        },
        {
          number: 20,
          text: "But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal:",
        },
        {
          number: 21,
          text: "For where your treasure is, there will your heart be also.",
        },
        {
          number: 22,
          text: "The light of the body is the eye: if therefore thine eye be single, thy whole body shall be full of light.",
        },
        {
          number: 23,
          text: "But if thine eye be evil, thy whole body shall be full of darkness. If therefore the light that is in thee be darkness, how great is that darkness!",
        },
        {
          number: 24,
          text: "No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon.",
        },
        {
          number: 25,
          text: "Therefore I say unto you, Take no thought for your life, what ye shall eat, or what ye shall drink; nor yet for your body, what ye shall put on. Is not the life more than meat, and the body than raiment?",
        },
        {
          number: 26,
          text: "Behold the fowls of the air: for they sow not, neither do they reap, nor gather into barns; yet your heavenly Father feedeth them. Are ye not much better than they?",
        },
        {
          number: 27,
          text: "Which of you by taking thought can add one cubit unto his stature?",
        },
        {
          number: 28,
          text: "And why take ye thought for raiment? Consider the lilies of the field, how they grow; they toil not, neither do they spin:",
        },
        {
          number: 29,
          text: "And yet I say unto you, That even Solomon in all his glory was not arrayed like one of these.",
        },
        {
          number: 30,
          text: "Wherefore, if God so clothe the grass of the field, which to day is, and to morrow is cast into the oven, shall he not much more clothe you, O ye of little faith?",
        },
        {
          number: 31,
          text: "Therefore take no thought, saying, What shall we eat? or, What shall we drink? or, Wherewithal shall we be clothed?",
        },
        {
          number: 32,
          text: "(For after all these things do the Gentiles seek:) for your heavenly Father knoweth that ye have need of all these things.",
        },
        {
          number: 33,
          text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
        },
        {
          number: 34,
          text: "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.",
        },
      ],
    },
    {
      number: 7,
      verses: [
        { number: 1, text: "Judge not, that ye be not judged." },
        {
          number: 2,
          text: "For with what judgment ye judge, ye shall be judged: and with what measure ye mete, it shall be measured to you again.",
        },
        {
          number: 3,
          text: "And why beholdest thou the mote that is in thy brother\u2019s eye, but considerest not the beam that is in thine own eye?",
        },
        {
          number: 4,
          text: "Or how wilt thou say to thy brother, Let me pull out the mote out of thine eye; and, behold, a beam is in thine own eye?",
        },
        {
          number: 5,
          text: "Thou hypocrite, first cast out the beam out of thine own eye; and then shalt thou see clearly to cast out the mote out of thy brother\u2019s eye.",
        },
        {
          number: 6,
          text: "Give not that which is holy unto the dogs, neither cast ye your pearls before swine, lest they trample them under their feet, and turn again and rend you.",
        },
        {
          number: 7,
          text: "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:",
        },
        {
          number: 8,
          text: "For every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened.",
        },
        {
          number: 9,
          text: "Or what man is there of you, whom if his son ask bread, will he give him a stone?",
        },
        {
          number: 10,
          text: "Or if he ask a fish, will he give him a serpent?",
        },
        {
          number: 11,
          text: "If ye then, being evil, know how to give good gifts unto your children, how much more shall your Father which is in heaven give good things to them that ask him?",
        },
        {
          number: 12,
          text: "Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.",
        },
        {
          number: 13,
          text: "Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction, and many there be which go in thereat:",
        },
        {
          number: 14,
          text: "Because strait is the gate, and narrow is the way, which leadeth unto life, and few there be that find it.",
        },
        {
          number: 15,
          text: "Beware of false prophets, which come to you in sheep\u2019s clothing, but inwardly they are ravening wolves.",
        },
        {
          number: 16,
          text: "Ye shall know them by their fruits. Do men gather grapes of thorns, or figs of thistles?",
        },
        {
          number: 17,
          text: "Even so every good tree bringeth forth good fruit; but a corrupt tree bringeth forth evil fruit.",
        },
        {
          number: 18,
          text: "A good tree cannot bring forth evil fruit, neither can a corrupt tree bring forth good fruit.",
        },
        {
          number: 19,
          text: "Every tree that bringeth not forth good fruit is hewn down, and cast into the fire.",
        },
        {
          number: 20,
          text: "Wherefore by their fruits ye shall know them.",
        },
        {
          number: 21,
          text: "Not every one that saith unto me, Lord, Lord, shall enter into the kingdom of heaven; but he that doeth the will of my Father which is in heaven.",
        },
        {
          number: 22,
          text: "Many will say to me in that day, Lord, Lord, have we not prophesied in thy name? and in thy name have cast out devils? and in thy name done many wonderful works?",
        },
        {
          number: 23,
          text: "And then will I profess unto them, I never knew you: depart from me, ye that work iniquity.",
        },
        {
          number: 24,
          text: "Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock:",
        },
        {
          number: 25,
          text: "And the rain descended, and the floods came, and the winds blew, and beat upon that house; and it fell not: for it was founded upon a rock.",
        },
        {
          number: 26,
          text: "And every one that heareth these sayings of mine, and doeth them not, shall be likened unto a foolish man, which built his house upon the sand:",
        },
        {
          number: 27,
          text: "And the rain descended, and the floods came, and the winds blew, and beat upon that house; and it fell: and great was the fall of it.",
        },
        {
          number: 28,
          text: "And it came to pass, when Jesus had ended these sayings, the people were astonished at his doctrine:",
        },
        {
          number: 29,
          text: "For he taught them as one having authority, and not as the scribes.",
        },
      ],
    },
    {
      number: 8,
      verses: [
        {
          number: 1,
          text: "When he was come down from the mountain, great multitudes followed him.",
        },
        {
          number: 2,
          text: "And, behold, there came a leper and worshipped him, saying, Lord, if thou wilt, thou canst make me clean.",
        },
        {
          number: 3,
          text: "And Jesus put forth his hand, and touched him, saying, I will; be thou clean. And immediately his leprosy was cleansed.",
        },
        {
          number: 4,
          text: "And Jesus saith unto him, See thou tell no man; but go thy way, shew thyself to the priest, and offer the gift that Moses commanded, for a testimony unto them.",
        },
        {
          number: 5,
          text: "And when Jesus was entered into Capernaum, there came unto him a centurion, beseeching him,",
        },
        {
          number: 6,
          text: "And saying, Lord, my servant lieth at home sick of the palsy, grievously tormented.",
        },
        {
          number: 7,
          text: "And Jesus saith unto him, I will come and heal him.",
        },
        {
          number: 8,
          text: "The centurion answered and said, Lord, I am not worthy that thou shouldest come under my roof: but speak the word only, and my servant shall be healed.",
        },
        {
          number: 9,
          text: "For I am a man under authority, having soldiers under me: and I say to this man, Go, and he goeth; and to another, Come, and he cometh; and to my servant, Do this, and he doeth it.",
        },
        {
          number: 10,
          text: "When Jesus heard it, he marvelled, and said to them that followed, Verily I say unto you, I have not found so great faith, no, not in Israel.",
        },
        {
          number: 11,
          text: "And I say unto you, That many shall come from the east and west, and shall sit down with Abraham, and Isaac, and Jacob, in the kingdom of heaven.",
        },
        {
          number: 12,
          text: "But the children of the kingdom shall be cast out into outer darkness: there shall be weeping and gnashing of teeth.",
        },
        {
          number: 13,
          text: "And Jesus said unto the centurion, Go thy way; and as thou hast believed, so be it done unto thee. And his servant was healed in the selfsame hour.",
        },
        {
          number: 14,
          text: "And when Jesus was come into Peter\u2019s house, he saw his wife\u2019s mother laid, and sick of a fever.",
        },
        {
          number: 15,
          text: "And he touched her hand, and the fever left her: and she arose, and ministered unto them.",
        },
        {
          number: 16,
          text: "When the even was come, they brought unto him many that were possessed with devils: and he cast out the spirits with his word, and healed all that were sick:",
        },
        {
          number: 17,
          text: "That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses.",
        },
        {
          number: 18,
          text: "Now when Jesus saw great multitudes about him, he gave commandment to depart unto the other side.",
        },
        {
          number: 19,
          text: "And a certain scribe came, and said unto him, Master, I will follow thee whithersoever thou goest.",
        },
        {
          number: 20,
          text: "And Jesus saith unto him, The foxes have holes, and the birds of the air have nests; but the Son of man hath not where to lay his head.",
        },
        {
          number: 21,
          text: "And another of his disciples said unto him, Lord, suffer me first to go and bury my father.",
        },
        {
          number: 22,
          text: "But Jesus said unto him, Follow me; and let the dead bury their dead.",
        },
        {
          number: 23,
          text: "And when he was entered into a ship, his disciples followed him.",
        },
        {
          number: 24,
          text: "And, behold, there arose a great tempest in the sea, insomuch that the ship was covered with the waves: but he was asleep.",
        },
        {
          number: 25,
          text: "And his disciples came to him, and awoke him, saying, Lord, save us: we perish.",
        },
        {
          number: 26,
          text: "And he saith unto them, Why are ye fearful, O ye of little faith? Then he arose, and rebuked the winds and the sea; and there was a great calm.",
        },
        {
          number: 27,
          text: "But the men marvelled, saying, What manner of man is this, that even the winds and the sea obey him!",
        },
        {
          number: 28,
          text: "And when he was come to the other side into the country of the Gergesenes, there met him two possessed with devils, coming out of the tombs, exceeding fierce, so that no man might pass by that way.",
        },
        {
          number: 29,
          text: "And, behold, they cried out, saying, What have we to do with thee, Jesus, thou Son of God? art thou come hither to torment us before the time?",
        },
        {
          number: 30,
          text: "And there was a good way off from them an herd of many swine feeding.",
        },
        {
          number: 31,
          text: "So the devils besought him, saying, If thou cast us out, suffer us to go away into the herd of swine.",
        },
        {
          number: 32,
          text: "And he said unto them, Go. And when they were come out, they went into the herd of swine: and, behold, the whole herd of swine ran violently down a steep place into the sea, and perished in the waters.",
        },
        {
          number: 33,
          text: "And they that kept them fled, and went their ways into the city, and told every thing, and what was befallen to the possessed of the devils.",
        },
        {
          number: 34,
          text: "And, behold, the whole city came out to meet Jesus: and when they saw him, they besought him that he would depart out of their coasts.",
        },
      ],
    },
    {
      number: 9,
      verses: [
        {
          number: 1,
          text: "And he entered into a ship, and passed over, and came into his own city.",
        },
        {
          number: 2,
          text: "And, behold, they brought to him a man sick of the palsy, lying on a bed: and Jesus seeing their faith said unto the sick of the palsy; Son, be of good cheer; thy sins be forgiven thee.",
        },
        {
          number: 3,
          text: "And, behold, certain of the scribes said within themselves, This man blasphemeth.",
        },
        {
          number: 4,
          text: "And Jesus knowing their thoughts said, Wherefore think ye evil in your hearts?",
        },
        {
          number: 5,
          text: "For whether is easier, to say, Thy sins be forgiven thee; or to say, Arise, and walk?",
        },
        {
          number: 6,
          text: "But that ye may know that the Son of man hath power on earth to forgive sins, (then saith he to the sick of the palsy,) Arise, take up thy bed, and go unto thine house.",
        },
        { number: 7, text: "And he arose, and departed to his house." },
        {
          number: 8,
          text: "But when the multitudes saw it, they marvelled, and glorified God, which had given such power unto men.",
        },
        {
          number: 9,
          text: "And as Jesus passed forth from thence, he saw a man, named Matthew, sitting at the receipt of custom: and he saith unto him, Follow me. And he arose, and followed him.",
        },
        {
          number: 10,
          text: "And it came to pass, as Jesus sat at meat in the house, behold, many publicans and sinners came and sat down with him and his disciples.",
        },
        {
          number: 11,
          text: "And when the Pharisees saw it, they said unto his disciples, Why eateth your Master with publicans and sinners?",
        },
        {
          number: 12,
          text: "But when Jesus heard that, he said unto them, They that be whole need not a physician, but they that are sick.",
        },
        {
          number: 13,
          text: "But go ye and learn what that meaneth, I will have mercy, and not sacrifice: for I am not come to call the righteous, but sinners to repentance.",
        },
        {
          number: 14,
          text: "Then came to him the disciples of John, saying, Why do we and the Pharisees fast oft, but thy disciples fast not?",
        },
        {
          number: 15,
          text: "And Jesus said unto them, Can the children of the bridechamber mourn, as long as the bridegroom is with them? but the days will come, when the bridegroom shall be taken from them, and then shall they fast.",
        },
        {
          number: 16,
          text: "No man putteth a piece of new cloth unto an old garment, for that which is put in to fill it up taketh from the garment, and the rent is made worse.",
        },
        {
          number: 17,
          text: "Neither do men put new wine into old bottles: else the bottles break, and the wine runneth out, and the bottles perish: but they put new wine into new bottles, and both are preserved.",
        },
        {
          number: 18,
          text: "While he spake these things unto them, behold, there came a certain ruler, and worshipped him, saying, My daughter is even now dead: but come and lay thy hand upon her, and she shall live.",
        },
        {
          number: 19,
          text: "And Jesus arose, and followed him, and so did his disciples.",
        },
        {
          number: 20,
          text: "And, behold, a woman, which was diseased with an issue of blood twelve years, came behind him, and touched the hem of his garment:",
        },
        {
          number: 21,
          text: "For she said within herself, If I may but touch his garment, I shall be whole.",
        },
        {
          number: 22,
          text: "But Jesus turned him about, and when he saw her, he said, Daughter, be of good comfort; thy faith hath made thee whole. And the woman was made whole from that hour.",
        },
        {
          number: 23,
          text: "And when Jesus came into the ruler\u2019s house, and saw the minstrels and the people making a noise,",
        },
        {
          number: 24,
          text: "He said unto them, Give place: for the maid is not dead, but sleepeth. And they laughed him to scorn.",
        },
        {
          number: 25,
          text: "But when the people were put forth, he went in, and took her by the hand, and the maid arose.",
        },
        {
          number: 26,
          text: "And the fame hereof went abroad into all that land.",
        },
        {
          number: 27,
          text: "And when Jesus departed thence, two blind men followed him, crying, and saying, Thou son of David, have mercy on us.",
        },
        {
          number: 28,
          text: "And when he was come into the house, the blind men came to him: and Jesus saith unto them, Believe ye that I am able to do this? They said unto him, Yea, Lord.",
        },
        {
          number: 29,
          text: "Then touched he their eyes, saying, According to your faith be it unto you.",
        },
        {
          number: 30,
          text: "And their eyes were opened; and Jesus straitly charged them, saying, See that no man know it.",
        },
        {
          number: 31,
          text: "But they, when they were departed, spread abroad his fame in all that country.",
        },
        {
          number: 32,
          text: "As they went out, behold, they brought to him a dumb man possessed with a devil.",
        },
        {
          number: 33,
          text: "And when the devil was cast out, the dumb spake: and the multitudes marvelled, saying, It was never so seen in Israel.",
        },
        {
          number: 34,
          text: "But the Pharisees said, He casteth out devils through the prince of the devils.",
        },
        {
          number: 35,
          text: "And Jesus went about all the cities and villages, teaching in their synagogues, and preaching the gospel of the kingdom, and healing every sickness and every disease among the people.",
        },
        {
          number: 36,
          text: "But when he saw the multitudes, he was moved with compassion on them, because they fainted, and were scattered abroad, as sheep having no shepherd.",
        },
        {
          number: 37,
          text: "Then saith he unto his disciples, The harvest truly is plenteous, but the labourers are few;",
        },
        {
          number: 38,
          text: "Pray ye therefore the Lord of the harvest, that he will send forth labourers into his harvest.",
        },
      ],
    },
    {
      number: 10,
      verses: [
        {
          number: 1,
          text: "And when he had called unto him his twelve disciples, he gave them power against unclean spirits, to cast them out, and to heal all manner of sickness and all manner of disease.",
        },
        {
          number: 2,
          text: "Now the names of the twelve apostles are these; The first, Simon, who is called Peter, and Andrew his brother; James the son of Zebedee, and John his brother;",
        },
        {
          number: 3,
          text: "Philip, and Bartholomew; Thomas, and Matthew the publican; James the son of Alphaeus, and Lebbaeus, whose surname was Thaddaeus;",
        },
        {
          number: 4,
          text: "Simon the Canaanite, and Judas Iscariot, who also betrayed him.",
        },
        {
          number: 5,
          text: "These twelve Jesus sent forth, and commanded them, saying, Go not into the way of the Gentiles, and into any city of the Samaritans enter ye not:",
        },
        {
          number: 6,
          text: "But go rather to the lost sheep of the house of Israel.",
        },
        {
          number: 7,
          text: "And as ye go, preach, saying, The kingdom of heaven is at hand.",
        },
        {
          number: 8,
          text: "Heal the sick, cleanse the lepers, raise the dead, cast out devils: freely ye have received, freely give.",
        },
        {
          number: 9,
          text: "Provide neither gold, nor silver, nor brass in your purses,",
        },
        {
          number: 10,
          text: "Nor scrip for your journey, neither two coats, neither shoes, nor yet staves: for the workman is worthy of his meat.",
        },
        {
          number: 11,
          text: "And into whatsoever city or town ye shall enter, enquire who in it is worthy; and there abide till ye go thence.",
        },
        { number: 12, text: "And when ye come into an house, salute it." },
        {
          number: 13,
          text: "And if the house be worthy, let your peace come upon it: but if it be not worthy, let your peace return to you.",
        },
        {
          number: 14,
          text: "And whosoever shall not receive you, nor hear your words, when ye depart out of that house or city, shake off the dust of your feet.",
        },
        {
          number: 15,
          text: "Verily I say unto you, It shall be more tolerable for the land of Sodom and Gomorrha in the day of judgment, than for that city.",
        },
        {
          number: 16,
          text: "Behold, I send you forth as sheep in the midst of wolves: be ye therefore wise as serpents, and harmless as doves.",
        },
        {
          number: 17,
          text: "But beware of men: for they will deliver you up to the councils, and they will scourge you in their synagogues;",
        },
        {
          number: 18,
          text: "And ye shall be brought before governors and kings for my sake, for a testimony against them and the Gentiles.",
        },
        {
          number: 19,
          text: "But when they deliver you up, take no thought how or what ye shall speak: for it shall be given you in that same hour what ye shall speak.",
        },
        {
          number: 20,
          text: "For it is not ye that speak, but the Spirit of your Father which speaketh in you.",
        },
        {
          number: 21,
          text: "And the brother shall deliver up the brother to death, and the father the child: and the children shall rise up against their parents, and cause them to be put to death.",
        },
        {
          number: 22,
          text: "And ye shall be hated of all men for my name\u2019s sake: but he that endureth to the end shall be saved.",
        },
        {
          number: 23,
          text: "But when they persecute you in this city, flee ye into another: for verily I say unto you, Ye shall not have gone over the cities of Israel, till the Son of man be come.",
        },
        {
          number: 24,
          text: "The disciple is not above his master, nor the servant above his lord.",
        },
        {
          number: 25,
          text: "It is enough for the disciple that he be as his master, and the servant as his lord. If they have called the master of the house Beelzebub, how much more shall they call them of his household?",
        },
        {
          number: 26,
          text: "Fear them not therefore: for there is nothing covered, that shall not be revealed; and hid, that shall not be known.",
        },
        {
          number: 27,
          text: "What I tell you in darkness, that speak ye in light: and what ye hear in the ear, that preach ye upon the housetops.",
        },
        {
          number: 28,
          text: "And fear not them which kill the body, but are not able to kill the soul: but rather fear him which is able to destroy both soul and body in hell.",
        },
        {
          number: 29,
          text: "Are not two sparrows sold for a farthing? and one of them shall not fall on the ground without your Father.",
        },
        {
          number: 30,
          text: "But the very hairs of your head are all numbered.",
        },
        {
          number: 31,
          text: "Fear ye not therefore, ye are of more value than many sparrows.",
        },
        {
          number: 32,
          text: "Whosoever therefore shall confess me before men, him will I confess also before my Father which is in heaven.",
        },
        {
          number: 33,
          text: "But whosoever shall deny me before men, him will I also deny before my Father which is in heaven.",
        },
        {
          number: 34,
          text: "Think not that I am come to send peace on earth: I came not to send peace, but a sword.",
        },
        {
          number: 35,
          text: "For I am come to set a man at variance against his father, and the daughter against her mother, and the daughter in law against her mother in law.",
        },
        {
          number: 36,
          text: "And a man\u2019s foes shall be they of his own household.",
        },
        {
          number: 37,
          text: "He that loveth father or mother more than me is not worthy of me: and he that loveth son or daughter more than me is not worthy of me.",
        },
        {
          number: 38,
          text: "And he that taketh not his cross, and followeth after me, is not worthy of me.",
        },
        {
          number: 39,
          text: "He that findeth his life shall lose it: and he that loseth his life for my sake shall find it.",
        },
        {
          number: 40,
          text: "He that receiveth you receiveth me, and he that receiveth me receiveth him that sent me.",
        },
        {
          number: 41,
          text: "He that receiveth a prophet in the name of a prophet shall receive a prophet\u2019s reward; and he that receiveth a righteous man in the name of a righteous man shall receive a righteous man\u2019s reward.",
        },
        {
          number: 42,
          text: "And whosoever shall give to drink unto one of these little ones a cup of cold water only in the name of a disciple, verily I say unto you, he shall in no wise lose his reward.",
        },
      ],
    },
    {
      number: 11,
      verses: [
        {
          number: 1,
          text: "And it came to pass, when Jesus had made an end of commanding his twelve disciples, he departed thence to teach and to preach in their cities.",
        },
        {
          number: 2,
          text: "Now when John had heard in the prison the works of Christ, he sent two of his disciples,",
        },
        {
          number: 3,
          text: "And said unto him, Art thou he that should come, or do we look for another?",
        },
        {
          number: 4,
          text: "Jesus answered and said unto them, Go and shew John again those things which ye do hear and see:",
        },
        {
          number: 5,
          text: "The blind receive their sight, and the lame walk, the lepers are cleansed, and the deaf hear, the dead are raised up, and the poor have the gospel preached to them.",
        },
        {
          number: 6,
          text: "And blessed is he, whosoever shall not be offended in me.",
        },
        {
          number: 7,
          text: "And as they departed, Jesus began to say unto the multitudes concerning John, What went ye out into the wilderness to see? A reed shaken with the wind?",
        },
        {
          number: 8,
          text: "But what went ye out for to see? A man clothed in soft raiment? behold, they that wear soft clothing are in kings\u2019 houses.",
        },
        {
          number: 9,
          text: "But what went ye out for to see? A prophet? yea, I say unto you, and more than a prophet.",
        },
        {
          number: 10,
          text: "For this is he, of whom it is written, Behold, I send my messenger before thy face, which shall prepare thy way before thee.",
        },
        {
          number: 11,
          text: "Verily I say unto you, Among them that are born of women there hath not risen a greater than John the Baptist: notwithstanding he that is least in the kingdom of heaven is greater than he.",
        },
        {
          number: 12,
          text: "And from the days of John the Baptist until now the kingdom of heaven suffereth violence, and the violent take it by force.",
        },
        {
          number: 13,
          text: "For all the prophets and the law prophesied until John.",
        },
        {
          number: 14,
          text: "And if ye will receive it, this is Elias, which was for to come.",
        },
        { number: 15, text: "He that hath ears to hear, let him hear." },
        {
          number: 16,
          text: "But whereunto shall I liken this generation? It is like unto children sitting in the markets, and calling unto their fellows,",
        },
        {
          number: 17,
          text: "And saying, We have piped unto you, and ye have not danced; we have mourned unto you, and ye have not lamented.",
        },
        {
          number: 18,
          text: "For John came neither eating nor drinking, and they say, He hath a devil.",
        },
        {
          number: 19,
          text: "The Son of man came eating and drinking, and they say, Behold a man gluttonous, and a winebibber, a friend of publicans and sinners. But wisdom is justified of her children.",
        },
        {
          number: 20,
          text: "Then began he to upbraid the cities wherein most of his mighty works were done, because they repented not:",
        },
        {
          number: 21,
          text: "Woe unto thee, Chorazin! woe unto thee, Bethsaida! for if the mighty works, which were done in you, had been done in Tyre and Sidon, they would have repented long ago in sackcloth and ashes.",
        },
        {
          number: 22,
          text: "But I say unto you, It shall be more tolerable for Tyre and Sidon at the day of judgment, than for you.",
        },
        {
          number: 23,
          text: "And thou, Capernaum, which art exalted unto heaven, shalt be brought down to hell: for if the mighty works, which have been done in thee, had been done in Sodom, it would have remained until this day.",
        },
        {
          number: 24,
          text: "But I say unto you, That it shall be more tolerable for the land of Sodom in the day of judgment, than for thee.",
        },
        {
          number: 25,
          text: "At that time Jesus answered and said, I thank thee, O Father, Lord of heaven and earth, because thou hast hid these things from the wise and prudent, and hast revealed them unto babes.",
        },
        {
          number: 26,
          text: "Even so, Father: for so it seemed good in thy sight.",
        },
        {
          number: 27,
          text: "All things are delivered unto me of my Father: and no man knoweth the Son, but the Father; neither knoweth any man the Father, save the Son, and he to whomsoever the Son will reveal him.",
        },
        {
          number: 28,
          text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
        },
        {
          number: 29,
          text: "Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.",
        },
        {
          number: 30,
          text: "For my yoke is easy, and my burden is light.",
        },
      ],
    },
    {
      number: 12,
      verses: [
        {
          number: 1,
          text: "At that time Jesus went on the sabbath day through the corn; and his disciples were an hungred, and began to pluck the ears of corn, and to eat.",
        },
        {
          number: 2,
          text: "But when the Pharisees saw it, they said unto him, Behold, thy disciples do that which is not lawful to do upon the sabbath day.",
        },
        {
          number: 3,
          text: "But he said unto them, Have ye not read what David did, when he was an hungred, and they that were with him;",
        },
        {
          number: 4,
          text: "How he entered into the house of God, and did eat the shewbread, which was not lawful for him to eat, neither for them which were with him, but only for the priests?",
        },
        {
          number: 5,
          text: "Or have ye not read in the law, how that on the sabbath days the priests in the temple profane the sabbath, and are blameless?",
        },
        {
          number: 6,
          text: "But I say unto you, That in this place is one greater than the temple.",
        },
        {
          number: 7,
          text: "But if ye had known what this meaneth, I will have mercy, and not sacrifice, ye would not have condemned the guiltless.",
        },
        {
          number: 8,
          text: "For the Son of man is Lord even of the sabbath day.",
        },
        {
          number: 9,
          text: "And when he was departed thence, he went into their synagogue:",
        },
        {
          number: 10,
          text: "And, behold, there was a man which had his hand withered. And they asked him, saying, Is it lawful to heal on the sabbath days? that they might accuse him.",
        },
        {
          number: 11,
          text: "And he said unto them, What man shall there be among you, that shall have one sheep, and if it fall into a pit on the sabbath day, will he not lay hold on it, and lift it out?",
        },
        {
          number: 12,
          text: "How much then is a man better than a sheep? Wherefore it is lawful to do well on the sabbath days.",
        },
        {
          number: 13,
          text: "Then saith he to the man, Stretch forth thine hand. And he stretched it forth; and it was restored whole, like as the other.",
        },
        {
          number: 14,
          text: "Then the Pharisees went out, and held a council against him, how they might destroy him.",
        },
        {
          number: 15,
          text: "But when Jesus knew it, he withdrew himself from thence: and great multitudes followed him, and he healed them all;",
        },
        {
          number: 16,
          text: "And charged them that they should not make him known:",
        },
        {
          number: 17,
          text: "That it might be fulfilled which was spoken by Esaias the prophet, saying,",
        },
        {
          number: 18,
          text: "Behold my servant, whom I have chosen; my beloved, in whom my soul is well pleased: I will put my spirit upon him, and he shall shew judgment to the Gentiles.",
        },
        {
          number: 19,
          text: "He shall not strive, nor cry; neither shall any man hear his voice in the streets.",
        },
        {
          number: 20,
          text: "A bruised reed shall he not break, and smoking flax shall he not quench, till he send forth judgment unto victory.",
        },
        { number: 21, text: "And in his name shall the Gentiles trust." },
        {
          number: 22,
          text: "Then was brought unto him one possessed with a devil, blind, and dumb: and he healed him, insomuch that the blind and dumb both spake and saw.",
        },
        {
          number: 23,
          text: "And all the people were amazed, and said, Is not this the son of David?",
        },
        {
          number: 24,
          text: "But when the Pharisees heard it, they said, This fellow doth not cast out devils, but by Beelzebub the prince of the devils.",
        },
        {
          number: 25,
          text: "And Jesus knew their thoughts, and said unto them, Every kingdom divided against itself is brought to desolation; and every city or house divided against itself shall not stand:",
        },
        {
          number: 26,
          text: "And if Satan cast out Satan, he is divided against himself; how shall then his kingdom stand?",
        },
        {
          number: 27,
          text: "And if I by Beelzebub cast out devils, by whom do your children cast them out? therefore they shall be your judges.",
        },
        {
          number: 28,
          text: "But if I cast out devils by the Spirit of God, then the kingdom of God is come unto you.",
        },
        {
          number: 29,
          text: "Or else how can one enter into a strong man\u2019s house, and spoil his goods, except he first bind the strong man? and then he will spoil his house.",
        },
        {
          number: 30,
          text: "He that is not with me is against me; and he that gathereth not with me scattereth abroad.",
        },
        {
          number: 31,
          text: "Wherefore I say unto you, All manner of sin and blasphemy shall be forgiven unto men: but the blasphemy against the Holy Ghost shall not be forgiven unto men.",
        },
        {
          number: 32,
          text: "And whosoever speaketh a word against the Son of man, it shall be forgiven him: but whosoever speaketh against the Holy Ghost, it shall not be forgiven him, neither in this world, neither in the world to come.",
        },
        {
          number: 33,
          text: "Either make the tree good, and his fruit good; or else make the tree corrupt, and his fruit corrupt: for the tree is known by his fruit.",
        },
        {
          number: 34,
          text: "O generation of vipers, how can ye, being evil, speak good things? for out of the abundance of the heart the mouth speaketh.",
        },
        {
          number: 35,
          text: "A good man out of the good treasure of the heart bringeth forth good things: and an evil man out of the evil treasure bringeth forth evil things.",
        },
        {
          number: 36,
          text: "But I say unto you, That every idle word that men shall speak, they shall give account thereof in the day of judgment.",
        },
        {
          number: 37,
          text: "For by thy words thou shalt be justified, and by thy words thou shalt be condemned.",
        },
        {
          number: 38,
          text: "Then certain of the scribes and of the Pharisees answered, saying, Master, we would see a sign from thee.",
        },
        {
          number: 39,
          text: "But he answered and said unto them, An evil and adulterous generation seeketh after a sign; and there shall no sign be given to it, but the sign of the prophet Jonas:",
        },
        {
          number: 40,
          text: "For as Jonas was three days and three nights in the whale\u2019s belly; so shall the Son of man be three days and three nights in the heart of the earth.",
        },
        {
          number: 41,
          text: "The men of Nineveh shall rise in judgment with this generation, and shall condemn it: because they repented at the preaching of Jonas; and, behold, a greater than Jonas is here.",
        },
        {
          number: 42,
          text: "The queen of the south shall rise up in the judgment with this generation, and shall condemn it: for she came from the uttermost parts of the earth to hear the wisdom of Solomon; and, behold, a greater than Solomon is here.",
        },
        {
          number: 43,
          text: "When the unclean spirit is gone out of a man, he walketh through dry places, seeking rest, and findeth none.",
        },
        {
          number: 44,
          text: "Then he saith, I will return into my house from whence I came out; and when he is come, he findeth it empty, swept, and garnished.",
        },
        {
          number: 45,
          text: "Then goeth he, and taketh with himself seven other spirits more wicked than himself, and they enter in and dwell there: and the last state of that man is worse than the first. Even so shall it be also unto this wicked generation.",
        },
        {
          number: 46,
          text: "While he yet talked to the people, behold, his mother and his brethren stood without, desiring to speak with him.",
        },
        {
          number: 47,
          text: "Then one said unto him, Behold, thy mother and thy brethren stand without, desiring to speak with thee.",
        },
        {
          number: 48,
          text: "But he answered and said unto him that told him, Who is my mother? and who are my brethren?",
        },
        {
          number: 49,
          text: "And he stretched forth his hand toward his disciples, and said, Behold my mother and my brethren!",
        },
        {
          number: 50,
          text: "For whosoever shall do the will of my Father which is in heaven, the same is my brother, and sister, and mother.",
        },
      ],
    },
    {
      number: 13,
      verses: [
        {
          number: 1,
          text: "The same day went Jesus out of the house, and sat by the sea side.",
        },
        {
          number: 2,
          text: "And great multitudes were gathered together unto him, so that he went into a ship, and sat; and the whole multitude stood on the shore.",
        },
        {
          number: 3,
          text: "And he spake many things unto them in parables, saying, Behold, a sower went forth to sow;",
        },
        {
          number: 4,
          text: "And when he sowed, some seeds fell by the way side, and the fowls came and devoured them up:",
        },
        {
          number: 5,
          text: "Some fell upon stony places, where they had not much earth: and forthwith they sprung up, because they had no deepness of earth:",
        },
        {
          number: 6,
          text: "And when the sun was up, they were scorched; and because they had no root, they withered away.",
        },
        {
          number: 7,
          text: "And some fell among thorns; and the thorns sprung up, and choked them:",
        },
        {
          number: 8,
          text: "But other fell into good ground, and brought forth fruit, some an hundredfold, some sixtyfold, some thirtyfold.",
        },
        { number: 9, text: "Who hath ears to hear, let him hear." },
        {
          number: 10,
          text: "And the disciples came, and said unto him, Why speakest thou unto them in parables?",
        },
        {
          number: 11,
          text: "He answered and said unto them, Because it is given unto you to know the mysteries of the kingdom of heaven, but to them it is not given.",
        },
        {
          number: 12,
          text: "For whosoever hath, to him shall be given, and he shall have more abundance: but whosoever hath not, from him shall be taken away even that he hath.",
        },
        {
          number: 13,
          text: "Therefore speak I to them in parables: because they seeing see not; and hearing they hear not, neither do they understand.",
        },
        {
          number: 14,
          text: "And in them is fulfilled the prophecy of Esaias, which saith, By hearing ye shall hear, and shall not understand; and seeing ye shall see, and shall not perceive:",
        },
        {
          number: 15,
          text: "For this people\u2019s heart is waxed gross, and their ears are dull of hearing, and their eyes they have closed; lest at any time they should see with their eyes and hear with their ears, and should understand with their heart, and should be converted, and I should heal them.",
        },
        {
          number: 16,
          text: "But blessed are your eyes, for they see: and your ears, for they hear.",
        },
        {
          number: 17,
          text: "For verily I say unto you, That many prophets and righteous men have desired to see those things which ye see, and have not seen them; and to hear those things which ye hear, and have not heard them.",
        },
        {
          number: 18,
          text: "Hear ye therefore the parable of the sower.",
        },
        {
          number: 19,
          text: "When any one heareth the word of the kingdom, and understandeth it not, then cometh the wicked one, and catcheth away that which was sown in his heart. This is he which received seed by the way side.",
        },
        {
          number: 20,
          text: "But he that received the seed into stony places, the same is he that heareth the word, and anon with joy receiveth it;",
        },
        {
          number: 21,
          text: "Yet hath he not root in himself, but dureth for a while: for when tribulation or persecution ariseth because of the word, by and by he is offended.",
        },
        {
          number: 22,
          text: "He also that received seed among the thorns is he that heareth the word; and the care of this world, and the deceitfulness of riches, choke the word, and he becometh unfruitful.",
        },
        {
          number: 23,
          text: "But he that received seed into the good ground is he that heareth the word, and understandeth it; which also beareth fruit, and bringeth forth, some an hundredfold, some sixty, some thirty.",
        },
        {
          number: 24,
          text: "Another parable put he forth unto them, saying, The kingdom of heaven is likened unto a man which sowed good seed in his field:",
        },
        {
          number: 25,
          text: "But while men slept, his enemy came and sowed tares among the wheat, and went his way.",
        },
        {
          number: 26,
          text: "But when the blade was sprung up, and brought forth fruit, then appeared the tares also.",
        },
        {
          number: 27,
          text: "So the servants of the householder came and said unto him, Sir, didst not thou sow good seed in thy field? from whence then hath it tares?",
        },
        {
          number: 28,
          text: "He said unto them, An enemy hath done this. The servants said unto him, Wilt thou then that we go and gather them up?",
        },
        {
          number: 29,
          text: "But he said, Nay; lest while ye gather up the tares, ye root up also the wheat with them.",
        },
        {
          number: 30,
          text: "Let both grow together until the harvest: and in the time of harvest I will say to the reapers, Gather ye together first the tares, and bind them in bundles to burn them: but gather the wheat into my barn.",
        },
        {
          number: 31,
          text: "Another parable put he forth unto them, saying, The kingdom of heaven is like to a grain of mustard seed, which a man took, and sowed in his field:",
        },
        {
          number: 32,
          text: "Which indeed is the least of all seeds: but when it is grown, it is the greatest among herbs, and becometh a tree, so that the birds of the air come and lodge in the branches thereof.",
        },
        {
          number: 33,
          text: "Another parable spake he unto them; The kingdom of heaven is like unto leaven, which a woman took, and hid in three measures of meal, till the whole was leavened.",
        },
        {
          number: 34,
          text: "All these things spake Jesus unto the multitude in parables; and without a parable spake he not unto them:",
        },
        {
          number: 35,
          text: "That it might be fulfilled which was spoken by the prophet, saying, I will open my mouth in parables; I will utter things which have been kept secret from the foundation of the world.",
        },
        {
          number: 36,
          text: "Then Jesus sent the multitude away, and went into the house: and his disciples came unto him, saying, Declare unto us the parable of the tares of the field.",
        },
        {
          number: 37,
          text: "He answered and said unto them, He that soweth the good seed is the Son of man;",
        },
        {
          number: 38,
          text: "The field is the world; the good seed are the children of the kingdom; but the tares are the children of the wicked one;",
        },
        {
          number: 39,
          text: "The enemy that sowed them is the devil; the harvest is the end of the world; and the reapers are the angels.",
        },
        {
          number: 40,
          text: "As therefore the tares are gathered and burned in the fire; so shall it be in the end of this world.",
        },
        {
          number: 41,
          text: "The Son of man shall send forth his angels, and they shall gather out of his kingdom all things that offend, and them which do iniquity;",
        },
        {
          number: 42,
          text: "And shall cast them into a furnace of fire: there shall be wailing and gnashing of teeth.",
        },
        {
          number: 43,
          text: "Then shall the righteous shine forth as the sun in the kingdom of their Father. Who hath ears to hear, let him hear.",
        },
        {
          number: 44,
          text: "Again, the kingdom of heaven is like unto treasure hid in a field; the which when a man hath found, he hideth, and for joy thereof goeth and selleth all that he hath, and buyeth that field.",
        },
        {
          number: 45,
          text: "Again, the kingdom of heaven is like unto a merchant man, seeking goodly pearls:",
        },
        {
          number: 46,
          text: "Who, when he had found one pearl of great price, went and sold all that he had, and bought it.",
        },
        {
          number: 47,
          text: "Again, the kingdom of heaven is like unto a net, that was cast into the sea, and gathered of every kind:",
        },
        {
          number: 48,
          text: "Which, when it was full, they drew to shore, and sat down, and gathered the good into vessels, but cast the bad away.",
        },
        {
          number: 49,
          text: "So shall it be at the end of the world: the angels shall come forth, and sever the wicked from among the just,",
        },
        {
          number: 50,
          text: "And shall cast them into the furnace of fire: there shall be wailing and gnashing of teeth.",
        },
        {
          number: 51,
          text: "Jesus saith unto them, Have ye understood all these things? They say unto him, Yea, Lord.",
        },
        {
          number: 52,
          text: "Then said he unto them, Therefore every scribe which is instructed unto the kingdom of heaven is like unto a man that is an householder, which bringeth forth out of his treasure things new and old.",
        },
        {
          number: 53,
          text: "And it came to pass, that when Jesus had finished these parables, he departed thence.",
        },
        {
          number: 54,
          text: "And when he was come into his own country, he taught them in their synagogue, insomuch that they were astonished, and said, Whence hath this man this wisdom, and these mighty works?",
        },
        {
          number: 55,
          text: "Is not this the carpenter\u2019s son? is not his mother called Mary? and his brethren, James, and Joses, and Simon, and Judas?",
        },
        {
          number: 56,
          text: "And his sisters, are they not all with us? Whence then hath this man all these things?",
        },
        {
          number: 57,
          text: "And they were offended in him. But Jesus said unto them, A prophet is not without honour, save in his own country, and in his own house.",
        },
        {
          number: 58,
          text: "And he did not many mighty works there because of their unbelief.",
        },
      ],
    },
    {
      number: 14,
      verses: [
        {
          number: 1,
          text: "At that time Herod the tetrarch heard of the fame of Jesus,",
        },
        {
          number: 2,
          text: "And said unto his servants, This is John the Baptist; he is risen from the dead; and therefore mighty works do shew forth themselves in him.",
        },
        {
          number: 3,
          text: "For Herod had laid hold on John, and bound him, and put him in prison for Herodias\u2019 sake, his brother Philip\u2019s wife.",
        },
        {
          number: 4,
          text: "For John said unto him, It is not lawful for thee to have her.",
        },
        {
          number: 5,
          text: "And when he would have put him to death, he feared the multitude, because they counted him as a prophet.",
        },
        {
          number: 6,
          text: "But when Herod\u2019s birthday was kept, the daughter of Herodias danced before them, and pleased Herod.",
        },
        {
          number: 7,
          text: "Whereupon he promised with an oath to give her whatsoever she would ask.",
        },
        {
          number: 8,
          text: "And she, being before instructed of her mother, said, Give me here John Baptist\u2019s head in a charger.",
        },
        {
          number: 9,
          text: "And the king was sorry: nevertheless for the oath\u2019s sake, and them which sat with him at meat, he commanded it to be given her.",
        },
        {
          number: 10,
          text: "And he sent, and beheaded John in the prison.",
        },
        {
          number: 11,
          text: "And his head was brought in a charger, and given to the damsel: and she brought it to her mother.",
        },
        {
          number: 12,
          text: "And his disciples came, and took up the body, and buried it, and went and told Jesus.",
        },
        {
          number: 13,
          text: "When Jesus heard of it, he departed thence by ship into a desert place apart: and when the people had heard thereof, they followed him on foot out of the cities.",
        },
        {
          number: 14,
          text: "And Jesus went forth, and saw a great multitude, and was moved with compassion toward them, and he healed their sick.",
        },
        {
          number: 15,
          text: "And when it was evening, his disciples came to him, saying, This is a desert place, and the time is now past; send the multitude away, that they may go into the villages, and buy themselves victuals.",
        },
        {
          number: 16,
          text: "But Jesus said unto them, They need not depart; give ye them to eat.",
        },
        {
          number: 17,
          text: "And they say unto him, We have here but five loaves, and two fishes.",
        },
        { number: 18, text: "He said, Bring them hither to me." },
        {
          number: 19,
          text: "And he commanded the multitude to sit down on the grass, and took the five loaves, and the two fishes, and looking up to heaven, he blessed, and brake, and gave the loaves to his disciples, and the disciples to the multitude.",
        },
        {
          number: 20,
          text: "And they did all eat, and were filled: and they took up of the fragments that remained twelve baskets full.",
        },
        {
          number: 21,
          text: "And they that had eaten were about five thousand men, beside women and children.",
        },
        {
          number: 22,
          text: "And straightway Jesus constrained his disciples to get into a ship, and to go before him unto the other side, while he sent the multitudes away.",
        },
        {
          number: 23,
          text: "And when he had sent the multitudes away, he went up into a mountain apart to pray: and when the evening was come, he was there alone.",
        },
        {
          number: 24,
          text: "But the ship was now in the midst of the sea, tossed with waves: for the wind was contrary.",
        },
        {
          number: 25,
          text: "And in the fourth watch of the night Jesus went unto them, walking on the sea.",
        },
        {
          number: 26,
          text: "And when the disciples saw him walking on the sea, they were troubled, saying, It is a spirit; and they cried out for fear.",
        },
        {
          number: 27,
          text: "But straightway Jesus spake unto them, saying, Be of good cheer; it is I; be not afraid.",
        },
        {
          number: 28,
          text: "And Peter answered him and said, Lord, if it be thou, bid me come unto thee on the water.",
        },
        {
          number: 29,
          text: "And he said, Come. And when Peter was come down out of the ship, he walked on the water, to go to Jesus.",
        },
        {
          number: 30,
          text: "But when he saw the wind boisterous, he was afraid; and beginning to sink, he cried, saying, Lord, save me.",
        },
        {
          number: 31,
          text: "And immediately Jesus stretched forth his hand, and caught him, and said unto him, O thou of little faith, wherefore didst thou doubt?",
        },
        {
          number: 32,
          text: "And when they were come into the ship, the wind ceased.",
        },
        {
          number: 33,
          text: "Then they that were in the ship came and worshipped him, saying, Of a truth thou art the Son of God.",
        },
        {
          number: 34,
          text: "And when they were gone over, they came into the land of Gennesaret.",
        },
        {
          number: 35,
          text: "And when the men of that place had knowledge of him, they sent out into all that country round about, and brought unto him all that were diseased;",
        },
        {
          number: 36,
          text: "And besought him that they might only touch the hem of his garment: and as many as touched were made perfectly whole.",
        },
      ],
    },
    {
      number: 15,
      verses: [
        {
          number: 1,
          text: "Then came to Jesus scribes and Pharisees, which were of Jerusalem, saying,",
        },
        {
          number: 2,
          text: "Why do thy disciples transgress the tradition of the elders? for they wash not their hands when they eat bread.",
        },
        {
          number: 3,
          text: "But he answered and said unto them, Why do ye also transgress the commandment of God by your tradition?",
        },
        {
          number: 4,
          text: "For God commanded, saying, Honour thy father and mother: and, He that curseth father or mother, let him die the death.",
        },
        {
          number: 5,
          text: "But ye say, Whosoever shall say to his father or his mother, It is a gift, by whatsoever thou mightest be profited by me;",
        },
        {
          number: 6,
          text: "And honour not his father or his mother, he shall be free. Thus have ye made the commandment of God of none effect by your tradition.",
        },
        {
          number: 7,
          text: "Ye hypocrites, well did Esaias prophesy of you, saying,",
        },
        {
          number: 8,
          text: "This people draweth nigh unto me with their mouth, and honoureth me with their lips; but their heart is far from me.",
        },
        {
          number: 9,
          text: "But in vain they do worship me, teaching for doctrines the commandments of men.",
        },
        {
          number: 10,
          text: "And he called the multitude, and said unto them, Hear, and understand:",
        },
        {
          number: 11,
          text: "Not that which goeth into the mouth defileth a man; but that which cometh out of the mouth, this defileth a man.",
        },
        {
          number: 12,
          text: "Then came his disciples, and said unto him, Knowest thou that the Pharisees were offended, after they heard this saying?",
        },
        {
          number: 13,
          text: "But he answered and said, Every plant, which my heavenly Father hath not planted, shall be rooted up.",
        },
        {
          number: 14,
          text: "Let them alone: they be blind leaders of the blind. And if the blind lead the blind, both shall fall into the ditch.",
        },
        {
          number: 15,
          text: "Then answered Peter and said unto him, Declare unto us this parable.",
        },
        {
          number: 16,
          text: "And Jesus said, Are ye also yet without understanding?",
        },
        {
          number: 17,
          text: "Do not ye yet understand, that whatsoever entereth in at the mouth goeth into the belly, and is cast out into the draught?",
        },
        {
          number: 18,
          text: "But those things which proceed out of the mouth come forth from the heart; and they defile the man.",
        },
        {
          number: 19,
          text: "For out of the heart proceed evil thoughts, murders, adulteries, fornications, thefts, false witness, blasphemies:",
        },
        {
          number: 20,
          text: "These are the things which defile a man: but to eat with unwashen hands defileth not a man.",
        },
        {
          number: 21,
          text: "Then Jesus went thence, and departed into the coasts of Tyre and Sidon.",
        },
        {
          number: 22,
          text: "And, behold, a woman of Canaan came out of the same coasts, and cried unto him, saying, Have mercy on me, O Lord, thou son of David; my daughter is grievously vexed with a devil.",
        },
        {
          number: 23,
          text: "But he answered her not a word. And his disciples came and besought him, saying, Send her away; for she crieth after us.",
        },
        {
          number: 24,
          text: "But he answered and said, I am not sent but unto the lost sheep of the house of Israel.",
        },
        {
          number: 25,
          text: "Then came she and worshipped him, saying, Lord, help me.",
        },
        {
          number: 26,
          text: "But he answered and said, It is not meet to take the children\u2019s bread, and to cast it to dogs.",
        },
        {
          number: 27,
          text: "And she said, Truth, Lord: yet the dogs eat of the crumbs which fall from their masters\u2019 table.",
        },
        {
          number: 28,
          text: "Then Jesus answered and said unto her, O woman, great is thy faith: be it unto thee even as thou wilt. And her daughter was made whole from that very hour.",
        },
        {
          number: 29,
          text: "And Jesus departed from thence, and came nigh unto the sea of Galilee; and went up into a mountain, and sat down there.",
        },
        {
          number: 30,
          text: "And great multitudes came unto him, having with them those that were lame, blind, dumb, maimed, and many others, and cast them down at Jesus\u2019 feet; and he healed them:",
        },
        {
          number: 31,
          text: "Insomuch that the multitude wondered, when they saw the dumb to speak, the maimed to be whole, the lame to walk, and the blind to see: and they glorified the God of Israel.",
        },
        {
          number: 32,
          text: "Then Jesus called his disciples unto him, and said, I have compassion on the multitude, because they continue with me now three days, and have nothing to eat: and I will not send them away fasting, lest they faint in the way.",
        },
        {
          number: 33,
          text: "And his disciples say unto him, Whence should we have so much bread in the wilderness, as to fill so great a multitude?",
        },
        {
          number: 34,
          text: "And Jesus saith unto them, How many loaves have ye? And they said, Seven, and a few little fishes.",
        },
        {
          number: 35,
          text: "And he commanded the multitude to sit down on the ground.",
        },
        {
          number: 36,
          text: "And he took the seven loaves and the fishes, and gave thanks, and brake them, and gave to his disciples, and the disciples to the multitude.",
        },
        {
          number: 37,
          text: "And they did all eat, and were filled: and they took up of the broken meat that was left seven baskets full.",
        },
        {
          number: 38,
          text: "And they that did eat were four thousand men, beside women and children.",
        },
        {
          number: 39,
          text: "And he sent away the multitude, and took ship, and came into the coasts of Magdala.",
        },
      ],
    },
    {
      number: 16,
      verses: [
        {
          number: 1,
          text: "The Pharisees also with the Sadducees came, and tempting desired him that he would shew them a sign from heaven.",
        },
        {
          number: 2,
          text: "He answered and said unto them, When it is evening, ye say, It will be fair weather: for the sky is red.",
        },
        {
          number: 3,
          text: "And in the morning, It will be foul weather to day: for the sky is red and lowring. O ye hypocrites, ye can discern the face of the sky; but can ye not discern the signs of the times?",
        },
        {
          number: 4,
          text: "A wicked and adulterous generation seeketh after a sign; and there shall no sign be given unto it, but the sign of the prophet Jonas. And he left them, and departed.",
        },
        {
          number: 5,
          text: "And when his disciples were come to the other side, they had forgotten to take bread.",
        },
        {
          number: 6,
          text: "Then Jesus said unto them, Take heed and beware of the leaven of the Pharisees and of the Sadducees.",
        },
        {
          number: 7,
          text: "And they reasoned among themselves, saying, It is because we have taken no bread.",
        },
        {
          number: 8,
          text: "Which when Jesus perceived, he said unto them, O ye of little faith, why reason ye among yourselves, because ye have brought no bread?",
        },
        {
          number: 9,
          text: "Do ye not yet understand, neither remember the five loaves of the five thousand, and how many baskets ye took up?",
        },
        {
          number: 10,
          text: "Neither the seven loaves of the four thousand, and how many baskets ye took up?",
        },
        {
          number: 11,
          text: "How is it that ye do not understand that I spake it not to you concerning bread, that ye should beware of the leaven of the Pharisees and of the Sadducees?",
        },
        {
          number: 12,
          text: "Then understood they how that he bade them not beware of the leaven of bread, but of the doctrine of the Pharisees and of the Sadducees.",
        },
        {
          number: 13,
          text: "When Jesus came into the coasts of Caesarea Philippi, he asked his disciples, saying, Whom do men say that I the Son of man am?",
        },
        {
          number: 14,
          text: "And they said, Some say that thou art John the Baptist: some, Elias; and others, Jeremias, or one of the prophets.",
        },
        {
          number: 15,
          text: "He saith unto them, But whom say ye that I am?",
        },
        {
          number: 16,
          text: "And Simon Peter answered and said, Thou art the Christ, the Son of the living God.",
        },
        {
          number: 17,
          text: "And Jesus answered and said unto him, Blessed art thou, Simon Barjona: for flesh and blood hath not revealed it unto thee, but my Father which is in heaven.",
        },
        {
          number: 18,
          text: "And I say also unto thee, That thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it.",
        },
        {
          number: 19,
          text: "And I will give unto thee the keys of the kingdom of heaven: and whatsoever thou shalt bind on earth shall be bound in heaven: and whatsoever thou shalt loose on earth shall be loosed in heaven.",
        },
        {
          number: 20,
          text: "Then charged he his disciples that they should tell no man that he was Jesus the Christ.",
        },
        {
          number: 21,
          text: "From that time forth began Jesus to shew unto his disciples, how that he must go unto Jerusalem, and suffer many things of the elders and chief priests and scribes, and be killed, and be raised again the third day.",
        },
        {
          number: 22,
          text: "Then Peter took him, and began to rebuke him, saying, Be it far from thee, Lord: this shall not be unto thee.",
        },
        {
          number: 23,
          text: "But he turned, and said unto Peter, Get thee behind me, Satan: thou art an offence unto me: for thou savourest not the things that be of God, but those that be of men.",
        },
        {
          number: 24,
          text: "Then said Jesus unto his disciples, If any man will come after me, let him deny himself, and take up his cross, and follow me.",
        },
        {
          number: 25,
          text: "For whosoever will save his life shall lose it: and whosoever will lose his life for my sake shall find it.",
        },
        {
          number: 26,
          text: "For what is a man profited, if he shall gain the whole world, and lose his own soul? or what shall a man give in exchange for his soul?",
        },
        {
          number: 27,
          text: "For the Son of man shall come in the glory of his Father with his angels; and then he shall reward every man according to his works.",
        },
        {
          number: 28,
          text: "Verily I say unto you, There be some standing here, which shall not taste of death, till they see the Son of man coming in his kingdom.",
        },
      ],
    },
    {
      number: 17,
      verses: [
        {
          number: 1,
          text: "And after six days Jesus taketh Peter, James, and John his brother, and bringeth them up into an high mountain apart,",
        },
        {
          number: 2,
          text: "And was transfigured before them: and his face did shine as the sun, and his raiment was white as the light.",
        },
        {
          number: 3,
          text: "And, behold, there appeared unto them Moses and Elias talking with him.",
        },
        {
          number: 4,
          text: "Then answered Peter, and said unto Jesus, Lord, it is good for us to be here: if thou wilt, let us make here three tabernacles; one for thee, and one for Moses, and one for Elias.",
        },
        {
          number: 5,
          text: "While he yet spake, behold, a bright cloud overshadowed them: and behold a voice out of the cloud, which said, This is my beloved Son, in whom I am well pleased; hear ye him.",
        },
        {
          number: 6,
          text: "And when the disciples heard it, they fell on their face, and were sore afraid.",
        },
        {
          number: 7,
          text: "And Jesus came and touched them, and said, Arise, and be not afraid.",
        },
        {
          number: 8,
          text: "And when they had lifted up their eyes, they saw no man, save Jesus only.",
        },
        {
          number: 9,
          text: "And as they came down from the mountain, Jesus charged them, saying, Tell the vision to no man, until the Son of man be risen again from the dead.",
        },
        {
          number: 10,
          text: "And his disciples asked him, saying, Why then say the scribes that Elias must first come?",
        },
        {
          number: 11,
          text: "And Jesus answered and said unto them, Elias truly shall first come, and restore all things.",
        },
        {
          number: 12,
          text: "But I say unto you, That Elias is come already, and they knew him not, but have done unto him whatsoever they listed. Likewise shall also the Son of man suffer of them.",
        },
        {
          number: 13,
          text: "Then the disciples understood that he spake unto them of John the Baptist.",
        },
        {
          number: 14,
          text: "And when they were come to the multitude, there came to him a certain man, kneeling down to him, and saying,",
        },
        {
          number: 15,
          text: "Lord, have mercy on my son: for he is lunatick, and sore vexed: for ofttimes he falleth into the fire, and oft into the water.",
        },
        {
          number: 16,
          text: "And I brought him to thy disciples, and they could not cure him.",
        },
        {
          number: 17,
          text: "Then Jesus answered and said, O faithless and perverse generation, how long shall I be with you? how long shall I suffer you? bring him hither to me.",
        },
        {
          number: 18,
          text: "And Jesus rebuked the devil; and he departed out of him: and the child was cured from that very hour.",
        },
        {
          number: 19,
          text: "Then came the disciples to Jesus apart, and said, Why could not we cast him out?",
        },
        {
          number: 20,
          text: "And Jesus said unto them, Because of your unbelief: for verily I say unto you, If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove; and nothing shall be impossible unto you.",
        },
        {
          number: 21,
          text: "Howbeit this kind goeth not out but by prayer and fasting.",
        },
        {
          number: 22,
          text: "And while they abode in Galilee, Jesus said unto them, The Son of man shall be betrayed into the hands of men:",
        },
        {
          number: 23,
          text: "And they shall kill him, and the third day he shall be raised again. And they were exceeding sorry.",
        },
        {
          number: 24,
          text: "And when they were come to Capernaum, they that received tribute money came to Peter, and said, Doth not your master pay tribute?",
        },
        {
          number: 25,
          text: "He saith, Yes. And when he was come into the house, Jesus prevented him, saying, What thinkest thou, Simon? of whom do the kings of the earth take custom or tribute? of their own children, or of strangers?",
        },
        {
          number: 26,
          text: "Peter saith unto him, Of strangers. Jesus saith unto him, Then are the children free.",
        },
        {
          number: 27,
          text: "Notwithstanding, lest we should offend them, go thou to the sea, and cast an hook, and take up the fish that first cometh up; and when thou hast opened his mouth, thou shalt find a piece of money: that take, and give unto them for me and thee.",
        },
      ],
    },
    {
      number: 18,
      verses: [
        {
          number: 1,
          text: "At the same time came the disciples unto Jesus, saying, Who is the greatest in the kingdom of heaven?",
        },
        {
          number: 2,
          text: "And Jesus called a little child unto him, and set him in the midst of them,",
        },
        {
          number: 3,
          text: "And said, Verily I say unto you, Except ye be converted, and become as little children, ye shall not enter into the kingdom of heaven.",
        },
        {
          number: 4,
          text: "Whosoever therefore shall humble himself as this little child, the same is greatest in the kingdom of heaven.",
        },
        {
          number: 5,
          text: "And whoso shall receive one such little child in my name receiveth me.",
        },
        {
          number: 6,
          text: "But whoso shall offend one of these little ones which believe in me, it were better for him that a millstone were hanged about his neck, and that he were drowned in the depth of the sea.",
        },
        {
          number: 7,
          text: "Woe unto the world because of offences! for it must needs be that offences come; but woe to that man by whom the offence cometh!",
        },
        {
          number: 8,
          text: "Wherefore if thy hand or thy foot offend thee, cut them off, and cast them from thee: it is better for thee to enter into life halt or maimed, rather than having two hands or two feet to be cast into everlasting fire.",
        },
        {
          number: 9,
          text: "And if thine eye offend thee, pluck it out, and cast it from thee: it is better for thee to enter into life with one eye, rather than having two eyes to be cast into hell fire.",
        },
        {
          number: 10,
          text: "Take heed that ye despise not one of these little ones; for I say unto you, That in heaven their angels do always behold the face of my Father which is in heaven.",
        },
        {
          number: 11,
          text: "For the Son of man is come to save that which was lost.",
        },
        {
          number: 12,
          text: "How think ye? if a man have an hundred sheep, and one of them be gone astray, doth he not leave the ninety and nine, and goeth into the mountains, and seeketh that which is gone astray?",
        },
        {
          number: 13,
          text: "And if so be that he find it, verily I say unto you, he rejoiceth more of that sheep, than of the ninety and nine which went not astray.",
        },
        {
          number: 14,
          text: "Even so it is not the will of your Father which is in heaven, that one of these little ones should perish.",
        },
        {
          number: 15,
          text: "Moreover if thy brother shall trespass against thee, go and tell him his fault between thee and him alone: if he shall hear thee, thou hast gained thy brother.",
        },
        {
          number: 16,
          text: "But if he will not hear thee, then take with thee one or two more, that in the mouth of two or three witnesses every word may be established.",
        },
        {
          number: 17,
          text: "And if he shall neglect to hear them, tell it unto the church: but if he neglect to hear the church, let him be unto thee as an heathen man and a publican.",
        },
        {
          number: 18,
          text: "Verily I say unto you, Whatsoever ye shall bind on earth shall be bound in heaven: and whatsoever ye shall loose on earth shall be loosed in heaven.",
        },
        {
          number: 19,
          text: "Again I say unto you, That if two of you shall agree on earth as touching any thing that they shall ask, it shall be done for them of my Father which is in heaven.",
        },
        {
          number: 20,
          text: "For where two or three are gathered together in my name, there am I in the midst of them.",
        },
        {
          number: 21,
          text: "Then came Peter to him, and said, Lord, how oft shall my brother sin against me, and I forgive him? till seven times?",
        },
        {
          number: 22,
          text: "Jesus saith unto him, I say not unto thee, Until seven times: but, Until seventy times seven.",
        },
        {
          number: 23,
          text: "Therefore is the kingdom of heaven likened unto a certain king, which would take account of his servants.",
        },
        {
          number: 24,
          text: "And when he had begun to reckon, one was brought unto him, which owed him ten thousand talents.",
        },
        {
          number: 25,
          text: "But forasmuch as he had not to pay, his lord commanded him to be sold, and his wife, and children, and all that he had, and payment to be made.",
        },
        {
          number: 26,
          text: "The servant therefore fell down, and worshipped him, saying, Lord, have patience with me, and I will pay thee all.",
        },
        {
          number: 27,
          text: "Then the lord of that servant was moved with compassion, and loosed him, and forgave him the debt.",
        },
        {
          number: 28,
          text: "But the same servant went out, and found one of his fellowservants, which owed him an hundred pence: and he laid hands on him, and took him by the throat, saying, Pay me that thou owest.",
        },
        {
          number: 29,
          text: "And his fellowservant fell down at his feet, and besought him, saying, Have patience with me, and I will pay thee all.",
        },
        {
          number: 30,
          text: "And he would not: but went and cast him into prison, till he should pay the debt.",
        },
        {
          number: 31,
          text: "So when his fellowservants saw what was done, they were very sorry, and came and told unto their lord all that was done.",
        },
        {
          number: 32,
          text: "Then his lord, after that he had called him, said unto him, O thou wicked servant, I forgave thee all that debt, because thou desiredst me:",
        },
        {
          number: 33,
          text: "Shouldest not thou also have had compassion on thy fellowservant, even as I had pity on thee?",
        },
        {
          number: 34,
          text: "And his lord was wroth, and delivered him to the tormentors, till he should pay all that was due unto him.",
        },
        {
          number: 35,
          text: "So likewise shall my heavenly Father do also unto you, if ye from your hearts forgive not every one his brother their trespasses.",
        },
      ],
    },
    {
      number: 19,
      verses: [
        {
          number: 1,
          text: "And it came to pass, that when Jesus had finished these sayings, he departed from Galilee, and came into the coasts of Judaea beyond Jordan;",
        },
        {
          number: 2,
          text: "And great multitudes followed him; and he healed them there.",
        },
        {
          number: 3,
          text: "The Pharisees also came unto him, tempting him, and saying unto him, Is it lawful for a man to put away his wife for every cause?",
        },
        {
          number: 4,
          text: "And he answered and said unto them, Have ye not read, that he which made them at the beginning made them male and female,",
        },
        {
          number: 5,
          text: "And said, For this cause shall a man leave father and mother, and shall cleave to his wife: and they twain shall be one flesh?",
        },
        {
          number: 6,
          text: "Wherefore they are no more twain, but one flesh. What therefore God hath joined together, let not man put asunder.",
        },
        {
          number: 7,
          text: "They say unto him, Why did Moses then command to give a writing of divorcement, and to put her away?",
        },
        {
          number: 8,
          text: "He saith unto them, Moses because of the hardness of your hearts suffered you to put away your wives: but from the beginning it was not so.",
        },
        {
          number: 9,
          text: "And I say unto you, Whosoever shall put away his wife, except it be for fornication, and shall marry another, committeth adultery: and whoso marrieth her which is put away doth commit adultery.",
        },
        {
          number: 10,
          text: "His disciples say unto him, If the case of the man be so with his wife, it is not good to marry.",
        },
        {
          number: 11,
          text: "But he said unto them, All men cannot receive this saying, save they to whom it is given.",
        },
        {
          number: 12,
          text: "For there are some eunuchs, which were so born from their mother\u2019s womb: and there are some eunuchs, which were made eunuchs of men: and there be eunuchs, which have made themselves eunuchs for the kingdom of heaven\u2019s sake. He that is able to receive it, let him receive it.",
        },
        {
          number: 13,
          text: "Then were there brought unto him little children, that he should put his hands on them, and pray: and the disciples rebuked them.",
        },
        {
          number: 14,
          text: "But Jesus said, Suffer little children, and forbid them not, to come unto me: for of such is the kingdom of heaven.",
        },
        {
          number: 15,
          text: "And he laid his hands on them, and departed thence.",
        },
        {
          number: 16,
          text: "And, behold, one came and said unto him, Good Master, what good thing shall I do, that I may have eternal life?",
        },
        {
          number: 17,
          text: "And he said unto him, Why callest thou me good? there is none good but one, that is, God: but if thou wilt enter into life, keep the commandments.",
        },
        {
          number: 18,
          text: "He saith unto him, Which? Jesus said, Thou shalt do no murder, Thou shalt not commit adultery, Thou shalt not steal, Thou shalt not bear false witness,",
        },
        {
          number: 19,
          text: "Honour thy father and thy mother: and, Thou shalt love thy neighbour as thyself.",
        },
        {
          number: 20,
          text: "The young man saith unto him, All these things have I kept from my youth up: what lack I yet?",
        },
        {
          number: 21,
          text: "Jesus said unto him, If thou wilt be perfect, go and sell that thou hast, and give to the poor, and thou shalt have treasure in heaven: and come and follow me.",
        },
        {
          number: 22,
          text: "But when the young man heard that saying, he went away sorrowful: for he had great possessions.",
        },
        {
          number: 23,
          text: "Then said Jesus unto his disciples, Verily I say unto you, That a rich man shall hardly enter into the kingdom of heaven.",
        },
        {
          number: 24,
          text: "And again I say unto you, It is easier for a camel to go through the eye of a needle, than for a rich man to enter into the kingdom of God.",
        },
        {
          number: 25,
          text: "When his disciples heard it, they were exceedingly amazed, saying, Who then can be saved?",
        },
        {
          number: 26,
          text: "But Jesus beheld them, and said unto them, With men this is impossible; but with God all things are possible.",
        },
        {
          number: 27,
          text: "Then answered Peter and said unto him, Behold, we have forsaken all, and followed thee; what shall we have therefore?",
        },
        {
          number: 28,
          text: "And Jesus said unto them, Verily I say unto you, That ye which have followed me, in the regeneration when the Son of man shall sit in the throne of his glory, ye also shall sit upon twelve thrones, judging the twelve tribes of Israel.",
        },
        {
          number: 29,
          text: "And every one that hath forsaken houses, or brethren, or sisters, or father, or mother, or wife, or children, or lands, for my name\u2019s sake, shall receive an hundredfold, and shall inherit everlasting life.",
        },
        {
          number: 30,
          text: "But many that are first shall be last; and the last shall be first.",
        },
      ],
    },
    {
      number: 20,
      verses: [
        {
          number: 1,
          text: "For the kingdom of heaven is like unto a man that is an householder, which went out early in the morning to hire labourers into his vineyard.",
        },
        {
          number: 2,
          text: "And when he had agreed with the labourers for a penny a day, he sent them into his vineyard.",
        },
        {
          number: 3,
          text: "And he went out about the third hour, and saw others standing idle in the marketplace,",
        },
        {
          number: 4,
          text: "And said unto them; Go ye also into the vineyard, and whatsoever is right I will give you. And they went their way.",
        },
        {
          number: 5,
          text: "Again he went out about the sixth and ninth hour, and did likewise.",
        },
        {
          number: 6,
          text: "And about the eleventh hour he went out, and found others standing idle, and saith unto them, Why stand ye here all the day idle?",
        },
        {
          number: 7,
          text: "They say unto him, Because no man hath hired us. He saith unto them, Go ye also into the vineyard; and whatsoever is right, that shall ye receive.",
        },
        {
          number: 8,
          text: "So when even was come, the lord of the vineyard saith unto his steward, Call the labourers, and give them their hire, beginning from the last unto the first.",
        },
        {
          number: 9,
          text: "And when they came that were hired about the eleventh hour, they received every man a penny.",
        },
        {
          number: 10,
          text: "But when the first came, they supposed that they should have received more; and they likewise received every man a penny.",
        },
        {
          number: 11,
          text: "And when they had received it, they murmured against the goodman of the house,",
        },
        {
          number: 12,
          text: "Saying, These last have wrought but one hour, and thou hast made them equal unto us, which have borne the burden and heat of the day.",
        },
        {
          number: 13,
          text: "But he answered one of them, and said, Friend, I do thee no wrong: didst not thou agree with me for a penny?",
        },
        {
          number: 14,
          text: "Take that thine is, and go thy way: I will give unto this last, even as unto thee.",
        },
        {
          number: 15,
          text: "Is it not lawful for me to do what I will with mine own? Is thine eye evil, because I am good?",
        },
        {
          number: 16,
          text: "So the last shall be first, and the first last: for many be called, but few chosen.",
        },
        {
          number: 17,
          text: "And Jesus going up to Jerusalem took the twelve disciples apart in the way, and said unto them,",
        },
        {
          number: 18,
          text: "Behold, we go up to Jerusalem; and the Son of man shall be betrayed unto the chief priests and unto the scribes, and they shall condemn him to death,",
        },
        {
          number: 19,
          text: "And shall deliver him to the Gentiles to mock, and to scourge, and to crucify him: and the third day he shall rise again.",
        },
        {
          number: 20,
          text: "Then came to him the mother of Zebedee\u2019s children with her sons, worshipping him, and desiring a certain thing of him.",
        },
        {
          number: 21,
          text: "And he said unto her, What wilt thou? She saith unto him, Grant that these my two sons may sit, the one on thy right hand, and the other on the left, in thy kingdom.",
        },
        {
          number: 22,
          text: "But Jesus answered and said, Ye know not what ye ask. Are ye able to drink of the cup that I shall drink of, and to be baptized with the baptism that I am baptized with? They say unto him, We are able.",
        },
        {
          number: 23,
          text: "And he saith unto them, Ye shall drink indeed of my cup, and be baptized with the baptism that I am baptized with: but to sit on my right hand, and on my left, is not mine to give, but it shall be given to them for whom it is prepared of my Father.",
        },
        {
          number: 24,
          text: "And when the ten heard it, they were moved with indignation against the two brethren.",
        },
        {
          number: 25,
          text: "But Jesus called them unto him, and said, Ye know that the princes of the Gentiles exercise dominion over them, and they that are great exercise authority upon them.",
        },
        {
          number: 26,
          text: "But it shall not be so among you: but whosoever will be great among you, let him be your minister;",
        },
        {
          number: 27,
          text: "And whosoever will be chief among you, let him be your servant:",
        },
        {
          number: 28,
          text: "Even as the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.",
        },
        {
          number: 29,
          text: "And as they departed from Jericho, a great multitude followed him.",
        },
        {
          number: 30,
          text: "And, behold, two blind men sitting by the way side, when they heard that Jesus passed by, cried out, saying, Have mercy on us, O Lord, thou son of David.",
        },
        {
          number: 31,
          text: "And the multitude rebuked them, because they should hold their peace: but they cried the more, saying, Have mercy on us, O Lord, thou son of David.",
        },
        {
          number: 32,
          text: "And Jesus stood still, and called them, and said, What will ye that I shall do unto you?",
        },
        {
          number: 33,
          text: "They say unto him, Lord, that our eyes may be opened.",
        },
        {
          number: 34,
          text: "So Jesus had compassion on them, and touched their eyes: and immediately their eyes received sight, and they followed him.",
        },
      ],
    },
    {
      number: 21,
      verses: [
        {
          number: 1,
          text: "And when they drew nigh unto Jerusalem, and were come to Bethphage, unto the mount of Olives, then sent Jesus two disciples,",
        },
        {
          number: 2,
          text: "Saying unto them, Go into the village over against you, and straightway ye shall find an ass tied, and a colt with her: loose them, and bring them unto me.",
        },
        {
          number: 3,
          text: "And if any man say ought unto you, ye shall say, The Lord hath need of them; and straightway he will send them.",
        },
        {
          number: 4,
          text: "All this was done, that it might be fulfilled which was spoken by the prophet, saying,",
        },
        {
          number: 5,
          text: "Tell ye the daughter of Sion, Behold, thy King cometh unto thee, meek, and sitting upon an ass, and a colt the foal of an ass.",
        },
        {
          number: 6,
          text: "And the disciples went, and did as Jesus commanded them,",
        },
        {
          number: 7,
          text: "And brought the ass, and the colt, and put on them their clothes, and they set him thereon.",
        },
        {
          number: 8,
          text: "And a very great multitude spread their garments in the way; others cut down branches from the trees, and strawed them in the way.",
        },
        {
          number: 9,
          text: "And the multitudes that went before, and that followed, cried, saying, Hosanna to the son of David: Blessed is he that cometh in the name of the Lord; Hosanna in the highest.",
        },
        {
          number: 10,
          text: "And when he was come into Jerusalem, all the city was moved, saying, Who is this?",
        },
        {
          number: 11,
          text: "And the multitude said, This is Jesus the prophet of Nazareth of Galilee.",
        },
        {
          number: 12,
          text: "And Jesus went into the temple of God, and cast out all them that sold and bought in the temple, and overthrew the tables of the moneychangers, and the seats of them that sold doves,",
        },
        {
          number: 13,
          text: "And said unto them, It is written, My house shall be called the house of prayer; but ye have made it a den of thieves.",
        },
        {
          number: 14,
          text: "And the blind and the lame came to him in the temple; and he healed them.",
        },
        {
          number: 15,
          text: "And when the chief priests and scribes saw the wonderful things that he did, and the children crying in the temple, and saying, Hosanna to the son of David; they were sore displeased,",
        },
        {
          number: 16,
          text: "And said unto him, Hearest thou what these say? And Jesus saith unto them, Yea; have ye never read, Out of the mouth of babes and sucklings thou hast perfected praise?",
        },
        {
          number: 17,
          text: "And he left them, and went out of the city into Bethany; and he lodged there.",
        },
        {
          number: 18,
          text: "Now in the morning as he returned into the city, he hungered.",
        },
        {
          number: 19,
          text: "And when he saw a fig tree in the way, he came to it, and found nothing thereon, but leaves only, and said unto it, Let no fruit grow on thee henceforward for ever. And presently the fig tree withered away.",
        },
        {
          number: 20,
          text: "And when the disciples saw it, they marvelled, saying, How soon is the fig tree withered away!",
        },
        {
          number: 21,
          text: "Jesus answered and said unto them, Verily I say unto you, If ye have faith, and doubt not, ye shall not only do this which is done to the fig tree, but also if ye shall say unto this mountain, Be thou removed, and be thou cast into the sea; it shall be done.",
        },
        {
          number: 22,
          text: "And all things, whatsoever ye shall ask in prayer, believing, ye shall receive.",
        },
        {
          number: 23,
          text: "And when he was come into the temple, the chief priests and the elders of the people came unto him as he was teaching, and said, By what authority doest thou these things? and who gave thee this authority?",
        },
        {
          number: 24,
          text: "And Jesus answered and said unto them, I also will ask you one thing, which if ye tell me, I in like wise will tell you by what authority I do these things.",
        },
        {
          number: 25,
          text: "The baptism of John, whence was it? from heaven, or of men? And they reasoned with themselves, saying, If we shall say, From heaven; he will say unto us, Why did ye not then believe him?",
        },
        {
          number: 26,
          text: "But if we shall say, Of men; we fear the people; for all hold John as a prophet.",
        },
        {
          number: 27,
          text: "And they answered Jesus, and said, We cannot tell. And he said unto them, Neither tell I you by what authority I do these things.",
        },
        {
          number: 28,
          text: "But what think ye? A certain man had two sons; and he came to the first, and said, Son, go work to day in my vineyard.",
        },
        {
          number: 29,
          text: "He answered and said, I will not: but afterward he repented, and went.",
        },
        {
          number: 30,
          text: "And he came to the second, and said likewise. And he answered and said, I go, sir: and went not.",
        },
        {
          number: 31,
          text: "Whether of them twain did the will of his father? They say unto him, The first. Jesus saith unto them, Verily I say unto you, That the publicans and the harlots go into the kingdom of God before you.",
        },
        {
          number: 32,
          text: "For John came unto you in the way of righteousness, and ye believed him not: but the publicans and the harlots believed him: and ye, when ye had seen it, repented not afterward, that ye might believe him.",
        },
        {
          number: 33,
          text: "Hear another parable: There was a certain householder, which planted a vineyard, and hedged it round about, and digged a winepress in it, and built a tower, and let it out to husbandmen, and went into a far country:",
        },
        {
          number: 34,
          text: "And when the time of the fruit drew near, he sent his servants to the husbandmen, that they might receive the fruits of it.",
        },
        {
          number: 35,
          text: "And the husbandmen took his servants, and beat one, and killed another, and stoned another.",
        },
        {
          number: 36,
          text: "Again, he sent other servants more than the first: and they did unto them likewise.",
        },
        {
          number: 37,
          text: "But last of all he sent unto them his son, saying, They will reverence my son.",
        },
        {
          number: 38,
          text: "But when the husbandmen saw the son, they said among themselves, This is the heir; come, let us kill him, and let us seize on his inheritance.",
        },
        {
          number: 39,
          text: "And they caught him, and cast him out of the vineyard, and slew him.",
        },
        {
          number: 40,
          text: "When the lord therefore of the vineyard cometh, what will he do unto those husbandmen?",
        },
        {
          number: 41,
          text: "They say unto him, He will miserably destroy those wicked men, and will let out his vineyard unto other husbandmen, which shall render him the fruits in their seasons.",
        },
        {
          number: 42,
          text: "Jesus saith unto them, Did ye never read in the scriptures, The stone which the builders rejected, the same is become the head of the corner: this is the Lord\u2019s doing, and it is marvellous in our eyes?",
        },
        {
          number: 43,
          text: "Therefore say I unto you, The kingdom of God shall be taken from you, and given to a nation bringing forth the fruits thereof.",
        },
        {
          number: 44,
          text: "And whosoever shall fall on this stone shall be broken: but on whomsoever it shall fall, it will grind him to powder.",
        },
        {
          number: 45,
          text: "And when the chief priests and Pharisees had heard his parables, they perceived that he spake of them.",
        },
        {
          number: 46,
          text: "But when they sought to lay hands on him, they feared the multitude, because they took him for a prophet.",
        },
      ],
    },
    {
      number: 22,
      verses: [
        {
          number: 1,
          text: "And Jesus answered and spake unto them again by parables, and said,",
        },
        {
          number: 2,
          text: "The kingdom of heaven is like unto a certain king, which made a marriage for his son,",
        },
        {
          number: 3,
          text: "And sent forth his servants to call them that were bidden to the wedding: and they would not come.",
        },
        {
          number: 4,
          text: "Again, he sent forth other servants, saying, Tell them which are bidden, Behold, I have prepared my dinner: my oxen and my fatlings are killed, and all things are ready: come unto the marriage.",
        },
        {
          number: 5,
          text: "But they made light of it, and went their ways, one to his farm, another to his merchandise:",
        },
        {
          number: 6,
          text: "And the remnant took his servants, and entreated them spitefully, and slew them.",
        },
        {
          number: 7,
          text: "But when the king heard thereof, he was wroth: and he sent forth his armies, and destroyed those murderers, and burned up their city.",
        },
        {
          number: 8,
          text: "Then saith he to his servants, The wedding is ready, but they which were bidden were not worthy.",
        },
        {
          number: 9,
          text: "Go ye therefore into the highways, and as many as ye shall find, bid to the marriage.",
        },
        {
          number: 10,
          text: "So those servants went out into the highways, and gathered together all as many as they found, both bad and good: and the wedding was furnished with guests.",
        },
        {
          number: 11,
          text: "And when the king came in to see the guests, he saw there a man which had not on a wedding garment:",
        },
        {
          number: 12,
          text: "And he saith unto him, Friend, how camest thou in hither not having a wedding garment? And he was speechless.",
        },
        {
          number: 13,
          text: "Then said the king to the servants, Bind him hand and foot, and take him away, and cast him into outer darkness; there shall be weeping and gnashing of teeth.",
        },
        { number: 14, text: "For many are called, but few are chosen." },
        {
          number: 15,
          text: "Then went the Pharisees, and took counsel how they might entangle him in his talk.",
        },
        {
          number: 16,
          text: "And they sent out unto him their disciples with the Herodians, saying, Master, we know that thou art true, and teachest the way of God in truth, neither carest thou for any man: for thou regardest not the person of men.",
        },
        {
          number: 17,
          text: "Tell us therefore, What thinkest thou? Is it lawful to give tribute unto Caesar, or not?",
        },
        {
          number: 18,
          text: "But Jesus perceived their wickedness, and said, Why tempt ye me, ye hypocrites?",
        },
        {
          number: 19,
          text: "Shew me the tribute money. And they brought unto him a penny.",
        },
        {
          number: 20,
          text: "And he saith unto them, Whose is this image and superscription?",
        },
        {
          number: 21,
          text: "They say unto him, Caesar\u2019s. Then saith he unto them, Render therefore unto Caesar the things which are Caesar\u2019s; and unto God the things that are God\u2019s.",
        },
        {
          number: 22,
          text: "When they had heard these words, they marvelled, and left him, and went their way.",
        },
        {
          number: 23,
          text: "The same day came to him the Sadducees, which say that there is no resurrection, and asked him,",
        },
        {
          number: 24,
          text: "Saying, Master, Moses said, If a man die, having no children, his brother shall marry his wife, and raise up seed unto his brother.",
        },
        {
          number: 25,
          text: "Now there were with us seven brethren: and the first, when he had married a wife, deceased, and, having no issue, left his wife unto his brother:",
        },
        {
          number: 26,
          text: "Likewise the second also, and the third, unto the seventh.",
        },
        { number: 27, text: "And last of all the woman died also." },
        {
          number: 28,
          text: "Therefore in the resurrection whose wife shall she be of the seven? for they all had her.",
        },
        {
          number: 29,
          text: "Jesus answered and said unto them, Ye do err, not knowing the scriptures, nor the power of God.",
        },
        {
          number: 30,
          text: "For in the resurrection they neither marry, nor are given in marriage, but are as the angels of God in heaven.",
        },
        {
          number: 31,
          text: "But as touching the resurrection of the dead, have ye not read that which was spoken unto you by God, saying,",
        },
        {
          number: 32,
          text: "I am the God of Abraham, and the God of Isaac, and the God of Jacob? God is not the God of the dead, but of the living.",
        },
        {
          number: 33,
          text: "And when the multitude heard this, they were astonished at his doctrine.",
        },
        {
          number: 34,
          text: "But when the Pharisees had heard that he had put the Sadducees to silence, they were gathered together.",
        },
        {
          number: 35,
          text: "Then one of them, which was a lawyer, asked him a question, tempting him, and saying,",
        },
        {
          number: 36,
          text: "Master, which is the great commandment in the law?",
        },
        {
          number: 37,
          text: "Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.",
        },
        { number: 38, text: "This is the first and great commandment." },
        {
          number: 39,
          text: "And the second is like unto it, Thou shalt love thy neighbour as thyself.",
        },
        {
          number: 40,
          text: "On these two commandments hang all the law and the prophets.",
        },
        {
          number: 41,
          text: "While the Pharisees were gathered together, Jesus asked them,",
        },
        {
          number: 42,
          text: "Saying, What think ye of Christ? whose son is he? They say unto him, The son of David.",
        },
        {
          number: 43,
          text: "He saith unto them, How then doth David in spirit call him Lord, saying,",
        },
        {
          number: 44,
          text: "The LORD said unto my Lord, Sit thou on my right hand, till I make thine enemies thy footstool?",
        },
        {
          number: 45,
          text: "If David then call him Lord, how is he his son?",
        },
        {
          number: 46,
          text: "And no man was able to answer him a word, neither durst any man from that day forth ask him any more questions.",
        },
      ],
    },
    {
      number: 23,
      verses: [
        {
          number: 1,
          text: "Then spake Jesus to the multitude, and to his disciples,",
        },
        {
          number: 2,
          text: "Saying, The scribes and the Pharisees sit in Moses\u2019 seat:",
        },
        {
          number: 3,
          text: "All therefore whatsoever they bid you observe, that observe and do; but do not ye after their works: for they say, and do not.",
        },
        {
          number: 4,
          text: "For they bind heavy burdens and grievous to be borne, and lay them on men\u2019s shoulders; but they themselves will not move them with one of their fingers.",
        },
        {
          number: 5,
          text: "But all their works they do for to be seen of men: they make broad their phylacteries, and enlarge the borders of their garments,",
        },
        {
          number: 6,
          text: "And love the uppermost rooms at feasts, and the chief seats in the synagogues,",
        },
        {
          number: 7,
          text: "And greetings in the markets, and to be called of men, Rabbi, Rabbi.",
        },
        {
          number: 8,
          text: "But be not ye called Rabbi: for one is your Master, even Christ; and all ye are brethren.",
        },
        {
          number: 9,
          text: "And call no man your father upon the earth: for one is your Father, which is in heaven.",
        },
        {
          number: 10,
          text: "Neither be ye called masters: for one is your Master, even Christ.",
        },
        {
          number: 11,
          text: "But he that is greatest among you shall be your servant.",
        },
        {
          number: 12,
          text: "And whosoever shall exalt himself shall be abased; and he that shall humble himself shall be exalted.",
        },
        {
          number: 13,
          text: "But woe unto you, scribes and Pharisees, hypocrites! for ye shut up the kingdom of heaven against men: for ye neither go in yourselves, neither suffer ye them that are entering to go in.",
        },
        {
          number: 14,
          text: "Woe unto you, scribes and Pharisees, hypocrites! for ye devour widows\u2019 houses, and for a pretence make long prayer: therefore ye shall receive the greater damnation.",
        },
        {
          number: 15,
          text: "Woe unto you, scribes and Pharisees, hypocrites! for ye compass sea and land to make one proselyte, and when he is made, ye make him twofold more the child of hell than yourselves.",
        },
        {
          number: 16,
          text: "Woe unto you, ye blind guides, which say, Whosoever shall swear by the temple, it is nothing; but whosoever shall swear by the gold of the temple, he is a debtor!",
        },
        {
          number: 17,
          text: "Ye fools and blind: for whether is greater, the gold, or the temple that sanctifieth the gold?",
        },
        {
          number: 18,
          text: "And, Whosoever shall swear by the altar, it is nothing; but whosoever sweareth by the gift that is upon it, he is guilty.",
        },
        {
          number: 19,
          text: "Ye fools and blind: for whether is greater, the gift, or the altar that sanctifieth the gift?",
        },
        {
          number: 20,
          text: "Whoso therefore shall swear by the altar, sweareth by it, and by all things thereon.",
        },
        {
          number: 21,
          text: "And whoso shall swear by the temple, sweareth by it, and by him that dwelleth therein.",
        },
        {
          number: 22,
          text: "And he that shall swear by heaven, sweareth by the throne of God, and by him that sitteth thereon.",
        },
        {
          number: 23,
          text: "Woe unto you, scribes and Pharisees, hypocrites! for ye pay tithe of mint and anise and cummin, and have omitted the weightier matters of the law, judgment, mercy, and faith: these ought ye to have done, and not to leave the other undone.",
        },
        {
          number: 24,
          text: "Ye blind guides, which strain at a gnat, and swallow a camel.",
        },
        {
          number: 25,
          text: "Woe unto you, scribes and Pharisees, hypocrites! for ye make clean the outside of the cup and of the platter, but within they are full of extortion and excess.",
        },
        {
          number: 26,
          text: "Thou blind Pharisee, cleanse first that which is within the cup and platter, that the outside of them may be clean also.",
        },
        {
          number: 27,
          text: "Woe unto you, scribes and Pharisees, hypocrites! for ye are like unto whited sepulchres, which indeed appear beautiful outward, but are within full of dead men\u2019s bones, and of all uncleanness.",
        },
        {
          number: 28,
          text: "Even so ye also outwardly appear righteous unto men, but within ye are full of hypocrisy and iniquity.",
        },
        {
          number: 29,
          text: "Woe unto you, scribes and Pharisees, hypocrites! because ye build the tombs of the prophets, and garnish the sepulchres of the righteous,",
        },
        {
          number: 30,
          text: "And say, If we had been in the days of our fathers, we would not have been partakers with them in the blood of the prophets.",
        },
        {
          number: 31,
          text: "Wherefore ye be witnesses unto yourselves, that ye are the children of them which killed the prophets.",
        },
        {
          number: 32,
          text: "Fill ye up then the measure of your fathers.",
        },
        {
          number: 33,
          text: "Ye serpents, ye generation of vipers, how can ye escape the damnation of hell?",
        },
        {
          number: 34,
          text: "Wherefore, behold, I send unto you prophets, and wise men, and scribes: and some of them ye shall kill and crucify; and some of them shall ye scourge in your synagogues, and persecute them from city to city:",
        },
        {
          number: 35,
          text: "That upon you may come all the righteous blood shed upon the earth, from the blood of righteous Abel unto the blood of Zacharias son of Barachias, whom ye slew between the temple and the altar.",
        },
        {
          number: 36,
          text: "Verily I say unto you, All these things shall come upon this generation.",
        },
        {
          number: 37,
          text: "O Jerusalem, Jerusalem, thou that killest the prophets, and stonest them which are sent unto thee, how often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not!",
        },
        {
          number: 38,
          text: "Behold, your house is left unto you desolate.",
        },
        {
          number: 39,
          text: "For I say unto you, Ye shall not see me henceforth, till ye shall say, Blessed is he that cometh in the name of the Lord.",
        },
      ],
    },
    {
      number: 24,
      verses: [
        {
          number: 1,
          text: "And Jesus went out, and departed from the temple: and his disciples came to him for to shew him the buildings of the temple.",
        },
        {
          number: 2,
          text: "And Jesus said unto them, See ye not all these things? verily I say unto you, There shall not be left here one stone upon another, that shall not be thrown down.",
        },
        {
          number: 3,
          text: "And as he sat upon the mount of Olives, the disciples came unto him privately, saying, Tell us, when shall these things be? and what shall be the sign of thy coming, and of the end of the world?",
        },
        {
          number: 4,
          text: "And Jesus answered and said unto them, Take heed that no man deceive you.",
        },
        {
          number: 5,
          text: "For many shall come in my name, saying, I am Christ; and shall deceive many.",
        },
        {
          number: 6,
          text: "And ye shall hear of wars and rumours of wars: see that ye be not troubled: for all these things must come to pass, but the end is not yet.",
        },
        {
          number: 7,
          text: "For nation shall rise against nation, and kingdom against kingdom: and there shall be famines, and pestilences, and earthquakes, in divers places.",
        },
        { number: 8, text: "All these are the beginning of sorrows." },
        {
          number: 9,
          text: "Then shall they deliver you up to be afflicted, and shall kill you: and ye shall be hated of all nations for my name\u2019s sake.",
        },
        {
          number: 10,
          text: "And then shall many be offended, and shall betray one another, and shall hate one another.",
        },
        {
          number: 11,
          text: "And many false prophets shall rise, and shall deceive many.",
        },
        {
          number: 12,
          text: "And because iniquity shall abound, the love of many shall wax cold.",
        },
        {
          number: 13,
          text: "But he that shall endure unto the end, the same shall be saved.",
        },
        {
          number: 14,
          text: "And this gospel of the kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come.",
        },
        {
          number: 15,
          text: "When ye therefore shall see the abomination of desolation, spoken of by Daniel the prophet, stand in the holy place, (whoso readeth, let him understand:)",
        },
        {
          number: 16,
          text: "Then let them which be in Judaea flee into the mountains:",
        },
        {
          number: 17,
          text: "Let him which is on the housetop not come down to take any thing out of his house:",
        },
        {
          number: 18,
          text: "Neither let him which is in the field return back to take his clothes.",
        },
        {
          number: 19,
          text: "And woe unto them that are with child, and to them that give suck in those days!",
        },
        {
          number: 20,
          text: "But pray ye that your flight be not in the winter, neither on the sabbath day:",
        },
        {
          number: 21,
          text: "For then shall be great tribulation, such as was not since the beginning of the world to this time, no, nor ever shall be.",
        },
        {
          number: 22,
          text: "And except those days should be shortened, there should no flesh be saved: but for the elect\u2019s sake those days shall be shortened.",
        },
        {
          number: 23,
          text: "Then if any man shall say unto you, Lo, here is Christ, or there; believe it not.",
        },
        {
          number: 24,
          text: "For there shall arise false Christs, and false prophets, and shall shew great signs and wonders; insomuch that, if it were possible, they shall deceive the very elect.",
        },
        { number: 25, text: "Behold, I have told you before." },
        {
          number: 26,
          text: "Wherefore if they shall say unto you, Behold, he is in the desert; go not forth: behold, he is in the secret chambers; believe it not.",
        },
        {
          number: 27,
          text: "For as the lightning cometh out of the east, and shineth even unto the west; so shall also the coming of the Son of man be.",
        },
        {
          number: 28,
          text: "For wheresoever the carcase is, there will the eagles be gathered together.",
        },
        {
          number: 29,
          text: "Immediately after the tribulation of those days shall the sun be darkened, and the moon shall not give her light, and the stars shall fall from heaven, and the powers of the heavens shall be shaken:",
        },
        {
          number: 30,
          text: "And then shall appear the sign of the Son of man in heaven: and then shall all the tribes of the earth mourn, and they shall see the Son of man coming in the clouds of heaven with power and great glory.",
        },
        {
          number: 31,
          text: "And he shall send his angels with a great sound of a trumpet, and they shall gather together his elect from the four winds, from one end of heaven to the other.",
        },
        {
          number: 32,
          text: "Now learn a parable of the fig tree; When his branch is yet tender, and putteth forth leaves, ye know that summer is nigh:",
        },
        {
          number: 33,
          text: "So likewise ye, when ye shall see all these things, know that it is near, even at the doors.",
        },
        {
          number: 34,
          text: "Verily I say unto you, This generation shall not pass, till all these things be fulfilled.",
        },
        {
          number: 35,
          text: "Heaven and earth shall pass away, but my words shall not pass away.",
        },
        {
          number: 36,
          text: "But of that day and hour knoweth no man, no, not the angels of heaven, but my Father only.",
        },
        {
          number: 37,
          text: "But as the days of Noe were, so shall also the coming of the Son of man be.",
        },
        {
          number: 38,
          text: "For as in the days that were before the flood they were eating and drinking, marrying and giving in marriage, until the day that Noe entered into the ark,",
        },
        {
          number: 39,
          text: "And knew not until the flood came, and took them all away; so shall also the coming of the Son of man be.",
        },
        {
          number: 40,
          text: "Then shall two be in the field; the one shall be taken, and the other left.",
        },
        {
          number: 41,
          text: "Two women shall be grinding at the mill; the one shall be taken, and the other left.",
        },
        {
          number: 42,
          text: "Watch therefore: for ye know not what hour your Lord doth come.",
        },
        {
          number: 43,
          text: "But know this, that if the goodman of the house had known in what watch the thief would come, he would have watched, and would not have suffered his house to be broken up.",
        },
        {
          number: 44,
          text: "Therefore be ye also ready: for in such an hour as ye think not the Son of man cometh.",
        },
        {
          number: 45,
          text: "Who then is a faithful and wise servant, whom his lord hath made ruler over his household, to give them meat in due season?",
        },
        {
          number: 46,
          text: "Blessed is that servant, whom his lord when he cometh shall find so doing.",
        },
        {
          number: 47,
          text: "Verily I say unto you, That he shall make him ruler over all his goods.",
        },
        {
          number: 48,
          text: "But and if that evil servant shall say in his heart, My lord delayeth his coming;",
        },
        {
          number: 49,
          text: "And shall begin to smite his fellowservants, and to eat and drink with the drunken;",
        },
        {
          number: 50,
          text: "The lord of that servant shall come in a day when he looketh not for him, and in an hour that he is not aware of,",
        },
        {
          number: 51,
          text: "And shall cut him asunder, and appoint him his portion with the hypocrites: there shall be weeping and gnashing of teeth.",
        },
      ],
    },
    {
      number: 25,
      verses: [
        {
          number: 1,
          text: "Then shall the kingdom of heaven be likened unto ten virgins, which took their lamps, and went forth to meet the bridegroom.",
        },
        {
          number: 2,
          text: "And five of them were wise, and five were foolish.",
        },
        {
          number: 3,
          text: "They that were foolish took their lamps, and took no oil with them:",
        },
        {
          number: 4,
          text: "But the wise took oil in their vessels with their lamps.",
        },
        {
          number: 5,
          text: "While the bridegroom tarried, they all slumbered and slept.",
        },
        {
          number: 6,
          text: "And at midnight there was a cry made, Behold, the bridegroom cometh; go ye out to meet him.",
        },
        {
          number: 7,
          text: "Then all those virgins arose, and trimmed their lamps.",
        },
        {
          number: 8,
          text: "And the foolish said unto the wise, Give us of your oil; for our lamps are gone out.",
        },
        {
          number: 9,
          text: "But the wise answered, saying, Not so; lest there be not enough for us and you: but go ye rather to them that sell, and buy for yourselves.",
        },
        {
          number: 10,
          text: "And while they went to buy, the bridegroom came; and they that were ready went in with him to the marriage: and the door was shut.",
        },
        {
          number: 11,
          text: "Afterward came also the other virgins, saying, Lord, Lord, open to us.",
        },
        {
          number: 12,
          text: "But he answered and said, Verily I say unto you, I know you not.",
        },
        {
          number: 13,
          text: "Watch therefore, for ye know neither the day nor the hour wherein the Son of man cometh.",
        },
        {
          number: 14,
          text: "For the kingdom of heaven is as a man travelling into a far country, who called his own servants, and delivered unto them his goods.",
        },
        {
          number: 15,
          text: "And unto one he gave five talents, to another two, and to another one; to every man according to his several ability; and straightway took his journey.",
        },
        {
          number: 16,
          text: "Then he that had received the five talents went and traded with the same, and made them other five talents.",
        },
        {
          number: 17,
          text: "And likewise he that had received two, he also gained other two.",
        },
        {
          number: 18,
          text: "But he that had received one went and digged in the earth, and hid his lord\u2019s money.",
        },
        {
          number: 19,
          text: "After a long time the lord of those servants cometh, and reckoneth with them.",
        },
        {
          number: 20,
          text: "And so he that had received five talents came and brought other five talents, saying, Lord, thou deliveredst unto me five talents: behold, I have gained beside them five talents more.",
        },
        {
          number: 21,
          text: "His lord said unto him, Well done, thou good and faithful servant: thou hast been faithful over a few things, I will make thee ruler over many things: enter thou into the joy of thy lord.",
        },
        {
          number: 22,
          text: "He also that had received two talents came and said, Lord, thou deliveredst unto me two talents: behold, I have gained two other talents beside them.",
        },
        {
          number: 23,
          text: "His lord said unto him, Well done, good and faithful servant; thou hast been faithful over a few things, I will make thee ruler over many things: enter thou into the joy of thy lord.",
        },
        {
          number: 24,
          text: "Then he which had received the one talent came and said, Lord, I knew thee that thou art an hard man, reaping where thou hast not sown, and gathering where thou hast not strawed:",
        },
        {
          number: 25,
          text: "And I was afraid, and went and hid thy talent in the earth: lo, there thou hast that is thine.",
        },
        {
          number: 26,
          text: "His lord answered and said unto him, Thou wicked and slothful servant, thou knewest that I reap where I sowed not, and gather where I have not strawed:",
        },
        {
          number: 27,
          text: "Thou oughtest therefore to have put my money to the exchangers, and then at my coming I should have received mine own with usury.",
        },
        {
          number: 28,
          text: "Take therefore the talent from him, and give it unto him which hath ten talents.",
        },
        {
          number: 29,
          text: "For unto every one that hath shall be given, and he shall have abundance: but from him that hath not shall be taken away even that which he hath.",
        },
        {
          number: 30,
          text: "And cast ye the unprofitable servant into outer darkness: there shall be weeping and gnashing of teeth.",
        },
        {
          number: 31,
          text: "When the Son of man shall come in his glory, and all the holy angels with him, then shall he sit upon the throne of his glory:",
        },
        {
          number: 32,
          text: "And before him shall be gathered all nations: and he shall separate them one from another, as a shepherd divideth his sheep from the goats:",
        },
        {
          number: 33,
          text: "And he shall set the sheep on his right hand, but the goats on the left.",
        },
        {
          number: 34,
          text: "Then shall the King say unto them on his right hand, Come, ye blessed of my Father, inherit the kingdom prepared for you from the foundation of the world:",
        },
        {
          number: 35,
          text: "For I was an hungred, and ye gave me meat: I was thirsty, and ye gave me drink: I was a stranger, and ye took me in:",
        },
        {
          number: 36,
          text: "Naked, and ye clothed me: I was sick, and ye visited me: I was in prison, and ye came unto me.",
        },
        {
          number: 37,
          text: "Then shall the righteous answer him, saying, Lord, when saw we thee an hungred, and fed thee? or thirsty, and gave thee drink?",
        },
        {
          number: 38,
          text: "When saw we thee a stranger, and took thee in? or naked, and clothed thee?",
        },
        {
          number: 39,
          text: "Or when saw we thee sick, or in prison, and came unto thee?",
        },
        {
          number: 40,
          text: "And the King shall answer and say unto them, Verily I say unto you, Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.",
        },
        {
          number: 41,
          text: "Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire, prepared for the devil and his angels:",
        },
        {
          number: 42,
          text: "For I was an hungred, and ye gave me no meat: I was thirsty, and ye gave me no drink:",
        },
        {
          number: 43,
          text: "I was a stranger, and ye took me not in: naked, and ye clothed me not: sick, and in prison, and ye visited me not.",
        },
        {
          number: 44,
          text: "Then shall they also answer him, saying, Lord, when saw we thee an hungred, or athirst, or a stranger, or naked, or sick, or in prison, and did not minister unto thee?",
        },
        {
          number: 45,
          text: "Then shall he answer them, saying, Verily I say unto you, Inasmuch as ye did it not to one of the least of these, ye did it not to me.",
        },
        {
          number: 46,
          text: "And these shall go away into everlasting punishment: but the righteous into life eternal.",
        },
      ],
    },
    {
      number: 26,
      verses: [
        {
          number: 1,
          text: "And it came to pass, when Jesus had finished all these sayings, he said unto his disciples,",
        },
        {
          number: 2,
          text: "Ye know that after two days is the feast of the passover, and the Son of man is betrayed to be crucified.",
        },
        {
          number: 3,
          text: "Then assembled together the chief priests, and the scribes, and the elders of the people, unto the palace of the high priest, who was called Caiaphas,",
        },
        {
          number: 4,
          text: "And consulted that they might take Jesus by subtilty, and kill him.",
        },
        {
          number: 5,
          text: "But they said, Not on the feast day, lest there be an uproar among the people.",
        },
        {
          number: 6,
          text: "Now when Jesus was in Bethany, in the house of Simon the leper,",
        },
        {
          number: 7,
          text: "There came unto him a woman having an alabaster box of very precious ointment, and poured it on his head, as he sat at meat.",
        },
        {
          number: 8,
          text: "But when his disciples saw it, they had indignation, saying, To what purpose is this waste?",
        },
        {
          number: 9,
          text: "For this ointment might have been sold for much, and given to the poor.",
        },
        {
          number: 10,
          text: "When Jesus understood it, he said unto them, Why trouble ye the woman? for she hath wrought a good work upon me.",
        },
        {
          number: 11,
          text: "For ye have the poor always with you; but me ye have not always.",
        },
        {
          number: 12,
          text: "For in that she hath poured this ointment on my body, she did it for my burial.",
        },
        {
          number: 13,
          text: "Verily I say unto you, Wheresoever this gospel shall be preached in the whole world, there shall also this, that this woman hath done, be told for a memorial of her.",
        },
        {
          number: 14,
          text: "Then one of the twelve, called Judas Iscariot, went unto the chief priests,",
        },
        {
          number: 15,
          text: "And said unto them, What will ye give me, and I will deliver him unto you? And they covenanted with him for thirty pieces of silver.",
        },
        {
          number: 16,
          text: "And from that time he sought opportunity to betray him.",
        },
        {
          number: 17,
          text: "Now the first day of the feast of unleavened bread the disciples came to Jesus, saying unto him, Where wilt thou that we prepare for thee to eat the passover?",
        },
        {
          number: 18,
          text: "And he said, Go into the city to such a man, and say unto him, The Master saith, My time is at hand; I will keep the passover at thy house with my disciples.",
        },
        {
          number: 19,
          text: "And the disciples did as Jesus had appointed them; and they made ready the passover.",
        },
        {
          number: 20,
          text: "Now when the even was come, he sat down with the twelve.",
        },
        {
          number: 21,
          text: "And as they did eat, he said, Verily I say unto you, that one of you shall betray me.",
        },
        {
          number: 22,
          text: "And they were exceeding sorrowful, and began every one of them to say unto him, Lord, is it I?",
        },
        {
          number: 23,
          text: "And he answered and said, He that dippeth his hand with me in the dish, the same shall betray me.",
        },
        {
          number: 24,
          text: "The Son of man goeth as it is written of him: but woe unto that man by whom the Son of man is betrayed! it had been good for that man if he had not been born.",
        },
        {
          number: 25,
          text: "Then Judas, which betrayed him, answered and said, Master, is it I? He said unto him, Thou hast said.",
        },
        {
          number: 26,
          text: "And as they were eating, Jesus took bread, and blessed it, and brake it, and gave it to the disciples, and said, Take, eat; this is my body.",
        },
        {
          number: 27,
          text: "And he took the cup, and gave thanks, and gave it to them, saying, Drink ye all of it;",
        },
        {
          number: 28,
          text: "For this is my blood of the new testament, which is shed for many for the remission of sins.",
        },
        {
          number: 29,
          text: "But I say unto you, I will not drink henceforth of this fruit of the vine, until that day when I drink it new with you in my Father\u2019s kingdom.",
        },
        {
          number: 30,
          text: "And when they had sung an hymn, they went out into the mount of Olives.",
        },
        {
          number: 31,
          text: "Then saith Jesus unto them, All ye shall be offended because of me this night: for it is written, I will smite the shepherd, and the sheep of the flock shall be scattered abroad.",
        },
        {
          number: 32,
          text: "But after I am risen again, I will go before you into Galilee.",
        },
        {
          number: 33,
          text: "Peter answered and said unto him, Though all men shall be offended because of thee, yet will I never be offended.",
        },
        {
          number: 34,
          text: "Jesus said unto him, Verily I say unto thee, That this night, before the cock crow, thou shalt deny me thrice.",
        },
        {
          number: 35,
          text: "Peter said unto him, Though I should die with thee, yet will I not deny thee. Likewise also said all the disciples.",
        },
        {
          number: 36,
          text: "Then cometh Jesus with them unto a place called Gethsemane, and saith unto the disciples, Sit ye here, while I go and pray yonder.",
        },
        {
          number: 37,
          text: "And he took with him Peter and the two sons of Zebedee, and began to be sorrowful and very heavy.",
        },
        {
          number: 38,
          text: "Then saith he unto them, My soul is exceeding sorrowful, even unto death: tarry ye here, and watch with me.",
        },
        {
          number: 39,
          text: "And he went a little farther, and fell on his face, and prayed, saying, O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt.",
        },
        {
          number: 40,
          text: "And he cometh unto the disciples, and findeth them asleep, and saith unto Peter, What, could ye not watch with me one hour?",
        },
        {
          number: 41,
          text: "Watch and pray, that ye enter not into temptation: the spirit indeed is willing, but the flesh is weak.",
        },
        {
          number: 42,
          text: "He went away again the second time, and prayed, saying, O my Father, if this cup may not pass away from me, except I drink it, thy will be done.",
        },
        {
          number: 43,
          text: "And he came and found them asleep again: for their eyes were heavy.",
        },
        {
          number: 44,
          text: "And he left them, and went away again, and prayed the third time, saying the same words.",
        },
        {
          number: 45,
          text: "Then cometh he to his disciples, and saith unto them, Sleep on now, and take your rest: behold, the hour is at hand, and the Son of man is betrayed into the hands of sinners.",
        },
        {
          number: 46,
          text: "Rise, let us be going: behold, he is at hand that doth betray me.",
        },
        {
          number: 47,
          text: "And while he yet spake, lo, Judas, one of the twelve, came, and with him a great multitude with swords and staves, from the chief priests and elders of the people.",
        },
        {
          number: 48,
          text: "Now he that betrayed him gave them a sign, saying, Whomsoever I shall kiss, that same is he: hold him fast.",
        },
        {
          number: 49,
          text: "And forthwith he came to Jesus, and said, Hail, master; and kissed him.",
        },
        {
          number: 50,
          text: "And Jesus said unto him, Friend, wherefore art thou come? Then came they, and laid hands on Jesus, and took him.",
        },
        {
          number: 51,
          text: "And, behold, one of them which were with Jesus stretched out his hand, and drew his sword, and struck a servant of the high priest\u2019s, and smote off his ear.",
        },
        {
          number: 52,
          text: "Then said Jesus unto him, Put up again thy sword into his place: for all they that take the sword shall perish with the sword.",
        },
        {
          number: 53,
          text: "Thinkest thou that I cannot now pray to my Father, and he shall presently give me more than twelve legions of angels?",
        },
        {
          number: 54,
          text: "But how then shall the scriptures be fulfilled, that thus it must be?",
        },
        {
          number: 55,
          text: "In that same hour said Jesus to the multitudes, Are ye come out as against a thief with swords and staves for to take me? I sat daily with you teaching in the temple, and ye laid no hold on me.",
        },
        {
          number: 56,
          text: "But all this was done, that the scriptures of the prophets might be fulfilled. Then all the disciples forsook him, and fled.",
        },
        {
          number: 57,
          text: "And they that had laid hold on Jesus led him away to Caiaphas the high priest, where the scribes and the elders were assembled.",
        },
        {
          number: 58,
          text: "But Peter followed him afar off unto the high priest\u2019s palace, and went in, and sat with the servants, to see the end.",
        },
        {
          number: 59,
          text: "Now the chief priests, and elders, and all the council, sought false witness against Jesus, to put him to death;",
        },
        {
          number: 60,
          text: "But found none: yea, though many false witnesses came, yet found they none. At the last came two false witnesses,",
        },
        {
          number: 61,
          text: "And said, This fellow said, I am able to destroy the temple of God, and to build it in three days.",
        },
        {
          number: 62,
          text: "And the high priest arose, and said unto him, Answerest thou nothing? what is it which these witness against thee?",
        },
        {
          number: 63,
          text: "But Jesus held his peace. And the high priest answered and said unto him, I adjure thee by the living God, that thou tell us whether thou be the Christ, the Son of God.",
        },
        {
          number: 64,
          text: "Jesus saith unto him, Thou hast said: nevertheless I say unto you, Hereafter shall ye see the Son of man sitting on the right hand of power, and coming in the clouds of heaven.",
        },
        {
          number: 65,
          text: "Then the high priest rent his clothes, saying, He hath spoken blasphemy; what further need have we of witnesses? behold, now ye have heard his blasphemy.",
        },
        {
          number: 66,
          text: "What think ye? They answered and said, He is guilty of death.",
        },
        {
          number: 67,
          text: "Then did they spit in his face, and buffeted him; and others smote him with the palms of their hands,",
        },
        {
          number: 68,
          text: "Saying, Prophesy unto us, thou Christ, Who is he that smote thee?",
        },
        {
          number: 69,
          text: "Now Peter sat without in the palace: and a damsel came unto him, saying, Thou also wast with Jesus of Galilee.",
        },
        {
          number: 70,
          text: "But he denied before them all, saying, I know not what thou sayest.",
        },
        {
          number: 71,
          text: "And when he was gone out into the porch, another maid saw him, and said unto them that were there, This fellow was also with Jesus of Nazareth.",
        },
        {
          number: 72,
          text: "And again he denied with an oath, I do not know the man.",
        },
        {
          number: 73,
          text: "And after a while came unto him they that stood by, and said to Peter, Surely thou also art one of them; for thy speech bewrayeth thee.",
        },
        {
          number: 74,
          text: "Then began he to curse and to swear, saying, I know not the man. And immediately the cock crew.",
        },
        {
          number: 75,
          text: "And Peter remembered the word of Jesus, which said unto him, Before the cock crow, thou shalt deny me thrice. And he went out, and wept bitterly.",
        },
      ],
    },
    {
      number: 27,
      verses: [
        {
          number: 1,
          text: "When the morning was come, all the chief priests and elders of the people took counsel against Jesus to put him to death:",
        },
        {
          number: 2,
          text: "And when they had bound him, they led him away, and delivered him to Pontius Pilate the governor.",
        },
        {
          number: 3,
          text: "Then Judas, which had betrayed him, when he saw that he was condemned, repented himself, and brought again the thirty pieces of silver to the chief priests and elders,",
        },
        {
          number: 4,
          text: "Saying, I have sinned in that I have betrayed the innocent blood. And they said, What is that to us? see thou to that.",
        },
        {
          number: 5,
          text: "And he cast down the pieces of silver in the temple, and departed, and went and hanged himself.",
        },
        {
          number: 6,
          text: "And the chief priests took the silver pieces, and said, It is not lawful for to put them into the treasury, because it is the price of blood.",
        },
        {
          number: 7,
          text: "And they took counsel, and bought with them the potter\u2019s field, to bury strangers in.",
        },
        {
          number: 8,
          text: "Wherefore that field was called, The field of blood, unto this day.",
        },
        {
          number: 9,
          text: "Then was fulfilled that which was spoken by Jeremy the prophet, saying, And they took the thirty pieces of silver, the price of him that was valued, whom they of the children of Israel did value;",
        },
        {
          number: 10,
          text: "And gave them for the potter\u2019s field, as the Lord appointed me.",
        },
        {
          number: 11,
          text: "And Jesus stood before the governor: and the governor asked him, saying, Art thou the King of the Jews? And Jesus said unto him, Thou sayest.",
        },
        {
          number: 12,
          text: "And when he was accused of the chief priests and elders, he answered nothing.",
        },
        {
          number: 13,
          text: "Then said Pilate unto him, Hearest thou not how many things they witness against thee?",
        },
        {
          number: 14,
          text: "And he answered him to never a word; insomuch that the governor marvelled greatly.",
        },
        {
          number: 15,
          text: "Now at that feast the governor was wont to release unto the people a prisoner, whom they would.",
        },
        {
          number: 16,
          text: "And they had then a notable prisoner, called Barabbas.",
        },
        {
          number: 17,
          text: "Therefore when they were gathered together, Pilate said unto them, Whom will ye that I release unto you? Barabbas, or Jesus which is called Christ?",
        },
        {
          number: 18,
          text: "For he knew that for envy they had delivered him.",
        },
        {
          number: 19,
          text: "When he was set down on the judgment seat, his wife sent unto him, saying, Have thou nothing to do with that just man: for I have suffered many things this day in a dream because of him.",
        },
        {
          number: 20,
          text: "But the chief priests and elders persuaded the multitude that they should ask Barabbas, and destroy Jesus.",
        },
        {
          number: 21,
          text: "The governor answered and said unto them, Whether of the twain will ye that I release unto you? They said, Barabbas.",
        },
        {
          number: 22,
          text: "Pilate saith unto them, What shall I do then with Jesus which is called Christ? They all say unto him, Let him be crucified.",
        },
        {
          number: 23,
          text: "And the governor said, Why, what evil hath he done? But they cried out the more, saying, Let him be crucified.",
        },
        {
          number: 24,
          text: "When Pilate saw that he could prevail nothing, but that rather a tumult was made, he took water, and washed his hands before the multitude, saying, I am innocent of the blood of this just person: see ye to it.",
        },
        {
          number: 25,
          text: "Then answered all the people, and said, His blood be on us, and on our children.",
        },
        {
          number: 26,
          text: "Then released he Barabbas unto them: and when he had scourged Jesus, he delivered him to be crucified.",
        },
        {
          number: 27,
          text: "Then the soldiers of the governor took Jesus into the common hall, and gathered unto him the whole band of soldiers.",
        },
        {
          number: 28,
          text: "And they stripped him, and put on him a scarlet robe.",
        },
        {
          number: 29,
          text: "And when they had platted a crown of thorns, they put it upon his head, and a reed in his right hand: and they bowed the knee before him, and mocked him, saying, Hail, King of the Jews!",
        },
        {
          number: 30,
          text: "And they spit upon him, and took the reed, and smote him on the head.",
        },
        {
          number: 31,
          text: "And after that they had mocked him, they took the robe off from him, and put his own raiment on him, and led him away to crucify him.",
        },
        {
          number: 32,
          text: "And as they came out, they found a man of Cyrene, Simon by name: him they compelled to bear his cross.",
        },
        {
          number: 33,
          text: "And when they were come unto a place called Golgotha, that is to say, a place of a skull,",
        },
        {
          number: 34,
          text: "They gave him vinegar to drink mingled with gall: and when he had tasted thereof, he would not drink.",
        },
        {
          number: 35,
          text: "And they crucified him, and parted his garments, casting lots: that it might be fulfilled which was spoken by the prophet, They parted my garments among them, and upon my vesture did they cast lots.",
        },
        { number: 36, text: "And sitting down they watched him there;" },
        {
          number: 37,
          text: "And set up over his head his accusation written, THIS IS JESUS THE KING OF THE JEWS.",
        },
        {
          number: 38,
          text: "Then were there two thieves crucified with him, one on the right hand, and another on the left.",
        },
        {
          number: 39,
          text: "And they that passed by reviled him, wagging their heads,",
        },
        {
          number: 40,
          text: "And saying, Thou that destroyest the temple, and buildest it in three days, save thyself. If thou be the Son of God, come down from the cross.",
        },
        {
          number: 41,
          text: "Likewise also the chief priests mocking him, with the scribes and elders, said,",
        },
        {
          number: 42,
          text: "He saved others; himself he cannot save. If he be the King of Israel, let him now come down from the cross, and we will believe him.",
        },
        {
          number: 43,
          text: "He trusted in God; let him deliver him now, if he will have him: for he said, I am the Son of God.",
        },
        {
          number: 44,
          text: "The thieves also, which were crucified with him, cast the same in his teeth.",
        },
        {
          number: 45,
          text: "Now from the sixth hour there was darkness over all the land unto the ninth hour.",
        },
        {
          number: 46,
          text: "And about the ninth hour Jesus cried with a loud voice, saying, Eli, Eli, lama sabachthani? that is to say, My God, my God, why hast thou forsaken me?",
        },
        {
          number: 47,
          text: "Some of them that stood there, when they heard that, said, This man calleth for Elias.",
        },
        {
          number: 48,
          text: "And straightway one of them ran, and took a spunge, and filled it with vinegar, and put it on a reed, and gave him to drink.",
        },
        {
          number: 49,
          text: "The rest said, Let be, let us see whether Elias will come to save him.",
        },
        {
          number: 50,
          text: "Jesus, when he had cried again with a loud voice, yielded up the ghost.",
        },
        {
          number: 51,
          text: "And, behold, the veil of the temple was rent in twain from the top to the bottom; and the earth did quake, and the rocks rent;",
        },
        {
          number: 52,
          text: "And the graves were opened; and many bodies of the saints which slept arose,",
        },
        {
          number: 53,
          text: "And came out of the graves after his resurrection, and went into the holy city, and appeared unto many.",
        },
        {
          number: 54,
          text: "Now when the centurion, and they that were with him, watching Jesus, saw the earthquake, and those things that were done, they feared greatly, saying, Truly this was the Son of God.",
        },
        {
          number: 55,
          text: "And many women were there beholding afar off, which followed Jesus from Galilee, ministering unto him:",
        },
        {
          number: 56,
          text: "Among which was Mary Magdalene, and Mary the mother of James and Joses, and the mother of Zebedee\u2019s children.",
        },
        {
          number: 57,
          text: "When the even was come, there came a rich man of Arimathaea, named Joseph, who also himself was Jesus\u2019 disciple:",
        },
        {
          number: 58,
          text: "He went to Pilate, and begged the body of Jesus. Then Pilate commanded the body to be delivered.",
        },
        {
          number: 59,
          text: "And when Joseph had taken the body, he wrapped it in a clean linen cloth,",
        },
        {
          number: 60,
          text: "And laid it in his own new tomb, which he had hewn out in the rock: and he rolled a great stone to the door of the sepulchre, and departed.",
        },
        {
          number: 61,
          text: "And there was Mary Magdalene, and the other Mary, sitting over against the sepulchre.",
        },
        {
          number: 62,
          text: "Now the next day, that followed the day of the preparation, the chief priests and Pharisees came together unto Pilate,",
        },
        {
          number: 63,
          text: "Saying, Sir, we remember that that deceiver said, while he was yet alive, After three days I will rise again.",
        },
        {
          number: 64,
          text: "Command therefore that the sepulchre be made sure until the third day, lest his disciples come by night, and steal him away, and say unto the people, He is risen from the dead: so the last error shall be worse than the first.",
        },
        {
          number: 65,
          text: "Pilate said unto them, Ye have a watch: go your way, make it as sure as ye can.",
        },
        {
          number: 66,
          text: "So they went, and made the sepulchre sure, sealing the stone, and setting a watch.",
        },
      ],
    },
    {
      number: 28,
      verses: [
        {
          number: 1,
          text: "In the end of the sabbath, as it began to dawn toward the first day of the week, came Mary Magdalene and the other Mary to see the sepulchre.",
        },
        {
          number: 2,
          text: "And, behold, there was a great earthquake: for the angel of the Lord descended from heaven, and came and rolled back the stone from the door, and sat upon it.",
        },
        {
          number: 3,
          text: "His countenance was like lightning, and his raiment white as snow:",
        },
        {
          number: 4,
          text: "And for fear of him the keepers did shake, and became as dead men.",
        },
        {
          number: 5,
          text: "And the angel answered and said unto the women, Fear not ye: for I know that ye seek Jesus, which was crucified.",
        },
        {
          number: 6,
          text: "He is not here: for he is risen, as he said. Come, see the place where the Lord lay.",
        },
        {
          number: 7,
          text: "And go quickly, and tell his disciples that he is risen from the dead; and, behold, he goeth before you into Galilee; there shall ye see him: lo, I have told you.",
        },
        {
          number: 8,
          text: "And they departed quickly from the sepulchre with fear and great joy; and did run to bring his disciples word.",
        },
        {
          number: 9,
          text: "And as they went to tell his disciples, behold, Jesus met them, saying, All hail. And they came and held him by the feet, and worshipped him.",
        },
        {
          number: 10,
          text: "Then said Jesus unto them, Be not afraid: go tell my brethren that they go into Galilee, and there shall they see me.",
        },
        {
          number: 11,
          text: "Now when they were going, behold, some of the watch came into the city, and shewed unto the chief priests all the things that were done.",
        },
        {
          number: 12,
          text: "And when they were assembled with the elders, and had taken counsel, they gave large money unto the soldiers,",
        },
        {
          number: 13,
          text: "Saying, Say ye, His disciples came by night, and stole him away while we slept.",
        },
        {
          number: 14,
          text: "And if this come to the governor\u2019s ears, we will persuade him, and secure you.",
        },
        {
          number: 15,
          text: "So they took the money, and did as they were taught: and this saying is commonly reported among the Jews until this day.",
        },
        {
          number: 16,
          text: "Then the eleven disciples went away into Galilee, into a mountain where Jesus had appointed them.",
        },
        {
          number: 17,
          text: "And when they saw him, they worshipped him: but some doubted.",
        },
        {
          number: 18,
          text: "And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth.",
        },
        {
          number: 19,
          text: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:",
        },
        {
          number: 20,
          text: "Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.",
        },
      ],
    },
  ],
};

export default Matthew;
