// ========== kaomoji icons ==========
import anythingYouSayCode from '../icons/AnythingYouSay.tsx?raw';
import blushCode from '../icons/Blush.tsx?raw';
import blush2Code from '../icons/Blush2.tsx?raw';
import bokuSaikyouCode from '../icons/BokuSaikyou.tsx?raw';
import canIHaveSomeCode from '../icons/CanIHaveSome.tsx?raw';
import chubbyCode from '../icons/Chubby.tsx?raw';
import coolCode from '../icons/Cool.tsx?raw';
import fantasticCode from '../icons/Fantastic.tsx?raw';
import goAwayCode from '../icons/GoAway.tsx?raw';
import heartForYouCode from '../icons/HeartForYou.tsx?raw';
import heartForYou2Code from '../icons/HeartForYou2.tsx?raw';
import heheCode from '../icons/Hehe.tsx?raw';
import heheheCode from '../icons/Hehehe.tsx?raw';
import highFiveCode from '../icons/HighFive.tsx?raw';
import hypeCode from '../icons/Hype.tsx?raw';
import iGiveUpCode from '../icons/IGiveUp.tsx?raw';
import imJustAKidCode from '../icons/ImJustAKid.tsx?raw';
import iUnderstandCode from '../icons/IUnderstand.tsx?raw';
import lookAtYouCode from '../icons/LookAtYou.tsx?raw';
import mysteriousSmileCode from '../icons/MysteriousSmile.tsx?raw';
import nooooCode from '../icons/Noooo.tsx?raw';
import sadgeCode from '../icons/Sadge.tsx?raw';
import shyCode from '../icons/Shy.tsx?raw';
import sighCode from '../icons/Sigh.tsx?raw';
import tastyCode from '../icons/Tasty.tsx?raw';
import thatsNonsenseCode from '../icons/ThatsNonsense.tsx?raw';
import throwPetalsCode from '../icons/ThrowPetals.tsx?raw';
import throwPetals2Code from '../icons/ThrowPetals2.tsx?raw';
import wailCode from '../icons/Wail.tsx?raw';
import whatDoYouMeanCode from '../icons/WhatDoYouMean.tsx?raw';
import whateverCode from '../icons/Whatever.tsx?raw';
import whatTheCode from '../icons/WhatThe.tsx?raw';
import whatThe2Code from '../icons/WhatThe2.tsx?raw';
import whyCode from '../icons/Why.tsx?raw';
import yayCode from '../icons/Yay.tsx?raw';
import yeahOkSureCode from '../icons/YeahOkSure.tsx?raw';
import youCanDoItCode from '../icons/YouCanDoIt.tsx?raw';
import youCanDoIt2Code from '../icons/YouCanDoIt2.tsx?raw';
import zokuZoku1Code from '../icons/ZokuZoku1.tsx?raw';
import zokuZoku2Code from '../icons/ZokuZoku2.tsx?raw';

interface KaomojiCodeItem {
    name: string;
    code: string;
    usage: string;
}

const getKaomojiCode = ({name}: {name: string}) => {
    // debugger;
    const kaomojiCodeMap: Record<string, KaomojiCodeItem> = {
        AnythingYouSay: {
            name: 'anything-you-say',
            code: anythingYouSayCode,
            usage: '<AnythingYouSay />',
        },
        Blush: {
            name: 'blush',
            code: blushCode,
            usage: '<Blush />',
        },
        Blush2: {
            name: 'blush-2',
            code: blush2Code,
            usage: '<Blush2 />',
        },
        BokuSaikyou: {
            name: 'boku-saikyou',
            code: bokuSaikyouCode,
            usage: '<BokuSaikyou />',
        },
        CanIHaveSome: {
            name: 'can-i-have-some',
            code: canIHaveSomeCode,
            usage: '<CanIHaveSome />',
        },
        Chubby: {
            name: 'chubby',
            code: chubbyCode,
            usage: '<Chubby />',
        },
        Cool: {
            name: 'cool',
            code: coolCode,
            usage: '<Cool />',
        },
        Fantastic: {
            name: 'fantastic',
            code: fantasticCode,
            usage: '<Fantastic />',
        },
        GoAway: {
            name: 'go-away',
            code: goAwayCode,
            usage: '<GoAway />',
        },
        HeartForYou: {
            name: 'heart-for-you',
            code: heartForYouCode,
            usage: '<HeartForYou />',
        },
        HeartForYou2: {
            name: 'heart-for-you-2',
            code: heartForYou2Code,
            usage: '<HeartForYou2 />',
        },
        Hehe: {
            name: 'hehe',
            code: heheCode,
            usage: '<Hehe />',
        },
        Hehehe: {
            name: 'hehehe',
            code: heheheCode,
            usage: '<Hehehe />',
        },
        HighFive: {
            name: 'high-five',
            code: highFiveCode,
            usage: '<HighFive />',
        },
        Hype: {
            name: 'hype',
            code: hypeCode,
            usage: '<Hype />',
        },
        IGiveUp: {
            name: 'i-give-up',
            code: iGiveUpCode,
            usage: '<IGiveUp />',
        },
        ImJustAKid: {
            name: 'im-just-a-kid',
            code: imJustAKidCode,
            usage: '<ImJustAKid />',
        },
        IUnderstand: {
            name: 'i-understand',
            code: iUnderstandCode,
            usage: '<IUnderstand />',
        },
        LookAtYou: {
            name: 'look-at-you',
            code: lookAtYouCode,
            usage: '<LookAtYou />',
        },
        MysteriousSmile: {
            name: 'mysterious-smile',
            code: mysteriousSmileCode,
            usage: '<MysteriousSmile />',
        },
        Noooo: {
            name: 'noooo',
            code: nooooCode,
            usage: '<Noooo />',
        },
        Sadge: {
            name: 'sadge',
            code: sadgeCode,
            usage: '<Sadge />',
        },
        Shy: {
            name: 'shy',
            code: shyCode,
            usage: '<Shy />',
        },
        Sigh: {
            name: 'sigh',
            code: sighCode,
            usage: '<Sigh />',
        },
        Tasty: {
            name: 'tasty',
            code: tastyCode,
            usage: '<Tasty />',
        },
        ThatsNonsense: {
            name: 'thats-nonsense',
            code: thatsNonsenseCode,
            usage: '<ThatsNonsense />',
        },
        ThrowPetals: {
            name: 'throw-petals',
            code: throwPetalsCode,
            usage: '<ThrowPetals />',
        },
        ThrowPetals2: {
            name: 'throw-petals-2',
            code: throwPetals2Code,
            usage: '<ThrowPetals2 />',
        },
        Wail: {
            name: 'wail',
            code: wailCode,
            usage: '<Wail />',
        },
        WhatDoYouMean: {
            name: 'what-do-you-mean',
            code: whatDoYouMeanCode,
            usage: '<WhatDoYouMean />',
        },
        Whatever: {
            name: 'whatever',
            code: whateverCode,
            usage: '<Whatever />',
        },
        WhatThe: {
            name: 'what-the',
            code: whatTheCode,
            usage: '<WhatThe />',
        },
        WhatThe2: {
            name: 'what-the-2',
            code: whatThe2Code,
            usage: '<WhatThe2 />',
        },
        Why: {
            name: 'why',
            code: whyCode,
            usage: '<Why />',
        },
        Yay: {
            name: 'yay',
            code: yayCode,
            usage: '<Yay />',
        },
        YeahOkSure: {
            name: 'yeah-ok-sure',
            code: yeahOkSureCode,
            usage: '<YeahOkSure />',
        },
        YouCanDoIt: {
            name: 'you-can-do-it',
            code: youCanDoItCode,
            usage: '<YouCanDoIt />',
        },
        YouCanDoIt2: {
            name: 'you-can-do-it-2',
            code: youCanDoIt2Code,
            usage: '<YouCanDoIt2 />',
        },
        ZokuZoku1: {
            name: 'zoku-zoku-1',
            code: zokuZoku1Code,
            usage: '<ZokuZoku1 />',
        },
        ZokuZoku2: {
            name: 'zoku-zoku-2',
            code: zokuZoku2Code,
            usage: '<ZokuZoku2 />',
        },
    }
    return kaomojiCodeMap[name as keyof typeof kaomojiCodeMap];
}

export default getKaomojiCode;