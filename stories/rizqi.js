// Rizqi's personalised Arceus audience.
// Established direction: impulsive, kind-hearted humour; a friendship that
// grew over years, with full membership in the group coming more recently;
// a future Zygarde connection hinted through balance, not disclosed.
export const story = {
  name: "Rizqi",
  starter: "Axew",
  introTitle: "The Measure of All Things",
  accent: "#a6dfac",
  accentRgb: "166, 223, 172",
  opening: [
    {
      speaker: "THE DREAM",
      text: "At the end of an ordinary night in Luma Town, you fall asleep knowing your Axew is safe nearby. The sounds of home grow faint, and then even the silence seems to disappear."
    },
    {
      speaker: "THE DREAM",
      text: "The room is gone. Beneath your feet, countless points of light join into intricate patterns. They separate, return, and become something new. Above you hangs a sky without a horizon.",
      scene: "cells"
    },
    {
      speaker: "???",
      text: "Rizqi."
    },
    {
      speaker: "???",
      text: "Yes, I am speaking to you. Though I suspect you have several questions already competing to be the first one out of your mouth."
    },
    {
      speaker: "???",
      text: "Your Axew remains at home, unharmed. You have only been invited here in a dream. You may be at ease."
    },
    {
      speaker: "???",
      text: "Now. Look before you."
    },
    {
      speaker: "THE DREAM",
      text: "The patterns of light fall still for one heartbeat. Beyond them a golden ring turns, and a white figure steps into view. You recognise it from stories older than Santara itself.",
      scene: "reveal"
    },
    {
      speaker: "ARCEUS",
      text: "I am Arceus, whom your world has called the Original One. Before the land rose from the sea, before the first lives took breath beneath these stars, I was. Tonight, I have asked for a moment of yours.",
      scene: "reveal"
    },
    {
      speaker: "ARCEUS",
      text: "You need not kneel, Rizqi. Nor must you find some grand speech to offer me. Speak as you will. I suspect I would hear it regardless.",
      scene: "reveal"
    },
    {
      speaker: "ARCEUS",
      text: "Ah. And before you ask: no, this is not a dream brought on by something you ate."
    }
  ],
  scenes: [
    {
      speaker: "ARCEUS",
      text: "I have known you longer than you might imagine. I remember a boy finding his place among familiar faces, years spent knowing one another, and the small moments that slowly make people friends."
    },
    {
      speaker: "ARCEUS",
      text: "You have walked alongside some of them since your school days. Only more recently did you find yourself quite so thoroughly part of the group. Yet belonging is not measured by the date an invitation was spoken aloud."
    },
    {
      speaker: "ARCEUS",
      text: "You have a remarkable talent for allowing your thoughts to reach your mouth before they have finished introducing themselves. I say this with affection, not reproach."
    },
    {
      speaker: "ARCEUS",
      text: "Your friends know this about you. They also know the person behind those moments. They have chosen to keep you close, and you have chosen to remain."
    },
    {
      speaker: "ARCEUS",
      text: "I imagine you have something to say about meeting the creator of your world.",
      choices: [
        {
          label: "So... am I dead?",
          response: "No, Rizqi. Your body is asleep, your Axew is safe, and the morning remains precisely where you left it. Though I admit your conclusion was reached impressively quickly."
        },
        {
          label: "Can I battle you?",
          response: "You may ask. I admire the confidence. Perhaps save the challenge for a day when you have had breakfast—and when your Axew has agreed to it."
        },
        {
          label: "Why me? Surely you've got the wrong guy.",
          response: "I have not mistaken your name. Nor have I chosen you because you have never erred. A life is not made worthwhile by the absence of mistakes."
        }
      ]
    },
    {
      speaker: "ARCEUS",
      text: "But there is a reason I have called you here. The world you know is not as unchanging as it appears. Beneath Santara's familiar roads, something old has begun to stir."
    },
    {
      speaker: "ARCEUS",
      text: "There are those who look upon a changing world and see only danger. They long to preserve every precious thing, to hold every moment exactly where it stands.",
      scene: "cells"
    },
    {
      speaker: "THE DREAM",
      text: "The pale-green lights below you arrange themselves into perfect, motionless rows. For an instant the entire sky seems to stop breathing.",
      scene: "fracture"
    },
    {
      speaker: "ARCEUS",
      text: "But a forest that never grows is not a forest saved. A river forbidden to flow is no longer a river. Stillness can wear the face of peace, but the two are not the same.",
      scene: "fracture"
    },
    {
      speaker: "THE DREAM",
      text: "One point of light moves. Then another. The rigid pattern gives way to hundreds of living shapes, each different, yet somehow belonging to the whole.",
      scene: "cells"
    },
    {
      speaker: "ARCEUS",
      text: "Balance does not mean that nothing changes. It means allowing the world to breathe, to bend, to heal, and sometimes to become something it has never been before.",
      scene: "cells"
    },
    {
      speaker: "ARCEUS",
      text: "You know something of this already. Your place among your friends did not exist exactly as it does now. It grew. And it is no less precious for having changed."
    },
    {
      speaker: "ARCEUS",
      text: "Tell me, Rizqi. If the world were changing before your eyes, how would you answer it?",
      choices: [
        {
          label: "I'd protect the people I care about.",
          response: "Then begin by listening to them. To protect someone is not to decide their every step. Sometimes it is to give them room to take it."
        },
        {
          label: "I'd probably improvise something.",
          response: "I had considered that possibility. There is value in thinking swiftly, but do remember that you are permitted to think twice. Even you."
        },
        {
          label: "Can I keep the world from changing at all?",
          response: "You could try. Yet ask yourself whether you would still have your friendships, or the partner waiting at home, if nothing in your life had ever been allowed to grow."
        }
      ]
    },
    {
      speaker: "ARCEUS",
      text: "You are not being appointed the guardian of creation tonight. I have not written your choices in advance. I speak of possibilities because you—and those beside you—may one day help decide which of them comes to pass."
    },
    {
      speaker: "ARCEUS",
      text: "Your Axew, too, has a long road ahead. It is already your partner, not a prize I have placed upon your path. Take care of that bond. You will both grow in ways you cannot yet imagine."
    },
    {
      speaker: "ARCEUS",
      text: "Before you go, is there something else you wish to know?",
      choices: [
        {
          label: "Are my friends getting this weird dream too?",
          response: "Yes. Each will hear what they need to hear, and each may answer differently. You are welcome to compare notes in the morning. I expect that conversation to be rather lively."
        },
        {
          label: "Is something terrible going to happen?",
          response: "Something may. That is why I speak of possibility, not certainty. Fear does not grant us wisdom; the choices we make after feeling it sometimes do."
        },
        {
          label: "Could you just tell me everything now?",
          response: "I could speak for an age, and you would still need to live the days before you. Besides, I suspect your attention would wander considerably sooner than mine."
        }
      ]
    },
    {
      speaker: "ARCEUS",
      text: "You have listened well. More carefully, perhaps, than you expected. There is no need to become a different person to walk the road ahead. Only remember that the people beside you are walking it too."
    }
  ],
  closing: [
    {
      speaker: "ARCEUS",
      text: "When morning comes, take Axew with you to Professor Meranti's laboratory in Luma Town. Your friends will be there; each has received an invitation, though I have spoken to them in different ways."
    },
    {
      speaker: "ARCEUS",
      text: "Do not spend every moment searching the heavens for an answer. Laugh with your friends. Be curious. Make mistakes. Learn from them. Your life remains your own."
    },
    {
      speaker: "ARCEUS",
      text: "And remember this, Rizqi: the world does not remain beautiful because it never changes. It remains beautiful because life finds a way to continue."
    },
    {
      speaker: "THE DREAM",
      text: "The green lights rise like fireflies and dissolve into gold. Somewhere, far beyond the stars, morning is beginning.",
      scene: "cells"
    },
    {
      speaker: "ARCEUS",
      text: "Go forth, then. Your story awaits. And do give your Axew my regards."
    }
  ]
};