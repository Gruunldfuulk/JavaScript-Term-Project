var data = 
{
  "start": {
    "start": "page",
    "text": "<h2>Chapter 1: A new Adventure</h2>Welcome to the new world of Ayreona, please select your difficulty level...",
    "stage": "age",
    "choices": [
      {
        "text": "Easy",
        "prompt": "a wealthy and strong start as a(an) ",
        "action": "player.strength = 40; inventory.gold = 150"
      },
      {
        "text": "Normal",
        "prompt": "an ordinary start as a(an) ",
        "action": "player.strength = 20; inventory.gold = 50"
      },
      {
        "text": "Hard",
        "prompt": "a poor and weak start as a(an) ",
        "action": "player.strength = 10; inventory.gold = 0"
      }
    ]
  },
  "age": {
    "start": "none",
    "stage": "race",
    "choices": [
      {
        "text": "Teen",
        "prompt": "teenage ",
        "action": "player.age = 13; player.strength *= 0.6"
      },
      {
        "text": "Young adult",
        "prompt": "young ",
        "action": "player.age = 18"
      },
      {
        "text": "Adult",
        "prompt": "grown-up ",
        "action": "player.age = 32; player.strength *= 1.2"
      }
    ]
  },
  "race": {
    "start": "none",
    "stage": "role",
    "choices": [
      {
        "text": "Boy",
        "prompt": "boy, ",
        "action": "player.gender = 'male'; player.race = 'boy'",
        "condition": "player.age < 18"
      },
      {
        "text": "Girl",
        "prompt": "girl, ",
        "action": "player.gender = 'female'; player.race = 'girl'",
        "condition": "player.age < 18"
      },
      {
        "text": "Man",
        "prompt": "man, ",
        "action": "player.gender = 'male'; player.race = 'man'; player.strength *= 1.5",
        "condition": "player.age >= 18"
      },
      {
        "text": "Woman",
        "prompt": "woman, ",
        "action": "player.gender = 'female'; player.race = 'woman'",
        "condition": "player.age >= 18"
      },
      {
        "text": "Elf",
        "prompt": "elf, ",
        "action": "player.gender = 'neutral'; player.race = 'elf'; player.strength *= 2"
      }
    ]
  },
  "role": {
    "start": "none",
    "text": "lived my life as a ",
    "stage": "name",
    "choices": [
      {
        "text": "Priest",
        "prompt": "priest, beholding the glorious mission of communicating with the gods, and also protected by the holy cross. ",
        "action": "player.role = 'priest'; inventory.cross = true"
      },
      {
        "text": "Knight",
        "prompt": "knight, training with my sword to protect the kingdom, with some guard duty. ",
        "action": "player.role = 'knight'; inventory.sword = true"
      },
      {
        "text": "Hunter",
        "prompt": "hunter, gathering pelts and plants, and cutting trees for houses. ",
        "action": "player.role = 'hunter'; inventory.bow = true"
      },
      {
        "text": "Fisher",
        "prompt": "fisher, staying on the water for most of the time and catching all sorts of fishes. ",
        "action": "player.role = 'fisher'; inventory.boat = true"
      }
    ]
  },
  "name": {
    "start": "none",
    "text": "People called me ",
    "stage": "location",
    "choices": [
      {
        "text": "Joy",
        "prompt": "Joy, the one who brought happiness all over the world. ",
        "action": "player.name = 'Joy'",
        "condition": "player.gender == 'female'"
      },
      {
        "text": "Alys",
        "prompt": "Alys (Medieval form of Alice). ",
        "action": "player.name = 'Alys'",
        "condition": "player.gender != 'male'"
      },
      {
        "text": "Ellyn",
        "prompt": "Ellyn (Medieval form of Helen). ",
        "action": "player.name = 'Ellyn'",
        "condition": "player.gender != 'male'"
      },
      {
        "text": "Roland",
        "prompt": "Roland. ",
        "action": "player.name = 'Roland'",
        "condition": "player.gender == 'male'"
      },
      {
        "text": "Rulf",
        "prompt": "Rulf. ",
        "action": "player.name = 'Rulf'",
        "condition": "player.gender != 'female'"
      },
      {
        "text": "Arthur",
        "prompt": "Arthur. ",
        "action": "player.name = 'Arthur'",
        "condition": "player.gender != 'female'"
      },
      {
        "text": "Aldus",
        "prompt": "Aldus. ",
        "action": "player.name = 'Aldus'"
      }
    ]
  },
  "location": {
    "start": "none",
    "text": "It all started that afternoon ",
    "choices": [
      {
        "text": "In temple",
        "prompt": "in the holy temple. ",
        "stage": "t2"
      },
      {
        "text": "Near village",
        "prompt": "on the grassland near the village. ",
        "stage": "g1"
      },
      {
        "text": "At mountain",
        "prompt": "near the camp beneath the mountain. ",
        "stage": "m2"
      },
      {
        "text": "In forest",
        "prompt": "deep in the forest. ",
        "stage": "f4"
      },
      {
        "text": "In cave",
        "prompt": "in the dark, scary cave. ",
        "stage": "c2"
      },
      {
        "text": "On stream",
        "prompt": "on the stream at the south of the village. ",
        "stage": "s3",
        "condition": "player.role == 'fisher'"
      }
    ]
  },
  "r1": {
    "text": [
      "Here I could see the holy temple between the mountains on its sides. The temple stood firmly on the west, providing its glorious protection to all the people. ",
      "The holy temple was not far on the west. "
    ],
    "choices": [
      {
        "text": "Towards temple (west)",
        "prompt": "I went towards the temple. ",
        "stage": "t1"
      },
      {
        "text": "To road (east)",
        "prompt": "I walked away from the temple. ",
        "stage": "r2"
      }
    ]
  },
  "r2": {
    "text": [
      "There seemed to be no end of this road. It was so long that it could take hours to go from one side to another. ",
      "I came back to this \"so short\" path again. "
    ],
    "choices": [
      {
        "text": "To road (west)",
        "prompt": "I headed towards the west. ",
        "stage": "r1"
      },
      {
        "text": "To road (east)",
        "prompt": "I went to the east. ",
        "stage": "r3"
      }
    ]
  },
  "r3": {
    "text": [
      "An ancient road sign told travellers the directions everywhere. ",
      "Here was the road sign. "
    ],
    "choices": [
      {
        "description": [
          "The village on the north casted a long, narrow shadow on the grassland. ",
          "Village was on the north. "
        ],
        "text": "To grassland (north)",
        "prompt": "I decided to go to the grassland. ",
        "stage": "g1"
      },
      {
        "description": [
          "The holy temple was a bit far from here, to the west. ",
          "Temple was on the west. "
        ],
        "text": "Towards temple (west)",
        "prompt": "I chose to walk towards the temple. ",
        "stage": "r2"
      },
      {
        "description": [
          "The island on the stream to the south glowed softly under the sunlight. ",
          "Island was on the south. "
        ],
        "text": "To island (south)",
        "prompt": "I went onto the little island. ",
        "stage": "s1"
      },
      {
        "description": [
          "The High Mountain, on the east, could be seen even here. ",
          "And the mountain was on the east. "
        ],
        "text": "Towards mountain (east)",
        "prompt": "I walked towards the mountain. ",
        "stage": "r4"
      }
    ]
  },
  "r4": {
    "text": [
      "The road between the temple and the High Mountain ended here. ",
      "Here was the end of the road. "
    ],
    "choices": [
      {
        "text": "To road (west)",
        "prompt": "I went towards the temple. ",
        "stage": "r3"
      },
      {
        "text": "To mountain base (east)",
        "prompt": "I chose to go to the mountain. ",
        "stage": "m1"
      },
      {
        "description": "A house could be seen on the north. ",
        "text": "To house (north)",
        "prompt": "I decided to go for the house. ",
        "stage": "g2"
      }
    ]
  },
  "r5": {
    "text": [
      "Walking on the path between the temple and the forest, I could hear the water sneaking by. ",
      "The stream flew quietly to the west. "
    ],
    "choices": [
      {
        "text": "To temple (north)",
        "prompt": "I walked to the temple. ",
        "stage": "t1"
      },
      {
        "text": "To forest (south)",
        "prompt": "I walked into the forest. ",
        "stage": "f1"
      }
    ]
  },
  "t1": {
    "text": [
      "The huge holy temple stood high to the cloud. ",
      "The temple stood guard here for this peaceful place. "
    ],
    "choices": [
      {
        "text": "Go into the temple",
        "prompt": "I went inside. ",
        "stage": "t2"
      },
      {
        "description": "The main road on the east led to High Mountain and the stream. ",
        "text": "To road (east)",
        "prompt": "I went onto the main road. ",
        "stage": "r1"
      },
      {
        "description": "To the south was the road to the forest. ",
        "text": "To road (south)",
        "prompt": "I headed to the forest. ",
        "stage": "r5"
      }
    ]
  },
  "t2": {
    "text": [
      "The temple was huge and gorgeous. After all, it was the place of the God. No one was here in the hall though. ",
      "The great hall in the temple seemed a bit lonely. "
    ],
    "choices": [
      {
        "text": "To stairs",
        "prompt": "I walked to the stairs. ",
        "stage": "t3"
      },
      {
        "text": "Go out",
        "prompt": "I went outside. ",
        "stage": "t1"
      }
    ]
  },
  "t3": {
    "text": [
      "I came to the stairs. The curved stairs were unique in the world - it was never seen elsewhere. ",
      "The beautiful stairs rotated and swirled on the side of the temple. "
    ],
    "choices": [
      {
        "text": "Go upstairs",
        "prompt": "I went upstairs. ",
        "stage": "t5"
      },
      {
        "text": "Go downstairs",
        "prompt": "I walked downstairs. ",
        "stage": "t4"
      },
      {
        "text": "Go outwards",
        "prompt": "I decided to go out. ",
        "stage": "t2"
      }
    ]
  },
  "t4": {
    "text": [
      "Here was the basement in the temple. Ancient and dark. ",
      "It was really dark down here. {!inventory.clean ? 'And really dirty. ' : 'But much cleaner than it was. '}"
    ],
    "choices": [
      {
        "description": "I could clean it to earn {!inventory.clean ? 'some' : 'more'} gold from the priest. ",
        "text": "Clean",
        "prompt": [
          "Getting more gold was always a good thing to do. So I cleaned the basement. ",
          "I did the cleaning again. "
        ],
        "action": "inventory.clean += 1",
        "stage": "t3",
        "condition": "visited.priest_clean"
      },
      {
        "text": "Go upstairs",
        "prompt": "I walked upstairs. ",
        "stage": "t3"
      }
    ]
  },
  "t5": {
    "text": [
      "The priest stood silently under the giant golden cross. ",
      "The priest had been standing here for as long as I remembered. "
    ],
    "choices": [
      {
        "text": "Talk to him",
        "prompt": "I slowly approached him. ",
        "stage": "priest_welcome"
      },
      {
        "text": "Go downstairs",
        "prompt": "I went downstairs. ",
        "stage": "t3"
      }
    ]
  },
  "priest_welcome": {
    "text": [
      "\"Welcome, my child,\" said the priest. \"What can I do for you?\" ",
      "\"What else do you need?\" asked the priest. ",
      "\"Anything else?\" "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "Earn money",
        "prompt": "\"Is there a way that I can get some money?\"",
        "stage": "priest_clean",
        "condition": "!inventory.clean"
      },
      {
        "text": "Get reward",
        "prompt": "\"I've cleaned the basement. I'm here for the gold.\" ",
        "stage": "priest_reward",
        "condition": "inventory.clean"
      },
      {
        "text": "Ask for cross",
        "prompt": [
          "\"Can you give me a cross?\" ",
          "\"I really need the cross.\""
        ],
        "stage": "priest_cross",
        "condition": "!inventory.cross"
      },
      {
        "text": "Leave",
        "prompt": "\"Nothing, thanks.\" ",
        "stage": "t5"
      }
    ]
  },
  "priest_clean": {
    "text": [
      "\"The basement has always been dirty. If you could clean it for me, I'll give you 10 gold for each time you do it.\" ",
      "\"You could always clean the basement for some gold.\" "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "All right",
        "prompt": [
          "\"All right.\" I said. \"I'll clean it when I got time.\" ",
          "\"Okay.\" "
        ],
        "action": "inventory.clean = 0",
        "stage": "priest_welcome"
      }
    ]
  },
  "priest_reward": {
    "text": "\"Sure. Here's your reward. A total of {inventory.clean * 10} gold.\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Thanks",
        "prompt": "\"Thanks.\" I now had {inventory.gold += inventory.clean * 10} gold in total. ",
        "action": "inventory.clean = 0",
        "stage": "priest_welcome"
      }
    ]
  },
  "priest_cross": {
    "text": [
      "\"What do you need that for?\" asked the priest. \"You know that it's something with great value.\" ",
      "\"You still want it?\" "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "Protection",
        "prompt": "\"I need it to protect myself.\" ",
        "stage": "priest_cross_failed"
      },
      {
        "text": "Please?",
        "prompt": "\"Please? Can't you give me one? Just one, please?\" I begged. ",
        "stage": "priest_cross_success",
        "condition": "player.gender == 'female' ? player.age < 16 : player.age < 10"
      },
      {
        "text": "Nothing",
        "prompt": "\"Nothing, sorry.\" ",
        "stage": "priest_welcome"
      }
    ]
  },
  "priest_cross_success": {
    "text": "\"Um, all right, okay,\" said the priest. \"Here you are. Don't drop it though.\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Thanks",
        "prompt": "\"Thanks a lot.\" ",
        "action": "inventory.cross = true",
        "stage": "priest_welcome"
      }
    ]
  },
  "priest_cross_failed": {
    "text": [
      "\"Sorry, no,\" he shaked his head. \"The Holy Cross is only for holy business, not self-protection.\" ",
      "\"Nope,\" he said. \"Not for you.\" "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "All right",
        "prompt": "\"All right.\" ",
        "stage": "priest_welcome"
      }
    ]
  },
  "g1": {
    "text": [
      "Soft wind breezed from the distant. It was so pleasant to be on the grassland. ",
      "The grassland always brought me a pleasant feeling whenever I walked on it. "
    ],
    "choices": [
      {
        "text": "To house (north)",
        "prompt": "I went to the house on the north. ",
        "stage": "g3"
      },
      {
        "text": "To house (east)",
        "prompt": "I went to the house on the east. ",
        "stage": "g2"
      },
      {
        "text": "To road (south)",
        "prompt": "I walked to the main road. ",
        "stage": "r3"
      }
    ]
  },
  "g2": {
    "text": [
      "The villager's house looked so ordinary from the outside - but the villager inside was differnt. He knew how to tell stories. And he knew a lot of legends. ",
      "The story-teller villager lived here in the house. "
    ],
    "choices": [
      {
        "text": "Go inside",
        "prompt": "I went inside. ",
        "stage": "villager_welcome"
      },
      {
        "text": "To grassland (west)",
        "prompt": "I went to the grassland. ",
        "stage": "g1"
      },
      {
        "text": "To road (south)",
        "prompt": "I headed to the road on the south. ",
        "stage": "r4"
      }
    ]
  },
  "g3": {
    "text": [
      "The house here was abandoned long ago. Not many people lived here, after all. ",
      "I came back to the abandoned house. "
    ],
    "choices": [
      {
        "text": "To grassland (south)",
        "prompt": "I walked back to the grassland. ",
        "stage": "g1"
      }
    ]
  },
  "villager_welcome": {
    "text": [
      "\"I'm going to tell you a story,\" said the villager. \"A story about a legendary treasure.\" ",
      "\"What else do you want to know?\" ",
      "\"Want to know about something?\" "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "What's that",
        "prompt": "\"What's that treasure?\" ",
        "stage": "villager_story",
        "condition": "!visited.villager_welcome"
      },
      {
        "text": "Bandits",
        "prompt": "\"Do you know something about the bandits?\" ",
        "stage": "villager_bandits",
        "condition": "visited.adventurer_robbed"
      },
      {
        "text": "No interest",
        "prompt": "\"Sorry, I have no interest in the story.\" I said. \"See you then.\" ",
        "stage": "g2",
        "condition": "!visited.villager_welcome"
      },
      {
        "text": "Bye",
        "prompt": "\"See you,\" I said, and left the house. ",
        "stage": "g2",
        "condition": "visited.villager_welcome"
      }
    ]
  },
  "villager_story": {
    "text": "\"The treasure is known to be on that mountain, to the east, called High Mountain,\" he started. \"There was a legendary name for that treasure. It was called Stone of Power. I heard that there's an adventurer beneath the mountain who's trying to climb it. Might want to check it out yourself.\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Thanks",
        "prompt": "\"Wonderful story.\" ",
        "stage": "villager_welcome"
      }
    ]
  },
  "villager_bandits": {
    "text": [
      "\"Oh? The bandits?\" He said. \"They were probably in the cave behind the forest. Better be careful when dealing with them, though. A single {player.race} is no match against them.\" ",
      "\"The bandits are normally in the cave behind the forest. Be careful around them.\" "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "Thanks",
        "prompt": "\"Thank you. I'll be extra careful.\" ",
        "stage": "villager_welcome"
      }
    ]
  },
  "m1": {
    "text": [
      "I came to the base of the High Mountain. It was such a huge mountain. ",
      "I was now back to the base of the mountain. "
    ],
    "choices": [
      {
        "text": "To camp (east)",
        "prompt": "I walked towards the camp. ",
        "stage": "m2"
      },
      {
        "description": "The road to the village, temple and forest stayed on the west. ",
        "text": "To road (west)",
        "prompt": "I decided to go to the main road. ",
        "stage": "r4"
      }
    ]
  },
  "m2": {
    "text": [
      "I could barely see the peak of the mountain, high in the clouds. ",
      "The scene here was so great. I could see the roads and the forest all under the mountain. "
    ],
    "choices": [
      {
        "description": [
          "There was a little camp here. ",
          "The adventurer's camp was right here. "
        ],
        "text": "Go inside",
        "prompt": "I went inside. ",
        "stage": "m3"
      },
      {
        "text": "Towards mountain peak (north)",
        "prompt": "I went towards the peak. ",
        "stage": "m4"
      },
      {
        "text": "To mountain base (west)",
        "prompt": "I chose to go down to the base. ",
        "stage": "m1"
      }
    ]
  },
  "m3": {
    "text": [
      "The inside of the camp was warm and comfortable. ",
      "I really like the small but warm camp, which reminded me of home. "
    ],
    "choices": [
      {
        "description": [
          "The adventurer was busy organizing his stuff. ",
          "The adventurer sat on the chair, staring at a stack of photos. "
        ],
        "text": "Talk",
        "prompt": "I greeted him. ",
        "stage": "adventurer_welcome"
      },
      {
        "text": "Go out",
        "prompt": "Though it was warm in here, I couldn't stay forever. I went outside. ",
        "stage": "m2"
      }
    ]
  },
  "m4": {
    "text": [
      "The freezing wind was threatening. It might not be possible to climb to the top of the mountain all alone after all. ",
      "It was so unbearably cold on the mountain. Every step forward was a hard decision. "
    ],
    "choices": [
      {
        "description": "I felt so cold I couldn't stay much longer... ",
        "text": "Faint",
        "prompt": "I fell unconscious. ",
        "stage": "adventurer_rescue",
        "condition": "player.strength < 40"
      },
      {
        "description": "It was probably the best to go back down. ",
        "text": "Go down",
        "prompt": "So I went back down. I wouldn't risk my life going there anyway. ",
        "stage": "m2",
        "condition": "player.strength >= 40"
      }
    ]
  },
  "adventurer_welcome": {
    "end": "paragraph",
    "choices": [
      {
        "description": [
          "\"I'm heading towards the top of the mountain,\" said the adventurer. \"Wanna come?\" ",
          "\"Wanna come with me?\" he asked. "
        ],
        "text": "Sure",
        "prompt": "\"Definitely.\"",
        "stage": "adventurer_sleep",
        "condition": "!visited.adventurer_robbed"
      },
      {
        "text": "No",
        "prompt": "\"Not right now.\" I said. ",
        "stage": "adventurer_bye",
        "condition": "!visited.adventurer_robbed"
      },
      {
        "description": "\"You've got the backpack?\" he asked. ",
        "text": "Got it",
        "prompt": "\"I've got it!\" I shouted, cheerfully. ",
        "stage": "adventurer_climb",
        "condition": "visited.adventurer_robbed && inventory.backpack"
      },
      {
        "description": "\"Have you got the backpack?\" ",
        "text": "Not yet",
        "prompt": "\"Not yet,\" I said. \"I'll need some time.\" ",
        "stage": "m3",
        "condition": "visited.adventurer_robbed && !inventory.backpack"
      }
    ]
  },
  "adventurer_rescue": {
    "text": [
      "I could hear someone shouting, and something heavy, warm and soft fell on me. \"Don't you know you should bring at least a coat if you are going to climb the mountain?\" I opened my eyes. The adventurer stood in front of me, frowning. ",
      "\"Why in the world don't you understand!\" he shouted. \"It's dangerous to go alone!\" There he was, again. Saving my life. "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "Sorry",
        "prompt": [
          "\"I'm... sorry.\" I apologized. \"I didn't know. I'm a {player.role}.\" ",
          "\"I'm really sorry. I am.\" "
        ],
        "stage": "adventurer_apologize"
      }
    ]
  },
  "adventurer_apologize": {
    "text": [
      "\"Okay, I'll forgive you this time.\" he said. \"Follow me to the camp.\" ",
      "\"All right, all right. It's good that you're fine. Now let's get down there.\" "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "Okay",
        "prompt": "\"Okay.\" I replied. ",
        "stage": "m3"
      }
    ]
  },
  "adventurer_bye": {
    "text": [
      "\"Okay. Feel free to talke to me when you changed your mind.\" ",
      "\"Just tell me whenever you choose to come,\" he said. "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "All right",
        "prompt": "\"All right.\" ",
        "stage": "m2"
      }
    ]
  },
  "adventurer_sleep": {
    "text": [
      "\"We'll go tomorrow morning,\" said the adventurer. \"Can you sleep here tonight? So that we could get going early in the morning.\" ",
      "\"Is it okay that you sleep here tonight?\" he asked. "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "Sure",
        "prompt": "\"Sure. I'm fine with that.\" I said. ",
        "stage": "adventurer_robbed"
      },
      {
        "text": "No",
        "prompt": "\"Sorry, no. I don't want to sleep here.\" ",
        "stage": "adventurer_bye"
      }
    ]
  },
  "adventurer_robbed": {
    "text": "We cheered and laughed in the evening, talking about legends and stories of all kinds. We went to bed in midnight, excited at our journey the next day. Nevertheless, I woke up in the middle of night, seeing a group of people running away from the camp with a bag. Bandits. ",
    "stage": "adventurer_lost",
    "choices": [
      {
        "text": "Run after",
        "prompt": "I ran after them, but they were too fast. There were no possible ways to catch them. "
      },
      {
        "text": "Stay",
        "prompt": "I probably couldn't catch them. They were so fast. "
      }
    ]
  },
  "adventurer_lost": {
    "text": "\"What happened?\" asked the adventurer, coming out from his bed. \"I thought I heard something.\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Bandits",
        "prompt": "\"There were bandits,\" I said. \"They grabbed a bag and ran away.\" ",
        "stage": "adventurer_backpack"
      }
    ]
  },
  "adventurer_backpack": {
    "text": "\"That's my backpack!!!\" He shouted. \"Every single tool for climbing was inside that bag! Most importantly, the key!\"",
    "end": "paragraph",
    "choices": [
      {
        "text": "Key?",
        "prompt": "\"What is the key?\"",
        "stage": "adventurer_key"
      }
    ]
  },
  "adventurer_key": {
    "text": "\"The key to the treasure buried on the top of the mountain!\" he sighed. \"We definitely need that bag. Guess we'll have to find a way to get that back. Let's finish sleeping though.\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Okay",
        "prompt": "\"All right.\" ",
        "stage": "adventurer_morning"
      }
    ]
  },
  "adventurer_morning": {
    "text": "The next morning, we woke up early because we couldn't sleep well. ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Ask about backpack",
        "prompt": "\"So how are we going to find your lost backpack?\" I asked. ",
        "stage": "adventurer_find"
      }
    ]
  },
  "adventurer_find": {
    "text": "\"The villagers in the grassland will probably know where the bandits are. Go ask them.\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "All right",
        "prompt": "\"I'll get going.\" I said. \"I'll get the backpack when I come back. See you.\" ",
        "stage": "m2"
      }
    ]
  },
  "adventurer_climb": {
    "text": "\"Let's go!\" He shouted. \"Now that we have all that we need, head towards the treasure!\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Go",
        "prompt": "\"Let't go!\" I shouted back, being so excited to climb the High Mountain and search for the lost treasure. ",
        "stage": "adventurer_walk"
      }
    ]
  },
  "adventurer_walk": {
    "text": "Step by step, though the weather was harsh and freezing, we walked towards the mountain peak. \"You really are an adventurous {player.race}.\" said the adventurer. ",
    "end": "paragraph",
    "choices": [
      {
        "description": "\"We will make a great couple... oh no I mean a great team for outdoor activities.\" ",
        "text": "Hug him",
        "prompt": "\"Yes of course. We will make a great couple.\" And I threw myself on him, wrapping my arms around his waist. ",
        "stage": "adventurer_couple",
        "condition": "player.gender == 'female'"
      },
      {
        "text": "Make friend",
        "prompt": "\"I'm sure we will be great friends.\" ",
        "stage": "adventurer_friend"
      }
    ]
  },
  "adventurer_friend": {
    "text": "\"Oh yeah!\" He shouted. \"I knew it from the beginning. Let's continue our journey!\"",
    "end": "paragraph",
    "choices": [
      {
        "text": "Move on",
        "prompt": "\"Let's go!\"",
        "stage": "adventurer_peak"
      }
    ]
  },
  "adventurer_peak": {
    "text": "It was already dark when we reached the peak. It was covered with deep snow, yet we managed to get here. The night was peaceful and quiet. And so are our hearts. \"Such a nice day,\" said the adventurer. \"So now we should begin our treasure hunt. Where should we look... Oh here it is!\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Where",
        "prompt": "\"Where?\" I asked. \"You found it?\" ",
        "stage": "adventurer_treasure"
      }
    ]
  },
  "adventurer_treasure": {
    "text": "\"Here! Look at this!\" He shouted. \"Look at this: the legendary treasure 'Stone of Power'...we found it together, who should have it?\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Well me",
        "prompt": "\"Well me, I did most of the work!\" I said. ",
        "stage": "adventurer_me",
        "condition": "player.strength >= '45'"
      },
      {
        "text": "Don't know",
        "prompt": "\"I suppose I don't really know,\" I said. \"But one of us should use it.\" ",
        "stage": "adventurer_who"
      }
    ]
  },
  "adventurer_me": {
    "text": "\"Oh! Yes well that is true!\" The adventurer exclaimed. \"It was really nice working with you! And I'm Daniel by the way.\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Thank you.",
        "prompt": "\"Thank you for your help.\" ",
        "stage": "end"
      }
    ]
  },
  "adventurer_who": {
    "text": "\"Doesn't matter,\" he said. \"We should find who this belongs to.\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Of course",
        "prompt": "\"Of course. Let's do that.\" ",
        "stage": "end"
      }
    ]
  },
  "adventurer_couple": {
    "text": "He stood there completely still, staring at me blankly. Then he wrapped his arms around me, holding me tight. ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Let's go",
        "prompt": "\"We still need to move on,\" I said. \"Let's go.\" ",
        "stage": "adventurer_romance"
      }
    ]
  },
  "adventurer_romance": {
    "text": "By the time we reach the peak, it was already dark. Mysterious and incredible auroras flew on the top of our heads. Stars filled and decorated the sky, telling their own stories million years ago. Everything was quiet. Even though it was cold on the mountain, I felt warm inside. The moon watched all of this silently, as if to say, 'enjoy your wonderful night'. ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Give ring",
        "prompt": "\"Oh,\" I said, pulling out the ring. \"I found this earlier yesterday. Hope you like it.\" ",
        "stage": "adventurer_ring",
        "condition": "inventory.ring"
      },
      {
        "text": "Kiss",
        "prompt": "While he was staring at the stars, I moved closer. And, slowly and softly, I kissed him on his cheek. ",
        "stage": "adventurer_kiss",
        "condition": "inventory.cross"
      },
      {
        "text": "Lean",
        "prompt": "I leaned on his shoulder. It was soft, and it was warm. I liked it that way. \"Thank you\", I said. ",
        "stage": "end"
      }
    ]
  },
  "adventurer_kiss": {
    "text": "He turned his head around, stared at me for a few seconds, and blushed. \"Thank you,\" he said. ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Thank you",
        "prompt": "\"It's a pleasure,\" I said in my heart. ",
        "stage": "end"
      }
    ]
  },
  "adventurer_ring": {
    "text": "\"Oh really?\" He said, merrily. \"Thank you so much. I definitely love it.\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Great",
        "prompt": "\"It's great that you like it.\" ",
        "stage": "end"
      }
    ]
  },
  "f1": {
    "text": [
      "The trees in the forest were so huge that nothing besides the temple could be seen. The temple, though, was so high that it could even be seen here in the forest, to the north. ",
      "Here was the end of the forest. "
    ],
    "choices": [
      {
        "text": "To road (north)",
        "prompt": "I walked onto the road on the north. ",
        "stage": "r5"
      },
      {
        "text": "Towards west",
        "prompt": "I went towards the west. ",
        "stage": "f3"
      },
      {
        "text": "Towards south",
        "prompt": "I went towards the south. ",
        "stage": "f2"
      }
    ]
  },
  "f2": {
    "text": [
      "The stream flied merrily on the east. Nothing else could be seen or heard beside the water and songs of birds. ",
      "I could see the stream flowing along beside me. "
    ],
    "choices": [
      {
        "text": "Towards north",
        "prompt": "I went towards the noth. ",
        "stage": "f1"
      },
      {
        "text": "Towards west",
        "prompt": "I went towards the west. ",
        "stage": "f4"
      },
      {
        "text": "Towards south",
        "prompt": "I went towards the south. ",
        "stage": "c1"
      }
    ]
  },
  "f3": {
    "text": [
      "The hunter's lodge sat here deep in the forest. A brave place for a brave man, really. ",
      "I came back to the hunter's lodge in the forest. "
    ],
    "choices": [
      {
        "text": "Go inside",
        "prompt": "I went inside. ",
        "stage": "hunter_welcome"
      },
      {
        "text": "Towards south",
        "prompt": "I went towards the south. ",
        "stage": "f4"
      },
      {
        "text": "Towards east",
        "prompt": "I went towards the east. ",
        "stage": "f1"
      }
    ]
  },
  "f4": {
    "text": [
      "Trees. Everywhere. I could see nothing but trees. Oh, and mountains on the south west. ",
      "I couldn't even figure out where I was... The forest was so large. "
    ],
    "choices": [
      {
        "text": "Towards north",
        "prompt": "I went towards the north. ",
        "stage": "f3"
      },
      {
        "text": "Towards east",
        "prompt": "I went towards the east. ",
        "stage": "f2"
      }
    ]
  },
  "hunter_welcome": {
    "text": [
      "\"Hi there,\" greeted the hunter. \"How can I help you?\" ",
      "\"What else?\"",
      "\"What is it that you need?\" he asked. "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "Training",
        "prompt": [
          "\"I need some training in fighting.\" I said. \"I'm preparing myself to fight against bandits.\"",
          "\"I need more training on how to fight.\" "
        ],
        "stage": "hunter_train",
        "condition": "visited.adventurer_robbed"
      },
      {
        "text": "Bye",
        "prompt": "\"Nothing, thanks.\" ",
        "stage": "f3"
      }
    ]
  },
  "hunter_train": {
    "text": [
      "\"Surely I can teach you,\" he said. \"But it won't be free, since it takes a lot of time. 20 gold each time. 90 gold for a much longer one.\" ",
      "\"More training? Sure. As long as you have enough gold.\" "
    ],
    "end": "paragraph",
    "stage": "hunter_welcome",
    "choices": [
      {
        "text": "Once (20 gold)",
        "prompt": "\"I'll train once.\" ",
        "action": "player.strength += 5; inventory.gold -= 20",
        "condition": "inventory.gold >= 20"
      },
      {
        "text": "5 times (90 gold)",
        "prompt": "\"I'll do the longer training.\" ",
        "action": "player.strength += 25; inventory.gold -= 90",
        "condition": "inventory.gold >= 90"
      },
      {
        "text": "Later",
        "prompt": "\"Probably later,\" I said. \"Thanks.\" "
      }
    ]
  },
  "c1": {
    "text": [
      "I came to the entrance of the cave. {visited.villager_bandits ? 'It was said that bandits often came to the cave to bury their treasures here. ': ''}",
      "The cave stayed quietly in the forest, waiting for travellers to tell its story. "
    ],
    "choices": [
      {
        "text": "To forest (north)",
        "prompt": "I headed towards the forest on the north. ",
        "stage": "f2"
      },
      {
        "text": "Go inside",
        "prompt": "I went inside. ",
        "stage": "c2"
      }
    ]
  },
  "c2": {
    "text": [
      "I could probably hear the water flowing near the cave. It was also wet in the cave. ",
      "The sound of water was so pleasant. "
    ],
    "choices": [
      {
        "text": "Go out",
        "prompt": "I went out of the cave. ",
        "stage": "c1"
      },
      {
        "text": "Furthur in",
        "prompt": "I decided to go furthur in. ",
        "stage": "c3"
      }
    ]
  },
  "c3": {
    "text": [
      "It got darker and darker in the cave. I was a little bit frightened. ",
      "It wasn't that much of a frightening place after all, after getting used to it. "
    ],
    "choices": [
      {
        "text": "Towards exit",
        "prompt": "I walked towards the exit. ",
        "stage": "c2"
      },
      {
        "text": "Furthur in",
        "prompt": "I went furthur in. ",
        "stage": "c4"
      }
    ]
  },
  "c4": {
    "text": "The cave was so dark I could almost see nothing. ",
    "choices": [
      {
        "description": "Except a few bandits staring at you in the dark. ",
        "text": "Talk",
        "prompt": "I approached them. ",
        "stage": "bandit",
        "condition": "visited.adventurer_robbed && !inventory.backpack"
      },
      {
        "text": "Go outwards",
        "prompt": "I went outwards. ",
        "stage": "c3"
      }
    ]
  },
  "bandit": {
    "text": [
      "\"What are you doing here?\" asked one of them. \"Ready to give all your stuff to us?\" ",
      "\"You here again?\" laughed one of them. \"Give us your belongings then.\" "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "Fight",
        "prompt": "\"Ha!\" I shuoted. \"You are no challenge to me!\" ",
        "stage": "bandit_fight",
        "condition": "player.strength >= 40"
      },
      {
        "text": "Beg",
        "prompt": "\"Sorry guys, the backpack was all that I have.\" I begged, trying to be as poor and as innocent as I could possible sound. \"Can I have it back? Please? Please?\" ",
        "stage": "bandit_letgo",
        "condition": "player.strength <= 10"
      },
      {
        "text": "God bless me",
        "prompt": "\"May God bless me, strengthen your servant!\" I shouted, the Cross glowing slowly. \"Punish those bandits, and restore justice to this land!\"",
        "stage": "bandit_retreat",
        "condition": "inventory.cross"
      },
      {
        "text": "Pay",
        "prompt": "\"I really need my stuff in the backpack,\" I explained. \"I'm willing to give 200 gold for that.\" ",
        "stage": "bandit_pay",
        "condition": "inventory.gold >= 200"
      },
      {
        "text": "Hand in",
        "prompt": "\"Okay,\" I said. Life is always more important than money, isn't it? \"Here's all I have. Just let me go!\" ",
        "stage": "bandit_handin"
      }
    ]
  },
  "bandit_fight": {
    "text": "I fought ferociously against the group of bandits with all the strength I had. The bandits, fell, one by one. Until the last of them was down. ",
    "choices": [
      {
        "text": "Get backpack",
        "prompt": "I grabbed the backpack. Finally got it back. ",
        "action": "inventory.backpack = true",
        "stage": "c3"
      }
    ]
  },
  "bandit_letgo": {
    "text": "\"All right, all right,\" sighed one of them. \"Take it then. Even if we are bandits, we don't rob poor people. Don't let us see you again, though.\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Thanks",
        "prompt": "\"Thank you so much,\" I said. \"Thank you.\" ",
        "action": "inventory.backpack = true",
        "stage": "c3"
      }
    ]
  },
  "bandit_retreat": {
    "text": "\"Oh my god!\" shouted one of them. As the light from the cross started to blind them. \"The {player.race} has a cross! Retreat!\" Within a few seconds, they all disappeared, leaving the backpack on the ground. ",
    "choices": [
      {
        "text": "Get backpack",
        "prompt": "I grabbed the backpack. The protection from the God really helped me a lot. ",
        "action": "inventory.backpack = true",
        "stage": "c3"
      }
    ]
  },
  "bandit_pay": {
    "text": "\"All right,\" said one of them. \"I guess the backpack doesn't value that much. Take it, and give us the gold.\" ",
    "end": "paragraph",
    "choices": [
      {
        "text": "Give money",
        "prompt": "\"Here it is.\" ",
        "action": "inventory.backpack = true",
        "stage": "c3"
      }
    ]
  },
  "bandit_handin": {
    "text": [
      "\"Ha! Such a great day for us!\" They laughed. \"Free money in our hands. Thank you, and may we ever meet again!\" ",
      "\"Thank you so much!\" One of them said. \"Free gold every single time!\" "
    ],
    "end": "paragraph",
    "choices": [
      {
        "text": "Leave",
        "prompt": "I guessed I wasn't well prepared to confront the bandits! I lost a total of {inventory.gold} gold. ",
        "action": "inventory.gold = 0",
        "stage": "c3"
      }
    ]
  },
  "s1": {
    "text": [
      "A little bridge connected this island to the riverbank. I could travel on the water if I had a boat. ",
      "This little island on the stream was really a pleasant place. "
    ],
    "choices": [
      {
        "text": "To road",
        "prompt": "I went onto the main road. ",
        "stage": "r3"
      },
      {
        "text": "Upstream",
        "prompt": "I went up. ",
        "stage": "s2",
        "condition": "inventory.boat"
      }
    ]
  },
  "s2": {
    "text": [
      "The water spashed onto the riverbank, clicking a soft relaxing rhythm. ",
      "The melody of the water eased my mind. So great to be here. "
    ],
    "choices": [
      {
        "text": "Go downstream",
        "prompt": "I went down. ",
        "stage": "s1"
      },
      {
        "text": "Go to island",
        "prompt": "I landed on the little lisland. ",
        "stage": "s3"
      }
    ]
  },
  "s3": {
    "text": [
      "It was so pleasant to be wandering on the clear, blue water. ",
      "The water was so clear that I could even see the bottom. "
    ],
    "choices": [
      {
        "text": "Go downstream",
        "prompt": "I went down. ",
        "stage": "s2"
      },
      {
        "text": "Go upstream",
        "prompt": "I went up. ",
        "stage": "s4"
      }
    ]
  },
  "s4": {
    "text": [
      "The stream became narrower closer to the source. ",
      "The boat could hardly fit into the stream here... Thankfully I could still move around. "
    ],
    "choices": [
      {
        "text": "Go downstream",
        "prompt": "I went back down. ",
        "stage": "s3"
      },
      {
        "text": "Go upstream",
        "prompt": "I went furthur up. ",
        "stage": "s5"
      }
    ]
  },
  "s5": {
    "text": [
      "The stream started here at the mountain. Not possible for human beings to go through the little \"crack\" in the mountain to go any further. ",
      "Here was the source of the stream. "
    ],
    "choices": [
      {
        "description": "I suddenly saw a shiny item on the rocks. ",
        "text": "Pick it up",
        "prompt": "It was a ring! I just found a ring! ",
        "action": "inventory.ring = true",
        "condition": "visited.s5 && !inventory.ring"
      },
      {
        "text": "Go downstream",
        "prompt": "I went down. ",
        "stage": "s4"
      }
    ]
  },
  "end": {
    "text": " --- The End --- "
  }
}