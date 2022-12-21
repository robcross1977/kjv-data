import { DeepPartial } from "typeorm";
import { Book } from "../entity/Book";

const Galatians: DeepPartial<Book> = {
  name: "Galatians",
  chapters: [
    {
      number: 1,
      verses: [
        {
          number: 1,
          text: "Paul, an apostle, (not of men, neither by man, but by Jesus Christ, and God the Father, who raised him from the dead;)",
        },
        {
          number: 2,
          text: "And all the brethren which are with me, unto the churches of Galatia:",
        },
        {
          number: 3,
          text: "Grace be to you and peace from God the Father, and from our Lord Jesus Christ,",
        },
        {
          number: 4,
          text: "Who gave himself for our sins, that he might deliver us from this present evil world, according to the will of God and our Father:",
        },
        { number: 5, text: "To whom be glory for ever and ever. Amen." },
        {
          number: 6,
          text: "I marvel that ye are so soon removed from him that called you into the grace of Christ unto another gospel:",
        },
        {
          number: 7,
          text: "Which is not another; but there be some that trouble you, and would pervert the gospel of Christ.",
        },
        {
          number: 8,
          text: "But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed.",
        },
        {
          number: 9,
          text: "As we said before, so say I now again, If any man preach any other gospel unto you than that ye have received, let him be accursed.",
        },
        {
          number: 10,
          text: "For do I now persuade men, or God? or do I seek to please men? for if I yet pleased men, I should not be the servant of Christ.",
        },
        {
          number: 11,
          text: "But I certify you, brethren, that the gospel which was preached of me is not after man.",
        },
        {
          number: 12,
          text: "For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ.",
        },
        {
          number: 13,
          text: "For ye have heard of my conversation in time past in the Jews\u2019 religion, how that beyond measure I persecuted the church of God, and wasted it:",
        },
        {
          number: 14,
          text: "And profited in the Jews\u2019 religion above many my equals in mine own nation, being more exceedingly zealous of the traditions of my fathers.",
        },
        {
          number: 15,
          text: "But when it pleased God, who separated me from my mother\u2019s womb, and called me by his grace,",
        },
        {
          number: 16,
          text: "To reveal his Son in me, that I might preach him among the heathen; immediately I conferred not with flesh and blood:",
        },
        {
          number: 17,
          text: "Neither went I up to Jerusalem to them which were apostles before me; but I went into Arabia, and returned again unto Damascus.",
        },
        {
          number: 18,
          text: "Then after three years I went up to Jerusalem to see Peter, and abode with him fifteen days.",
        },
        {
          number: 19,
          text: "But other of the apostles saw I none, save James the Lord\u2019s brother.",
        },
        {
          number: 20,
          text: "Now the things which I write unto you, behold, before God, I lie not.",
        },
        {
          number: 21,
          text: "Afterwards I came into the regions of Syria and Cilicia;",
        },
        {
          number: 22,
          text: "And was unknown by face unto the churches of Judaea which were in Christ:",
        },
        {
          number: 23,
          text: "But they had heard only, That he which persecuted us in times past now preacheth the faith which once he destroyed.",
        },
        { number: 24, text: "And they glorified God in me." },
      ],
    },
    {
      number: 2,
      verses: [
        {
          number: 1,
          text: "Then fourteen years after I went up again to Jerusalem with Barnabas, and took Titus with me also.",
        },
        {
          number: 2,
          text: "And I went up by revelation, and communicated unto them that gospel which I preach among the Gentiles, but privately to them which were of reputation, lest by any means I should run, or had run, in vain.",
        },
        {
          number: 3,
          text: "But neither Titus, who was with me, being a Greek, was compelled to be circumcised:",
        },
        {
          number: 4,
          text: "And that because of false brethren unawares brought in, who came in privily to spy out our liberty which we have in Christ Jesus, that they might bring us into bondage:",
        },
        {
          number: 5,
          text: "To whom we gave place by subjection, no, not for an hour; that the truth of the gospel might continue with you.",
        },
        {
          number: 6,
          text: "But of these who seemed to be somewhat, (whatsoever they were, it maketh no matter to me: God accepteth no man\u2019s person:) for they who seemed to be somewhat in conference added nothing to me:",
        },
        {
          number: 7,
          text: "But contrariwise, when they saw that the gospel of the uncircumcision was committed unto me, as the gospel of the circumcision was unto Peter;",
        },
        {
          number: 8,
          text: "(For he that wrought effectually in Peter to the apostleship of the circumcision, the same was mighty in me toward the Gentiles:)",
        },
        {
          number: 9,
          text: "And when James, Cephas, and John, who seemed to be pillars, perceived the grace that was given unto me, they gave to me and Barnabas the right hands of fellowship; that we should go unto the heathen, and they unto the circumcision.",
        },
        {
          number: 10,
          text: "Only they would that we should remember the poor; the same which I also was forward to do.",
        },
        {
          number: 11,
          text: "But when Peter was come to Antioch, I withstood him to the face, because he was to be blamed.",
        },
        {
          number: 12,
          text: "For before that certain came from James, he did eat with the Gentiles: but when they were come, he withdrew and separated himself, fearing them which were of the circumcision.",
        },
        {
          number: 13,
          text: "And the other Jews dissembled likewise with him; insomuch that Barnabas also was carried away with their dissimulation.",
        },
        {
          number: 14,
          text: "But when I saw that they walked not uprightly according to the truth of the gospel, I said unto Peter before them all, If thou, being a Jew, livest after the manner of Gentiles, and not as do the Jews, why compellest thou the Gentiles to live as do the Jews?",
        },
        {
          number: 15,
          text: "We who are Jews by nature, and not sinners of the Gentiles,",
        },
        {
          number: 16,
          text: "Knowing that a man is not justified by the works of the law, but by the faith of Jesus Christ, even we have believed in Jesus Christ, that we might be justified by the faith of Christ, and not by the works of the law: for by the works of the law shall no flesh be justified.",
        },
        {
          number: 17,
          text: "But if, while we seek to be justified by Christ, we ourselves also are found sinners, is therefore Christ the minister of sin? God forbid.",
        },
        {
          number: 18,
          text: "For if I build again the things which I destroyed, I make myself a transgressor.",
        },
        {
          number: 19,
          text: "For I through the law am dead to the law, that I might live unto God.",
        },
        {
          number: 20,
          text: "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.",
        },
        {
          number: 21,
          text: "I do not frustrate the grace of God: for if righteousness come by the law, then Christ is dead in vain.",
        },
      ],
    },
    {
      number: 3,
      verses: [
        {
          number: 1,
          text: "O foolish Galatians, who hath bewitched you, that ye should not obey the truth, before whose eyes Jesus Christ hath been evidently set forth, crucified among you?",
        },
        {
          number: 2,
          text: "This only would I learn of you, Received ye the Spirit by the works of the law, or by the hearing of faith?",
        },
        {
          number: 3,
          text: "Are ye so foolish? having begun in the Spirit, are ye now made perfect by the flesh?",
        },
        {
          number: 4,
          text: "Have ye suffered so many things in vain? if it be yet in vain.",
        },
        {
          number: 5,
          text: "He therefore that ministereth to you the Spirit, and worketh miracles among you, doeth he it by the works of the law, or by the hearing of faith?",
        },
        {
          number: 6,
          text: "Even as Abraham believed God, and it was accounted to him for righteousness.",
        },
        {
          number: 7,
          text: "Know ye therefore that they which are of faith, the same are the children of Abraham.",
        },
        {
          number: 8,
          text: "And the scripture, foreseeing that God would justify the heathen through faith, preached before the gospel unto Abraham, saying, In thee shall all nations be blessed.",
        },
        {
          number: 9,
          text: "So then they which be of faith are blessed with faithful Abraham.",
        },
        {
          number: 10,
          text: "For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them.",
        },
        {
          number: 11,
          text: "But that no man is justified by the law in the sight of God, it is evident: for, The just shall live by faith.",
        },
        {
          number: 12,
          text: "And the law is not of faith: but, The man that doeth them shall live in them.",
        },
        {
          number: 13,
          text: "Christ hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree:",
        },
        {
          number: 14,
          text: "That the blessing of Abraham might come on the Gentiles through Jesus Christ; that we might receive the promise of the Spirit through faith.",
        },
        {
          number: 15,
          text: "Brethren, I speak after the manner of men; Though it be but a man\u2019s covenant, yet if it be confirmed, no man disannulleth, or addeth thereto.",
        },
        {
          number: 16,
          text: "Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ.",
        },
        {
          number: 17,
          text: "And this I say, that the covenant, that was confirmed before of God in Christ, the law, which was four hundred and thirty years after, cannot disannul, that it should make the promise of none effect.",
        },
        {
          number: 18,
          text: "For if the inheritance be of the law, it is no more of promise: but God gave it to Abraham by promise.",
        },
        {
          number: 19,
          text: "Wherefore then serveth the law? It was added because of transgressions, till the seed should come to whom the promise was made; and it was ordained by angels in the hand of a mediator.",
        },
        {
          number: 20,
          text: "Now a mediator is not a mediator of one, but God is one.",
        },
        {
          number: 21,
          text: "Is the law then against the promises of God? God forbid: for if there had been a law given which could have given life, verily righteousness should have been by the law.",
        },
        {
          number: 22,
          text: "But the scripture hath concluded all under sin, that the promise by faith of Jesus Christ might be given to them that believe.",
        },
        {
          number: 23,
          text: "But before faith came, we were kept under the law, shut up unto the faith which should afterwards be revealed.",
        },
        {
          number: 24,
          text: "Wherefore the law was our schoolmaster to bring us unto Christ, that we might be justified by faith.",
        },
        {
          number: 25,
          text: "But after that faith is come, we are no longer under a schoolmaster.",
        },
        {
          number: 26,
          text: "For ye are all the children of God by faith in Christ Jesus.",
        },
        {
          number: 27,
          text: "For as many of you as have been baptized into Christ have put on Christ.",
        },
        {
          number: 28,
          text: "There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus.",
        },
        {
          number: 29,
          text: "And if ye be Christ\u2019s, then are ye Abraham\u2019s seed, and heirs according to the promise.",
        },
      ],
    },
    {
      number: 4,
      verses: [
        {
          number: 1,
          text: "Now I say, That the heir, as long as he is a child, differeth nothing from a servant, though he be lord of all;",
        },
        {
          number: 2,
          text: "But is under tutors and governors until the time appointed of the father.",
        },
        {
          number: 3,
          text: "Even so we, when we were children, were in bondage under the elements of the world:",
        },
        {
          number: 4,
          text: "But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law,",
        },
        {
          number: 5,
          text: "To redeem them that were under the law, that we might receive the adoption of sons.",
        },
        {
          number: 6,
          text: "And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father.",
        },
        {
          number: 7,
          text: "Wherefore thou art no more a servant, but a son; and if a son, then an heir of God through Christ.",
        },
        {
          number: 8,
          text: "Howbeit then, when ye knew not God, ye did service unto them which by nature are no gods.",
        },
        {
          number: 9,
          text: "But now, after that ye have known God, or rather are known of God, how turn ye again to the weak and beggarly elements, whereunto ye desire again to be in bondage?",
        },
        {
          number: 10,
          text: "Ye observe days, and months, and times, and years.",
        },
        {
          number: 11,
          text: "I am afraid of you, lest I have bestowed upon you labour in vain.",
        },
        {
          number: 12,
          text: "Brethren, I beseech you, be as I am; for I am as ye are: ye have not injured me at all.",
        },
        {
          number: 13,
          text: "Ye know how through infirmity of the flesh I preached the gospel unto you at the first.",
        },
        {
          number: 14,
          text: "And my temptation which was in my flesh ye despised not, nor rejected; but received me as an angel of God, even as Christ Jesus.",
        },
        {
          number: 15,
          text: "Where is then the blessedness ye spake of? for I bear you record, that, if it had been possible, ye would have plucked out your own eyes, and have given them to me.",
        },
        {
          number: 16,
          text: "Am I therefore become your enemy, because I tell you the truth?",
        },
        {
          number: 17,
          text: "They zealously affect you, but not well; yea, they would exclude you, that ye might affect them.",
        },
        {
          number: 18,
          text: "But it is good to be zealously affected always in a good thing, and not only when I am present with you.",
        },
        {
          number: 19,
          text: "My little children, of whom I travail in birth again until Christ be formed in you,",
        },
        {
          number: 20,
          text: "I desire to be present with you now, and to change my voice; for I stand in doubt of you.",
        },
        {
          number: 21,
          text: "Tell me, ye that desire to be under the law, do ye not hear the law?",
        },
        {
          number: 22,
          text: "For it is written, that Abraham had two sons, the one by a bondmaid, the other by a freewoman.",
        },
        {
          number: 23,
          text: "But he who was of the bondwoman was born after the flesh; but he of the freewoman was by promise.",
        },
        {
          number: 24,
          text: "Which things are an allegory: for these are the two covenants; the one from the mount Sinai, which gendereth to bondage, which is Agar.",
        },
        {
          number: 25,
          text: "For this Agar is mount Sinai in Arabia, and answereth to Jerusalem which now is, and is in bondage with her children.",
        },
        {
          number: 26,
          text: "But Jerusalem which is above is free, which is the mother of us all.",
        },
        {
          number: 27,
          text: "For it is written, Rejoice, thou barren that bearest not; break forth and cry, thou that travailest not: for the desolate hath many more children than she which hath an husband.",
        },
        {
          number: 28,
          text: "Now we, brethren, as Isaac was, are the children of promise.",
        },
        {
          number: 29,
          text: "But as then he that was born after the flesh persecuted him that was born after the Spirit, even so it is now.",
        },
        {
          number: 30,
          text: "Nevertheless what saith the scripture? Cast out the bondwoman and her son: for the son of the bondwoman shall not be heir with the son of the freewoman.",
        },
        {
          number: 31,
          text: "So then, brethren, we are not children of the bondwoman, but of the free.",
        },
      ],
    },
    {
      number: 5,
      verses: [
        {
          number: 1,
          text: "Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.",
        },
        {
          number: 2,
          text: "Behold, I Paul say unto you, that if ye be circumcised, Christ shall profit you nothing.",
        },
        {
          number: 3,
          text: "For I testify again to every man that is circumcised, that he is a debtor to do the whole law.",
        },
        {
          number: 4,
          text: "Christ is become of no effect unto you, whosoever of you are justified by the law; ye are fallen from grace.",
        },
        {
          number: 5,
          text: "For we through the Spirit wait for the hope of righteousness by faith.",
        },
        {
          number: 6,
          text: "For in Jesus Christ neither circumcision availeth any thing, nor uncircumcision; but faith which worketh by love.",
        },
        {
          number: 7,
          text: "Ye did run well; who did hinder you that ye should not obey the truth?",
        },
        {
          number: 8,
          text: "This persuasion cometh not of him that calleth you.",
        },
        { number: 9, text: "A little leaven leaveneth the whole lump." },
        {
          number: 10,
          text: "I have confidence in you through the Lord, that ye will be none otherwise minded: but he that troubleth you shall bear his judgment, whosoever he be.",
        },
        {
          number: 11,
          text: "And I, brethren, if I yet preach circumcision, why do I yet suffer persecution? then is the offence of the cross ceased.",
        },
        {
          number: 12,
          text: "I would they were even cut off which trouble you.",
        },
        {
          number: 13,
          text: "For, brethren, ye have been called unto liberty; only use not liberty for an occasion to the flesh, but by love serve one another.",
        },
        {
          number: 14,
          text: "For all the law is fulfilled in one word, even in this; Thou shalt love thy neighbour as thyself.",
        },
        {
          number: 15,
          text: "But if ye bite and devour one another, take heed that ye be not consumed one of another.",
        },
        {
          number: 16,
          text: "This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh.",
        },
        {
          number: 17,
          text: "For the flesh lusteth against the Spirit, and the Spirit against the flesh: and these are contrary the one to the other: so that ye cannot do the things that ye would.",
        },
        {
          number: 18,
          text: "But if ye be led of the Spirit, ye are not under the law.",
        },
        {
          number: 19,
          text: "Now the works of the flesh are manifest, which are these; Adultery, fornication, uncleanness, lasciviousness,",
        },
        {
          number: 20,
          text: "Idolatry, witchcraft, hatred, variance, emulations, wrath, strife, seditions, heresies,",
        },
        {
          number: 21,
          text: "Envyings, murders, drunkenness, revellings, and such like: of the which I tell you before, as I have also told you in time past, that they which do such things shall not inherit the kingdom of God.",
        },
        {
          number: 22,
          text: "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,",
        },
        {
          number: 23,
          text: "Meekness, temperance: against such there is no law.",
        },
        {
          number: 24,
          text: "And they that are Christ\u2019s have crucified the flesh with the affections and lusts.",
        },
        {
          number: 25,
          text: "If we live in the Spirit, let us also walk in the Spirit.",
        },
        {
          number: 26,
          text: "Let us not be desirous of vain glory, provoking one another, envying one another.",
        },
      ],
    },
    {
      number: 6,
      verses: [
        {
          number: 1,
          text: "Brethren, if a man be overtaken in a fault, ye which are spiritual, restore such an one in the spirit of meekness; considering thyself, lest thou also be tempted.",
        },
        {
          number: 2,
          text: "Bear ye one another\u2019s burdens, and so fulfil the law of Christ.",
        },
        {
          number: 3,
          text: "For if a man think himself to be something, when he is nothing, he deceiveth himself.",
        },
        {
          number: 4,
          text: "But let every man prove his own work, and then shall he have rejoicing in himself alone, and not in another.",
        },
        { number: 5, text: "For every man shall bear his own burden." },
        {
          number: 6,
          text: "Let him that is taught in the word communicate unto him that teacheth in all good things.",
        },
        {
          number: 7,
          text: "Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap.",
        },
        {
          number: 8,
          text: "For he that soweth to his flesh shall of the flesh reap corruption; but he that soweth to the Spirit shall of the Spirit reap life everlasting.",
        },
        {
          number: 9,
          text: "And let us not be weary in well doing: for in due season we shall reap, if we faint not.",
        },
        {
          number: 10,
          text: "As we have therefore opportunity, let us do good unto all men, especially unto them who are of the household of faith.",
        },
        {
          number: 11,
          text: "Ye see how large a letter I have written unto you with mine own hand.",
        },
        {
          number: 12,
          text: "As many as desire to make a fair shew in the flesh, they constrain you to be circumcised; only lest they should suffer persecution for the cross of Christ.",
        },
        {
          number: 13,
          text: "For neither they themselves who are circumcised keep the law; but desire to have you circumcised, that they may glory in your flesh.",
        },
        {
          number: 14,
          text: "But God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world.",
        },
        {
          number: 15,
          text: "For in Christ Jesus neither circumcision availeth any thing, nor uncircumcision, but a new creature.",
        },
        {
          number: 16,
          text: "And as many as walk according to this rule, peace be on them, and mercy, and upon the Israel of God.",
        },
        {
          number: 17,
          text: "From henceforth let no man trouble me: for I bear in my body the marks of the Lord Jesus.",
        },
        {
          number: 18,
          text: "Brethren, the grace of our Lord Jesus Christ be with your spirit. Amen.",
        },
      ],
    },
  ],
};

export default Galatians;
