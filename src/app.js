const express = require("express");
require("./mongoose");
const userRouter = require("./routers/user");
const adminRouter = require("./routers/admin");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(adminRouter);

app.get("/coins", (req, res) => {
    res.send([
        {
            "_id": "65c10818654aad0e513c24f0",
            "title": "25 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_FCBiMxWdF_20240205",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_FCBiMxWdF_20240205",
            "description": "Free Gift for Coin Master",
            "promo": false,
            "createdAt": "2024-02-05T16:08:56.252Z",
            "updatedAt": "2024-02-05T16:08:56.252Z", "__v": 0
        },
        {
            "_id": "65c0d874654aad0e513c0bdf",
            "title": "25 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_EMAILmqjKiY_20240131",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_EMAILmqjKiY_20240131",
            "description": "Free Gift for Coin Master",
            "promo": false,
            "createdAt": "2024-02-05T12:45:40.392Z",
            "updatedAt": "2024-02-05T12:45:40.392Z",
            "__v": 0
        }, {
            "_id": "65c0c71a654aad0e513c00ce",
            "title": "25 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_FCBXZNsFE_20240205",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_FCBXZNsFE_20240205",
            "description": "Free Gift for Coin Master",
            "promo": false,
            "createdAt": "2024-02-05T11:31:38.434Z",
            "updatedAt": "2024-02-05T11:31:38.434Z",
            "__v": 0
        }, {
            "_id": "65c0c6e0654aad0e513c0080",
            "title": "60 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_RICHnGEcf_20240201",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_RICHnGEcf_20240201",
            "description": "Free Gift for Coin Master",
            "promo": false,
            "createdAt": "2024-02-05T11:30:40.011Z",
            "updatedAt": "2024-02-05T11:30:40.011Z",
            "__v": 0
        }, {
            "_id": "65c0b5c4654aad0e513bf88c",
            "title": "10 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_INSgjIOyV_20240205",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_INSgjIOyV_20240205",
            "description": "Free Gift for Coin Master",
            "promo": false,
            "createdAt": "2024-02-05T10:17:40.337Z",
            "updatedAt": "2024-02-05T10:17:40.337Z",
            "__v": 0
        }, {
            "_id": "65c09c47654aad0e513bf04d",
            "title": "25 Spins",
            "originalLink": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_CHATBjTkvYX_20240205",
            "link": "https://rewards.coinmaster.com/rewards/rewards.html?c=pe_CHATBjTkvYX_20240205",
            "description": "Free Gift for Coin Master",
            "promo": false, "createdAt": "2024-02-05T08:28:55.401Z",
            "updatedAt": "2024-02-05T08:28:55.401Z",
            "__v": 0
        }
    ]);
});

const tipsArr = [
    {
        "title": "Bet",
        "description": "If you have a lot of spins, you can place a bet or so called a Spins Bet on 2 or 3 spins at a time. What you get will also triple, except for the hammer that destroys your friends' houses. Amount of spins, spins, shields...\nThe higher the number of spins in your inventory, the more you can increase your bet, for example x10, x20, x40, x80, x100 or more, that's called Super Bet. Especially when you can turn a pig face and steal gold from friends' houses. The amount of gold stolen will increase many times, if your spins are small, the Super Bet will not be turned on and you can only bet 3 times the maximum.",
        "text_icon": null,
        "icon_url": null
    },
    {
        "title": "What is Super Bet",
        "description": "Super Bet is a new feature in Coin Master that enhances the player\\'s game experience by increasing rewards! The more Spins in the player\\'s balance, the higher they can bet! With 200 Spins, Super Bet reaches X5, with 500 Spins it goes up to X8, with 1000 Spins the player can bet up to X10, with 2800 Spins bets can go all the way up to X25, and with 5000 Spins bets reach X50!",
        "text_icon": null,
        "icon_url": null
    },
    {
        "title": "What are Cards?",
        "description": "Cards are collectible items that are found throughout the game. Nine unique Cards make up each themed Collection.\n \nEach completed Collection rewards players with spins and other great gifts as well - including Pets! The rarer the Collection of Cards, the bigger the reward!\n \nWhen it comes to finding new Cards, the village level determines the cards that can be found in chests and their rarity as well.\n \nPlease note that Gold Cards can be found in higher Villages than you will find the rest of the cards.\n \nYou can also trade normal Cards with your friends at any time and Gold Cards during special Gold Card Trading events.",
        "text_icon": "cards-image.png",
        "icon_url": "cards.png"
    },
    {
        "title": "How to deposit more than 5 cards in a day Coin Master",
        "description": "Players can deposit cards in Coin Master if they have excess cards. The limit is 5 cards per day, this number cannot satisfy gamers when the sender also wants to receive support from other gamers.\nTo deposit more than 5 tokens in Coin Master, simply change the date on your phone. With a gap of at least 24 hours, you can send 5 more cards to gamers in need and repeat the next day. The second way is to remove the game and re-download, after reloading you are sent 5 more cards.",
        "text_icon": null,
        "icon_url": null
    },
    {
        "title": "Gold Card Trade",
        "description": "During these very special events, players will have the ability to trade two Gold Cards which are shown in the pop-up.\nThis is a perfect opportunity to finish card collections as well as to help friends in their mission to finish their own collections!",
        "text_icon": "cards-image.png",
        "icon_url": "cards.png"
    },
    {
        "title": "What is Joker Card?",
        "description": "The Joker Card is a phenomenal prize which can be earned during events or found in mystery chests! It gives you the power to transform it into any card that you wish, including Gold cards! Make sure to use the Joker Card within its expiry time to get the card you that need!",
        "text_icon": null,
        "icon_url": null
    },
    {
        "title": "Completing Card Sets",
        "description": "Completing Card Collections is a great way to earn Spins! Each completed Collection rewards players with spins and other great gifts as well - including Pets! The rarer the Collection of Cards, the bigger the reward! When it comes to finding new Cards, the village you are in determines the cards you will receive from chests and their rarity as well.\n\nPlease note that Gold Cards can be found in higher Villages than you will find the rest of the cards. You can also trade normal Cards with your friends at any time and Gold Cards during special Gold Card Trading events",
        "text_icon": "cards-image.png",
        "icon_url": "cards.png"
    },
    {
        "title": "How do I get cards?",
        "description": "Here are some fun ways you can get some Cards:\n\nExchange your Cards for Chests. Each chest has a combination of Spins, Pet XP, and Cards, so you will have a chance to get even more items!\n\nParticipate in our Events for the opportunity to win some awesome rewards, including (you guessed it!) Cards. \n\nGet Chests using Coins 🪙 at the in-game shop. \n\nTrade Cards ↔️ with friends. Your friends may have cards you need and vice versa - help each other out! 🧑‍🤝‍🧑\n\nSwap cards ↔️ with team members. Being a part of a Coin Master Team comes with many benefits, and one of them is the ability to share cards with your teammates. 🤝\n\nJoin the Coin Master Card Trading communities on Facebook. You have a great chance of getting Cards, plus they’re also a great place to meet players and make new friends! Visit the Trading Card Group to make a post with the Cards you need and the ones you are offering to others. \n\nCards are spread throughout our many Villages, so get out the tools and continue building your Villages. 🛠 \n\n💫 Keep in mind that Cards can be traded at any time within the daily limit, and Gold Cards can be traded during special events.\n\n\n\nEnjoy adding to your Card Collection!",
        "text_icon": "cards2.png",
        "icon_url": "cards.png"
    },
    {
        "title": "How do I trade cards?",
        "description": "Card Trades themselves are set up by players over different platforms such as Facebook Messenger.\n\nTo send a card, open your card collections by pressing on the card icon found at the bottom right corner of the screen. Then, tap on the set containing the card you want to send. Tap on the card you wish to send and then on the Send button which will open up a list of friends. Please note that you can only send a card if you have more than 1, and Gold Cards can only be traded during special events.",
        "text_icon": "cards3.png",
        "icon_url": "cards.png"
    },
    {
        "title": "What are chests?",
        "description": "Chests are items in the game that contain collectable Cards. They come in three different tiers - Wooden, Golden, and Magical.\n\nThe Wooden chest contains 2 Cards, the Golden contains 4, and the Magical Chest contains 8.\n\nChests can be obtained in a number of different ways. While playing the game, you have the chance of digging up a chest during Raids, and finishing villages may reward you with a chest as well. On top of that, Chests can always be bought using Coins in the in-game Shop.",
        "text_icon": "chests-full.png",
        "icon_url": "chest.png"
    },
    {
        "title": "Buy chests in different villages",
        "description": "You should buy chests in a different village. Why because every village has different rare and yellow cards. If you don't buy them then it will be hard to get them when you are in higher villages.\nMany people think that 1 to 1.5 billion gold coins should be spent just to buy chests in each village. In some villages it is more important to stay and buy chests a little longer than to go to the next village. Because there you can find more yellow and rare cards.",
        "text_icon": null,
        "icon_url": null
    },
    {
        "title": "When to buy chests",
        "description": "Trick 1: This is my favorite trick. Look at the last card in the chest and count the stars. If it has 1-2 stars buy a wooden, if 3 buy gold and 4-5 buy a magical. Do this and you will get more new cards. If you have bought coins for a hundred of millions and you don't get any new cards. I would recommend moving to the next level. Just make sure there aren't any rare cards left to find.\n\nTrick 2: Start off with buying wooden chests and buy until the last card is 3 stars or more. Then move to the golden chest and continue buying until the last card is 4 stars or golden. Then start buying magical chests until the last card is golden. After this step, start over and repeat.\n\nTrick 3: Buy 20 chests of each type. Example: 20 wooden, 20 gold and 20 magical.\n\nTrick 4: When reaching a new level, build all your village objects to 2 stars each. Then start buying chests.",
        "text_icon": "chests-full.png",
        "icon_url": "chest.png"
    },
    {
        "title": "What Is Cards for Chests?",
        "description": "Trade your duplicate cards for brand new chests!\n\nNow it is possible to trade your duplicate cards for 3 new types of chests, each of which presents a different combination of rewards with varying amounts of Spins, Pet XP, and Cards!\n\nEach card shows a number of stars at the top that show its value, and these numbers are added up when selecting which cards to trade for a new chest. This feature will automatically select the cards for you, but this can be disabled by tapping on the Select cards for me checkbox to allow for manual selection of cards to trade.\n\nAfter a chest is traded for, a timer will appear which will lock the trade for another chest of the same type for a certain amount of time. However, this timer can be skipped a certain number of times with the use of coins.\n\nDon not worry, the card trade will not decrease your game stars!",
        "text_icon": "cards-chest.png",
        "icon_url": "chest.png"
    },
    {
        "title": "Reward Calendar",
        "description": "The Rewards Calendar is one of our awesome daily rewards that you can get when logging into the game, once you have reached village 11.\n\nThe Rewards Calendar is divided into two parts: on the top of the calendar there is a 30-day progress bar with different rewards along the way, where day 30 holds a grand prize. Below, there are seven rewards, you can collect one of these rewards every 24 hours while also adding a point to the progress bar above.\n\nIf you miss a day you will be set back to day 1 for the daily reward but rest assured that the 30-day progress bar will not be affected.",
        "text_icon": "reward-calendar.png",
        "icon_url": "rewards.png"
    }
];

app.get("/tips", (req, res) => {
    res.send(tipsArr);
});

const guideArr = [
    {
        "title": "How to Protect Village",
        "description": "You can protect your village by collecting shield which protects your village from attacks and you can collect maximum 3 shields for protecting your village if someone tries 3 times to attack than your village become unsafe again so collect shield again and again to protect village",
        "text_icon": "mFTgHL6.png"
    },
    {
        "title": "What are attacks?",
        "description": "Attacks, which are represented by Hammers on the Spinner, are a way for players to earn coins while also adding challenge to their friends’ quests to finish their villages.\n\nWhen you land an Attack on the Spinner, the game will automatically transport you to a village of a random player or friend, and there you will have the option to either attack that player or choose someone else from your Friends or Revenge lists which are displayed at the top of the screen.\n\nWithout a shield, an Attack from another player reverts the item back one level. This also removes a Star from the total number the attacked player has acquired. If the player being attacked is protected by a Shield or the Rhino, the oncoming Attack will be deflected and will not damage the Village.",
        "text_icon": "fsLHwot.png"
    },
    {
        "title": "What are raids?",
        "description": "Raids are one of the action items on the Spinner.\n\nWhen you spin a Raid, the game will transport you to another players’ Village and give you 3 shovels and 4 spots marked by an X where you can dig.\n\nIn each raid, 3 of the spots contain Coins or Chests, while the 4th is empty. The pet Foxy, which is unlocked at village 4, can help earn more coins in raids by digging up the 4th spot.\n\nThe player that you Raid is known as the Coin Master and is a friend, or random player, with the highest number of Coins.",
        "text_icon": "raids.png"
    },
    {
        "title": "What are Shields?",
        "description": "Shields, wonderful Shields!🛡 Earn these powerful items by landing on three Shields in the Spinner. They’re just what the doctor ordered to defend your Village from attacks, so stock up on them to keep your Village safe and sound. 🏡\n\nAs soon as you have a Shield, it will automatically protect your Village from another player attack; you don’t even have to lift a finger! The funny thing about Shields though, is they can only be used once, so fill up on them when you can. \n\nCan I buy Shields in the shop?\n\nThe only way to obtain Shields is by winning them in the Spinner, which means they aren’t available to purchase in the shop.\n\nWhere can I check how many Shields I have?\n\nYour Shields are located in the upper right-hand corner of the game screen, in between your and the Main Menu. When a Shield is used to defend your Village from an attack, you’ll notice that one gets removed from your inventory.\n\nHow many Shields can I have?\n\nThe Village you are in determines the maximum number of Shields you can have at once. To check how many are available for you to collect, see your Shields inventory in the upper right-hand corner of the game screen. ",
        "text_icon": "shield.jpeg"
    },
    {
        "title": "Spins and Coins Rewards",
        "description": "You can get daily spins by links which are officially published by Coin Master Team and These links are published through different social media.\nThere are many websites which gives you daily links for spins and coins!",
        "text_icon": "sD6nmWX.png"
    },
    {
        "title": "Daily Bonus Wheel",
        "description": "Spin the Daily Bonus Wheel once every 24 hours to win free Coins! Once the Coins have been collected, the player will be presented with a countdown timer towards the next free Daily Bonus Spin!\nAside from this, there is always the option to buy a spin on the Daily Bonus Wheel which will be presented in Gold and offers the opportunity to earn incredible rewards.\nThe message that the Bonus Coin Wheel is Now 10X better! refers to the fact that the amounts that can be won now are 10 times higher than they used to be in the past.\nThe numbers on the wheel show what will be received.\nBoth versions of the Daily Bonus Wheel level up alongside the player, with the rewards increasing with each step.",
        "text_icon": null
    },
    {
        "title": "Diamond Tournament",
        "description": "Coin Master is ready to challenge you in the new Tournament! - a fun new Multi Player event that allows players to compete with one another and track each others’ progress LIVE!\n\nPlayers are split into groups of 50 and compete to become the number 1 Coin Master on the Tournament Leader-board! In order to join the tournament, each player will first need to earn a certain number of Diamonds by fulfilling various actions including Attacks and Raids.\nEvery action completed will be reflected on the trophy icon seen at the top right corner of the screen!\nThis number will represent your rank on the Leaderboard where you will also be able to see your potential rewards as well as the stiff competition ahead!",
        "text_icon": null
    },
    {
        "title": "What are Pets?",
        "description": "The Pets in the game are your companions in the quest to conquer and become the Coin Master! Pets help players in different aspects of the game, be it increasing attack or raid rewards, or helping to protect your Village from attacks.\n\nHatch Foxy when you reach the Inca village and journey with him as you collect cards to complete sets and unlock new Pets!\n\nWhere Can I Find My Pets?\n\nPets are available from Village 4 and can be found to the left of the SPIN button. There, you will see one of the Pets and simply tap the pet to go to the Pet Area, where you feed your pet to keep them awake and give them Pet XP to level them up!",
        "text_icon": "mFTgHL6.png"
    },
    {
        "title": "How Can I Activate All My Pets?",
        "description": "Get ready to unleash the power of all your animal friends! 🦊🐯🦛\n\nExperience the excitement of unlocking all of your Pets at once! 🥳\n\nSimply feed any of your hatched Pets to keep them awake and get their help boosting your Attack 🔨and Raid 🐷 rewards, as well as protecting your Village from Attacks. \n\n🐷Coin Master Note: Losing track of your pet friends? 🐾 No problem! You will not see Rhino on the main screen, but if he is fed and awake, he can still help protect your Village from Attacks. And, all your adorable creatures can be found and monitored on the Pets screen.\n\nThis feature is only available on higher levels, so if you don not see it yet, keep advancing and you will get it soon!\n\nWe hope you enjoy the benefits of having all your furry friends by your side! ",
        "text_icon": "pets.png"
    },
    {
        "title": "Keep your pets awake",
        "description": "If you feed your pet, it will help you within 4 hours. If you feed it but can't play for these 4 hours, it's a waste. So just feed the pet if you can play long enough.\nOne extra tip here is that everyone gets 15 minutes of free pet ownership every 24 hours. If you only have a few minutes to play then use this. Also, if it's available you should use it when you can play longer. This will not cost your pet food.",
        "text_icon": null
    },
    {
        "title": "What are stars?",
        "description": "The Stars collected throughout the game are used to keep rank and place players on the Leaderboards.\n\nStars can be earned by building your Village items, and by collecting new Cards and emotes. Village items reward one star per upgrade, while Cards and emotes reward the number of stars displayed on them.\n\nWhen a player Attacks a Village and lands a direct hit on one of the items, it removes one star from the item as well as from the overall stars collected.\n\nPlease note that duplicate Cards and emotes will not grant you stars.",
        "text_icon": "sD6nmWX.png"
    },
    {
        "title": "What is Friend invite limit?",
        "description": "There is a limit on the number of rewards that a single player can receive from friends who have joined the game. Once a player has collected Spins from 250 friends who joined the game, they will no longer be able to receive such rewards. \n How to Completing card collections? Completing Card Collections isa great way to earn Spins!",
        "text_icon": null
    },
    {
        "title": "How do add friends?",
        "description": "To add friends in the game you will you first need to sign in to your Facebook account. See this post on how to do that. Inviting friends can be done through the pop-ups that you will see in the game while playing, or by tapping on the menu icon on the top right corner of the screen and pressing on Invite Friends.",
        "text_icon": null
    },
    {
        "title": "Get VIPs",
        "description": "Unlike other online games, to become a VIP of Coin Master. You must be invited by Coin Master, and there is no way for you to actively become a Coin Master VIP. There is only one advice that you have to spend money in the game and level up fast.",
        "text_icon": null
    },
    {
        "title": "Join Coin Master groups on Facebook",
        "description": "If you are a new player, you can join Coin Master groups and fanpages on Facebook. You can ask questions in groups and fanpages or on other people's posts about what you have questions about.\nIn addition, you will earn spins and redeem tokens in Coin Master to play. So this social network will be the place for you to quickly gain experience in Coin Master.",
        "text_icon": null
    },
    {
        "title": "Having multiple Coin Master accounts",
        "description": "There are many people who use a second Facebook account to play Coin Master, called a secondary account. You can use this sub-account to get more gold or rare cards, especially if they missed these in their main account.\nFor every 2nd account on Coin Master, of course you must have a 2nd Facebook account. To switch between accounts, some players use the app cloner to have multiple Coin Master instances and Facebook on the same device. Or simply log out of the main Coin Master account and log in to the secondary account.",
        "text_icon": null
    },
    {
        "title": "Touch two fingers when going to steal gold",
        "description": "Every time it is a turn to spin the pig face, many gamers are happy because there is about to be an amount of money to deposit into the treasury. You will have 3 turns to steal gold on 4 points in your friend's house, and if you are unlucky, 1 of these 3 turns will have a spray - No Coin, not to mention less money.\nIf you have an animal to follow, it will dig for the last box for you, but if not, you can tap two fingers at the same time on the last two points. You will receive money in both boxes, so remember to touch both boxes at the same time.",
        "text_icon": null
    }
];

app.get("/guide", (req, res) => {
    res.send(guideArr);
});

app.get("", (req, res) => {
    res.send("Backend Service Running");
});

module.exports = app;