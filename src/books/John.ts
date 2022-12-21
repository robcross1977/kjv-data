import { DeepPartial } from "typeorm";
import { Book } from "../entity/Book";

const John: DeepPartial<Book> = {
  name: "John",
  chapters: [
    {
      number: 1,
      verses: [
        {
          number: 1,
          text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
        },
        { number: 2, text: "The same was in the beginning with God." },
        {
          number: 3,
          text: "All things were made by him; and without him was not any thing made that was made.",
        },
        {
          number: 4,
          text: "In him was life; and the life was the light of men.",
        },
        {
          number: 5,
          text: "And the light shineth in darkness; and the darkness comprehended it not.",
        },
        {
          number: 6,
          text: "There was a man sent from God, whose name was John.",
        },
        {
          number: 7,
          text: "The same came for a witness, to bear witness of the Light, that all men through him might believe.",
        },
        {
          number: 8,
          text: "He was not that Light, but was sent to bear witness of that Light.",
        },
        {
          number: 9,
          text: "That was the true Light, which lighteth every man that cometh into the world.",
        },
        {
          number: 10,
          text: "He was in the world, and the world was made by him, and the world knew him not.",
        },
        {
          number: 11,
          text: "He came unto his own, and his own received him not.",
        },
        {
          number: 12,
          text: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:",
        },
        {
          number: 13,
          text: "Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.",
        },
        {
          number: 14,
          text: "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.",
        },
        {
          number: 15,
          text: "John bare witness of him, and cried, saying, This was he of whom I spake, He that cometh after me is preferred before me: for he was before me.",
        },
        {
          number: 16,
          text: "And of his fulness have all we received, and grace for grace.",
        },
        {
          number: 17,
          text: "For the law was given by Moses, but grace and truth came by Jesus Christ.",
        },
        {
          number: 18,
          text: "No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him.",
        },
        {
          number: 19,
          text: "And this is the record of John, when the Jews sent priests and Levites from Jerusalem to ask him, Who art thou?",
        },
        {
          number: 20,
          text: "And he confessed, and denied not; but confessed, I am not the Christ.",
        },
        {
          number: 21,
          text: "And they asked him, What then? Art thou Elias? And he saith, I am not. Art thou that prophet? And he answered, No.",
        },
        {
          number: 22,
          text: "Then said they unto him, Who art thou? that we may give an answer to them that sent us. What sayest thou of thyself?",
        },
        {
          number: 23,
          text: "He said, I am the voice of one crying in the wilderness, Make straight the way of the Lord, as said the prophet Esaias.",
        },
        {
          number: 24,
          text: "And they which were sent were of the Pharisees.",
        },
        {
          number: 25,
          text: "And they asked him, and said unto him, Why baptizest thou then, if thou be not that Christ, nor Elias, neither that prophet?",
        },
        {
          number: 26,
          text: "John answered them, saying, I baptize with water: but there standeth one among you, whom ye know not;",
        },
        {
          number: 27,
          text: "He it is, who coming after me is preferred before me, whose shoe\u2019s latchet I am not worthy to unloose.",
        },
        {
          number: 28,
          text: "These things were done in Bethabara beyond Jordan, where John was baptizing.",
        },
        {
          number: 29,
          text: "The next day John seeth Jesus coming unto him, and saith, Behold the Lamb of God, which taketh away the sin of the world.",
        },
        {
          number: 30,
          text: "This is he of whom I said, After me cometh a man which is preferred before me: for he was before me.",
        },
        {
          number: 31,
          text: "And I knew him not: but that he should be made manifest to Israel, therefore am I come baptizing with water.",
        },
        {
          number: 32,
          text: "And John bare record, saying, I saw the Spirit descending from heaven like a dove, and it abode upon him.",
        },
        {
          number: 33,
          text: "And I knew him not: but he that sent me to baptize with water, the same said unto me, Upon whom thou shalt see the Spirit descending, and remaining on him, the same is he which baptizeth with the Holy Ghost.",
        },
        {
          number: 34,
          text: "And I saw, and bare record that this is the Son of God.",
        },
        {
          number: 35,
          text: "Again the next day after John stood, and two of his disciples;",
        },
        {
          number: 36,
          text: "And looking upon Jesus as he walked, he saith, Behold the Lamb of God!",
        },
        {
          number: 37,
          text: "And the two disciples heard him speak, and they followed Jesus.",
        },
        {
          number: 38,
          text: "Then Jesus turned, and saw them following, and saith unto them, What seek ye? They said unto him, Rabbi, (which is to say, being interpreted, Master,) where dwellest thou?",
        },
        {
          number: 39,
          text: "He saith unto them, Come and see. They came and saw where he dwelt, and abode with him that day: for it was about the tenth hour.",
        },
        {
          number: 40,
          text: "One of the two which heard John speak, and followed him, was Andrew, Simon Peter\u2019s brother.",
        },
        {
          number: 41,
          text: "He first findeth his own brother Simon, and saith unto him, We have found the Messias, which is, being interpreted, the Christ.",
        },
        {
          number: 42,
          text: "And he brought him to Jesus. And when Jesus beheld him, he said, Thou art Simon the son of Jona: thou shalt be called Cephas, which is by interpretation, A stone.",
        },
        {
          number: 43,
          text: "The day following Jesus would go forth into Galilee, and findeth Philip, and saith unto him, Follow me.",
        },
        {
          number: 44,
          text: "Now Philip was of Bethsaida, the city of Andrew and Peter.",
        },
        {
          number: 45,
          text: "Philip findeth Nathanael, and saith unto him, We have found him, of whom Moses in the law, and the prophets, did write, Jesus of Nazareth, the son of Joseph.",
        },
        {
          number: 46,
          text: "And Nathanael said unto him, Can there any good thing come out of Nazareth? Philip saith unto him, Come and see.",
        },
        {
          number: 47,
          text: "Jesus saw Nathanael coming to him, and saith of him, Behold an Israelite indeed, in whom is no guile!",
        },
        {
          number: 48,
          text: "Nathanael saith unto him, Whence knowest thou me? Jesus answered and said unto him, Before that Philip called thee, when thou wast under the fig tree, I saw thee.",
        },
        {
          number: 49,
          text: "Nathanael answered and saith unto him, Rabbi, thou art the Son of God; thou art the King of Israel.",
        },
        {
          number: 50,
          text: "Jesus answered and said unto him, Because I said unto thee, I saw thee under the fig tree, believest thou? thou shalt see greater things than these.",
        },
        {
          number: 51,
          text: "And he saith unto him, Verily, verily, I say unto you, Hereafter ye shall see heaven open, and the angels of God ascending and descending upon the Son of man.",
        },
      ],
    },
    {
      number: 2,
      verses: [
        {
          number: 1,
          text: "And the third day there was a marriage in Cana of Galilee; and the mother of Jesus was there:",
        },
        {
          number: 2,
          text: "And both Jesus was called, and his disciples, to the marriage.",
        },
        {
          number: 3,
          text: "And when they wanted wine, the mother of Jesus saith unto him, They have no wine.",
        },
        {
          number: 4,
          text: "Jesus saith unto her, Woman, what have I to do with thee? mine hour is not yet come.",
        },
        {
          number: 5,
          text: "His mother saith unto the servants, Whatsoever he saith unto you, do it.",
        },
        {
          number: 6,
          text: "And there were set there six waterpots of stone, after the manner of the purifying of the Jews, containing two or three firkins apiece.",
        },
        {
          number: 7,
          text: "Jesus saith unto them, Fill the waterpots with water. And they filled them up to the brim.",
        },
        {
          number: 8,
          text: "And he saith unto them, Draw out now, and bear unto the governor of the feast. And they bare it.",
        },
        {
          number: 9,
          text: "When the ruler of the feast had tasted the water that was made wine, and knew not whence it was: (but the servants which drew the water knew;) the governor of the feast called the bridegroom,",
        },
        {
          number: 10,
          text: "And saith unto him, Every man at the beginning doth set forth good wine; and when men have well drunk, then that which is worse: but thou hast kept the good wine until now.",
        },
        {
          number: 11,
          text: "This beginning of miracles did Jesus in Cana of Galilee, and manifested forth his glory; and his disciples believed on him.",
        },
        {
          number: 12,
          text: "After this he went down to Capernaum, he, and his mother, and his brethren, and his disciples: and they continued there not many days.",
        },
        {
          number: 13,
          text: "And the Jews\u2019 passover was at hand, and Jesus went up to Jerusalem,",
        },
        {
          number: 14,
          text: "And found in the temple those that sold oxen and sheep and doves, and the changers of money sitting:",
        },
        {
          number: 15,
          text: "And when he had made a scourge of small cords, he drove them all out of the temple, and the sheep, and the oxen; and poured out the changers\u2019 money, and overthrew the tables;",
        },
        {
          number: 16,
          text: "And said unto them that sold doves, Take these things hence; make not my Father\u2019s house an house of merchandise.",
        },
        {
          number: 17,
          text: "And his disciples remembered that it was written, The zeal of thine house hath eaten me up.",
        },
        {
          number: 18,
          text: "Then answered the Jews and said unto him, What sign shewest thou unto us, seeing that thou doest these things?",
        },
        {
          number: 19,
          text: "Jesus answered and said unto them, Destroy this temple, and in three days I will raise it up.",
        },
        {
          number: 20,
          text: "Then said the Jews, Forty and six years was this temple in building, and wilt thou rear it up in three days?",
        },
        { number: 21, text: "But he spake of the temple of his body." },
        {
          number: 22,
          text: "When therefore he was risen from the dead, his disciples remembered that he had said this unto them; and they believed the scripture, and the word which Jesus had said.",
        },
        {
          number: 23,
          text: "Now when he was in Jerusalem at the passover, in the feast day, many believed in his name, when they saw the miracles which he did.",
        },
        {
          number: 24,
          text: "But Jesus did not commit himself unto them, because he knew all men,",
        },
        {
          number: 25,
          text: "And needed not that any should testify of man: for he knew what was in man.",
        },
      ],
    },
    {
      number: 3,
      verses: [
        {
          number: 1,
          text: "There was a man of the Pharisees, named Nicodemus, a ruler of the Jews:",
        },
        {
          number: 2,
          text: "The same came to Jesus by night, and said unto him, Rabbi, we know that thou art a teacher come from God: for no man can do these miracles that thou doest, except God be with him.",
        },
        {
          number: 3,
          text: "Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God.",
        },
        {
          number: 4,
          text: "Nicodemus saith unto him, How can a man be born when he is old? can he enter the second time into his mother\u2019s womb, and be born?",
        },
        {
          number: 5,
          text: "Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.",
        },
        {
          number: 6,
          text: "That which is born of the flesh is flesh; and that which is born of the Spirit is spirit.",
        },
        {
          number: 7,
          text: "Marvel not that I said unto thee, Ye must be born again.",
        },
        {
          number: 8,
          text: "The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit.",
        },
        {
          number: 9,
          text: "Nicodemus answered and said unto him, How can these things be?",
        },
        {
          number: 10,
          text: "Jesus answered and said unto him, Art thou a master of Israel, and knowest not these things?",
        },
        {
          number: 11,
          text: "Verily, verily, I say unto thee, We speak that we do know, and testify that we have seen; and ye receive not our witness.",
        },
        {
          number: 12,
          text: "If I have told you earthly things, and ye believe not, how shall ye believe, if I tell you of heavenly things?",
        },
        {
          number: 13,
          text: "And no man hath ascended up to heaven, but he that came down from heaven, even the Son of man which is in heaven.",
        },
        {
          number: 14,
          text: "And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up:",
        },
        {
          number: 15,
          text: "That whosoever believeth in him should not perish, but have eternal life.",
        },
        {
          number: 16,
          text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
        },
        {
          number: 17,
          text: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.",
        },
        {
          number: 18,
          text: "He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God.",
        },
        {
          number: 19,
          text: "And this is the condemnation, that light is come into the world, and men loved darkness rather than light, because their deeds were evil.",
        },
        {
          number: 20,
          text: "For every one that doeth evil hateth the light, neither cometh to the light, lest his deeds should be reproved.",
        },
        {
          number: 21,
          text: "But he that doeth truth cometh to the light, that his deeds may be made manifest, that they are wrought in God.",
        },
        {
          number: 22,
          text: "After these things came Jesus and his disciples into the land of Judaea; and there he tarried with them, and baptized.",
        },
        {
          number: 23,
          text: "And John also was baptizing in Aenon near to Salim, because there was much water there: and they came, and were baptized.",
        },
        { number: 24, text: "For John was not yet cast into prison." },
        {
          number: 25,
          text: "Then there arose a question between some of John\u2019s disciples and the Jews about purifying.",
        },
        {
          number: 26,
          text: "And they came unto John, and said unto him, Rabbi, he that was with thee beyond Jordan, to whom thou barest witness, behold, the same baptizeth, and all men come to him.",
        },
        {
          number: 27,
          text: "John answered and said, A man can receive nothing, except it be given him from heaven.",
        },
        {
          number: 28,
          text: "Ye yourselves bear me witness, that I said, I am not the Christ, but that I am sent before him.",
        },
        {
          number: 29,
          text: "He that hath the bride is the bridegroom: but the friend of the bridegroom, which standeth and heareth him, rejoiceth greatly because of the bridegroom\u2019s voice: this my joy therefore is fulfilled.",
        },
        { number: 30, text: "He must increase, but I must decrease." },
        {
          number: 31,
          text: "He that cometh from above is above all: he that is of the earth is earthly, and speaketh of the earth: he that cometh from heaven is above all.",
        },
        {
          number: 32,
          text: "And what he hath seen and heard, that he testifieth; and no man receiveth his testimony.",
        },
        {
          number: 33,
          text: "He that hath received his testimony hath set to his seal that God is true.",
        },
        {
          number: 34,
          text: "For he whom God hath sent speaketh the words of God: for God giveth not the Spirit by measure unto him.",
        },
        {
          number: 35,
          text: "The Father loveth the Son, and hath given all things into his hand.",
        },
        {
          number: 36,
          text: "He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life; but the wrath of God abideth on him.",
        },
      ],
    },
    {
      number: 4,
      verses: [
        {
          number: 1,
          text: "When therefore the LORD knew how the Pharisees had heard that Jesus made and baptized more disciples than John,",
        },
        {
          number: 2,
          text: "(Though Jesus himself baptized not, but his disciples,)",
        },
        {
          number: 3,
          text: "He left Judaea, and departed again into Galilee.",
        },
        { number: 4, text: "And he must needs go through Samaria." },
        {
          number: 5,
          text: "Then cometh he to a city of Samaria, which is called Sychar, near to the parcel of ground that Jacob gave to his son Joseph.",
        },
        {
          number: 6,
          text: "Now Jacob\u2019s well was there. Jesus therefore, being wearied with his journey, sat thus on the well: and it was about the sixth hour.",
        },
        {
          number: 7,
          text: "There cometh a woman of Samaria to draw water: Jesus saith unto her, Give me to drink.",
        },
        {
          number: 8,
          text: "(For his disciples were gone away unto the city to buy meat.)",
        },
        {
          number: 9,
          text: "Then saith the woman of Samaria unto him, How is it that thou, being a Jew, askest drink of me, which am a woman of Samaria? for the Jews have no dealings with the Samaritans.",
        },
        {
          number: 10,
          text: "Jesus answered and said unto her, If thou knewest the gift of God, and who it is that saith to thee, Give me to drink; thou wouldest have asked of him, and he would have given thee living water.",
        },
        {
          number: 11,
          text: "The woman saith unto him, Sir, thou hast nothing to draw with, and the well is deep: from whence then hast thou that living water?",
        },
        {
          number: 12,
          text: "Art thou greater than our father Jacob, which gave us the well, and drank thereof himself, and his children, and his cattle?",
        },
        {
          number: 13,
          text: "Jesus answered and said unto her, Whosoever drinketh of this water shall thirst again:",
        },
        {
          number: 14,
          text: "But whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life.",
        },
        {
          number: 15,
          text: "The woman saith unto him, Sir, give me this water, that I thirst not, neither come hither to draw.",
        },
        {
          number: 16,
          text: "Jesus saith unto her, Go, call thy husband, and come hither.",
        },
        {
          number: 17,
          text: "The woman answered and said, I have no husband. Jesus said unto her, Thou hast well said, I have no husband:",
        },
        {
          number: 18,
          text: "For thou hast had five husbands; and he whom thou now hast is not thy husband: in that saidst thou truly.",
        },
        {
          number: 19,
          text: "The woman saith unto him, Sir, I perceive that thou art a prophet.",
        },
        {
          number: 20,
          text: "Our fathers worshipped in this mountain; and ye say, that in Jerusalem is the place where men ought to worship.",
        },
        {
          number: 21,
          text: "Jesus saith unto her, Woman, believe me, the hour cometh, when ye shall neither in this mountain, nor yet at Jerusalem, worship the Father.",
        },
        {
          number: 22,
          text: "Ye worship ye know not what: we know what we worship: for salvation is of the Jews.",
        },
        {
          number: 23,
          text: "But the hour cometh, and now is, when the true worshippers shall worship the Father in spirit and in truth: for the Father seeketh such to worship him.",
        },
        {
          number: 24,
          text: "God is a Spirit: and they that worship him must worship him in spirit and in truth.",
        },
        {
          number: 25,
          text: "The woman saith unto him, I know that Messias cometh, which is called Christ: when he is come, he will tell us all things.",
        },
        {
          number: 26,
          text: "Jesus saith unto her, I that speak unto thee am he.",
        },
        {
          number: 27,
          text: "And upon this came his disciples, and marvelled that he talked with the woman: yet no man said, What seekest thou? or, Why talkest thou with her?",
        },
        {
          number: 28,
          text: "The woman then left her waterpot, and went her way into the city, and saith to the men,",
        },
        {
          number: 29,
          text: "Come, see a man, which told me all things that ever I did: is not this the Christ?",
        },
        {
          number: 30,
          text: "Then they went out of the city, and came unto him.",
        },
        {
          number: 31,
          text: "In the mean while his disciples prayed him, saying, Master, eat.",
        },
        {
          number: 32,
          text: "But he said unto them, I have meat to eat that ye know not of.",
        },
        {
          number: 33,
          text: "Therefore said the disciples one to another, Hath any man brought him ought to eat?",
        },
        {
          number: 34,
          text: "Jesus saith unto them, My meat is to do the will of him that sent me, and to finish his work.",
        },
        {
          number: 35,
          text: "Say not ye, There are yet four months, and then cometh harvest? behold, I say unto you, Lift up your eyes, and look on the fields; for they are white already to harvest.",
        },
        {
          number: 36,
          text: "And he that reapeth receiveth wages, and gathereth fruit unto life eternal: that both he that soweth and he that reapeth may rejoice together.",
        },
        {
          number: 37,
          text: "And herein is that saying true, One soweth, and another reapeth.",
        },
        {
          number: 38,
          text: "I sent you to reap that whereon ye bestowed no labour: other men laboured, and ye are entered into their labours.",
        },
        {
          number: 39,
          text: "And many of the Samaritans of that city believed on him for the saying of the woman, which testified, He told me all that ever I did.",
        },
        {
          number: 40,
          text: "So when the Samaritans were come unto him, they besought him that he would tarry with them: and he abode there two days.",
        },
        {
          number: 41,
          text: "And many more believed because of his own word;",
        },
        {
          number: 42,
          text: "And said unto the woman, Now we believe, not because of thy saying: for we have heard him ourselves, and know that this is indeed the Christ, the Saviour of the world.",
        },
        {
          number: 43,
          text: "Now after two days he departed thence, and went into Galilee.",
        },
        {
          number: 44,
          text: "For Jesus himself testified, that a prophet hath no honour in his own country.",
        },
        {
          number: 45,
          text: "Then when he was come into Galilee, the Galilaeans received him, having seen all the things that he did at Jerusalem at the feast: for they also went unto the feast.",
        },
        {
          number: 46,
          text: "So Jesus came again into Cana of Galilee, where he made the water wine. And there was a certain nobleman, whose son was sick at Capernaum.",
        },
        {
          number: 47,
          text: "When he heard that Jesus was come out of Judaea into Galilee, he went unto him, and besought him that he would come down, and heal his son: for he was at the point of death.",
        },
        {
          number: 48,
          text: "Then said Jesus unto him, Except ye see signs and wonders, ye will not believe.",
        },
        {
          number: 49,
          text: "The nobleman saith unto him, Sir, come down ere my child die.",
        },
        {
          number: 50,
          text: "Jesus saith unto him, Go thy way; thy son liveth. And the man believed the word that Jesus had spoken unto him, and he went his way.",
        },
        {
          number: 51,
          text: "And as he was now going down, his servants met him, and told him, saying, Thy son liveth.",
        },
        {
          number: 52,
          text: "Then enquired he of them the hour when he began to amend. And they said unto him, Yesterday at the seventh hour the fever left him.",
        },
        {
          number: 53,
          text: "So the father knew that it was at the same hour, in the which Jesus said unto him, Thy son liveth: and himself believed, and his whole house.",
        },
        {
          number: 54,
          text: "This is again the second miracle that Jesus did, when he was come out of Judaea into Galilee.",
        },
      ],
    },
    {
      number: 5,
      verses: [
        {
          number: 1,
          text: "After this there was a feast of the Jews; and Jesus went up to Jerusalem.",
        },
        {
          number: 2,
          text: "Now there is at Jerusalem by the sheep market a pool, which is called in the Hebrew tongue Bethesda, having five porches.",
        },
        {
          number: 3,
          text: "In these lay a great multitude of impotent folk, of blind, halt, withered, waiting for the moving of the water.",
        },
        {
          number: 4,
          text: "For an angel went down at a certain season into the pool, and troubled the water: whosoever then first after the troubling of the water stepped in was made whole of whatsoever disease he had.",
        },
        {
          number: 5,
          text: "And a certain man was there, which had an infirmity thirty and eight years.",
        },
        {
          number: 6,
          text: "When Jesus saw him lie, and knew that he had been now a long time in that case, he saith unto him, Wilt thou be made whole?",
        },
        {
          number: 7,
          text: "The impotent man answered him, Sir, I have no man, when the water is troubled, to put me into the pool: but while I am coming, another steppeth down before me.",
        },
        {
          number: 8,
          text: "Jesus saith unto him, Rise, take up thy bed, and walk.",
        },
        {
          number: 9,
          text: "And immediately the man was made whole, and took up his bed, and walked: and on the same day was the sabbath.",
        },
        {
          number: 10,
          text: "The Jews therefore said unto him that was cured, It is the sabbath day: it is not lawful for thee to carry thy bed.",
        },
        {
          number: 11,
          text: "He answered them, He that made me whole, the same said unto me, Take up thy bed, and walk.",
        },
        {
          number: 12,
          text: "Then asked they him, What man is that which said unto thee, Take up thy bed, and walk?",
        },
        {
          number: 13,
          text: "And he that was healed wist not who it was: for Jesus had conveyed himself away, a multitude being in that place.",
        },
        {
          number: 14,
          text: "Afterward Jesus findeth him in the temple, and said unto him, Behold, thou art made whole: sin no more, lest a worse thing come unto thee.",
        },
        {
          number: 15,
          text: "The man departed, and told the Jews that it was Jesus, which had made him whole.",
        },
        {
          number: 16,
          text: "And therefore did the Jews persecute Jesus, and sought to slay him, because he had done these things on the sabbath day.",
        },
        {
          number: 17,
          text: "But Jesus answered them, My Father worketh hitherto, and I work.",
        },
        {
          number: 18,
          text: "Therefore the Jews sought the more to kill him, because he not only had broken the sabbath, but said also that God was his Father, making himself equal with God.",
        },
        {
          number: 19,
          text: "Then answered Jesus and said unto them, Verily, verily, I say unto you, The Son can do nothing of himself, but what he seeth the Father do: for what things soever he doeth, these also doeth the Son likewise.",
        },
        {
          number: 20,
          text: "For the Father loveth the Son, and sheweth him all things that himself doeth: and he will shew him greater works than these, that ye may marvel.",
        },
        {
          number: 21,
          text: "For as the Father raiseth up the dead, and quickeneth them; even so the Son quickeneth whom he will.",
        },
        {
          number: 22,
          text: "For the Father judgeth no man, but hath committed all judgment unto the Son:",
        },
        {
          number: 23,
          text: "That all men should honour the Son, even as they honour the Father. He that honoureth not the Son honoureth not the Father which hath sent him.",
        },
        {
          number: 24,
          text: "Verily, verily, I say unto you, He that heareth my word, and believeth on him that sent me, hath everlasting life, and shall not come into condemnation; but is passed from death unto life.",
        },
        {
          number: 25,
          text: "Verily, verily, I say unto you, The hour is coming, and now is, when the dead shall hear the voice of the Son of God: and they that hear shall live.",
        },
        {
          number: 26,
          text: "For as the Father hath life in himself; so hath he given to the Son to have life in himself;",
        },
        {
          number: 27,
          text: "And hath given him authority to execute judgment also, because he is the Son of man.",
        },
        {
          number: 28,
          text: "Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear his voice,",
        },
        {
          number: 29,
          text: "And shall come forth; they that have done good, unto the resurrection of life; and they that have done evil, unto the resurrection of damnation.",
        },
        {
          number: 30,
          text: "I can of mine own self do nothing: as I hear, I judge: and my judgment is just; because I seek not mine own will, but the will of the Father which hath sent me.",
        },
        {
          number: 31,
          text: "If I bear witness of myself, my witness is not true.",
        },
        {
          number: 32,
          text: "There is another that beareth witness of me; and I know that the witness which he witnesseth of me is true.",
        },
        {
          number: 33,
          text: "Ye sent unto John, and he bare witness unto the truth.",
        },
        {
          number: 34,
          text: "But I receive not testimony from man: but these things I say, that ye might be saved.",
        },
        {
          number: 35,
          text: "He was a burning and a shining light: and ye were willing for a season to rejoice in his light.",
        },
        {
          number: 36,
          text: "But I have greater witness than that of John: for the works which the Father hath given me to finish, the same works that I do, bear witness of me, that the Father hath sent me.",
        },
        {
          number: 37,
          text: "And the Father himself, which hath sent me, hath borne witness of me. Ye have neither heard his voice at any time, nor seen his shape.",
        },
        {
          number: 38,
          text: "And ye have not his word abiding in you: for whom he hath sent, him ye believe not.",
        },
        {
          number: 39,
          text: "Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me.",
        },
        {
          number: 40,
          text: "And ye will not come to me, that ye might have life.",
        },
        { number: 41, text: "I receive not honour from men." },
        {
          number: 42,
          text: "But I know you, that ye have not the love of God in you.",
        },
        {
          number: 43,
          text: "I am come in my Father\u2019s name, and ye receive me not: if another shall come in his own name, him ye will receive.",
        },
        {
          number: 44,
          text: "How can ye believe, which receive honour one of another, and seek not the honour that cometh from God only?",
        },
        {
          number: 45,
          text: "Do not think that I will accuse you to the Father: there is one that accuseth you, even Moses, in whom ye trust.",
        },
        {
          number: 46,
          text: "For had ye believed Moses, ye would have believed me: for he wrote of me.",
        },
        {
          number: 47,
          text: "But if ye believe not his writings, how shall ye believe my words?",
        },
      ],
    },
    {
      number: 6,
      verses: [
        {
          number: 1,
          text: "After these things Jesus went over the sea of Galilee, which is the sea of Tiberias.",
        },
        {
          number: 2,
          text: "And a great multitude followed him, because they saw his miracles which he did on them that were diseased.",
        },
        {
          number: 3,
          text: "And Jesus went up into a mountain, and there he sat with his disciples.",
        },
        {
          number: 4,
          text: "And the passover, a feast of the Jews, was nigh.",
        },
        {
          number: 5,
          text: "When Jesus then lifted up his eyes, and saw a great company come unto him, he saith unto Philip, Whence shall we buy bread, that these may eat?",
        },
        {
          number: 6,
          text: "And this he said to prove him: for he himself knew what he would do.",
        },
        {
          number: 7,
          text: "Philip answered him, Two hundred pennyworth of bread is not sufficient for them, that every one of them may take a little.",
        },
        {
          number: 8,
          text: "One of his disciples, Andrew, Simon Peter\u2019s brother, saith unto him,",
        },
        {
          number: 9,
          text: "There is a lad here, which hath five barley loaves, and two small fishes: but what are they among so many?",
        },
        {
          number: 10,
          text: "And Jesus said, Make the men sit down. Now there was much grass in the place. So the men sat down, in number about five thousand.",
        },
        {
          number: 11,
          text: "And Jesus took the loaves; and when he had given thanks, he distributed to the disciples, and the disciples to them that were set down; and likewise of the fishes as much as they would.",
        },
        {
          number: 12,
          text: "When they were filled, he said unto his disciples, Gather up the fragments that remain, that nothing be lost.",
        },
        {
          number: 13,
          text: "Therefore they gathered them together, and filled twelve baskets with the fragments of the five barley loaves, which remained over and above unto them that had eaten.",
        },
        {
          number: 14,
          text: "Then those men, when they had seen the miracle that Jesus did, said, This is of a truth that prophet that should come into the world.",
        },
        {
          number: 15,
          text: "When Jesus therefore perceived that they would come and take him by force, to make him a king, he departed again into a mountain himself alone.",
        },
        {
          number: 16,
          text: "And when even was now come, his disciples went down unto the sea,",
        },
        {
          number: 17,
          text: "And entered into a ship, and went over the sea toward Capernaum. And it was now dark, and Jesus was not come to them.",
        },
        {
          number: 18,
          text: "And the sea arose by reason of a great wind that blew.",
        },
        {
          number: 19,
          text: "So when they had rowed about five and twenty or thirty furlongs, they see Jesus walking on the sea, and drawing nigh unto the ship: and they were afraid.",
        },
        {
          number: 20,
          text: "But he saith unto them, It is I; be not afraid.",
        },
        {
          number: 21,
          text: "Then they willingly received him into the ship: and immediately the ship was at the land whither they went.",
        },
        {
          number: 22,
          text: "The day following, when the people which stood on the other side of the sea saw that there was none other boat there, save that one whereinto his disciples were entered, and that Jesus went not with his disciples into the boat, but that his disciples were gone away alone;",
        },
        {
          number: 23,
          text: "(Howbeit there came other boats from Tiberias nigh unto the place where they did eat bread, after that the Lord had given thanks:)",
        },
        {
          number: 24,
          text: "When the people therefore saw that Jesus was not there, neither his disciples, they also took shipping, and came to Capernaum, seeking for Jesus.",
        },
        {
          number: 25,
          text: "And when they had found him on the other side of the sea, they said unto him, Rabbi, when camest thou hither?",
        },
        {
          number: 26,
          text: "Jesus answered them and said, Verily, verily, I say unto you, Ye seek me, not because ye saw the miracles, but because ye did eat of the loaves, and were filled.",
        },
        {
          number: 27,
          text: "Labour not for the meat which perisheth, but for that meat which endureth unto everlasting life, which the Son of man shall give unto you: for him hath God the Father sealed.",
        },
        {
          number: 28,
          text: "Then said they unto him, What shall we do, that we might work the works of God?",
        },
        {
          number: 29,
          text: "Jesus answered and said unto them, This is the work of God, that ye believe on him whom he hath sent.",
        },
        {
          number: 30,
          text: "They said therefore unto him, What sign shewest thou then, that we may see, and believe thee? what dost thou work?",
        },
        {
          number: 31,
          text: "Our fathers did eat manna in the desert; as it is written, He gave them bread from heaven to eat.",
        },
        {
          number: 32,
          text: "Then Jesus said unto them, Verily, verily, I say unto you, Moses gave you not that bread from heaven; but my Father giveth you the true bread from heaven.",
        },
        {
          number: 33,
          text: "For the bread of God is he which cometh down from heaven, and giveth life unto the world.",
        },
        {
          number: 34,
          text: "Then said they unto him, Lord, evermore give us this bread.",
        },
        {
          number: 35,
          text: "And Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst.",
        },
        {
          number: 36,
          text: "But I said unto you, That ye also have seen me, and believe not.",
        },
        {
          number: 37,
          text: "All that the Father giveth me shall come to me; and him that cometh to me I will in no wise cast out.",
        },
        {
          number: 38,
          text: "For I came down from heaven, not to do mine own will, but the will of him that sent me.",
        },
        {
          number: 39,
          text: "And this is the Father\u2019s will which hath sent me, that of all which he hath given me I should lose nothing, but should raise it up again at the last day.",
        },
        {
          number: 40,
          text: "And this is the will of him that sent me, that every one which seeth the Son, and believeth on him, may have everlasting life: and I will raise him up at the last day.",
        },
        {
          number: 41,
          text: "The Jews then murmured at him, because he said, I am the bread which came down from heaven.",
        },
        {
          number: 42,
          text: "And they said, Is not this Jesus, the son of Joseph, whose father and mother we know? how is it then that he saith, I came down from heaven?",
        },
        {
          number: 43,
          text: "Jesus therefore answered and said unto them, Murmur not among yourselves.",
        },
        {
          number: 44,
          text: "No man can come to me, except the Father which hath sent me draw him: and I will raise him up at the last day.",
        },
        {
          number: 45,
          text: "It is written in the prophets, And they shall be all taught of God. Every man therefore that hath heard, and hath learned of the Father, cometh unto me.",
        },
        {
          number: 46,
          text: "Not that any man hath seen the Father, save he which is of God, he hath seen the Father.",
        },
        {
          number: 47,
          text: "Verily, verily, I say unto you, He that believeth on me hath everlasting life.",
        },
        { number: 48, text: "I am that bread of life." },
        {
          number: 49,
          text: "Your fathers did eat manna in the wilderness, and are dead.",
        },
        {
          number: 50,
          text: "This is the bread which cometh down from heaven, that a man may eat thereof, and not die.",
        },
        {
          number: 51,
          text: "I am the living bread which came down from heaven: if any man eat of this bread, he shall live for ever: and the bread that I will give is my flesh, which I will give for the life of the world.",
        },
        {
          number: 52,
          text: "The Jews therefore strove among themselves, saying, How can this man give us his flesh to eat?",
        },
        {
          number: 53,
          text: "Then Jesus said unto them, Verily, verily, I say unto you, Except ye eat the flesh of the Son of man, and drink his blood, ye have no life in you.",
        },
        {
          number: 54,
          text: "Whoso eateth my flesh, and drinketh my blood, hath eternal life; and I will raise him up at the last day.",
        },
        {
          number: 55,
          text: "For my flesh is meat indeed, and my blood is drink indeed.",
        },
        {
          number: 56,
          text: "He that eateth my flesh, and drinketh my blood, dwelleth in me, and I in him.",
        },
        {
          number: 57,
          text: "As the living Father hath sent me, and I live by the Father: so he that eateth me, even he shall live by me.",
        },
        {
          number: 58,
          text: "This is that bread which came down from heaven: not as your fathers did eat manna, and are dead: he that eateth of this bread shall live for ever.",
        },
        {
          number: 59,
          text: "These things said he in the synagogue, as he taught in Capernaum.",
        },
        {
          number: 60,
          text: "Many therefore of his disciples, when they had heard this, said, This is an hard saying; who can hear it?",
        },
        {
          number: 61,
          text: "When Jesus knew in himself that his disciples murmured at it, he said unto them, Doth this offend you?",
        },
        {
          number: 62,
          text: "What and if ye shall see the Son of man ascend up where he was before?",
        },
        {
          number: 63,
          text: "It is the spirit that quickeneth; the flesh profiteth nothing: the words that I speak unto you, they are spirit, and they are life.",
        },
        {
          number: 64,
          text: "But there are some of you that believe not. For Jesus knew from the beginning who they were that believed not, and who should betray him.",
        },
        {
          number: 65,
          text: "And he said, Therefore said I unto you, that no man can come unto me, except it were given unto him of my Father.",
        },
        {
          number: 66,
          text: "From that time many of his disciples went back, and walked no more with him.",
        },
        {
          number: 67,
          text: "Then said Jesus unto the twelve, Will ye also go away?",
        },
        {
          number: 68,
          text: "Then Simon Peter answered him, Lord, to whom shall we go? thou hast the words of eternal life.",
        },
        {
          number: 69,
          text: "And we believe and are sure that thou art that Christ, the Son of the living God.",
        },
        {
          number: 70,
          text: "Jesus answered them, Have not I chosen you twelve, and one of you is a devil?",
        },
        {
          number: 71,
          text: "He spake of Judas Iscariot the son of Simon: for he it was that should betray him, being one of the twelve.",
        },
      ],
    },
    {
      number: 7,
      verses: [
        {
          number: 1,
          text: "After these things Jesus walked in Galilee: for he would not walk in Jewry, because the Jews sought to kill him.",
        },
        {
          number: 2,
          text: "Now the Jews\u2019 feast of tabernacles was at hand.",
        },
        {
          number: 3,
          text: "His brethren therefore said unto him, Depart hence, and go into Judaea, that thy disciples also may see the works that thou doest.",
        },
        {
          number: 4,
          text: "For there is no man that doeth any thing in secret, and he himself seeketh to be known openly. If thou do these things, shew thyself to the world.",
        },
        {
          number: 5,
          text: "For neither did his brethren believe in him.",
        },
        {
          number: 6,
          text: "Then Jesus said unto them, My time is not yet come: but your time is alway ready.",
        },
        {
          number: 7,
          text: "The world cannot hate you; but me it hateth, because I testify of it, that the works thereof are evil.",
        },
        {
          number: 8,
          text: "Go ye up unto this feast: I go not up yet unto this feast: for my time is not yet full come.",
        },
        {
          number: 9,
          text: "When he had said these words unto them, he abode still in Galilee.",
        },
        {
          number: 10,
          text: "But when his brethren were gone up, then went he also up unto the feast, not openly, but as it were in secret.",
        },
        {
          number: 11,
          text: "Then the Jews sought him at the feast, and said, Where is he?",
        },
        {
          number: 12,
          text: "And there was much murmuring among the people concerning him: for some said, He is a good man: others said, Nay; but he deceiveth the people.",
        },
        {
          number: 13,
          text: "Howbeit no man spake openly of him for fear of the Jews.",
        },
        {
          number: 14,
          text: "Now about the midst of the feast Jesus went up into the temple, and taught.",
        },
        {
          number: 15,
          text: "And the Jews marvelled, saying, How knoweth this man letters, having never learned?",
        },
        {
          number: 16,
          text: "Jesus answered them, and said, My doctrine is not mine, but his that sent me.",
        },
        {
          number: 17,
          text: "If any man will do his will, he shall know of the doctrine, whether it be of God, or whether I speak of myself.",
        },
        {
          number: 18,
          text: "He that speaketh of himself seeketh his own glory: but he that seeketh his glory that sent him, the same is true, and no unrighteousness is in him.",
        },
        {
          number: 19,
          text: "Did not Moses give you the law, and yet none of you keepeth the law? Why go ye about to kill me?",
        },
        {
          number: 20,
          text: "The people answered and said, Thou hast a devil: who goeth about to kill thee?",
        },
        {
          number: 21,
          text: "Jesus answered and said unto them, I have done one work, and ye all marvel.",
        },
        {
          number: 22,
          text: "Moses therefore gave unto you circumcision; (not because it is of Moses, but of the fathers;) and ye on the sabbath day circumcise a man.",
        },
        {
          number: 23,
          text: "If a man on the sabbath day receive circumcision, that the law of Moses should not be broken; are ye angry at me, because I have made a man every whit whole on the sabbath day?",
        },
        {
          number: 24,
          text: "Judge not according to the appearance, but judge righteous judgment.",
        },
        {
          number: 25,
          text: "Then said some of them of Jerusalem, Is not this he, whom they seek to kill?",
        },
        {
          number: 26,
          text: "But, lo, he speaketh boldly, and they say nothing unto him. Do the rulers know indeed that this is the very Christ?",
        },
        {
          number: 27,
          text: "Howbeit we know this man whence he is: but when Christ cometh, no man knoweth whence he is.",
        },
        {
          number: 28,
          text: "Then cried Jesus in the temple as he taught, saying, Ye both know me, and ye know whence I am: and I am not come of myself, but he that sent me is true, whom ye know not.",
        },
        {
          number: 29,
          text: "But I know him: for I am from him, and he hath sent me.",
        },
        {
          number: 30,
          text: "Then they sought to take him: but no man laid hands on him, because his hour was not yet come.",
        },
        {
          number: 31,
          text: "And many of the people believed on him, and said, When Christ cometh, will he do more miracles than these which this man hath done?",
        },
        {
          number: 32,
          text: "The Pharisees heard that the people murmured such things concerning him; and the Pharisees and the chief priests sent officers to take him.",
        },
        {
          number: 33,
          text: "Then said Jesus unto them, Yet a little while am I with you, and then I go unto him that sent me.",
        },
        {
          number: 34,
          text: "Ye shall seek me, and shall not find me: and where I am, thither ye cannot come.",
        },
        {
          number: 35,
          text: "Then said the Jews among themselves, Whither will he go, that we shall not find him? will he go unto the dispersed among the Gentiles, and teach the Gentiles?",
        },
        {
          number: 36,
          text: "What manner of saying is this that he said, Ye shall seek me, and shall not find me: and where I am, thither ye cannot come?",
        },
        {
          number: 37,
          text: "In the last day, that great day of the feast, Jesus stood and cried, saying, If any man thirst, let him come unto me, and drink.",
        },
        {
          number: 38,
          text: "He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water.",
        },
        {
          number: 39,
          text: "(But this spake he of the Spirit, which they that believe on him should receive: for the Holy Ghost was not yet given; because that Jesus was not yet glorified.)",
        },
        {
          number: 40,
          text: "Many of the people therefore, when they heard this saying, said, Of a truth this is the Prophet.",
        },
        {
          number: 41,
          text: "Others said, This is the Christ. But some said, Shall Christ come out of Galilee?",
        },
        {
          number: 42,
          text: "Hath not the scripture said, That Christ cometh of the seed of David, and out of the town of Bethlehem, where David was?",
        },
        {
          number: 43,
          text: "So there was a division among the people because of him.",
        },
        {
          number: 44,
          text: "And some of them would have taken him; but no man laid hands on him.",
        },
        {
          number: 45,
          text: "Then came the officers to the chief priests and Pharisees; and they said unto them, Why have ye not brought him?",
        },
        {
          number: 46,
          text: "The officers answered, Never man spake like this man.",
        },
        {
          number: 47,
          text: "Then answered them the Pharisees, Are ye also deceived?",
        },
        {
          number: 48,
          text: "Have any of the rulers or of the Pharisees believed on him?",
        },
        {
          number: 49,
          text: "But this people who knoweth not the law are cursed.",
        },
        {
          number: 50,
          text: "Nicodemus saith unto them, (he that came to Jesus by night, being one of them,)",
        },
        {
          number: 51,
          text: "Doth our law judge any man, before it hear him, and know what he doeth?",
        },
        {
          number: 52,
          text: "They answered and said unto him, Art thou also of Galilee? Search, and look: for out of Galilee ariseth no prophet.",
        },
        { number: 53, text: "And every man went unto his own house." },
      ],
    },
    {
      number: 8,
      verses: [
        { number: 1, text: "Jesus went unto the mount of Olives." },
        {
          number: 2,
          text: "And early in the morning he came again into the temple, and all the people came unto him; and he sat down, and taught them.",
        },
        {
          number: 3,
          text: "And the scribes and Pharisees brought unto him a woman taken in adultery; and when they had set her in the midst,",
        },
        {
          number: 4,
          text: "They say unto him, Master, this woman was taken in adultery, in the very act.",
        },
        {
          number: 5,
          text: "Now Moses in the law commanded us, that such should be stoned: but what sayest thou?",
        },
        {
          number: 6,
          text: "This they said, tempting him, that they might have to accuse him. But Jesus stooped down, and with his finger wrote on the ground, as though he heard them not.",
        },
        {
          number: 7,
          text: "So when they continued asking him, he lifted up himself, and said unto them, He that is without sin among you, let him first cast a stone at her.",
        },
        {
          number: 8,
          text: "And again he stooped down, and wrote on the ground.",
        },
        {
          number: 9,
          text: "And they which heard it, being convicted by their own conscience, went out one by one, beginning at the eldest, even unto the last: and Jesus was left alone, and the woman standing in the midst.",
        },
        {
          number: 10,
          text: "When Jesus had lifted up himself, and saw none but the woman, he said unto her, Woman, where are those thine accusers? hath no man condemned thee?",
        },
        {
          number: 11,
          text: "She said, No man, Lord. And Jesus said unto her, Neither do I condemn thee: go, and sin no more.",
        },
        {
          number: 12,
          text: "Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.",
        },
        {
          number: 13,
          text: "The Pharisees therefore said unto him, Thou bearest record of thyself; thy record is not true.",
        },
        {
          number: 14,
          text: "Jesus answered and said unto them, Though I bear record of myself, yet my record is true: for I know whence I came, and whither I go; but ye cannot tell whence I come, and whither I go.",
        },
        { number: 15, text: "Ye judge after the flesh; I judge no man." },
        {
          number: 16,
          text: "And yet if I judge, my judgment is true: for I am not alone, but I and the Father that sent me.",
        },
        {
          number: 17,
          text: "It is also written in your law, that the testimony of two men is true.",
        },
        {
          number: 18,
          text: "I am one that bear witness of myself, and the Father that sent me beareth witness of me.",
        },
        {
          number: 19,
          text: "Then said they unto him, Where is thy Father? Jesus answered, Ye neither know me, nor my Father: if ye had known me, ye should have known my Father also.",
        },
        {
          number: 20,
          text: "These words spake Jesus in the treasury, as he taught in the temple: and no man laid hands on him; for his hour was not yet come.",
        },
        {
          number: 21,
          text: "Then said Jesus again unto them, I go my way, and ye shall seek me, and shall die in your sins: whither I go, ye cannot come.",
        },
        {
          number: 22,
          text: "Then said the Jews, Will he kill himself? because he saith, Whither I go, ye cannot come.",
        },
        {
          number: 23,
          text: "And he said unto them, Ye are from beneath; I am from above: ye are of this world; I am not of this world.",
        },
        {
          number: 24,
          text: "I said therefore unto you, that ye shall die in your sins: for if ye believe not that I am he, ye shall die in your sins.",
        },
        {
          number: 25,
          text: "Then said they unto him, Who art thou? And Jesus saith unto them, Even the same that I said unto you from the beginning.",
        },
        {
          number: 26,
          text: "I have many things to say and to judge of you: but he that sent me is true; and I speak to the world those things which I have heard of him.",
        },
        {
          number: 27,
          text: "They understood not that he spake to them of the Father.",
        },
        {
          number: 28,
          text: "Then said Jesus unto them, When ye have lifted up the Son of man, then shall ye know that I am he, and that I do nothing of myself; but as my Father hath taught me, I speak these things.",
        },
        {
          number: 29,
          text: "And he that sent me is with me: the Father hath not left me alone; for I do always those things that please him.",
        },
        {
          number: 30,
          text: "As he spake these words, many believed on him.",
        },
        {
          number: 31,
          text: "Then said Jesus to those Jews which believed on him, If ye continue in my word, then are ye my disciples indeed;",
        },
        {
          number: 32,
          text: "And ye shall know the truth, and the truth shall make you free.",
        },
        {
          number: 33,
          text: "They answered him, We be Abraham\u2019s seed, and were never in bondage to any man: how sayest thou, Ye shall be made free?",
        },
        {
          number: 34,
          text: "Jesus answered them, Verily, verily, I say unto you, Whosoever committeth sin is the servant of sin.",
        },
        {
          number: 35,
          text: "And the servant abideth not in the house for ever: but the Son abideth ever.",
        },
        {
          number: 36,
          text: "If the Son therefore shall make you free, ye shall be free indeed.",
        },
        {
          number: 37,
          text: "I know that ye are Abraham\u2019s seed; but ye seek to kill me, because my word hath no place in you.",
        },
        {
          number: 38,
          text: "I speak that which I have seen with my Father: and ye do that which ye have seen with your father.",
        },
        {
          number: 39,
          text: "They answered and said unto him, Abraham is our father. Jesus saith unto them, If ye were Abraham\u2019s children, ye would do the works of Abraham.",
        },
        {
          number: 40,
          text: "But now ye seek to kill me, a man that hath told you the truth, which I have heard of God: this did not Abraham.",
        },
        {
          number: 41,
          text: "Ye do the deeds of your father. Then said they to him, We be not born of fornication; we have one Father, even God.",
        },
        {
          number: 42,
          text: "Jesus said unto them, If God were your Father, ye would love me: for I proceeded forth and came from God; neither came I of myself, but he sent me.",
        },
        {
          number: 43,
          text: "Why do ye not understand my speech? even because ye cannot hear my word.",
        },
        {
          number: 44,
          text: "Ye are of your father the devil, and the lusts of your father ye will do. He was a murderer from the beginning, and abode not in the truth, because there is no truth in him. When he speaketh a lie, he speaketh of his own: for he is a liar, and the father of it.",
        },
        {
          number: 45,
          text: "And because I tell you the truth, ye believe me not.",
        },
        {
          number: 46,
          text: "Which of you convinceth me of sin? And if I say the truth, why do ye not believe me?",
        },
        {
          number: 47,
          text: "He that is of God heareth God\u2019s words: ye therefore hear them not, because ye are not of God.",
        },
        {
          number: 48,
          text: "Then answered the Jews, and said unto him, Say we not well that thou art a Samaritan, and hast a devil?",
        },
        {
          number: 49,
          text: "Jesus answered, I have not a devil; but I honour my Father, and ye do dishonour me.",
        },
        {
          number: 50,
          text: "And I seek not mine own glory: there is one that seeketh and judgeth.",
        },
        {
          number: 51,
          text: "Verily, verily, I say unto you, If a man keep my saying, he shall never see death.",
        },
        {
          number: 52,
          text: "Then said the Jews unto him, Now we know that thou hast a devil. Abraham is dead, and the prophets; and thou sayest, If a man keep my saying, he shall never taste of death.",
        },
        {
          number: 53,
          text: "Art thou greater than our father Abraham, which is dead? and the prophets are dead: whom makest thou thyself?",
        },
        {
          number: 54,
          text: "Jesus answered, If I honour myself, my honour is nothing: it is my Father that honoureth me; of whom ye say, that he is your God:",
        },
        {
          number: 55,
          text: "Yet ye have not known him; but I know him: and if I should say, I know him not, I shall be a liar like unto you: but I know him, and keep his saying.",
        },
        {
          number: 56,
          text: "Your father Abraham rejoiced to see my day: and he saw it, and was glad.",
        },
        {
          number: 57,
          text: "Then said the Jews unto him, Thou art not yet fifty years old, and hast thou seen Abraham?",
        },
        {
          number: 58,
          text: "Jesus said unto them, Verily, verily, I say unto you, Before Abraham was, I am.",
        },
        {
          number: 59,
          text: "Then took they up stones to cast at him: but Jesus hid himself, and went out of the temple, going through the midst of them, and so passed by.",
        },
      ],
    },
    {
      number: 9,
      verses: [
        {
          number: 1,
          text: "And as Jesus passed by, he saw a man which was blind from his birth.",
        },
        {
          number: 2,
          text: "And his disciples asked him, saying, Master, who did sin, this man, or his parents, that he was born blind?",
        },
        {
          number: 3,
          text: "Jesus answered, Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him.",
        },
        {
          number: 4,
          text: "I must work the works of him that sent me, while it is day: the night cometh, when no man can work.",
        },
        {
          number: 5,
          text: "As long as I am in the world, I am the light of the world.",
        },
        {
          number: 6,
          text: "When he had thus spoken, he spat on the ground, and made clay of the spittle, and he anointed the eyes of the blind man with the clay,",
        },
        {
          number: 7,
          text: "And said unto him, Go, wash in the pool of Siloam, (which is by interpretation, Sent.) He went his way therefore, and washed, and came seeing.",
        },
        {
          number: 8,
          text: "The neighbours therefore, and they which before had seen him that he was blind, said, Is not this he that sat and begged?",
        },
        {
          number: 9,
          text: "Some said, This is he: others said, He is like him: but he said, I am he.",
        },
        {
          number: 10,
          text: "Therefore said they unto him, How were thine eyes opened?",
        },
        {
          number: 11,
          text: "He answered and said, A man that is called Jesus made clay, and anointed mine eyes, and said unto me, Go to the pool of Siloam, and wash: and I went and washed, and I received sight.",
        },
        {
          number: 12,
          text: "Then said they unto him, Where is he? He said, I know not.",
        },
        {
          number: 13,
          text: "They brought to the Pharisees him that aforetime was blind.",
        },
        {
          number: 14,
          text: "And it was the sabbath day when Jesus made the clay, and opened his eyes.",
        },
        {
          number: 15,
          text: "Then again the Pharisees also asked him how he had received his sight. He said unto them, He put clay upon mine eyes, and I washed, and do see.",
        },
        {
          number: 16,
          text: "Therefore said some of the Pharisees, This man is not of God, because he keepeth not the sabbath day. Others said, How can a man that is a sinner do such miracles? And there was a division among them.",
        },
        {
          number: 17,
          text: "They say unto the blind man again, What sayest thou of him, that he hath opened thine eyes? He said, He is a prophet.",
        },
        {
          number: 18,
          text: "But the Jews did not believe concerning him, that he had been blind, and received his sight, until they called the parents of him that had received his sight.",
        },
        {
          number: 19,
          text: "And they asked them, saying, Is this your son, who ye say was born blind? how then doth he now see?",
        },
        {
          number: 20,
          text: "His parents answered them and said, We know that this is our son, and that he was born blind:",
        },
        {
          number: 21,
          text: "But by what means he now seeth, we know not; or who hath opened his eyes, we know not: he is of age; ask him: he shall speak for himself.",
        },
        {
          number: 22,
          text: "These words spake his parents, because they feared the Jews: for the Jews had agreed already, that if any man did confess that he was Christ, he should be put out of the synagogue.",
        },
        {
          number: 23,
          text: "Therefore said his parents, He is of age; ask him.",
        },
        {
          number: 24,
          text: "Then again called they the man that was blind, and said unto him, Give God the praise: we know that this man is a sinner.",
        },
        {
          number: 25,
          text: "He answered and said, Whether he be a sinner or no, I know not: one thing I know, that, whereas I was blind, now I see.",
        },
        {
          number: 26,
          text: "Then said they to him again, What did he to thee? how opened he thine eyes?",
        },
        {
          number: 27,
          text: "He answered them, I have told you already, and ye did not hear: wherefore would ye hear it again? will ye also be his disciples?",
        },
        {
          number: 28,
          text: "Then they reviled him, and said, Thou art his disciple; but we are Moses\u2019 disciples.",
        },
        {
          number: 29,
          text: "We know that God spake unto Moses: as for this fellow, we know not from whence he is.",
        },
        {
          number: 30,
          text: "The man answered and said unto them, Why herein is a marvellous thing, that ye know not from whence he is, and yet he hath opened mine eyes.",
        },
        {
          number: 31,
          text: "Now we know that God heareth not sinners: but if any man be a worshipper of God, and doeth his will, him he heareth.",
        },
        {
          number: 32,
          text: "Since the world began was it not heard that any man opened the eyes of one that was born blind.",
        },
        {
          number: 33,
          text: "If this man were not of God, he could do nothing.",
        },
        {
          number: 34,
          text: "They answered and said unto him, Thou wast altogether born in sins, and dost thou teach us? And they cast him out.",
        },
        {
          number: 35,
          text: "Jesus heard that they had cast him out; and when he had found him, he said unto him, Dost thou believe on the Son of God?",
        },
        {
          number: 36,
          text: "He answered and said, Who is he, Lord, that I might believe on him?",
        },
        {
          number: 37,
          text: "And Jesus said unto him, Thou hast both seen him, and it is he that talketh with thee.",
        },
        {
          number: 38,
          text: "And he said, Lord, I believe. And he worshipped him.",
        },
        {
          number: 39,
          text: "And Jesus said, For judgment I am come into this world, that they which see not might see; and that they which see might be made blind.",
        },
        {
          number: 40,
          text: "And some of the Pharisees which were with him heard these words, and said unto him, Are we blind also?",
        },
        {
          number: 41,
          text: "Jesus said unto them, If ye were blind, ye should have no sin: but now ye say, We see; therefore your sin remaineth.",
        },
      ],
    },
    {
      number: 10,
      verses: [
        {
          number: 1,
          text: "Verily, verily, I say unto you, He that entereth not by the door into the sheepfold, but climbeth up some other way, the same is a thief and a robber.",
        },
        {
          number: 2,
          text: "But he that entereth in by the door is the shepherd of the sheep.",
        },
        {
          number: 3,
          text: "To him the porter openeth; and the sheep hear his voice: and he calleth his own sheep by name, and leadeth them out.",
        },
        {
          number: 4,
          text: "And when he putteth forth his own sheep, he goeth before them, and the sheep follow him: for they know his voice.",
        },
        {
          number: 5,
          text: "And a stranger will they not follow, but will flee from him: for they know not the voice of strangers.",
        },
        {
          number: 6,
          text: "This parable spake Jesus unto them: but they understood not what things they were which he spake unto them.",
        },
        {
          number: 7,
          text: "Then said Jesus unto them again, Verily, verily, I say unto you, I am the door of the sheep.",
        },
        {
          number: 8,
          text: "All that ever came before me are thieves and robbers: but the sheep did not hear them.",
        },
        {
          number: 9,
          text: "I am the door: by me if any man enter in, he shall be saved, and shall go in and out, and find pasture.",
        },
        {
          number: 10,
          text: "The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly.",
        },
        {
          number: 11,
          text: "I am the good shepherd: the good shepherd giveth his life for the sheep.",
        },
        {
          number: 12,
          text: "But he that is an hireling, and not the shepherd, whose own the sheep are not, seeth the wolf coming, and leaveth the sheep, and fleeth: and the wolf catcheth them, and scattereth the sheep.",
        },
        {
          number: 13,
          text: "The hireling fleeth, because he is an hireling, and careth not for the sheep.",
        },
        {
          number: 14,
          text: "I am the good shepherd, and know my sheep, and am known of mine.",
        },
        {
          number: 15,
          text: "As the Father knoweth me, even so know I the Father: and I lay down my life for the sheep.",
        },
        {
          number: 16,
          text: "And other sheep I have, which are not of this fold: them also I must bring, and they shall hear my voice; and there shall be one fold, and one shepherd.",
        },
        {
          number: 17,
          text: "Therefore doth my Father love me, because I lay down my life, that I might take it again.",
        },
        {
          number: 18,
          text: "No man taketh it from me, but I lay it down of myself. I have power to lay it down, and I have power to take it again. This commandment have I received of my Father.",
        },
        {
          number: 19,
          text: "There was a division therefore again among the Jews for these sayings.",
        },
        {
          number: 20,
          text: "And many of them said, He hath a devil, and is mad; why hear ye him?",
        },
        {
          number: 21,
          text: "Others said, These are not the words of him that hath a devil. Can a devil open the eyes of the blind?",
        },
        {
          number: 22,
          text: "And it was at Jerusalem the feast of the dedication, and it was winter.",
        },
        {
          number: 23,
          text: "And Jesus walked in the temple in Solomon\u2019s porch.",
        },
        {
          number: 24,
          text: "Then came the Jews round about him, and said unto him, How long dost thou make us to doubt? If thou be the Christ, tell us plainly.",
        },
        {
          number: 25,
          text: "Jesus answered them, I told you, and ye believed not: the works that I do in my Father\u2019s name, they bear witness of me.",
        },
        {
          number: 26,
          text: "But ye believe not, because ye are not of my sheep, as I said unto you.",
        },
        {
          number: 27,
          text: "My sheep hear my voice, and I know them, and they follow me:",
        },
        {
          number: 28,
          text: "And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand.",
        },
        {
          number: 29,
          text: "My Father, which gave them me, is greater than all; and no man is able to pluck them out of my Father\u2019s hand.",
        },
        { number: 30, text: "I and my Father are one." },
        {
          number: 31,
          text: "Then the Jews took up stones again to stone him.",
        },
        {
          number: 32,
          text: "Jesus answered them, Many good works have I shewed you from my Father; for which of those works do ye stone me?",
        },
        {
          number: 33,
          text: "The Jews answered him, saying, For a good work we stone thee not; but for blasphemy; and because that thou, being a man, makest thyself God.",
        },
        {
          number: 34,
          text: "Jesus answered them, Is it not written in your law, I said, Ye are gods?",
        },
        {
          number: 35,
          text: "If he called them gods, unto whom the word of God came, and the scripture cannot be broken;",
        },
        {
          number: 36,
          text: "Say ye of him, whom the Father hath sanctified, and sent into the world, Thou blasphemest; because I said, I am the Son of God?",
        },
        {
          number: 37,
          text: "If I do not the works of my Father, believe me not.",
        },
        {
          number: 38,
          text: "But if I do, though ye believe not me, believe the works: that ye may know, and believe, that the Father is in me, and I in him.",
        },
        {
          number: 39,
          text: "Therefore they sought again to take him: but he escaped out of their hand,",
        },
        {
          number: 40,
          text: "And went away again beyond Jordan into the place where John at first baptized; and there he abode.",
        },
        {
          number: 41,
          text: "And many resorted unto him, and said, John did no miracle: but all things that John spake of this man were true.",
        },
        { number: 42, text: "And many believed on him there." },
      ],
    },
    {
      number: 11,
      verses: [
        {
          number: 1,
          text: "Now a certain man was sick, named Lazarus, of Bethany, the town of Mary and her sister Martha.",
        },
        {
          number: 2,
          text: "(It was that Mary which anointed the Lord with ointment, and wiped his feet with her hair, whose brother Lazarus was sick.)",
        },
        {
          number: 3,
          text: "Therefore his sisters sent unto him, saying, Lord, behold, he whom thou lovest is sick.",
        },
        {
          number: 4,
          text: "When Jesus heard that, he said, This sickness is not unto death, but for the glory of God, that the Son of God might be glorified thereby.",
        },
        {
          number: 5,
          text: "Now Jesus loved Martha, and her sister, and Lazarus.",
        },
        {
          number: 6,
          text: "When he had heard therefore that he was sick, he abode two days still in the same place where he was.",
        },
        {
          number: 7,
          text: "Then after that saith he to his disciples, Let us go into Judaea again.",
        },
        {
          number: 8,
          text: "His disciples say unto him, Master, the Jews of late sought to stone thee; and goest thou thither again?",
        },
        {
          number: 9,
          text: "Jesus answered, Are there not twelve hours in the day? If any man walk in the day, he stumbleth not, because he seeth the light of this world.",
        },
        {
          number: 10,
          text: "But if a man walk in the night, he stumbleth, because there is no light in him.",
        },
        {
          number: 11,
          text: "These things said he: and after that he saith unto them, Our friend Lazarus sleepeth; but I go, that I may awake him out of sleep.",
        },
        {
          number: 12,
          text: "Then said his disciples, Lord, if he sleep, he shall do well.",
        },
        {
          number: 13,
          text: "Howbeit Jesus spake of his death: but they thought that he had spoken of taking of rest in sleep.",
        },
        {
          number: 14,
          text: "Then said Jesus unto them plainly, Lazarus is dead.",
        },
        {
          number: 15,
          text: "And I am glad for your sakes that I was not there, to the intent ye may believe; nevertheless let us go unto him.",
        },
        {
          number: 16,
          text: "Then said Thomas, which is called Didymus, unto his fellowdisciples, Let us also go, that we may die with him.",
        },
        {
          number: 17,
          text: "Then when Jesus came, he found that he had lain in the grave four days already.",
        },
        {
          number: 18,
          text: "Now Bethany was nigh unto Jerusalem, about fifteen furlongs off:",
        },
        {
          number: 19,
          text: "And many of the Jews came to Martha and Mary, to comfort them concerning their brother.",
        },
        {
          number: 20,
          text: "Then Martha, as soon as she heard that Jesus was coming, went and met him: but Mary sat still in the house.",
        },
        {
          number: 21,
          text: "Then said Martha unto Jesus, Lord, if thou hadst been here, my brother had not died.",
        },
        {
          number: 22,
          text: "But I know, that even now, whatsoever thou wilt ask of God, God will give it thee.",
        },
        {
          number: 23,
          text: "Jesus saith unto her, Thy brother shall rise again.",
        },
        {
          number: 24,
          text: "Martha saith unto him, I know that he shall rise again in the resurrection at the last day.",
        },
        {
          number: 25,
          text: "Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live:",
        },
        {
          number: 26,
          text: "And whosoever liveth and believeth in me shall never die. Believest thou this?",
        },
        {
          number: 27,
          text: "She saith unto him, Yea, Lord: I believe that thou art the Christ, the Son of God, which should come into the world.",
        },
        {
          number: 28,
          text: "And when she had so said, she went her way, and called Mary her sister secretly, saying, The Master is come, and calleth for thee.",
        },
        {
          number: 29,
          text: "As soon as she heard that, she arose quickly, and came unto him.",
        },
        {
          number: 30,
          text: "Now Jesus was not yet come into the town, but was in that place where Martha met him.",
        },
        {
          number: 31,
          text: "The Jews then which were with her in the house, and comforted her, when they saw Mary, that she rose up hastily and went out, followed her, saying, She goeth unto the grave to weep there.",
        },
        {
          number: 32,
          text: "Then when Mary was come where Jesus was, and saw him, she fell down at his feet, saying unto him, Lord, if thou hadst been here, my brother had not died.",
        },
        {
          number: 33,
          text: "When Jesus therefore saw her weeping, and the Jews also weeping which came with her, he groaned in the spirit, and was troubled,",
        },
        {
          number: 34,
          text: "And said, Where have ye laid him? They said unto him, Lord, come and see.",
        },
        { number: 35, text: "Jesus wept." },
        {
          number: 36,
          text: "Then said the Jews, Behold how he loved him!",
        },
        {
          number: 37,
          text: "And some of them said, Could not this man, which opened the eyes of the blind, have caused that even this man should not have died?",
        },
        {
          number: 38,
          text: "Jesus therefore again groaning in himself cometh to the grave. It was a cave, and a stone lay upon it.",
        },
        {
          number: 39,
          text: "Jesus said, Take ye away the stone. Martha, the sister of him that was dead, saith unto him, Lord, by this time he stinketh: for he hath been dead four days.",
        },
        {
          number: 40,
          text: "Jesus saith unto her, Said I not unto thee, that, if thou wouldest believe, thou shouldest see the glory of God?",
        },
        {
          number: 41,
          text: "Then they took away the stone from the place where the dead was laid. And Jesus lifted up his eyes, and said, Father, I thank thee that thou hast heard me.",
        },
        {
          number: 42,
          text: "And I knew that thou hearest me always: but because of the people which stand by I said it, that they may believe that thou hast sent me.",
        },
        {
          number: 43,
          text: "And when he thus had spoken, he cried with a loud voice, Lazarus, come forth.",
        },
        {
          number: 44,
          text: "And he that was dead came forth, bound hand and foot with graveclothes: and his face was bound about with a napkin. Jesus saith unto them, Loose him, and let him go.",
        },
        {
          number: 45,
          text: "Then many of the Jews which came to Mary, and had seen the things which Jesus did, believed on him.",
        },
        {
          number: 46,
          text: "But some of them went their ways to the Pharisees, and told them what things Jesus had done.",
        },
        {
          number: 47,
          text: "Then gathered the chief priests and the Pharisees a council, and said, What do we? for this man doeth many miracles.",
        },
        {
          number: 48,
          text: "If we let him thus alone, all men will believe on him: and the Romans shall come and take away both our place and nation.",
        },
        {
          number: 49,
          text: "And one of them, named Caiaphas, being the high priest that same year, said unto them, Ye know nothing at all,",
        },
        {
          number: 50,
          text: "Nor consider that it is expedient for us, that one man should die for the people, and that the whole nation perish not.",
        },
        {
          number: 51,
          text: "And this spake he not of himself: but being high priest that year, he prophesied that Jesus should die for that nation;",
        },
        {
          number: 52,
          text: "And not for that nation only, but that also he should gather together in one the children of God that were scattered abroad.",
        },
        {
          number: 53,
          text: "Then from that day forth they took counsel together for to put him to death.",
        },
        {
          number: 54,
          text: "Jesus therefore walked no more openly among the Jews; but went thence unto a country near to the wilderness, into a city called Ephraim, and there continued with his disciples.",
        },
        {
          number: 55,
          text: "And the Jews\u2019 passover was nigh at hand: and many went out of the country up to Jerusalem before the passover, to purify themselves.",
        },
        {
          number: 56,
          text: "Then sought they for Jesus, and spake among themselves, as they stood in the temple, What think ye, that he will not come to the feast?",
        },
        {
          number: 57,
          text: "Now both the chief priests and the Pharisees had given a commandment, that, if any man knew where he were, he should shew it, that they might take him.",
        },
      ],
    },
    {
      number: 12,
      verses: [
        {
          number: 1,
          text: "Then Jesus six days before the passover came to Bethany, where Lazarus was, which had been dead, whom he raised from the dead.",
        },
        {
          number: 2,
          text: "There they made him a supper; and Martha served: but Lazarus was one of them that sat at the table with him.",
        },
        {
          number: 3,
          text: "Then took Mary a pound of ointment of spikenard, very costly, and anointed the feet of Jesus, and wiped his feet with her hair: and the house was filled with the odour of the ointment.",
        },
        {
          number: 4,
          text: "Then saith one of his disciples, Judas Iscariot, Simon\u2019s son, which should betray him,",
        },
        {
          number: 5,
          text: "Why was not this ointment sold for three hundred pence, and given to the poor?",
        },
        {
          number: 6,
          text: "This he said, not that he cared for the poor; but because he was a thief, and had the bag, and bare what was put therein.",
        },
        {
          number: 7,
          text: "Then said Jesus, Let her alone: against the day of my burying hath she kept this.",
        },
        {
          number: 8,
          text: "For the poor always ye have with you; but me ye have not always.",
        },
        {
          number: 9,
          text: "Much people of the Jews therefore knew that he was there: and they came not for Jesus\u2019 sake only, but that they might see Lazarus also, whom he had raised from the dead.",
        },
        {
          number: 10,
          text: "But the chief priests consulted that they might put Lazarus also to death;",
        },
        {
          number: 11,
          text: "Because that by reason of him many of the Jews went away, and believed on Jesus.",
        },
        {
          number: 12,
          text: "On the next day much people that were come to the feast, when they heard that Jesus was coming to Jerusalem,",
        },
        {
          number: 13,
          text: "Took branches of palm trees, and went forth to meet him, and cried, Hosanna: Blessed is the King of Israel that cometh in the name of the Lord.",
        },
        {
          number: 14,
          text: "And Jesus, when he had found a young ass, sat thereon; as it is written,",
        },
        {
          number: 15,
          text: "Fear not, daughter of Sion: behold, thy King cometh, sitting on an ass\u2019s colt.",
        },
        {
          number: 16,
          text: "These things understood not his disciples at the first: but when Jesus was glorified, then remembered they that these things were written of him, and that they had done these things unto him.",
        },
        {
          number: 17,
          text: "The people therefore that was with him when he called Lazarus out of his grave, and raised him from the dead, bare record.",
        },
        {
          number: 18,
          text: "For this cause the people also met him, for that they heard that he had done this miracle.",
        },
        {
          number: 19,
          text: "The Pharisees therefore said among themselves, Perceive ye how ye prevail nothing? behold, the world is gone after him.",
        },
        {
          number: 20,
          text: "And there were certain Greeks among them that came up to worship at the feast:",
        },
        {
          number: 21,
          text: "The same came therefore to Philip, which was of Bethsaida of Galilee, and desired him, saying, Sir, we would see Jesus.",
        },
        {
          number: 22,
          text: "Philip cometh and telleth Andrew: and again Andrew and Philip tell Jesus.",
        },
        {
          number: 23,
          text: "And Jesus answered them, saying, The hour is come, that the Son of man should be glorified.",
        },
        {
          number: 24,
          text: "Verily, verily, I say unto you, Except a corn of wheat fall into the ground and die, it abideth alone: but if it die, it bringeth forth much fruit.",
        },
        {
          number: 25,
          text: "He that loveth his life shall lose it; and he that hateth his life in this world shall keep it unto life eternal.",
        },
        {
          number: 26,
          text: "If any man serve me, let him follow me; and where I am, there shall also my servant be: if any man serve me, him will my Father honour.",
        },
        {
          number: 27,
          text: "Now is my soul troubled; and what shall I say? Father, save me from this hour: but for this cause came I unto this hour.",
        },
        {
          number: 28,
          text: "Father, glorify thy name. Then came there a voice from heaven, saying, I have both glorified it, and will glorify it again.",
        },
        {
          number: 29,
          text: "The people therefore, that stood by, and heard it, said that it thundered: others said, An angel spake to him.",
        },
        {
          number: 30,
          text: "Jesus answered and said, This voice came not because of me, but for your sakes.",
        },
        {
          number: 31,
          text: "Now is the judgment of this world: now shall the prince of this world be cast out.",
        },
        {
          number: 32,
          text: "And I, if I be lifted up from the earth, will draw all men unto me.",
        },
        {
          number: 33,
          text: "This he said, signifying what death he should die.",
        },
        {
          number: 34,
          text: "The people answered him, We have heard out of the law that Christ abideth for ever: and how sayest thou, The Son of man must be lifted up? who is this Son of man?",
        },
        {
          number: 35,
          text: "Then Jesus said unto them, Yet a little while is the light with you. Walk while ye have the light, lest darkness come upon you: for he that walketh in darkness knoweth not whither he goeth.",
        },
        {
          number: 36,
          text: "While ye have light, believe in the light, that ye may be the children of light. These things spake Jesus, and departed, and did hide himself from them.",
        },
        {
          number: 37,
          text: "But though he had done so many miracles before them, yet they believed not on him:",
        },
        {
          number: 38,
          text: "That the saying of Esaias the prophet might be fulfilled, which he spake, Lord, who hath believed our report? and to whom hath the arm of the Lord been revealed?",
        },
        {
          number: 39,
          text: "Therefore they could not believe, because that Esaias said again,",
        },
        {
          number: 40,
          text: "He hath blinded their eyes, and hardened their heart; that they should not see with their eyes, nor understand with their heart, and be converted, and I should heal them.",
        },
        {
          number: 41,
          text: "These things said Esaias, when he saw his glory, and spake of him.",
        },
        {
          number: 42,
          text: "Nevertheless among the chief rulers also many believed on him; but because of the Pharisees they did not confess him, lest they should be put out of the synagogue:",
        },
        {
          number: 43,
          text: "For they loved the praise of men more than the praise of God.",
        },
        {
          number: 44,
          text: "Jesus cried and said, He that believeth on me, believeth not on me, but on him that sent me.",
        },
        {
          number: 45,
          text: "And he that seeth me seeth him that sent me.",
        },
        {
          number: 46,
          text: "I am come a light into the world, that whosoever believeth on me should not abide in darkness.",
        },
        {
          number: 47,
          text: "And if any man hear my words, and believe not, I judge him not: for I came not to judge the world, but to save the world.",
        },
        {
          number: 48,
          text: "He that rejecteth me, and receiveth not my words, hath one that judgeth him: the word that I have spoken, the same shall judge him in the last day.",
        },
        {
          number: 49,
          text: "For I have not spoken of myself; but the Father which sent me, he gave me a commandment, what I should say, and what I should speak.",
        },
        {
          number: 50,
          text: "And I know that his commandment is life everlasting: whatsoever I speak therefore, even as the Father said unto me, so I speak.",
        },
      ],
    },
    {
      number: 13,
      verses: [
        {
          number: 1,
          text: "Now before the feast of the passover, when Jesus knew that his hour was come that he should depart out of this world unto the Father, having loved his own which were in the world, he loved them unto the end.",
        },
        {
          number: 2,
          text: "And supper being ended, the devil having now put into the heart of Judas Iscariot, Simon\u2019s son, to betray him;",
        },
        {
          number: 3,
          text: "Jesus knowing that the Father had given all things into his hands, and that he was come from God, and went to God;",
        },
        {
          number: 4,
          text: "He riseth from supper, and laid aside his garments; and took a towel, and girded himself.",
        },
        {
          number: 5,
          text: "After that he poureth water into a bason, and began to wash the disciples\u2019 feet, and to wipe them with the towel wherewith he was girded.",
        },
        {
          number: 6,
          text: "Then cometh he to Simon Peter: and Peter saith unto him, Lord, dost thou wash my feet?",
        },
        {
          number: 7,
          text: "Jesus answered and said unto him, What I do thou knowest not now; but thou shalt know hereafter.",
        },
        {
          number: 8,
          text: "Peter saith unto him, Thou shalt never wash my feet. Jesus answered him, If I wash thee not, thou hast no part with me.",
        },
        {
          number: 9,
          text: "Simon Peter saith unto him, Lord, not my feet only, but also my hands and my head.",
        },
        {
          number: 10,
          text: "Jesus saith to him, He that is washed needeth not save to wash his feet, but is clean every whit: and ye are clean, but not all.",
        },
        {
          number: 11,
          text: "For he knew who should betray him; therefore said he, Ye are not all clean.",
        },
        {
          number: 12,
          text: "So after he had washed their feet, and had taken his garments, and was set down again, he said unto them, Know ye what I have done to you?",
        },
        {
          number: 13,
          text: "Ye call me Master and Lord: and ye say well; for so I am.",
        },
        {
          number: 14,
          text: "If I then, your Lord and Master, have washed your feet; ye also ought to wash one another\u2019s feet.",
        },
        {
          number: 15,
          text: "For I have given you an example, that ye should do as I have done to you.",
        },
        {
          number: 16,
          text: "Verily, verily, I say unto you, The servant is not greater than his lord; neither he that is sent greater than he that sent him.",
        },
        {
          number: 17,
          text: "If ye know these things, happy are ye if ye do them.",
        },
        {
          number: 18,
          text: "I speak not of you all: I know whom I have chosen: but that the scripture may be fulfilled, He that eateth bread with me hath lifted up his heel against me.",
        },
        {
          number: 19,
          text: "Now I tell you before it come, that, when it is come to pass, ye may believe that I am he.",
        },
        {
          number: 20,
          text: "Verily, verily, I say unto you, He that receiveth whomsoever I send receiveth me; and he that receiveth me receiveth him that sent me.",
        },
        {
          number: 21,
          text: "When Jesus had thus said, he was troubled in spirit, and testified, and said, Verily, verily, I say unto you, that one of you shall betray me.",
        },
        {
          number: 22,
          text: "Then the disciples looked one on another, doubting of whom he spake.",
        },
        {
          number: 23,
          text: "Now there was leaning on Jesus\u2019 bosom one of his disciples, whom Jesus loved.",
        },
        {
          number: 24,
          text: "Simon Peter therefore beckoned to him, that he should ask who it should be of whom he spake.",
        },
        {
          number: 25,
          text: "He then lying on Jesus\u2019 breast saith unto him, Lord, who is it?",
        },
        {
          number: 26,
          text: "Jesus answered, He it is, to whom I shall give a sop, when I have dipped it. And when he had dipped the sop, he gave it to Judas Iscariot, the son of Simon.",
        },
        {
          number: 27,
          text: "And after the sop Satan entered into him. Then said Jesus unto him, That thou doest, do quickly.",
        },
        {
          number: 28,
          text: "Now no man at the table knew for what intent he spake this unto him.",
        },
        {
          number: 29,
          text: "For some of them thought, because Judas had the bag, that Jesus had said unto him, Buy those things that we have need of against the feast; or, that he should give something to the poor.",
        },
        {
          number: 30,
          text: "He then having received the sop went immediately out: and it was night.",
        },
        {
          number: 31,
          text: "Therefore, when he was gone out, Jesus said, Now is the Son of man glorified, and God is glorified in him.",
        },
        {
          number: 32,
          text: "If God be glorified in him, God shall also glorify him in himself, and shall straightway glorify him.",
        },
        {
          number: 33,
          text: "Little children, yet a little while I am with you. Ye shall seek me: and as I said unto the Jews, Whither I go, ye cannot come; so now I say to you.",
        },
        {
          number: 34,
          text: "A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another.",
        },
        {
          number: 35,
          text: "By this shall all men know that ye are my disciples, if ye have love one to another.",
        },
        {
          number: 36,
          text: "Simon Peter said unto him, Lord, whither goest thou? Jesus answered him, Whither I go, thou canst not follow me now; but thou shalt follow me afterwards.",
        },
        {
          number: 37,
          text: "Peter said unto him, Lord, why cannot I follow thee now? I will lay down my life for thy sake.",
        },
        {
          number: 38,
          text: "Jesus answered him, Wilt thou lay down thy life for my sake? Verily, verily, I say unto thee, The cock shall not crow, till thou hast denied me thrice.",
        },
      ],
    },
    {
      number: 14,
      verses: [
        {
          number: 1,
          text: "Let not your heart be troubled: ye believe in God, believe also in me.",
        },
        {
          number: 2,
          text: "In my Father\u2019s house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.",
        },
        {
          number: 3,
          text: "And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.",
        },
        {
          number: 4,
          text: "And whither I go ye know, and the way ye know.",
        },
        {
          number: 5,
          text: "Thomas saith unto him, Lord, we know not whither thou goest; and how can we know the way?",
        },
        {
          number: 6,
          text: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
        },
        {
          number: 7,
          text: "If ye had known me, ye should have known my Father also: and from henceforth ye know him, and have seen him.",
        },
        {
          number: 8,
          text: "Philip saith unto him, Lord, shew us the Father, and it sufficeth us.",
        },
        {
          number: 9,
          text: "Jesus saith unto him, Have I been so long time with you, and yet hast thou not known me, Philip? he that hath seen me hath seen the Father; and how sayest thou then, Shew us the Father?",
        },
        {
          number: 10,
          text: "Believest thou not that I am in the Father, and the Father in me? the words that I speak unto you I speak not of myself: but the Father that dwelleth in me, he doeth the works.",
        },
        {
          number: 11,
          text: "Believe me that I am in the Father, and the Father in me: or else believe me for the very works\u2019 sake.",
        },
        {
          number: 12,
          text: "Verily, verily, I say unto you, He that believeth on me, the works that I do shall he do also; and greater works than these shall he do; because I go unto my Father.",
        },
        {
          number: 13,
          text: "And whatsoever ye shall ask in my name, that will I do, that the Father may be glorified in the Son.",
        },
        {
          number: 14,
          text: "If ye shall ask any thing in my name, I will do it.",
        },
        { number: 15, text: "If ye love me, keep my commandments." },
        {
          number: 16,
          text: "And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever;",
        },
        {
          number: 17,
          text: "Even the Spirit of truth; whom the world cannot receive, because it seeth him not, neither knoweth him: but ye know him; for he dwelleth with you, and shall be in you.",
        },
        {
          number: 18,
          text: "I will not leave you comfortless: I will come to you.",
        },
        {
          number: 19,
          text: "Yet a little while, and the world seeth me no more; but ye see me: because I live, ye shall live also.",
        },
        {
          number: 20,
          text: "At that day ye shall know that I am in my Father, and ye in me, and I in you.",
        },
        {
          number: 21,
          text: "He that hath my commandments, and keepeth them, he it is that loveth me: and he that loveth me shall be loved of my Father, and I will love him, and will manifest myself to him.",
        },
        {
          number: 22,
          text: "Judas saith unto him, not Iscariot, Lord, how is it that thou wilt manifest thyself unto us, and not unto the world?",
        },
        {
          number: 23,
          text: "Jesus answered and said unto him, If a man love me, he will keep my words: and my Father will love him, and we will come unto him, and make our abode with him.",
        },
        {
          number: 24,
          text: "He that loveth me not keepeth not my sayings: and the word which ye hear is not mine, but the Father\u2019s which sent me.",
        },
        {
          number: 25,
          text: "These things have I spoken unto you, being yet present with you.",
        },
        {
          number: 26,
          text: "But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you.",
        },
        {
          number: 27,
          text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
        },
        {
          number: 28,
          text: "Ye have heard how I said unto you, I go away, and come again unto you. If ye loved me, ye would rejoice, because I said, I go unto the Father: for my Father is greater than I.",
        },
        {
          number: 29,
          text: "And now I have told you before it come to pass, that, when it is come to pass, ye might believe.",
        },
        {
          number: 30,
          text: "Hereafter I will not talk much with you: for the prince of this world cometh, and hath nothing in me.",
        },
        {
          number: 31,
          text: "But that the world may know that I love the Father; and as the Father gave me commandment, even so I do. Arise, let us go hence.",
        },
      ],
    },
    {
      number: 15,
      verses: [
        {
          number: 1,
          text: "I am the true vine, and my Father is the husbandman.",
        },
        {
          number: 2,
          text: "Every branch in me that beareth not fruit he taketh away: and every branch that beareth fruit, he purgeth it, that it may bring forth more fruit.",
        },
        {
          number: 3,
          text: "Now ye are clean through the word which I have spoken unto you.",
        },
        {
          number: 4,
          text: "Abide in me, and I in you. As the branch cannot bear fruit of itself, except it abide in the vine; no more can ye, except ye abide in me.",
        },
        {
          number: 5,
          text: "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.",
        },
        {
          number: 6,
          text: "If a man abide not in me, he is cast forth as a branch, and is withered; and men gather them, and cast them into the fire, and they are burned.",
        },
        {
          number: 7,
          text: "If ye abide in me, and my words abide in you, ye shall ask what ye will, and it shall be done unto you.",
        },
        {
          number: 8,
          text: "Herein is my Father glorified, that ye bear much fruit; so shall ye be my disciples.",
        },
        {
          number: 9,
          text: "As the Father hath loved me, so have I loved you: continue ye in my love.",
        },
        {
          number: 10,
          text: "If ye keep my commandments, ye shall abide in my love; even as I have kept my Father\u2019s commandments, and abide in his love.",
        },
        {
          number: 11,
          text: "These things have I spoken unto you, that my joy might remain in you, and that your joy might be full.",
        },
        {
          number: 12,
          text: "This is my commandment, That ye love one another, as I have loved you.",
        },
        {
          number: 13,
          text: "Greater love hath no man than this, that a man lay down his life for his friends.",
        },
        {
          number: 14,
          text: "Ye are my friends, if ye do whatsoever I command you.",
        },
        {
          number: 15,
          text: "Henceforth I call you not servants; for the servant knoweth not what his lord doeth: but I have called you friends; for all things that I have heard of my Father I have made known unto you.",
        },
        {
          number: 16,
          text: "Ye have not chosen me, but I have chosen you, and ordained you, that ye should go and bring forth fruit, and that your fruit should remain: that whatsoever ye shall ask of the Father in my name, he may give it you.",
        },
        {
          number: 17,
          text: "These things I command you, that ye love one another.",
        },
        {
          number: 18,
          text: "If the world hate you, ye know that it hated me before it hated you.",
        },
        {
          number: 19,
          text: "If ye were of the world, the world would love his own: but because ye are not of the world, but I have chosen you out of the world, therefore the world hateth you.",
        },
        {
          number: 20,
          text: "Remember the word that I said unto you, The servant is not greater than his lord. If they have persecuted me, they will also persecute you; if they have kept my saying, they will keep yours also.",
        },
        {
          number: 21,
          text: "But all these things will they do unto you for my name\u2019s sake, because they know not him that sent me.",
        },
        {
          number: 22,
          text: "If I had not come and spoken unto them, they had not had sin: but now they have no cloak for their sin.",
        },
        { number: 23, text: "He that hateth me hateth my Father also." },
        {
          number: 24,
          text: "If I had not done among them the works which none other man did, they had not had sin: but now have they both seen and hated both me and my Father.",
        },
        {
          number: 25,
          text: "But this cometh to pass, that the word might be fulfilled that is written in their law, They hated me without a cause.",
        },
        {
          number: 26,
          text: "But when the Comforter is come, whom I will send unto you from the Father, even the Spirit of truth, which proceedeth from the Father, he shall testify of me:",
        },
        {
          number: 27,
          text: "And ye also shall bear witness, because ye have been with me from the beginning.",
        },
      ],
    },
    {
      number: 16,
      verses: [
        {
          number: 1,
          text: "These things have I spoken unto you, that ye should not be offended.",
        },
        {
          number: 2,
          text: "They shall put you out of the synagogues: yea, the time cometh, that whosoever killeth you will think that he doeth God service.",
        },
        {
          number: 3,
          text: "And these things will they do unto you, because they have not known the Father, nor me.",
        },
        {
          number: 4,
          text: "But these things have I told you, that when the time shall come, ye may remember that I told you of them. And these things I said not unto you at the beginning, because I was with you.",
        },
        {
          number: 5,
          text: "But now I go my way to him that sent me; and none of you asketh me, Whither goest thou?",
        },
        {
          number: 6,
          text: "But because I have said these things unto you, sorrow hath filled your heart.",
        },
        {
          number: 7,
          text: "Nevertheless I tell you the truth; It is expedient for you that I go away: for if I go not away, the Comforter will not come unto you; but if I depart, I will send him unto you.",
        },
        {
          number: 8,
          text: "And when he is come, he will reprove the world of sin, and of righteousness, and of judgment:",
        },
        { number: 9, text: "Of sin, because they believe not on me;" },
        {
          number: 10,
          text: "Of righteousness, because I go to my Father, and ye see me no more;",
        },
        {
          number: 11,
          text: "Of judgment, because the prince of this world is judged.",
        },
        {
          number: 12,
          text: "I have yet many things to say unto you, but ye cannot bear them now.",
        },
        {
          number: 13,
          text: "Howbeit when he, the Spirit of truth, is come, he will guide you into all truth: for he shall not speak of himself; but whatsoever he shall hear, that shall he speak: and he will shew you things to come.",
        },
        {
          number: 14,
          text: "He shall glorify me: for he shall receive of mine, and shall shew it unto you.",
        },
        {
          number: 15,
          text: "All things that the Father hath are mine: therefore said I, that he shall take of mine, and shall shew it unto you.",
        },
        {
          number: 16,
          text: "A little while, and ye shall not see me: and again, a little while, and ye shall see me, because I go to the Father.",
        },
        {
          number: 17,
          text: "Then said some of his disciples among themselves, What is this that he saith unto us, A little while, and ye shall not see me: and again, a little while, and ye shall see me: and, Because I go to the Father?",
        },
        {
          number: 18,
          text: "They said therefore, What is this that he saith, A little while? we cannot tell what he saith.",
        },
        {
          number: 19,
          text: "Now Jesus knew that they were desirous to ask him, and said unto them, Do ye enquire among yourselves of that I said, A little while, and ye shall not see me: and again, a little while, and ye shall see me?",
        },
        {
          number: 20,
          text: "Verily, verily, I say unto you, That ye shall weep and lament, but the world shall rejoice: and ye shall be sorrowful, but your sorrow shall be turned into joy.",
        },
        {
          number: 21,
          text: "A woman when she is in travail hath sorrow, because her hour is come: but as soon as she is delivered of the child, she remembereth no more the anguish, for joy that a man is born into the world.",
        },
        {
          number: 22,
          text: "And ye now therefore have sorrow: but I will see you again, and your heart shall rejoice, and your joy no man taketh from you.",
        },
        {
          number: 23,
          text: "And in that day ye shall ask me nothing. Verily, verily, I say unto you, Whatsoever ye shall ask the Father in my name, he will give it you.",
        },
        {
          number: 24,
          text: "Hitherto have ye asked nothing in my name: ask, and ye shall receive, that your joy may be full.",
        },
        {
          number: 25,
          text: "These things have I spoken unto you in proverbs: but the time cometh, when I shall no more speak unto you in proverbs, but I shall shew you plainly of the Father.",
        },
        {
          number: 26,
          text: "At that day ye shall ask in my name: and I say not unto you, that I will pray the Father for you:",
        },
        {
          number: 27,
          text: "For the Father himself loveth you, because ye have loved me, and have believed that I came out from God.",
        },
        {
          number: 28,
          text: "I came forth from the Father, and am come into the world: again, I leave the world, and go to the Father.",
        },
        {
          number: 29,
          text: "His disciples said unto him, Lo, now speakest thou plainly, and speakest no proverb.",
        },
        {
          number: 30,
          text: "Now are we sure that thou knowest all things, and needest not that any man should ask thee: by this we believe that thou camest forth from God.",
        },
        { number: 31, text: "Jesus answered them, Do ye now believe?" },
        {
          number: 32,
          text: "Behold, the hour cometh, yea, is now come, that ye shall be scattered, every man to his own, and shall leave me alone: and yet I am not alone, because the Father is with me.",
        },
        {
          number: 33,
          text: "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
        },
      ],
    },
    {
      number: 17,
      verses: [
        {
          number: 1,
          text: "These words spake Jesus, and lifted up his eyes to heaven, and said, Father, the hour is come; glorify thy Son, that thy Son also may glorify thee:",
        },
        {
          number: 2,
          text: "As thou hast given him power over all flesh, that he should give eternal life to as many as thou hast given him.",
        },
        {
          number: 3,
          text: "And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.",
        },
        {
          number: 4,
          text: "I have glorified thee on the earth: I have finished the work which thou gavest me to do.",
        },
        {
          number: 5,
          text: "And now, O Father, glorify thou me with thine own self with the glory which I had with thee before the world was.",
        },
        {
          number: 6,
          text: "I have manifested thy name unto the men which thou gavest me out of the world: thine they were, and thou gavest them me; and they have kept thy word.",
        },
        {
          number: 7,
          text: "Now they have known that all things whatsoever thou hast given me are of thee.",
        },
        {
          number: 8,
          text: "For I have given unto them the words which thou gavest me; and they have received them, and have known surely that I came out from thee, and they have believed that thou didst send me.",
        },
        {
          number: 9,
          text: "I pray for them: I pray not for the world, but for them which thou hast given me; for they are thine.",
        },
        {
          number: 10,
          text: "And all mine are thine, and thine are mine; and I am glorified in them.",
        },
        {
          number: 11,
          text: "And now I am no more in the world, but these are in the world, and I come to thee. Holy Father, keep through thine own name those whom thou hast given me, that they may be one, as we are.",
        },
        {
          number: 12,
          text: "While I was with them in the world, I kept them in thy name: those that thou gavest me I have kept, and none of them is lost, but the son of perdition; that the scripture might be fulfilled.",
        },
        {
          number: 13,
          text: "And now come I to thee; and these things I speak in the world, that they might have my joy fulfilled in themselves.",
        },
        {
          number: 14,
          text: "I have given them thy word; and the world hath hated them, because they are not of the world, even as I am not of the world.",
        },
        {
          number: 15,
          text: "I pray not that thou shouldest take them out of the world, but that thou shouldest keep them from the evil.",
        },
        {
          number: 16,
          text: "They are not of the world, even as I am not of the world.",
        },
        {
          number: 17,
          text: "Sanctify them through thy truth: thy word is truth.",
        },
        {
          number: 18,
          text: "As thou hast sent me into the world, even so have I also sent them into the world.",
        },
        {
          number: 19,
          text: "And for their sakes I sanctify myself, that they also might be sanctified through the truth.",
        },
        {
          number: 20,
          text: "Neither pray I for these alone, but for them also which shall believe on me through their word;",
        },
        {
          number: 21,
          text: "That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us: that the world may believe that thou hast sent me.",
        },
        {
          number: 22,
          text: "And the glory which thou gavest me I have given them; that they may be one, even as we are one:",
        },
        {
          number: 23,
          text: "I in them, and thou in me, that they may be made perfect in one; and that the world may know that thou hast sent me, and hast loved them, as thou hast loved me.",
        },
        {
          number: 24,
          text: "Father, I will that they also, whom thou hast given me, be with me where I am; that they may behold my glory, which thou hast given me: for thou lovedst me before the foundation of the world.",
        },
        {
          number: 25,
          text: "O righteous Father, the world hath not known thee: but I have known thee, and these have known that thou hast sent me.",
        },
        {
          number: 26,
          text: "And I have declared unto them thy name, and will declare it: that the love wherewith thou hast loved me may be in them, and I in them.",
        },
      ],
    },
    {
      number: 18,
      verses: [
        {
          number: 1,
          text: "When Jesus had spoken these words, he went forth with his disciples over the brook Cedron, where was a garden, into the which he entered, and his disciples.",
        },
        {
          number: 2,
          text: "And Judas also, which betrayed him, knew the place: for Jesus ofttimes resorted thither with his disciples.",
        },
        {
          number: 3,
          text: "Judas then, having received a band of men and officers from the chief priests and Pharisees, cometh thither with lanterns and torches and weapons.",
        },
        {
          number: 4,
          text: "Jesus therefore, knowing all things that should come upon him, went forth, and said unto them, Whom seek ye?",
        },
        {
          number: 5,
          text: "They answered him, Jesus of Nazareth. Jesus saith unto them, I am he. And Judas also, which betrayed him, stood with them.",
        },
        {
          number: 6,
          text: "As soon then as he had said unto them, I am he, they went backward, and fell to the ground.",
        },
        {
          number: 7,
          text: "Then asked he them again, Whom seek ye? And they said, Jesus of Nazareth.",
        },
        {
          number: 8,
          text: "Jesus answered, I have told you that I am he: if therefore ye seek me, let these go their way:",
        },
        {
          number: 9,
          text: "That the saying might be fulfilled, which he spake, Of them which thou gavest me have I lost none.",
        },
        {
          number: 10,
          text: "Then Simon Peter having a sword drew it, and smote the high priest\u2019s servant, and cut off his right ear. The servant\u2019s name was Malchus.",
        },
        {
          number: 11,
          text: "Then said Jesus unto Peter, Put up thy sword into the sheath: the cup which my Father hath given me, shall I not drink it?",
        },
        {
          number: 12,
          text: "Then the band and the captain and officers of the Jews took Jesus, and bound him,",
        },
        {
          number: 13,
          text: "And led him away to Annas first; for he was father in law to Caiaphas, which was the high priest that same year.",
        },
        {
          number: 14,
          text: "Now Caiaphas was he, which gave counsel to the Jews, that it was expedient that one man should die for the people.",
        },
        {
          number: 15,
          text: "And Simon Peter followed Jesus, and so did another disciple: that disciple was known unto the high priest, and went in with Jesus into the palace of the high priest.",
        },
        {
          number: 16,
          text: "But Peter stood at the door without. Then went out that other disciple, which was known unto the high priest, and spake unto her that kept the door, and brought in Peter.",
        },
        {
          number: 17,
          text: "Then saith the damsel that kept the door unto Peter, Art not thou also one of this man\u2019s disciples? He saith, I am not.",
        },
        {
          number: 18,
          text: "And the servants and officers stood there, who had made a fire of coals; for it was cold: and they warmed themselves: and Peter stood with them, and warmed himself.",
        },
        {
          number: 19,
          text: "The high priest then asked Jesus of his disciples, and of his doctrine.",
        },
        {
          number: 20,
          text: "Jesus answered him, I spake openly to the world; I ever taught in the synagogue, and in the temple, whither the Jews always resort; and in secret have I said nothing.",
        },
        {
          number: 21,
          text: "Why askest thou me? ask them which heard me, what I have said unto them: behold, they know what I said.",
        },
        {
          number: 22,
          text: "And when he had thus spoken, one of the officers which stood by struck Jesus with the palm of his hand, saying, Answerest thou the high priest so?",
        },
        {
          number: 23,
          text: "Jesus answered him, If I have spoken evil, bear witness of the evil: but if well, why smitest thou me?",
        },
        {
          number: 24,
          text: "Now Annas had sent him bound unto Caiaphas the high priest.",
        },
        {
          number: 25,
          text: "And Simon Peter stood and warmed himself. They said therefore unto him, Art not thou also one of his disciples? He denied it, and said, I am not.",
        },
        {
          number: 26,
          text: "One of the servants of the high priest, being his kinsman whose ear Peter cut off, saith, Did not I see thee in the garden with him?",
        },
        {
          number: 27,
          text: "Peter then denied again: and immediately the cock crew.",
        },
        {
          number: 28,
          text: "Then led they Jesus from Caiaphas unto the hall of judgment: and it was early; and they themselves went not into the judgment hall, lest they should be defiled; but that they might eat the passover.",
        },
        {
          number: 29,
          text: "Pilate then went out unto them, and said, What accusation bring ye against this man?",
        },
        {
          number: 30,
          text: "They answered and said unto him, If he were not a malefactor, we would not have delivered him up unto thee.",
        },
        {
          number: 31,
          text: "Then said Pilate unto them, Take ye him, and judge him according to your law. The Jews therefore said unto him, It is not lawful for us to put any man to death:",
        },
        {
          number: 32,
          text: "That the saying of Jesus might be fulfilled, which he spake, signifying what death he should die.",
        },
        {
          number: 33,
          text: "Then Pilate entered into the judgment hall again, and called Jesus, and said unto him, Art thou the King of the Jews?",
        },
        {
          number: 34,
          text: "Jesus answered him, Sayest thou this thing of thyself, or did others tell it thee of me?",
        },
        {
          number: 35,
          text: "Pilate answered, Am I a Jew? Thine own nation and the chief priests have delivered thee unto me: what hast thou done?",
        },
        {
          number: 36,
          text: "Jesus answered, My kingdom is not of this world: if my kingdom were of this world, then would my servants fight, that I should not be delivered to the Jews: but now is my kingdom not from hence.",
        },
        {
          number: 37,
          text: "Pilate therefore said unto him, Art thou a king then? Jesus answered, Thou sayest that I am a king. To this end was I born, and for this cause came I into the world, that I should bear witness unto the truth. Every one that is of the truth heareth my voice.",
        },
        {
          number: 38,
          text: "Pilate saith unto him, What is truth? And when he had said this, he went out again unto the Jews, and saith unto them, I find in him no fault at all.",
        },
        {
          number: 39,
          text: "But ye have a custom, that I should release unto you one at the passover: will ye therefore that I release unto you the King of the Jews?",
        },
        {
          number: 40,
          text: "Then cried they all again, saying, Not this man, but Barabbas. Now Barabbas was a robber.",
        },
      ],
    },
    {
      number: 19,
      verses: [
        {
          number: 1,
          text: "Then Pilate therefore took Jesus, and scourged him.",
        },
        {
          number: 2,
          text: "And the soldiers platted a crown of thorns, and put it on his head, and they put on him a purple robe,",
        },
        {
          number: 3,
          text: "And said, Hail, King of the Jews! and they smote him with their hands.",
        },
        {
          number: 4,
          text: "Pilate therefore went forth again, and saith unto them, Behold, I bring him forth to you, that ye may know that I find no fault in him.",
        },
        {
          number: 5,
          text: "Then came Jesus forth, wearing the crown of thorns, and the purple robe. And Pilate saith unto them, Behold the man!",
        },
        {
          number: 6,
          text: "When the chief priests therefore and officers saw him, they cried out, saying, Crucify him, crucify him. Pilate saith unto them, Take ye him, and crucify him: for I find no fault in him.",
        },
        {
          number: 7,
          text: "The Jews answered him, We have a law, and by our law he ought to die, because he made himself the Son of God.",
        },
        {
          number: 8,
          text: "When Pilate therefore heard that saying, he was the more afraid;",
        },
        {
          number: 9,
          text: "And went again into the judgment hall, and saith unto Jesus, Whence art thou? But Jesus gave him no answer.",
        },
        {
          number: 10,
          text: "Then saith Pilate unto him, Speakest thou not unto me? knowest thou not that I have power to crucify thee, and have power to release thee?",
        },
        {
          number: 11,
          text: "Jesus answered, Thou couldest have no power at all against me, except it were given thee from above: therefore he that delivered me unto thee hath the greater sin.",
        },
        {
          number: 12,
          text: "And from thenceforth Pilate sought to release him: but the Jews cried out, saying, If thou let this man go, thou art not Caesar\u2019s friend: whosoever maketh himself a king speaketh against Caesar.",
        },
        {
          number: 13,
          text: "When Pilate therefore heard that saying, he brought Jesus forth, and sat down in the judgment seat in a place that is called the Pavement, but in the Hebrew, Gabbatha.",
        },
        {
          number: 14,
          text: "And it was the preparation of the passover, and about the sixth hour: and he saith unto the Jews, Behold your King!",
        },
        {
          number: 15,
          text: "But they cried out, Away with him, away with him, crucify him. Pilate saith unto them, Shall I crucify your King? The chief priests answered, We have no king but Caesar.",
        },
        {
          number: 16,
          text: "Then delivered he him therefore unto them to be crucified. And they took Jesus, and led him away.",
        },
        {
          number: 17,
          text: "And he bearing his cross went forth into a place called the place of a skull, which is called in the Hebrew Golgotha:",
        },
        {
          number: 18,
          text: "Where they crucified him, and two other with him, on either side one, and Jesus in the midst.",
        },
        {
          number: 19,
          text: "And Pilate wrote a title, and put it on the cross. And the writing was, JESUS OF NAZARETH THE KING OF THE JEWS.",
        },
        {
          number: 20,
          text: "This title then read many of the Jews: for the place where Jesus was crucified was nigh to the city: and it was written in Hebrew, and Greek, and Latin.",
        },
        {
          number: 21,
          text: "Then said the chief priests of the Jews to Pilate, Write not, The King of the Jews; but that he said, I am King of the Jews.",
        },
        {
          number: 22,
          text: "Pilate answered, What I have written I have written.",
        },
        {
          number: 23,
          text: "Then the soldiers, when they had crucified Jesus, took his garments, and made four parts, to every soldier a part; and also his coat: now the coat was without seam, woven from the top throughout.",
        },
        {
          number: 24,
          text: "They said therefore among themselves, Let us not rend it, but cast lots for it, whose it shall be: that the scripture might be fulfilled, which saith, They parted my raiment among them, and for my vesture they did cast lots. These things therefore the soldiers did.",
        },
        {
          number: 25,
          text: "Now there stood by the cross of Jesus his mother, and his mother\u2019s sister, Mary the wife of Cleophas, and Mary Magdalene.",
        },
        {
          number: 26,
          text: "When Jesus therefore saw his mother, and the disciple standing by, whom he loved, he saith unto his mother, Woman, behold thy son!",
        },
        {
          number: 27,
          text: "Then saith he to the disciple, Behold thy mother! And from that hour that disciple took her unto his own home.",
        },
        {
          number: 28,
          text: "After this, Jesus knowing that all things were now accomplished, that the scripture might be fulfilled, saith, I thirst.",
        },
        {
          number: 29,
          text: "Now there was set a vessel full of vinegar: and they filled a spunge with vinegar, and put it upon hyssop, and put it to his mouth.",
        },
        {
          number: 30,
          text: "When Jesus therefore had received the vinegar, he said, It is finished: and he bowed his head, and gave up the ghost.",
        },
        {
          number: 31,
          text: "The Jews therefore, because it was the preparation, that the bodies should not remain upon the cross on the sabbath day, (for that sabbath day was an high day,) besought Pilate that their legs might be broken, and that they might be taken away.",
        },
        {
          number: 32,
          text: "Then came the soldiers, and brake the legs of the first, and of the other which was crucified with him.",
        },
        {
          number: 33,
          text: "But when they came to Jesus, and saw that he was dead already, they brake not his legs:",
        },
        {
          number: 34,
          text: "But one of the soldiers with a spear pierced his side, and forthwith came there out blood and water.",
        },
        {
          number: 35,
          text: "And he that saw it bare record, and his record is true: and he knoweth that he saith true, that ye might believe.",
        },
        {
          number: 36,
          text: "For these things were done, that the scripture should be fulfilled, A bone of him shall not be broken.",
        },
        {
          number: 37,
          text: "And again another scripture saith, They shall look on him whom they pierced.",
        },
        {
          number: 38,
          text: "And after this Joseph of Arimathaea, being a disciple of Jesus, but secretly for fear of the Jews, besought Pilate that he might take away the body of Jesus: and Pilate gave him leave. He came therefore, and took the body of Jesus.",
        },
        {
          number: 39,
          text: "And there came also Nicodemus, which at the first came to Jesus by night, and brought a mixture of myrrh and aloes, about an hundred pound weight.",
        },
        {
          number: 40,
          text: "Then took they the body of Jesus, and wound it in linen clothes with the spices, as the manner of the Jews is to bury.",
        },
        {
          number: 41,
          text: "Now in the place where he was crucified there was a garden; and in the garden a new sepulchre, wherein was never man yet laid.",
        },
        {
          number: 42,
          text: "There laid they Jesus therefore because of the Jews\u2019 preparation day; for the sepulchre was nigh at hand.",
        },
      ],
    },
    {
      number: 20,
      verses: [
        {
          number: 1,
          text: "The first day of the week cometh Mary Magdalene early, when it was yet dark, unto the sepulchre, and seeth the stone taken away from the sepulchre.",
        },
        {
          number: 2,
          text: "Then she runneth, and cometh to Simon Peter, and to the other disciple, whom Jesus loved, and saith unto them, They have taken away the LORD out of the sepulchre, and we know not where they have laid him.",
        },
        {
          number: 3,
          text: "Peter therefore went forth, and that other disciple, and came to the sepulchre.",
        },
        {
          number: 4,
          text: "So they ran both together: and the other disciple did outrun Peter, and came first to the sepulchre.",
        },
        {
          number: 5,
          text: "And he stooping down, and looking in, saw the linen clothes lying; yet went he not in.",
        },
        {
          number: 6,
          text: "Then cometh Simon Peter following him, and went into the sepulchre, and seeth the linen clothes lie,",
        },
        {
          number: 7,
          text: "And the napkin, that was about his head, not lying with the linen clothes, but wrapped together in a place by itself.",
        },
        {
          number: 8,
          text: "Then went in also that other disciple, which came first to the sepulchre, and he saw, and believed.",
        },
        {
          number: 9,
          text: "For as yet they knew not the scripture, that he must rise again from the dead.",
        },
        {
          number: 10,
          text: "Then the disciples went away again unto their own home.",
        },
        {
          number: 11,
          text: "But Mary stood without at the sepulchre weeping: and as she wept, she stooped down, and looked into the sepulchre,",
        },
        {
          number: 12,
          text: "And seeth two angels in white sitting, the one at the head, and the other at the feet, where the body of Jesus had lain.",
        },
        {
          number: 13,
          text: "And they say unto her, Woman, why weepest thou? She saith unto them, Because they have taken away my LORD, and I know not where they have laid him.",
        },
        {
          number: 14,
          text: "And when she had thus said, she turned herself back, and saw Jesus standing, and knew not that it was Jesus.",
        },
        {
          number: 15,
          text: "Jesus saith unto her, Woman, why weepest thou? whom seekest thou? She, supposing him to be the gardener, saith unto him, Sir, if thou have borne him hence, tell me where thou hast laid him, and I will take him away.",
        },
        {
          number: 16,
          text: "Jesus saith unto her, Mary. She turned herself, and saith unto him, Rabboni; which is to say, Master.",
        },
        {
          number: 17,
          text: "Jesus saith unto her, Touch me not; for I am not yet ascended to my Father: but go to my brethren, and say unto them, I ascend unto my Father, and your Father; and to my God, and your God.",
        },
        {
          number: 18,
          text: "Mary Magdalene came and told the disciples that she had seen the LORD, and that he had spoken these things unto her.",
        },
        {
          number: 19,
          text: "Then the same day at evening, being the first day of the week, when the doors were shut where the disciples were assembled for fear of the Jews, came Jesus and stood in the midst, and saith unto them, Peace be unto you.",
        },
        {
          number: 20,
          text: "And when he had so said, he shewed unto them his hands and his side. Then were the disciples glad, when they saw the LORD.",
        },
        {
          number: 21,
          text: "Then said Jesus to them again, Peace be unto you: as my Father hath sent me, even so send I you.",
        },
        {
          number: 22,
          text: "And when he had said this, he breathed on them, and saith unto them, Receive ye the Holy Ghost:",
        },
        {
          number: 23,
          text: "Whose soever sins ye remit, they are remitted unto them; and whose soever sins ye retain, they are retained.",
        },
        {
          number: 24,
          text: "But Thomas, one of the twelve, called Didymus, was not with them when Jesus came.",
        },
        {
          number: 25,
          text: "The other disciples therefore said unto him, We have seen the LORD. But he said unto them, Except I shall see in his hands the print of the nails, and put my finger into the print of the nails, and thrust my hand into his side, I will not believe.",
        },
        {
          number: 26,
          text: "And after eight days again his disciples were within, and Thomas with them: then came Jesus, the doors being shut, and stood in the midst, and said, Peace be unto you.",
        },
        {
          number: 27,
          text: "Then saith he to Thomas, Reach hither thy finger, and behold my hands; and reach hither thy hand, and thrust it into my side: and be not faithless, but believing.",
        },
        {
          number: 28,
          text: "And Thomas answered and said unto him, My LORD and my God.",
        },
        {
          number: 29,
          text: "Jesus saith unto him, Thomas, because thou hast seen me, thou hast believed: blessed are they that have not seen, and yet have believed.",
        },
        {
          number: 30,
          text: "And many other signs truly did Jesus in the presence of his disciples, which are not written in this book:",
        },
        {
          number: 31,
          text: "But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name.",
        },
      ],
    },
    {
      number: 21,
      verses: [
        {
          number: 1,
          text: "After these things Jesus shewed himself again to the disciples at the sea of Tiberias; and on this wise shewed he himself.",
        },
        {
          number: 2,
          text: "There were together Simon Peter, and Thomas called Didymus, and Nathanael of Cana in Galilee, and the sons of Zebedee, and two other of his disciples.",
        },
        {
          number: 3,
          text: "Simon Peter saith unto them, I go a fishing. They say unto him, We also go with thee. They went forth, and entered into a ship immediately; and that night they caught nothing.",
        },
        {
          number: 4,
          text: "But when the morning was now come, Jesus stood on the shore: but the disciples knew not that it was Jesus.",
        },
        {
          number: 5,
          text: "Then Jesus saith unto them, Children, have ye any meat? They answered him, No.",
        },
        {
          number: 6,
          text: "And he said unto them, Cast the net on the right side of the ship, and ye shall find. They cast therefore, and now they were not able to draw it for the multitude of fishes.",
        },
        {
          number: 7,
          text: "Therefore that disciple whom Jesus loved saith unto Peter, It is the Lord. Now when Simon Peter heard that it was the Lord, he girt his fisher\u2019s coat unto him, (for he was naked,) and did cast himself into the sea.",
        },
        {
          number: 8,
          text: "And the other disciples came in a little ship; (for they were not far from land, but as it were two hundred cubits,) dragging the net with fishes.",
        },
        {
          number: 9,
          text: "As soon then as they were come to land, they saw a fire of coals there, and fish laid thereon, and bread.",
        },
        {
          number: 10,
          text: "Jesus saith unto them, Bring of the fish which ye have now caught.",
        },
        {
          number: 11,
          text: "Simon Peter went up, and drew the net to land full of great fishes, an hundred and fifty and three: and for all there were so many, yet was not the net broken.",
        },
        {
          number: 12,
          text: "Jesus saith unto them, Come and dine. And none of the disciples durst ask him, Who art thou? knowing that it was the Lord.",
        },
        {
          number: 13,
          text: "Jesus then cometh, and taketh bread, and giveth them, and fish likewise.",
        },
        {
          number: 14,
          text: "This is now the third time that Jesus shewed himself to his disciples, after that he was risen from the dead.",
        },
        {
          number: 15,
          text: "So when they had dined, Jesus saith to Simon Peter, Simon, son of Jonas, lovest thou me more than these? He saith unto him, Yea, Lord; thou knowest that I love thee. He saith unto him, Feed my lambs.",
        },
        {
          number: 16,
          text: "He saith to him again the second time, Simon, son of Jonas, lovest thou me? He saith unto him, Yea, Lord; thou knowest that I love thee. He saith unto him, Feed my sheep.",
        },
        {
          number: 17,
          text: "He saith unto him the third time, Simon, son of Jonas, lovest thou me? Peter was grieved because he said unto him the third time, Lovest thou me? And he said unto him, Lord, thou knowest all things; thou knowest that I love thee. Jesus saith unto him, Feed my sheep.",
        },
        {
          number: 18,
          text: "Verily, verily, I say unto thee, When thou wast young, thou girdedst thyself, and walkedst whither thou wouldest: but when thou shalt be old, thou shalt stretch forth thy hands, and another shall gird thee, and carry thee whither thou wouldest not.",
        },
        {
          number: 19,
          text: "This spake he, signifying by what death he should glorify God. And when he had spoken this, he saith unto him, Follow me.",
        },
        {
          number: 20,
          text: "Then Peter, turning about, seeth the disciple whom Jesus loved following; which also leaned on his breast at supper, and said, Lord, which is he that betrayeth thee?",
        },
        {
          number: 21,
          text: "Peter seeing him saith to Jesus, Lord, and what shall this man do?",
        },
        {
          number: 22,
          text: "Jesus saith unto him, If I will that he tarry till I come, what is that to thee? follow thou me.",
        },
        {
          number: 23,
          text: "Then went this saying abroad among the brethren, that that disciple should not die: yet Jesus said not unto him, He shall not die; but, If I will that he tarry till I come, what is that to thee?",
        },
        {
          number: 24,
          text: "This is the disciple which testifieth of these things, and wrote these things: and we know that his testimony is true.",
        },
        {
          number: 25,
          text: "And there are also many other things which Jesus did, the which, if they should be written every one, I suppose that even the world itself could not contain the books that should be written. Amen.",
        },
      ],
    },
  ],
};

export default John;
