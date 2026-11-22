// Martyn's personalised Arceus welcome.
// Core direction: love for his long-standing friend group, life as freedom to
// choose, and an unsettling future where protection may become confinement.
// The luminous motes anticipate his distant Mew connection without naming it.
export const story = {
  name: "Martyn",
  starter: "Froakie",
  introTitle: "A World Still Becoming",
  accent: "#e2c8f1",
  accentRgb: "226, 200, 241",
  opening: [
    {
      speaker: "THE DREAM",
      text: "Luma Town is quiet. The streets you and your friends have walked so many times are empty, and your Froakie has settled in for the night. At last, you drift into sleep."
    },
    {
      speaker: "THE DREAM",
      text: "Then, without the feeling of waking, you are somewhere else. There is no earth beneath your feet, yet you do not fall. Countless lights move in the distance, like tiny lives passing among the stars.",
      scene: "living"
    },
    {
      speaker: "???",
      text: "Welcome, Martyn."
    },
    {
      speaker: "???",
      text: "Do not be alarmed. Your body rests safely in Luma Town, and your Froakie remains where you left it. I have invited only your dreaming mind to this place."
    },
    {
      speaker: "???",
      text: "There is no need to hurry. You have been given a moment beyond the passing of ordinary hours, and I would speak with you."
    },
    {
      speaker: "THE DREAM",
      text: "The scattered lights begin to gather. A circle of pale gold opens in the darkness, and within it a shape takes form, white as dawn and crowned with a radiant ring.",
      scene: "reveal"
    },
    {
      speaker: "ARCEUS",
      text: "I am Arceus. Before the first living thing drew breath, before the heavens bore their names, I was. Your people have called me the Original One. Tonight, I ask only that you listen.",
      scene: "reveal"
    },
    {
      speaker: "ARCEUS",
      text: "You stand in a place from which I have watched beginnings beyond counting. Yet the beginning of any single life remains a wonder to me.",
      scene: "living"
    }
  ],
  scenes: [
    {
      speaker: "ARCEUS",
      text: "Look upon the lights around you. No two move in quite the same way. Some linger beside one another; some wander far; some return to a place they once knew.",
      scene: "living"
    },
    {
      speaker: "THE DREAM",
      text: "One light darts eagerly across the darkness. Another follows at its own pace. They circle together for a while, then part, neither bound to the path of the other.",
      scene: "living"
    },
    {
      speaker: "ARCEUS",
      text: "I brought life into this world, but I did not create it merely to obey. What worth would there be in a thousand journeys if I had already chosen every step?",
      scene: "living"
    },
    {
      speaker: "ARCEUS",
      text: "Consider your own. You have known your friends since your school days, and many of the years between then and now have been spent in one another's company."
    },
    {
      speaker: "ARCEUS",
      text: "You have never needed a grand occasion to remind them that they matter to you. A message sent because someone came to mind, a foolish thing shared for a laugh, the simple willingness to join them—these, too, are choices."
    },
    {
      speaker: "ARCEUS",
      text: "You have followed them into plans you might not have made alone. They have made room for you in their days. Not because fate bound your lives together, but because, again and again, each of you chose the others."
    },
    {
      speaker: "ARCEUS",
      text: "And your Froakie? It is not merely a companion entrusted to your keeping. It is a living being, with a will that belongs to it. Whatever bond grows between you, let it be something the two of you continue to choose."
    },
    {
      speaker: "ARCEUS",
      text: "Now, allow me to show you another possibility.",
      scene: "bound"
    },
    {
      speaker: "THE DREAM",
      text: "The drifting lights slow. Thin golden rings surround them, one after another, until each has been given a perfect place. Nothing collides. Nothing wanders. Nothing changes.",
      scene: "bound"
    },
    {
      speaker: "ARCEUS",
      text: "Observe. Each light is protected from the uncertainty of the others. Every path can be predicted. Every risk has been removed.",
      scene: "bound"
    },
    {
      speaker: "ARCEUS",
      text: "To the one who fears loss, such an order may seem merciful. If nothing can stray, perhaps nothing can be hurt. If nothing can change, perhaps nothing precious can be taken away.",
      scene: "bound"
    },
    {
      speaker: "ARCEUS",
      text: "But tell me: are they living as they did before, or merely remaining where another has placed them?",
      scene: "bound"
    },
    {
      speaker: "THE DREAM",
      text: "The rings shine beautifully. Yet beyond their perfect symmetry, the vast sky seems strangely empty.",
      scene: "bound"
    },
    {
      speaker: "ARCEUS",
      text: "There are those in your world who believe they can keep it safe by deciding how every living thing ought to exist. They do not necessarily begin with cruelty. Some begin with fear, or with a sincere wish to protect.",
      scene: "bound"
    },
    {
      speaker: "ARCEUS",
      text: "But protection that leaves no room for another's will can become captivity. A cage does not cease to be a cage because it has been made of gold.",
      scene: "bound"
    },
    {
      speaker: "THE DREAM",
      text: "A single light trembles against its ring. For a moment the circle holds. Then it opens, and the light drifts beyond it. The others begin to move once more.",
      scene: "freed"
    },
    {
      speaker: "ARCEUS",
      text: "This is the beauty and the burden of a living world: it cannot be kept unchanged without taking something essential from it.",
      scene: "freed"
    },
    {
      speaker: "ARCEUS",
      text: "In the days ahead, choices may be offered to you that promise certainty. They may be presented as kindness. I ask only that you remember the lives that must bear their cost.",
      scene: "freed"
    },
    {
      speaker: "ARCEUS",
      text: "Your own voice matters, Martyn. So do the voices of your friends, of your Froakie, and of creatures you have yet to encounter. None belongs to you—or even to me—to silence.",
      scene: "living"
    },
    {
      speaker: "ARCEUS",
      text: "I have spoken much of the freedom to choose, yet I have scarcely offered you the opportunity to exercise it."
    },
    {
      speaker: "ARCEUS",
      text: "Before I return you to your world, there is time for one question. What would you ask of the one who gave your world its beginning?",
      choices: [
        {
          label: "If you made life, why not keep everyone safe yourself?",
          response: "I could spare many a hurt by denying them the road on which it might be found. Yet I would also take from them the chance to become more than I imagined. A world that cannot choose is not the gift I wished to give."
        },
        {
          label: "Will the friends I've known for years still be beside me?",
          response: "I cannot promise what every tomorrow holds, Martyn. But I have seen the care with which you have chosen one another until now. Continue to offer that choice freely. It is worth more than any promise I could make on their behalf."
        },
        {
          label: "Does Froakie get to choose its own future, too?",
          response: "Of course. You may guide your partner, and it may place great trust in you. Yet the finest bonds do not erase the will of either heart. Walk together, and learn what the other wishes to become."
        }
      ]
    },
    {
      speaker: "ARCEUS",
      text: "Thank you for hearing me. I did not summon you to appoint a hero or to write your destiny in advance. I wished to leave a question in your keeping, and trust you with the answer."
    }
  ],
  closing: [
    {
      speaker: "ARCEUS",
      text: "When morning comes, bring Froakie to Professor Meranti's laboratory in Luma Town. The familiar faces who have walked beside you for years will be there, each having heard an invitation of their own."
    },
    {
      speaker: "ARCEUS",
      text: "Go with them as you always have: not because your steps have been ordained, but because the road is one you wish to share."
    },
    {
      speaker: "THE DREAM",
      text: "The stars scatter once more, free to wander. You hear, very faintly, the sounds of the streets you know. The first light of morning is reaching Luma Town.",
      scene: "freed"
    },
    {
      speaker: "ARCEUS",
      text: "Farewell for now, Martyn. What you become is yours to decide."
    }
  ]
};