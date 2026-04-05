#!/usr/bin/env python3
"""Generate fun, engaging parenting articles as JSON."""

import json

articles = [
    # ========== INFANT_3_6 (10 articles) ==========
    {
        "id": "fun_baby_1",
        "title": "The 5 Stages of Sleep Deprivation (And How to Laugh Through Them)",
        "body": """## The 5 Stages of Sleep Deprivation

Welcome to the club nobody asked to join but everyone ends up in. Here's your official roadmap.

## Stage 1: Denial
"I feel fine! I got three hours!" You're running on adrenaline and leftover Halloween candy. Enjoy it while it lasts.

## Stage 2: Bargaining
"If I just close my eyes during this diaper change, that counts as a nap, right?" You start doing math at 2 AM — "If the baby sleeps NOW, I can still get 47 minutes before the alarm."

## Stage 3: Hallucination Light
Did the baby monitor just talk back to you? Is that a pile of laundry or a person? Why is the coffee maker judging you?

## Stage 4: Acceptance
You've stopped fighting it. Sleep is a social construct. You now understand why new parents look the way they do in every sitcom ever made.

## Stage 5: Superhuman Adaptation
Somehow, you're functioning. You drove to work, made a presentation, and only called your boss "sweetie" once. Your body has evolved.

## How to Actually Survive This

- **Tag team with your partner** — even one extra hour makes a difference
- **Nap when the baby naps** (yes, we know the dishes are calling, ignore them)
- **Lower your standards** — frozen pizza is a food group now
- **Accept help** — when someone offers, say YES
- **Laugh about it** — seriously, humor is the best coping mechanism

Remember: this phase is temporary. One day you'll sleep again, and you'll weirdly miss those quiet 3 AM feedings.

*This article is for entertainment purposes. If you're experiencing extreme fatigue or mood changes, please reach out to your healthcare provider.*""",
        "category": "SLEEP",
        "stage": "INFANT_3_6",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_2",
        "title": "Date Night on a Budget: Creative Ideas for New Parents",
        "body": """## Date Night Doesn't Have to Mean Leaving the House

Let's be real — between the cost of a sitter and the emotional toll of putting on real pants, traditional date nights can feel impossible. But your relationship still matters, and connection doesn't require a reservation.

## At-Home Date Night Ideas

- **Takeout Tasting** — order from a restaurant you've never tried, set the table with actual plates (revolutionary, we know), and eat after the baby's down
- **Movie Marathon** — pick a theme, make popcorn, and pretend you won't fall asleep 20 minutes in
- **Cook Together** — choose a recipe neither of you has made before. Bonus points if it's edible
- **Game Night** — dust off the board games. Nothing says romance like crushing your partner at Scrabble
- **Living Room Picnic** — blanket on the floor, cheese plate, battery-powered candles (because real ones + baby = no)

## Micro-Dates for the Truly Exhausted

- Share a dessert after bedtime routine
- Watch one episode of YOUR show (not a kids' show)
- Take a 10-minute walk around the block together while baby's in the stroller
- Send each other funny memes during the day (it counts!)

## The Real Talk

You don't need grand gestures right now. You need moments where you look at each other and remember you're a team, not just co-managers of a tiny human. Even 15 minutes of intentional connection can fill your cup.

So tonight, after the baby's asleep: put the phones down, look at each other, and maybe share that last cookie.

*This article is for fun and connection. If you're struggling in your relationship, consider reaching out to a couples counselor — no shame in getting support.*""",
        "category": "PARTNER_GUIDE",
        "stage": "INFANT_3_6",
        "subStage": None,
        "forPartner": 1
    },
    {
        "id": "fun_baby_3",
        "title": "The Poop Chart: A New Parent's Most Important Document",
        "body": """## Welcome to Your New Obsession

Before baby, you never thought you'd have strong opinions about poop. Now you're analyzing it like a detective at a crime scene. Welcome to parenthood.

## The Color Guide (Yes, This Is Your Life Now)

- **Mustard yellow** — congratulations, this is the gold standard. Literally.
- **Green** — usually fine! Could be foremilk, could be that spinach you ate. Relax.
- **Orange** — totally normal, especially with certain foods or formulas
- **Brown** — classic. The OG. Nothing to see here.
- **White/gray** — okay, this one you should actually call the doctor about
- **Red** — could be beets, could be something else. Check in with your pediatrician

## The Texture Spectrum

We won't get too graphic here (who are we kidding, you're already in the trenches), but expect everything from "fancy mustard" to "cottage cheese" to "is that even possible?"

## Frequency FAQ

- **Breastfed babies**: anywhere from after every feeding to once every few days. Both are normal. Yes, really.
- **Formula-fed babies**: usually more predictable, 1-3 times a day
- **The grunting**: does not necessarily mean anything is wrong. Babies are just dramatic.

## Pro Tips

- Keep a stash of plastic bags EVERYWHERE
- The blowout will happen in the car seat. It's not a matter of if, it's when
- Dark colored onesies are your friend
- You will eventually forget to check if you have poop on your shirt before going out. It happens to everyone

You're doing great, poop detective.

*This is meant to be a fun overview. Always consult your pediatrician with concerns about your baby's digestion or stool changes.*""",
        "category": "MILESTONES_PRACTICAL",
        "stage": "INFANT_3_6",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_4",
        "title": "The 'Is This Normal?' Game: 3-6 Month Edition",
        "body": """## Spoiler Alert: It's Probably Normal

Every new parent has Googled something terrifying at 2 AM. Let's save you a panic spiral with this handy guide.

## Is It Normal That My Baby...

**...stares at the ceiling fan like it's the greatest show on earth?**
Yes. Ceiling fans are basically IMAX for babies. High contrast, movement, mesmerizing. Let them enjoy their free entertainment.

**...makes sounds like a tiny pterodactyl?**
Completely normal. They're finding their voice. Today it's screeching, tomorrow it's babbling, and eventually it's asking "why" four hundred times a day.

**...grabs their feet and won't let go?**
They just discovered they have feet! This is a milestone! Those toes are the most fascinating thing they've ever encountered.

**...drools enough to fill a swimming pool?**
Welcome to drool season. May or may not mean teething. Definitely means more laundry.

**...only wants to be held by you and screams at Grandma?**
Stranger anxiety and attachment are developmental wins, even if Grandma's feelings are hurt. Your baby knows their person.

## When to Actually Worry

- Not making any sounds or eye contact
- Seems unusually floppy or stiff
- Not responding to loud sounds
- You just feel like something's off (trust your gut!)

## The Golden Rule

If your instinct says "call the doctor," call the doctor. That's literally what they're there for. No question is too silly. Your pediatrician has heard it all, we promise.

But for everything else? Take a breath. Your baby is probably just being a wonderfully weird little human.

*Always consult your pediatrician with health concerns. This article is for entertainment and general information only.*""",
        "category": "BABY_DEVELOPMENT",
        "stage": "INFANT_3_6",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_5",
        "title": "Partner Challenge: Who Can Get the Baby to Laugh First?",
        "body": """## It's Game Time, Parents

Around 3-6 months, babies start laughing — and there is no sweeter sound on Earth. So naturally, it's time to turn it into a competition.

## The Rules

- Each partner gets 5 minutes
- No tickling (that's too easy)
- Style points count
- The baby is the only judge, and their ruling is final

## Proven Laugh-Getters

- **Peek-a-boo** — the classic for a reason. Vary your timing for maximum giggles
- **Funny sounds** — raspberries, animal noises, that weird sound you make with your cheek
- **The slow approach** — walk your fingers up their belly veeeery slowly. Anticipation is everything
- **Fake sneezing** — babies think sneezes are HILARIOUS. Nobody knows why
- **Putting things on your head** — cloth, stuffed animal, their sock. Comedy gold
- **The element of surprise** — pop up from behind the couch. Works every time

## Why This Actually Matters

Beyond being ridiculously fun, this kind of play is genuinely good for your baby's development. Laughter means they're:

- Processing cause and effect
- Building social bonds with you
- Developing a sense of humor (yes, already!)
- Learning to anticipate and predict

## Keep Score If You Want

Some families keep a running tally on the fridge. No judgment. Okay, maybe a little judgment if you cheat.

## The Real Winner

Honestly, everyone wins here. You get to hear that incredible baby laugh, your baby gets quality time with both parents, and you get a fun story to embarrass them with at their wedding.

Now go make that baby crack up.

*This article is for fun and bonding. Always ensure play is gentle and age-appropriate. Consult your pediatrician with any developmental concerns.*""",
        "category": "PARTNER_GUIDE",
        "stage": "INFANT_3_6",
        "subStage": None,
        "forPartner": 1
    },
    {
        "id": "fun_baby_6",
        "title": "Tummy Time: How to Make It Suck Less (For Everyone)",
        "body": """## Let's Be Honest: Most Babies Hate Tummy Time

Your pediatrician said to do it. Every parenting book says to do it. But nobody mentioned your baby would scream like you placed them on hot lava. Here's how to make it bearable.

## Why Bother?

Tummy time builds the muscles your baby needs for rolling, crawling, and eventually destroying your living room. It's important. But it doesn't have to be miserable.

## The Survival Guide

- **Start small** — literally 1-2 minutes counts. Build up gradually. This isn't baby boot camp
- **Chest time counts** — lying on your chest while you're reclined? That's tummy time, baby. The snuggliest kind
- **Use a mirror** — put a baby-safe mirror in front of them. "Who IS that gorgeous baby?!" Instant motivation
- **Get down there with them** — eye level makes everything better. Make funny faces
- **The rolled towel trick** — a small rolled towel under their chest gives a little boost and takes off some pressure
- **Timing is everything** — try after a nap, not after a feed (hello, spit-up volcano)

## What to Expect

- Weeks 1-2: screaming, face-planting, general displeasure
- Weeks 3-4: slightly less screaming, some head lifting
- Month 2-3: "Oh wait, I can SEE things from here!"
- Month 4-5: actually pushing up and looking around like a tiny sphinx

## The Secret

Your baby doesn't have to love it. They just have to do a little bit, consistently. And so do you. Give yourself grace — you're doing a great job even if tummy time feels like a daily battle.

*Consult your pediatrician about appropriate tummy time routines for your baby's age and development.*""",
        "category": "MILESTONES_PRACTICAL",
        "stage": "INFANT_3_6",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_7",
        "title": "The Art of the One-Handed Life",
        "body": """## Congratulations, You Now Do Everything With One Hand

You used to need two hands for things. Those days are over. Welcome to the one-handed era of parenting, where you'll develop skills you never knew you needed.

## Things You'll Master One-Handed

- Making a sandwich (the fillings will be uneven and that's fine)
- Texting entire paragraphs with your thumb at Olympic speed
- Pouring coffee (the stakes have never been higher)
- Opening doors, packages, and jars through sheer willpower
- Eating an entire meal standing over the kitchen counter

## Advanced Techniques

- **The Hip Carry Lean** — baby on one hip, free hand doing literally everything else
- **The Foot Grab** — can't bend down? Use your toes. They're basically backup fingers now
- **The Chin Pin** — holding your phone between your chin and shoulder while feeding. A classic
- **The Teamwork Ask** — swallowing your pride and just asking someone to help open that jar

## What This Phase Teaches You

Honestly? You become incredibly efficient. Pre-baby you would have spent 20 minutes deciding what to eat. Current you grabs whatever's closest and eats it in 90 seconds. That's evolution.

## Products That Actually Help

- A good baby carrier (hands-free is the dream)
- Slip-on shoes (laces are a luxury you can't afford)
- Pre-cut food (nobody's julienning carrots right now)
- A long phone charger (so you can reach it from the nursing chair)

One day you'll have both hands free again and you won't know what to do with all that power.

*This is a humor article. Always ensure your baby is safely supported. Talk to your pediatrician about babywearing safety.*""",
        "category": "MENTAL_HEALTH",
        "stage": "INFANT_3_6",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_8",
        "title": "First Foods Taste Test: Watch Those Hilarious Reactions",
        "body": """## The Most Entertaining Meal You'll Ever Serve

Around 4-6 months, your pediatrician may give you the green light for first foods. And honestly? The faces your baby makes are better than any cooking show.

## The Classic Reactions

- **The Pucker** — lemon face, but for sweet potatoes. Makes no sense. Hilarious every time.
- **The Slow Blink** — they're processing. Is this... good? Bad? What even IS this texture?
- **The Full Body Shiver** — something about new flavors makes babies vibrate. It's incredible.
- **The Spit Fountain** — in it goes, aaaaand right back out. Repeat 47 times.
- **The Grabby Hands** — "MORE. GIVE ME MORE OF THAT ORANGE STUFF."

## Tips for the Taste Test

- **Film it** — you will want this footage forever. Trust us.
- **Start with single ingredients** — rice cereal, pureed sweet potato, avocado, banana
- **Don't stress the mess** — put a tarp down. Or don't. Your house is already a disaster anyway
- **Try, try again** — it can take 10+ exposures to a food before baby accepts it
- **Let them explore** — yes, they're going to smear it everywhere. That's actually learning

## The Partner Angle

Take turns introducing new foods so you both get to witness the magic. It's genuinely one of the funniest parts of early parenthood.

## Fun First Food Ideas

- Avocado (the classic millennial start)
- Sweet potato (crowd favorite)
- Banana (slippery chaos)
- Oatmeal cereal (boring but reliable)

Get your camera ready. These reactions are social media gold.

*Always follow your pediatrician's guidance on when and how to introduce solid foods. Watch for signs of allergic reactions.*""",
        "category": "NUTRITION",
        "stage": "INFANT_3_6",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_9",
        "title": "The Night Shift Agreement: A Treaty Between Partners",
        "body": """## It's Time to Negotiate Like World Leaders

Sleep deprivation can turn the most loving couple into roommates who passive-aggressively sigh at each other. The solution? A formal agreement. Preferably signed in crayon at 3 AM.

## Sample Night Shift Treaty

**Article 1: Division of Labor**
- Partner A handles all wake-ups before 2 AM
- Partner B handles all wake-ups after 2 AM
- Both parties agree that "I didn't hear the baby" is not a valid defense

**Article 2: The Weekend Clause**
- Each partner gets one morning to sleep in per weekend
- "Sleeping in" is defined as anything past 7 AM (we've adjusted our expectations)

**Article 3: The Tap-Out Rule**
- Either partner may call a tap-out if they've hit their wall
- The other partner agrees to step in without commentary or scorekeeping

## Strategies That Actually Work

- **Shifts** — one person does the early night, one does the late night
- **Alternate nights** — you're on tonight, I'm on tomorrow
- **The bottle handoff** — if pumping or formula feeding, one person can truly take over
- **Earplugs + monitor** — the off-duty parent sleeps in another room. No guilt allowed

## The Most Important Rule

No one is keeping score. Seriously. The moment you start tallying who got up more, everybody loses. You're on the same team, and the opponent is a 12-pound human who doesn't know what time zones are.

Be kind to each other. You're both exhausted. And this season won't last forever.

*If sleep deprivation is severely impacting your mental health, please talk to your doctor. There is no shame in asking for help.*""",
        "category": "PARTNER_GUIDE",
        "stage": "INFANT_3_6",
        "subStage": None,
        "forPartner": 1
    },
    {
        "id": "fun_baby_10",
        "title": "Your Social Life Now: A Before and After",
        "body": """## A Brutally Honest Comparison

Remember when "going out" meant dinner at 8 PM followed by drinks? Adorable. Let's see how things have changed.

## Before vs. After Baby

- **Before**: "Let's grab dinner at that new place!" / **After**: "Let's eat leftovers standing up while the baby naps!"
- **Before**: Getting ready takes an hour / **After**: Getting everyone out the door takes an hour and you forgot the diaper bag
- **Before**: Weekend plans made on Friday / **After**: Weekend plans made around nap schedules with military precision
- **Before**: "I'll sleep when I'm dead" / **After**: "I'll sleep when the baby does, so probably never"
- **Before**: Conversations about politics and culture / **After**: "So what's your baby's poop schedule like?"

## The Silver Lining (It Exists, We Promise)

- You find your real friends — the ones who come over and hold the baby so you can shower
- You discover the joy of canceling plans without guilt
- 7 PM feels like a perfectly reasonable bedtime for EVERYONE
- You develop ninja-level efficiency in everything you do
- The friends you make in this stage? They're ride-or-die

## How to Actually Maintain a Social Life

- **Lower the bar** — a 30-minute coffee date counts as socializing
- **Embrace the group chat** — connection doesn't require leaving your couch
- **Find your parent crew** — baby classes, park meetups, neighborhood walks
- **Be honest** — "I can hang out for exactly one hour between naps" is a valid RSVP

Your social life isn't dead. It's just... napping.

*If you're feeling isolated or experiencing symptoms of postpartum depression, please reach out to your healthcare provider. You don't have to do this alone.*""",
        "category": "MENTAL_HEALTH",
        "stage": "INFANT_3_6",
        "subStage": None,
        "forPartner": 0
    },

    # ========== INFANT_6_12 (10 articles) ==========
    {
        "id": "fun_baby_11",
        "title": "Why Your Baby Prefers the TV Remote Over Every Toy You Bought",
        "body": """## You Spent HOW Much on That Toy?

You've invested in the organic wooden blocks, the Montessori-approved sensory toys, and that thing that plays Mozart. Your baby? They want the TV remote. And your keys. And that plastic water bottle. Always.

## The Science Behind It

Babies are little scientists. They want what YOU want because:

- **You use it** — if it's important to you, it must be the most amazing thing ever
- **It's real** — they can tell the difference between a toy phone and YOUR phone. They're not fooled
- **Buttons that DO things** — toy buttons make fake sounds. Real buttons change the TV channel. Power move
- **It's forbidden** — you take it away, which makes it 10x more interesting. Basic baby economics

## The Top 10 Non-Toy Toys

1. TV remote (the undisputed champion)
2. Your phone (preferably unlocked so they can call your boss)
3. Wooden spoons
4. Tupperware lids
5. Water bottles (empty, crinkly = perfect)
6. Cardboard boxes
7. Measuring cups
8. Ziploc bags (supervised only!)
9. A whisk
10. Literally any piece of paper they can crinkle and try to eat

## How to Handle It

- **Designate a "baby remote"** — take the batteries out of an old one. They'll know it's fake, but it buys you time
- **Rotate toys** — put half away, swap them out every week. "New" toys are exciting again
- **Lean into it** — safe kitchen items make great toys. You don't need to spend a fortune

The $50 toy will sit untouched. The $0 wooden spoon will provide hours of entertainment. That's just how it works.

*Always supervise play with non-toy items and ensure they're free of small parts, sharp edges, or choking hazards.*""",
        "category": "BABY_DEVELOPMENT",
        "stage": "INFANT_6_12",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_12",
        "title": "Baby-Led Weaning Wins and Fails: What to Actually Expect",
        "body": """## The Instagram Version vs. Reality

Instagram BLW: baby delicately eating a piece of steamed broccoli in a clean high chair with natural lighting.

Real BLW: food on the ceiling, in the dog's mouth, smeared across their forehead, and somehow INSIDE their diaper.

## The Wins

- **Independence** — your baby learns to feed themselves and you get to (sometimes) eat your own meal
- **Exposure to textures** — they learn to chew before they swallow, which is actually great for development
- **Less picky eating later** — studies suggest BLW babies may be more adventurous eaters. May.
- **It's hilarious** — the faces, the experiments, the way they examine a piece of banana like it's a moon rock

## The Fails (That Are Totally Normal)

- **The gag** — gagging is NOT choking. But it will terrify you every single time. Learn the difference and take an infant CPR class
- **The drop** — everything goes on the floor. Everything. Consider getting a splash mat or a dog
- **The smear** — avocado in their eyebrows. Sweet potato in their ears. Banana in places you didn't know existed
- **The rejection** — they loved sweet potato yesterday. Today it's garbage. Tomorrow? Who knows

## Starter Foods for BLW

- Banana (cut lengthwise, leave some peel for grip)
- Avocado strips (slippery chaos but nutritious)
- Steamed broccoli florets (built-in handle!)
- Toast strips with thin nut butter spread
- Soft cooked sweet potato sticks

## The Real Secret

It's messy, it's slow, and 90% of the food ends up everywhere except their stomach for the first few weeks. But watching them figure it out? Priceless.

*Always consult your pediatrician before starting solids. Learn infant choking vs. gagging. Never leave baby unattended while eating.*""",
        "category": "NUTRITION",
        "stage": "INFANT_6_12",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_13",
        "title": "The Great Pacifier Debate (And How to Ditch It)",
        "body": """## To Paci or Not to Paci: That Is the Question

Few parenting topics spark as much heated debate as the pacifier. Let's break it down with zero judgment and maximum humor.

## Team Pacifier Says:

- It's a soothing tool and there's nothing wrong with that
- Reduced SIDS risk during sleep (actual science!)
- It gives everyone a break — baby, parents, fellow airplane passengers
- Some babies just need to suck. It's biological, not a moral failing

## Team No-Paci Says:

- Potential dental concerns if used too long
- Can interfere with breastfeeding in very early weeks
- The 3 AM paci hunt is a special kind of torture
- Eventually you have to take it away, and that day is... a day

## The Great Paci Hunt

Let's talk about the real issue: the middle-of-the-night pacifier search. You will buy 47 pacifiers. You will lose 46 of them. The one remaining pacifier will be under the crib in the exact spot your arm can't reach.

**Pro tip**: buy a glow-in-the-dark pacifier. Life. Changed.

## Ready to Ditch It? Here's How

- **Cold turkey** — rip off the band-aid. 2-3 rough days, then it's done
- **Gradual reduction** — only at nap and bedtime, then only bedtime, then gone
- **The Paci Fairy** — leave pacifiers out for the "fairy" who brings a small gift in exchange
- **Snip the tip** — cut a tiny hole in the tip (it won't feel the same). Less satisfying = less interest
- **Pick your timing** — not during a move, new sibling, illness, or any other major change

You'll survive this. The pacifier served its purpose. Now it's time to say goodbye to your tiny silicone hero.

*Talk to your pediatrician or dentist about the right time to wean your child from a pacifier.*""",
        "category": "MILESTONES_PRACTICAL",
        "stage": "INFANT_6_12",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_14",
        "title": "What No One Tells You About Having a Mobile Baby",
        "body": """## They're Moving. God Help Us All.

One day your baby is a cute little potato that stays where you put them. The next day they're rolling, scooting, crawling, and pulling up on everything. Your life is about to change DRAMATICALLY.

## The Stages of Mobility Terror

**Rolling** — "Oh cute, they rolled over!" Two days later, they roll off the changing table. Constant vigilance.

**Army crawl** — they look like a tiny action hero dragging themselves across the floor. Adorable and terrifying.

**Crawling** — now they're FAST. You will not believe how fast. They're across the room before you can put down your coffee.

**Pulling up** — on furniture, on your legs, on the dog, on things that are definitely not stable enough to support them.

**Cruising** — walking while holding onto things. Your furniture is now a highway system.

## Things You Need to Babyproof YESTERDAY

- Outlet covers (the obvious one)
- Cabinet locks (they WILL find the cleaning supplies)
- Toilet locks (yes, really)
- Anchor furniture to walls (bookshelves are climbing gyms now)
- Gate the stairs (top AND bottom)
- Move all cords out of reach
- Get on your hands and knees and look at your house from their level. You'll find things you never noticed

## The Emotional Whiplash

You'll feel proud ("They're crawling! My genius baby!") and panicked ("THEY'RE CRAWLING. NOTHING IS SAFE.") at the exact same time. This is normal.

Embrace it. Buy knee pads for yourself (you'll be on the floor a lot). And maybe invest in a really good baby gate.

*Babyproofing is essential for safety. Consult CPSC guidelines and your pediatrician for age-appropriate safety measures.*""",
        "category": "MILESTONES_PRACTICAL",
        "stage": "INFANT_6_12",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_15",
        "title": "Partner Challenge: Trade Roles for a Day",
        "body": """## The Great Parent Swap

Think you know what your partner's day looks like? Prove it. Trade your typical roles for a full day and see what happens. Spoiler: empathy incoming.

## The Rules

- Whoever usually does mornings does bedtime. And vice versa
- Whoever usually handles meals and feeding is on diaper/bath duty instead
- The stay-at-home parent goes out (even just to a coffee shop). The working parent stays home solo with baby
- No phone calls for help unless it's a genuine emergency (baby eating a shoe does not count)

## What You'll Learn

**If you usually work outside the home:**
- How long a day with a baby actually feels
- That "nap time" isn't a break — it's a frantic sprint to do everything else
- How isolating it can be with just a baby for conversation
- That your partner is doing way more than you realized

**If you're usually home with baby:**
- How hard it is to focus on work when you're worrying about your kid
- That your partner misses being home more than they let on
- What their day actually looks like
- That leaving the house without a diaper bag feels like freedom

## After the Swap

Sit down together after the baby's asleep and debrief. Share what surprised you, what was harder than expected, and what you appreciate about what your partner does every day.

## The Goal

This isn't about proving who has it harder. It's about understanding, appreciating, and reconnecting. Plus, it's kind of funny watching your partner figure out the bottle warmer for the first time.

*This article encourages partnership and empathy. If you're feeling unsupported or overwhelmed, please talk to your partner or seek guidance from a family counselor.*""",
        "category": "PARTNER_GUIDE",
        "stage": "INFANT_6_12",
        "subStage": None,
        "forPartner": 1
    },
    {
        "id": "fun_baby_16",
        "title": "The Separation Anxiety Survival Guide (For You AND Baby)",
        "body": """## Who's Crying Harder: You or the Baby?

Separation anxiety hits hard around 6-9 months, and plot twist — it's often worse for the parent. Here's how to handle it without losing your mind.

## Why It Happens (And Why It's Actually Good)

Your baby has figured out something incredible: you exist even when they can't see you. That's called object permanence, and it's a huge cognitive leap! The downside? They now know you can LEAVE, and they have big feelings about it.

## Classic Separation Anxiety Moments

- The daycare drop-off cling (with full-body octopus grip)
- Screaming when you walk to the bathroom (you'll be back in 30 seconds, promise)
- The "I only want MOMMY/DADDY" phase (sorry, other parent)
- The handoff to grandparents that sounds like a horror movie

## Survival Tips

- **Keep goodbyes short and sweet** — a quick "I love you, I'll be back!" and GO. Lingering makes it worse
- **Don't sneak away** — it feels easier but builds distrust. Always say bye
- **Create a goodbye ritual** — special handshake, nose boop, same phrase every time
- **Practice mini-separations** — leave the room for short periods at home
- **Trust your caregiver** — they will tell you the crying stops within 5 minutes. It's true

## For the Parent Who's Struggling

It's okay to cry in the car after drop-off. It's okay to watch the daycare camera obsessively for the first week. It's okay to feel guilty, even when you know they're fine.

You're not abandoning them. You're teaching them that you always come back. And that's one of the most important lessons they'll ever learn.

*If anxiety about separation is significantly impacting your daily life, consider speaking with a mental health professional.*""",
        "category": "MENTAL_HEALTH",
        "stage": "INFANT_6_12",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_17",
        "title": "Sleep Regression: The Sequel Nobody Asked For",
        "body": """## Just When You Thought You Had It Figured Out...

Your baby was sleeping through the night. You were feeling human again. You told someone "we're in a good place with sleep." And then, like a horror movie villain, the sleep regression returned.

## The Hit List of Regressions

- **6 months** — new skills (sitting, crawling attempts) make sleep boring
- **8-10 months** — separation anxiety plus pulling up in the crib. Fun combo
- **12 months** — walking attempts, brain going haywire with new connections

## Signs You're in a Sleep Regression

- Baby who slept 6+ hours is now waking every 1-2 hours
- Naps become a hostage negotiation
- Nothing that used to work is working
- You Googled "is my baby broken" at 3 AM

## What's Actually Happening

Their brains are making massive developmental leaps. It's like your baby's brain is downloading a software update and needs to restart 47 times. Annoying, but important.

## How to Survive (Again)

- **Don't create new sleep crutches** — it's tempting to bring them to bed or start rocking to sleep again. Try to stay consistent
- **Keep the routine** — bath, book, song, bed. The routine is your anchor
- **Share the load** — if one parent is drowning, the other steps up. See our Night Shift Treaty article
- **It's temporary** — regressions typically last 2-4 weeks. We know that feels like forever
- **Lower your daytime expectations** — survival mode is a valid operating mode

## A Pep Talk

You've done this before. You survived the 4-month regression. You can do this one too. And someday, your teenager won't want to get OUT of bed. Hang in there.

*Persistent sleep issues may warrant a discussion with your pediatrician. This article is for general information and entertainment.*""",
        "category": "SLEEP",
        "stage": "INFANT_6_12",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_18",
        "title": "First Words Bets: Who Will Baby Say First — Mama or Dada?",
        "body": """## The Stakes Have Never Been Higher

It's the ultimate parenting competition. Will baby's first word be "Mama" or "Dada"? Let the lobbying begin.

## The Science (Sorry, Mamas)

"Dada" is often easier to say first because the "d" sound is slightly simpler for babies to produce than the "m" sound. This is NOT a reflection of preference. We repeat: THIS IS NOT A REFLECTION OF PREFERENCE. (Mamas, we see you spiraling.)

## Campaign Strategies

**Team Mama:**
- Point to yourself constantly. "Who's this? MAMA!"
- Read books where every character is somehow named Mama
- Narrate everything: "Mama is making lunch. Mama loves you. Say MAMA"

**Team Dada:**
- Same strategy but with significantly less effort because linguistics is on your side
- Just existing near the baby seems to work, annoyingly

## What Actually Counts as a First Word?

Here's the thing: "dadadada" while banging a spoon on the table might not be intentional. A true first word means they're using it WITH meaning, directed at the right person.

## Plot Twist First Words

Many babies skip the Mama/Dada debate entirely and say:
- "Ba" (ball, bottle, or just... ba)
- "Uh oh" (because you say it 400 times a day)
- "No" (they learned from the best)
- The dog's name (the ultimate betrayal)
- "Nana" (grandma wins and she will NEVER let you forget it)

## The Real Milestone

Regardless of what they say first, your baby is learning to communicate with words. That's incredible! Soak it in, because soon they won't stop talking. Ever.

*Language development varies widely. If you have concerns about speech milestones, consult your pediatrician or a speech-language pathologist.*""",
        "category": "BABY_DEVELOPMENT",
        "stage": "INFANT_6_12",
        "subStage": None,
        "forPartner": 1
    },
    {
        "id": "fun_baby_19",
        "title": "The Snack Trap: Feeding a Hungry Crawler",
        "body": """## They Burn Calories Now, and They Want Them Back

Once your baby starts moving, their appetite kicks into high gear. But feeding a baby who won't sit still is its own adventure. Welcome to the snack life.

## Signs Your Crawler Is Hungry (Again)

- They're trying to eat the carpet
- They crawl to the kitchen and stare at you
- They grab food off your plate with zero hesitation
- They do the open-mouth bird move at anything you're holding
- It's been 45 minutes since they last ate (so, right on schedule)

## Best On-the-Go Snacks (6-12 Months)

- **Puffs** — the gateway snack. They dissolve, they're easy to grab, they end up everywhere
- **Soft fruit pieces** — banana, ripe pear, mango chunks
- **Cheese cubes** — tiny, soft, protein-packed
- **Steamed veggie sticks** — sweet potato, carrot (soft enough to gum)
- **Toast strips** — plain or with a thin spread of nut butter
- **Yogurt** — messy but worth it. Get the unsweetened kind

## The Mess Management Plan

- Accept that food will be in places food should not be
- Invest in bibs with catchers (game changer)
- A damp washcloth nearby at all times
- The dog will become your best cleanup crew (if you have one)
- Embrace the mess — it means they're learning and exploring

## The Pincer Grasp Celebration

When your baby starts picking up small foods between their thumb and finger, that's a major fine motor milestone! Celebrate it! Then vacuum up the 200 puffs they dropped practicing.

Your tiny human is fueling up for world domination. Keep the snacks coming.

*Introduce new foods one at a time and watch for allergic reactions. Always supervise eating and cut food into safe sizes. Consult your pediatrician.*""",
        "category": "NUTRITION",
        "stage": "INFANT_6_12",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_20",
        "title": "Babyproofing: A Comedy of Errors",
        "body": """## You Thought You Were Prepared. You Were Not.

You bought the baby gates. You covered the outlets. You padded the coffee table corners. Then your baby found the ONE thing you forgot to secure and beelined straight for it.

## The Babyproofing Timeline

**Before baby moves**: "We should probably babyproof at some point."
**Baby rolls for the first time**: "We should really get on that."
**Baby crawls**: "WHY DIDN'T WE DO THIS SOONER?!"
**Baby pulls up**: "THIS HOUSE IS A DEATHTRAP."

## Things You Didn't Think to Babyproof

- The toilet paper roll (they will unravel the entire thing in seconds)
- Your phone charger cable (the world's most attractive chew toy)
- Floor-level bookshelves (all books will be removed. Daily.)
- The cat's food and water bowls (delicacy, apparently)
- Your shoes (they will be tasted)
- Houseplants (check if yours are toxic — many are!)
- The trash can (baby thinks it's a treasure chest)

## Babyproofing Hacks

- **Pool noodles on sharp edges** — cheap and effective
- **Hair ties on cabinet knobs** — figure-eight them for a quick lock
- **Tension rods in doorways** — cheaper than baby gates in some spots
- **Rubber bands on door handles** — prevents lockouts
- **Laundry basket over floor vents** — keeps tiny fingers safe

## The Humbling Truth

No matter how thoroughly you babyproof, your baby will find the ONE hazard you missed. They're basically tiny safety inspectors with a mission to find violations. Think of it as quality assurance.

You're not failing. You're learning. Just like your baby.

*For comprehensive babyproofing guidance, consult the CPSC (Consumer Product Safety Commission) or your pediatrician.*""",
        "category": "MILESTONES_PRACTICAL",
        "stage": "INFANT_6_12",
        "subStage": None,
        "forPartner": 0
    },

    # ========== TODDLER_1_2 (10 articles) ==========
    {
        "id": "fun_baby_21",
        "title": "Toddler Logic: A Translation Guide",
        "body": """## Understanding the Most Irrational Creature on Earth

Toddlers operate on a plane of logic that no adult can fully comprehend. But we can try. Here's your official translation guide.

## Toddler Logic, Translated

- **"I want the blue cup"** → You gave them the blue cup. They meant the OTHER blue cup. The one that doesn't exist.
- **"I do it myself"** → This task will take 45 minutes and they will need help anyway but DO NOT HELP THEM
- **Crying because you peeled their banana** → They wanted to peel it. The banana is now ruined. All bananas are ruined. Life is ruined.
- **"No nap"** → They are exhausted. They can barely keep their eyes open. They will fight sleep like a warrior going into battle.
- **"I want up. I want down. I want up."** → This is just their cardio routine for you.

## The Emotional Rollercoaster

In a single minute, a toddler can experience:
- Pure euphoria (they found a rock)
- Devastating grief (they dropped the rock)
- Blinding rage (you can't put the rock back together, it's just a rock)
- Complete calm (look, a different rock!)

## Survival Strategies

- **Offer choices** — "Red shirt or blue shirt?" gives them control without opening Pandora's closet
- **Narrate feelings** — "You're frustrated because the block won't fit. That IS frustrating"
- **Pick your battles** — They want to wear rain boots with pajamas to the grocery store? Let them live their truth
- **Deep breaths** — for YOU, not them

## The Beautiful Part

Under all that chaos, your toddler is learning to be a person. They're testing boundaries, expressing preferences, and figuring out this wild world. It's messy and loud and absolutely beautiful.

*Toddler behavior can be challenging. If you're concerned about developmental delays or extreme behavior, consult your pediatrician.*""",
        "category": "BABY_DEVELOPMENT",
        "stage": "TODDLER_1_2",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_22",
        "title": "Songs That Will Get Stuck in Your Head Forever (You're Welcome)",
        "body": """## A Musical Warning From Parents Who've Been There

There are songs you'll sing to your toddler that will take up permanent residence in your brain. You will hum them at work. You will sing them in the shower. They will haunt your dreams. Here they are.

## The Hall of Fame

- **Baby Shark** — do do do do do do. It's already in your head. We're sorry
- **Wheels on the Bus** — infinite verses. The wipers go swish. The babies go wah. Your sanity goes bye bye bye
- **Old MacDonald** — E-I-E-I-O will be your most-used phrase for the next year
- **Cocomelon's Greatest Hits** — specifically that "Yes Yes Vegetables" song. You know the one
- **Itsy Bitsy Spider** — you'll do the hand motions involuntarily in public
- **If You're Happy and You Know It** — spoiler: you're delirious and you know it

## The Stages of Earworm Grief

1. **Introduction** — "Oh, this is cute!"
2. **Repetition** — "We've heard this 15 times today"
3. **Acceptance** — "I'm singing this at the grocery store"
4. **Identity crisis** — "I used to listen to real music"
5. **Stockholm syndrome** — "Actually, this slaps"

## Reclaiming Your Musical Identity

- **Play YOUR music during car rides** — kids like all music. Share yours!
- **Find kids' music you actually enjoy** — Raffi, They Might Be Giants, Caspar Babypants
- **Use headphones during nap time** — listen to a full album like the old days

## The Upside

Watching your toddler dance, sing along, and light up when their favorite song comes on? Worth every earworm. Even Baby Shark.

*Music is amazing for development! This article is just for fun. Keep singing — your toddler loves it.*""",
        "category": "MENTAL_HEALTH",
        "stage": "TODDLER_1_2",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_23",
        "title": "Park Dad/Mom Energy: Making Friends at the Playground",
        "body": """## The Playground Is Your New Social Scene

Forget bars and networking events. The playground is where adult friendships are forged now. And the entry barrier is low: just show up with a small human and some snacks.

## The Playground Parent Archetypes

- **The Hoverer** — within arm's reach at all times. Has hand sanitizer holstered like a weapon
- **The Phone Scroller** — on the bench, glancing up occasionally. No judgment, we've all been there
- **The Overenthusiastic One** — going down the slide WITH their kid, having the time of their life
- **The Snack Parent** — has a bag that could sustain a family of four for a week. Everyone's best friend
- **The Regular** — here every day, same time. Knows everyone. The unofficial playground mayor

## How to Actually Make Parent Friends

- **The snack offering** — "Want a goldfish cracker?" is the parent equivalent of "Can I buy you a drink?"
- **The age question** — "How old?" is the universal parent opener. Works every time
- **The commiseration bond** — "Mine didn't sleep last night either" creates instant connection
- **Show up regularly** — same park, same time. Familiarity breeds friendship
- **Be the inviter** — "We're going to get coffee after this, want to come?" Someone has to be brave

## Why This Matters

Parenting can be isolating, especially in the toddler years. You need people who get it. People who won't judge the Cheerios in your hair or the mysterious stain on your shirt.

Your playground crew might become your closest friends. Give it a chance.

*Social connection is important for mental health. If you're feeling isolated, reach out to local parent groups or your healthcare provider.*""",
        "category": "PARTNER_GUIDE",
        "stage": "TODDLER_1_2",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_24",
        "title": "Sensory Play Ideas That Won't Destroy Your House",
        "body": """## Messy Play Without the Mess (Mostly)

Sensory play is amazing for toddler development. It's also amazing at destroying your kitchen. Here are some ideas that keep the chaos manageable.

## Low-Mess Sensory Wins

- **Water table outside** — contains the splash zone to the yard. Add cups, spoons, rubber ducks
- **Rice bin** — fill a plastic bin with dry rice, add scoops and small toys. Put a sheet underneath for easy cleanup
- **Cloud dough** — 8 cups flour + 1 cup baby oil. Moldable, soft, and vacuums up pretty easily
- **Frozen color cubes** — freeze water with food coloring. Let them melt and mix on a tray
- **Sensory bags** — fill a ziplock with hair gel and glitter. Tape it to the table. Squish without mess!

## Medium-Mess (Worth It) Ideas

- **Finger painting in the bathtub** — they can go wild and you just rinse everything down the drain
- **Cooked spaghetti play** — cold noodles are weird and wonderful to squish. Bonus: add food coloring
- **Shaving cream on a tray** — draw in it, squish it, it smells nice. Win-win-win
- **Mud kitchen** — an outdoor setup with old pots and dirt. Let them make "soup"

## The Setup That Saves You

- **Lay down a cheap plastic tablecloth or shower curtain** — instant cleanup zone
- **Strip them down** — less clothes = less laundry. Diaper-only sensory play is totally valid
- **Set a timer** — 15-20 minutes is plenty. You don't need an hour-long activity
- **Have a towel ready** — and maybe a hose

## Why Bother?

Sensory play builds neural connections, fine motor skills, and creativity. It also buys you 20 minutes of a quiet, focused toddler. That alone is worth the cleanup.

*Always supervise sensory play. Avoid choking hazards and materials that aren't safe if ingested.*""",
        "category": "BABY_DEVELOPMENT",
        "stage": "TODDLER_1_2",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_25",
        "title": "The One-Year Sleep Regression Nobody Warned You About",
        "body": """## Surprise! Sleep Regressions Don't Stop at Infancy

You thought you graduated from sleep regressions. You celebrated. You may have even bragged to other parents. The universe heard you, and now your toddler is staging a 2 AM protest.

## Why Is This Happening?

Around 12-18 months, toddlers go through massive developmental changes:

- Learning to walk (their brain is literally buzzing)
- Language explosion (so many new words to process)
- Growing independence ("I can do things! Like scream at midnight!")
- Separation anxiety round two (the sequel nobody wanted)
- Nap transition — going from two naps to one is a bumpy road

## What It Looks Like

- Fighting bedtime like it's their job
- Waking up at night and wanting to PLAY
- Standing in the crib yelling your name like a tiny drill sergeant
- Refusing naps and then melting down at 4 PM
- Being exhausted but physically incapable of giving in to sleep

## What to Do

- **Stay consistent** — your bedtime routine is your best weapon. Don't abandon ship
- **Tire them out** — more physical activity during the day = better sleep at night
- **Adjust the schedule** — maybe bedtime needs to shift 30 minutes later
- **Check the environment** — dark room, white noise, comfortable temperature
- **Offer comfort briefly** — a quick check-in, reassurance, then back out. Repeat as needed

## What NOT to Do

- Don't start co-sleeping out of desperation (unless that's your intentional choice)
- Don't drop the second nap too early
- Don't compare your kid to other kids' sleep ("Well, MY kid sleeps 12 hours" — cool, Karen)

This too shall pass. Deep breaths. More coffee.

*Ongoing sleep challenges may benefit from professional guidance. Consult your pediatrician or a certified sleep consultant.*""",
        "category": "SLEEP",
        "stage": "TODDLER_1_2",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_26",
        "title": "Toddler Meal Prep: Tiny Portions, Giant Opinions",
        "body": """## Welcome to the Pickiest Restaurant in the World

Your toddler's menu changes daily, without notice, and based on criteria only they understand. Today's special: the same three foods they've eaten all week. Here's how to survive.

## Universal Toddler Food Truths

- If you cut it wrong, it's inedible
- If it touched another food, it's contaminated
- Yesterday's favorite is today's enemy
- They will eat dirt at the park but not the organic broccoli you steamed
- Presentation matters (but only sometimes and you'll never crack the code)

## Foods Most Toddlers Will Actually Eat

- **Mac and cheese** — the universal toddler currency
- **Bananas** — until they randomly decide bananas are offensive
- **Chicken nuggets** — in any shape. Dino nuggets have special powers
- **Berries** — especially if they can pick them up themselves
- **Yogurt** — tubes, pouches, cups, frozen. All forms accepted
- **Toast** — with butter, with jam, plain. The blank canvas of toddler cuisine
- **Peanut butter anything** — on toast, with apples, on a spoon

## Sneaky Nutrition Wins

- Blend spinach into smoothies (they can't see it, it doesn't exist)
- Add cauliflower to mac and cheese
- Sweet potato in pancake batter
- Finely diced veggies in pasta sauce
- Banana "ice cream" — frozen bananas blended up

## The Mindset Shift

Your toddler won't starve. They're biologically programmed to eat what they need. Some days that's a full plate, some days it's three crackers and a cheese stick. Over the course of a week, it balances out.

Your job: offer good options. Their job: decide what and how much to eat. Breathe.

*Consult your pediatrician if you have concerns about your toddler's nutrition or growth. This article is for general guidance and humor.*""",
        "category": "NUTRITION",
        "stage": "TODDLER_1_2",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_27",
        "title": "Walking! The Milestone That Changes Everything",
        "body": """## They're Upright. There's No Going Back.

The first steps are magical. You cry, you cheer, you record it from seven angles. And then you realize: a walking toddler is a whole new level of chaos.

## The Walking Timeline (Every Kid Is Different)

- **9-12 months** — pulling up, cruising along furniture
- **12-15 months** — first steps! Frankenstein-style, arms up, pure determination
- **15-18 months** — walking with confidence, running with reckless abandon
- **18+ months** — climbing. Oh no. They're climbing now

## Things Nobody Tells You About Walking

- They fall. A LOT. And they mostly bounce right back. You, however, will have a heart attack each time
- Shoes become important (and expensive, and lost constantly)
- They can now reach things on tables. Nothing is safe
- "Going for a walk" means going 50 feet in 45 minutes because they stop to examine every leaf, rock, and ant
- You will spend more time bent over holding their hands than you spend standing upright

## How to Encourage Walking

- **Create a safe space** — clear a path, pad the sharp corners
- **Push toys** — those little walkers they can push around are great for confidence
- **Hold one hand, not two** — helps them learn balance
- **Cheer like they scored a touchdown** — positive reinforcement is powerful
- **Let them go barefoot** — inside, barefoot is actually best for developing balance

## The Pride Factor

Whatever age your baby starts walking, it's the right time for THEM. Don't compare. Don't stress. Some kids walk at 9 months, some at 18 months, and they all end up running away from you at the park eventually.

*Motor development varies widely. If your child isn't walking by 18 months, discuss it with your pediatrician. No need to panic — just check in.*""",
        "category": "MILESTONES_PRACTICAL",
        "stage": "TODDLER_1_2",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_28",
        "title": "Tag Team Parenting: How to Be an Unstoppable Duo",
        "body": """## You're Not Co-Workers. You're a Superhero Team.

Parenting a toddler requires strategy, stamina, and seamless handoffs. Here's how to level up your partnership game.

## The Tag Team Fundamentals

- **The Handoff** — "I've got the toddler, you eat your food while it's hot." Simple. Revolutionary. Beautiful
- **The Zone Defense** — one parent takes the kid, the other takes the house. Switch at halftime
- **The Double Team** — bath time, bedtime, and meltdowns sometimes need both of you. That's not failure, that's strategy
- **The Tap Out** — a sacred signal that means "I'm at my limit, please take over, no questions asked"

## Communication That Actually Works

- **The Daily Debrief** — 5 minutes after bedtime: "Here's how the day went, here's what I need tomorrow"
- **The Gratitude Drop** — "Thanks for handling that meltdown" goes further than you think
- **The No-Blame Rule** — the toddler ate a crayon on YOUR watch? It happens. No scorekeeping
- **The Assumption of Good Intent** — your partner is trying their best, even when their best looks different from yours

## Divide and Conquer

- Play to your strengths (one of you is better at bedtime, the other at morning routine — own it)
- Trade off the hard stuff so nobody burns out
- Give each other solo time — even 30 minutes alone recharges the battery

## The Big Picture

Your toddler is watching how you work together. They're learning about teamwork, respect, and partnership. No pressure or anything, but you're modeling what a healthy relationship looks like.

So be kind to each other. Laugh together. And remember: you chose this person to be on your team. They're pretty great.

*Strong partnerships take work. If you're struggling to connect, couples counseling can be incredibly helpful — even for healthy relationships.*""",
        "category": "PARTNER_GUIDE",
        "stage": "TODDLER_1_2",
        "subStage": None,
        "forPartner": 1
    },
    {
        "id": "fun_baby_29",
        "title": "The Tantrum Translator: What They Really Mean",
        "body": """## Decoding the Screaming

Tantrums are not personal attacks. They're communication from a tiny human who has big feelings and approximately zero coping skills. Let's decode some common ones.

## Tantrum Translations

**The Grocery Store Meltdown**
What it looks like: Full-body screaming in aisle 7
What they mean: "I'm overstimulated, hungry, and you said no to the cereal with the cartoon on it"

**The Getting Dressed Tantrum**
What it looks like: Going completely boneless when you try to put on pants
What they mean: "I want autonomy over my body and also this shirt is itchy"

**The Leaving the Park Tantrum**
What it looks like: Running away from you while sobbing
What they mean: "Transitions are HARD and I was having FUN"

**The Bedtime Tantrum**
What it looks like: Suddenly needing water, a hug, another story, and to discuss the meaning of life
What they mean: "I'm overtired and also I'm going to miss you while I sleep"

## Your Tantrum Toolkit

- **Stay calm** — your calm is their anchor. (Easier said than done, we know)
- **Get low** — crouch to their level. It's less threatening and more connecting
- **Name the feeling** — "You're really angry right now. I understand"
- **Don't reason mid-tantrum** — logic does not exist in the tantrum dimension
- **Wait it out** — sometimes they just need to feel their feelings

## After the Storm

When it's over, connect. A hug, a quiet "I'm here," a glass of water. They're not giving you a hard time — they're HAVING a hard time.

And hey, you're doing better than you think.

*Frequent or extreme tantrums may warrant a conversation with your pediatrician. This is normal toddler behavior, but support is always available.*""",
        "category": "MENTAL_HEALTH",
        "stage": "TODDLER_1_2",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_30",
        "title": "Nap Transition Survival: Two Naps to One",
        "body": """## The Great Nap Consolidation

Somewhere between 12-18 months, your toddler decides two naps are for babies. They're a ONE nap kid now. The transition? It's... a ride.

## Signs They're Ready

- Fighting the morning nap (but melting down by 4 PM)
- Taking forever to fall asleep for nap #1
- The afternoon nap is getting later and later, pushing bedtime to "unreasonable o'clock"
- Some days they do fine on one nap, some days they're a disaster

## The Messy Middle

The transition isn't overnight. For 2-6 weeks, you'll live in nap purgatory:

- **One-nap days**: they seem fine! This is working!
- **Two-nap days**: nope, they're a wreck, back to two naps today
- **No-nap days**: they fell asleep in the car at 4:30 PM and now bedtime is ruined

## The Strategy

- **Push the morning nap later gradually** — 15 minutes later every few days until it lands around 12-1 PM
- **Early lunch** — feed them at 11-11:30 so they're ready to nap by noon-ish
- **Accept early bedtime** — during the transition, 6:30 PM bedtime is totally fine
- **Car nap insurance** — if they're falling apart, a 15-minute car nap can bridge the gap without ruining the night

## What to Expect on the Other Side

One glorious midday nap of 2-3 hours. Your mornings are FREE. Your afternoons have a beautiful, predictable break. It's the promised land.

Getting there is rough. But it's so worth it.

*Every child transitions on their own timeline. Talk to your pediatrician if you're unsure about your toddler's sleep needs.*""",
        "category": "SLEEP",
        "stage": "TODDLER_1_2",
        "subStage": None,
        "forPartner": 0
    },

    # ========== TODDLER_2_3 (10 articles) ==========
    {
        "id": "fun_baby_31",
        "title": "Why Toddlers Are Basically Tiny Drunk Adults",
        "body": """## The Evidence Is Overwhelming

If you've ever seen a toddler in action and thought "they're acting like they just left a pub," you're not alone. The similarities are uncanny.

## Exhibit A: The Physical Evidence

- **Walking** — stumbling, weaving, falling over for no apparent reason, getting back up with full confidence
- **Fine motor skills** — they reach for something, miss, try again, knock over everything nearby
- **Dancing** — uninhibited, no rhythm, absolute commitment. Zero self-consciousness
- **Falling asleep anywhere** — in a shopping cart, on the floor, mid-sentence. Out cold

## Exhibit B: The Behavioral Evidence

- **Emotional swings** — laughing one second, crying the next. Best friends with a stranger, then terrified of them
- **Eating habits** — will eat anything or nothing. Might try to eat something that isn't food. Drops food everywhere
- **Volume control** — nonexistent. Everything is either a whisper or a scream. Mostly screaming
- **Oversharing** — "MOMMY HAS A BIG BUTT" in a quiet restaurant. No filter whatsoever
- **Stubbornness** — they want to do it THEIR way and no amount of logic will change their mind

## Exhibit C: The Communication Style

- Slurred speech that only their closest companions can understand
- Repeating the same thing over and over until someone acknowledges them
- Making bold declarations: "I'M NOT TIRED" (falls asleep 30 seconds later)
- Strong opinions about everything, expertise in nothing

## The Verdict

Toddlers are delightfully, chaotically, hilariously unpredictable. They live in the moment with zero concern for social norms. Honestly? We could all learn something from that energy.

Just maybe not the falling-down-stairs part.

*This is a humor article. Toddlers are wonderful. If you have concerns about your toddler's motor skills or behavior, consult your pediatrician.*""",
        "category": "BABY_DEVELOPMENT",
        "stage": "TODDLER_2_3",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_32",
        "title": "The Toddler Negotiator: When Your Kid Becomes a Tiny Lawyer",
        "body": """## Objection, Your Honor!

Somewhere around age 2, your sweet baby transforms into a ruthless negotiator. They can't tie their shoes, but they can argue their case with the tenacity of a courtroom veteran.

## Classic Toddler Negotiations

**You**: "Time for bed."
**Toddler**: "One more minute."
**You**: "Okay, one minute."
**Toddler**: "Five more minutes."
**You**: "I said one."
**Toddler**: "Three minutes and one story and a song and water and I have to tell you something."

**You**: "Eat your vegetables."
**Toddler**: "I eat ONE bean."
**You**: "Three beans."
**Toddler**: "Two beans and a cookie."
(Somehow you agreed to this deal and you're not sure how.)

## Their Tactics (And They're Good)

- **The Delay** — "Wait wait wait, I need to tell you something" (they have nothing to tell you)
- **The Redirect** — "But first, can we read a book?"
- **The Emotional Appeal** — "But I'll be SAD" with the biggest eyes you've ever seen
- **The Loophole** — "You said no cookies. This is a biscuit"
- **The Breakdown** — when logic fails, volume increases

## How to Handle Your Tiny Litigator

- **Give limited choices** — "Broccoli or carrots?" not "What do you want to eat?"
- **Set boundaries once** — say it, mean it, follow through
- **Acknowledge their argument** — "I hear you. The answer is still no"
- **Don't negotiate on safety** — car seats, holding hands in parking lots, non-negotiable items stay non-negotiable
- **Pick your battles** — some things aren't worth the courtroom drama

## The Silver Lining

A strong-willed toddler often becomes a strong-willed adult. And honestly? Those negotiation skills will serve them well someday. Just not at bedtime.

*This is a humor article about normal toddler development. Persistent defiance or behavioral concerns can be discussed with your pediatrician.*""",
        "category": "MENTAL_HEALTH",
        "stage": "TODDLER_2_3",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_33",
        "title": "Toddler Meals They'll Actually Eat (Tested by Real Toddlers)",
        "body": """## Field-Tested, Toddler-Approved

We surveyed real parents in the trenches. These are the meals that actually get eaten more than 50% of the time. That's a win in toddler world.

## The Greatest Hits

**Quesadillas**
Why it works: flat, cheesy, cuttable into fun shapes. Hide beans or finely chopped veggies inside. They'll never know.

**Pancakes**
Why it works: sweet, soft, great vehicle for hidden nutrition. Add mashed banana, pumpkin puree, or oat flour. Serve for ANY meal.

**Pasta with Butter**
Why it works: because it's pasta with butter. Don't overthink it. Toss in some peas for color.

**Mini Muffins**
Why it works: portable, freezable, customizable. Banana muffins with hidden zucchini? Chef's kiss.

**Smoothies**
Why it works: they drink it through a straw (fun!), you put spinach in it (sneaky!). Add frozen fruit, yogurt, and a drizzle of honey (over 1 year only).

## The Presentation Hack

- **Cookie cutters on sandwiches** — stars and hearts taste better than rectangles, apparently
- **Toothpicks** — put fruit on a toothpick and suddenly it's a "kebab" and they're interested (supervise closely!)
- **Tiny portions** — a full plate is overwhelming. Three bites on a plate is "just right"
- **Their plate, their rules** — some kids need foods separated. Some want everything mixed. Respect the system

## The Foods That Surprised Us

Parents reported unexpected wins with:
- Hummus (great dip for everything)
- Frozen peas (straight from the freezer, still frozen)
- Seaweed snacks (crunchy, salty, healthy)
- Olives (weirdly popular with the toddler crowd)
- Plain rice with soy sauce (simple and satisfying)

## Remember

They will not eat perfectly every day. They will have days where they survive on air and crackers. That's okay. Offer variety, don't force it, and save your sanity.

*Always ensure foods are cut to safe sizes. Consult your pediatrician about allergen introduction and nutrition concerns.*""",
        "category": "NUTRITION",
        "stage": "TODDLER_2_3",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_34",
        "title": "Potty Training: The Good, the Bad, and the Soggy",
        "body": """## The Final Boss of Toddlerhood

You've survived diapers, blowouts, and the changing-table wrestling match. Now it's time for the ultimate challenge: convincing a tiny human to use the toilet. May the odds be ever in your favor.

## Signs They Might Be Ready

- Staying dry for longer stretches
- Telling you when they're going (even if it's mid-poop in a corner)
- Showing interest in the toilet (flushing is very exciting)
- Pulling at their diaper
- Being between 2-3 years old (but every kid is different!)

## The Methods (Pick Your Adventure)

**The 3-Day Method**: go all in. Underwear, no diapers, stay home for a long weekend. Intense but often effective.

**The Slow and Steady**: introduce the potty, let them sit on it, no pressure. Could take weeks or months.

**The Child-Led Approach**: wait until they're truly interested and basically train themselves. Requires patience and a lot of diapers.

## What to Expect

- Accidents. So many accidents. Everywhere
- "I don't have to go!" (wets pants immediately)
- Success on the potty followed by a victory lap around the house
- Regression during changes or stress — totally normal
- Nighttime dryness takes much longer than daytime. Don't rush it

## Survival Tips

- **Stock up on underwear** — you need at least 15 pairs
- **Keep the potty accessible** — one on each floor if possible
- **Celebrate wins** — sticker charts, happy dances, whatever works
- **Don't punish accidents** — shame doesn't help. Ever
- **Bring extra clothes EVERYWHERE** — in the car, in your bag, in your soul

## When to Chill

If they're not getting it after a few weeks of consistent trying, it's okay to take a break and revisit. They'll get there. No kid goes to college in diapers.

*Every child develops at their own pace. Consult your pediatrician if you have concerns about readiness or progress.*""",
        "category": "MILESTONES_PRACTICAL",
        "stage": "TODDLER_2_3",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_35",
        "title": "Bedtime Battles: Winning the War (Without Losing Your Mind)",
        "body": """## Welcome to the Nightly Showdown

Bedtime with a 2-3 year old is not a routine. It's a negotiation, a performance, a philosophical debate, and an endurance test — all rolled into one.

## The Classic Bedtime Stall Tactics

- "I need water" (they just had water)
- "I need to go potty" (they just went)
- "One more book" (you've read 6)
- "I'm scared of the dark" (the hallway light, nightlight, and glow stars are all on)
- "I have to tell you something" (it's always about dinosaurs)
- "My toe hurts" (nothing is wrong with their toe)

## Building a Bedtime Routine That Works

- **Consistent time** — same time every night, give or take 15 minutes
- **The countdown** — "10 minutes until bedtime!" gives them time to mentally prepare
- **The sequence** — bath, teeth, PJs, 2 books, 1 song, lights out. Same order every night
- **The final offer** — "After this song, I'm going to say goodnight and leave. I'll check on you in 5 minutes"
- **Follow through** — if you say two books, you mean two books. Even when those eyes look at you

## Sleep Environment Upgrades

- White noise machine (drowns out household sounds and their own thoughts)
- Blackout curtains (summer evenings are the enemy)
- A comfort object — special stuffed animal or blanket they can hold
- An okay-to-wake clock (green light means you can get up, red means stay in bed)

## The Secret Weapon

Physical activity. Tire. Them. Out. Park time, dancing, running around the yard like a lunatic. A physically tired toddler goes down easier than a couch-potato toddler. Science.

Bedtime won't be perfect every night. But a solid routine turns the war into a minor skirmish most of the time.

*Persistent sleep difficulties can be discussed with your pediatrician or a pediatric sleep specialist.*""",
        "category": "SLEEP",
        "stage": "TODDLER_2_3",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_36",
        "title": "Toddler Speak: A Dictionary for Confused Parents",
        "body": """## You'll Need a PhD in Toddlerese

Your toddler is talking now! Sort of. They have a lot to say and approximately 40% of it is understandable. Here's your field guide.

## The Toddler Dictionary

- **"Mines!"** — this belongs to me. Everything belongs to me. The concept of sharing does not exist
- **"Why?"** — the beginning of an infinite loop from which there is no escape
- **"I do it!"** — back away slowly. Any assistance will result in a full reset and they will start the task over from the beginning
- **"Nooooo!"** — could mean no. Could mean yes. Could mean they haven't decided yet but they're going to yell while they think about it
- **"Again!"** — you will perform this action/read this book/sing this song until the end of time
- **"Watch me!"** — you must provide your undivided attention for a jump that is 2 inches off the ground

## The Mystery Words

Every toddler has words that only their parents can decode:

- "Bapple" = apple? baptism? who knows
- "Goggy" = doggy (usually)
- "Pasketti" = spaghetti (universal)
- "Lellow" = yellow (protect this mispronunciation at all costs)
- "Aminal" = animal (also protect this one)

## Language Explosion Tips

- **Narrate everything** — "We're walking to the car. The car is blue. Let's open the door"
- **Read, read, read** — books are language rocket fuel
- **Don't correct, expand** — they say "doggy big!" you say "Yes! The doggy IS big!"
- **Ask questions** — "What color is that?" "Where did the ball go?"
- **Limit screen time** — real human conversation builds language faster than any app

## The Sweet Spot

This phase is fleeting. Soon they'll pronounce everything correctly and you'll miss "pasketti" so much it hurts. Write down the cute words. Record them. You'll thank yourself later.

*Speech development varies. If your child isn't combining words by age 2, discuss it with your pediatrician or a speech-language pathologist.*""",
        "category": "BABY_DEVELOPMENT",
        "stage": "TODDLER_2_3",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_37",
        "title": "Partner Power-Up: Keeping Your Relationship Alive With a Toddler",
        "body": """## Your Toddler Is a Tiny Third Wheel (And That's Okay)

Remember when it was just the two of you? Now there's a small, loud, adorable person who demands 97% of your energy. Here's how to keep your relationship from running on fumes.

## The Reality Check

- Your conversations now revolve around poop schedules and preschool waitlists
- "Date night" is watching half a movie before falling asleep on the couch
- Physical affection gets interrupted by a toddler wedging themselves between you
- You communicate primarily through text about logistics: "We need milk"

## Small Things That Make a Big Difference

- **The 6-Second Kiss** — relationship researcher John Gottman says a 6-second kiss creates connection. It's weird at first. Do it anyway
- **The Check-In** — "How are you? Not the baby. YOU. How are you doing?"
- **The Appreciation Text** — send a random "thanks for being a great parent" text. It costs nothing and means everything
- **The After-Bedtime Ritual** — 20 minutes with no phones, just talking. Or sitting in comfortable silence. Both count
- **The Inside Joke** — keep your humor alive. Laugh together about the absurdity of it all

## Things to Stop Doing

- Keeping score on who does more (it always feels uneven to both sides)
- Only talking about the kids
- Saying "I'm fine" when you're not fine
- Putting the relationship on hold "until things calm down" (they won't)

## Weekly Relationship Maintenance

- One real conversation (not about logistics)
- One act of service (make their coffee, handle a task they hate)
- One expression of appreciation
- One moment of physical affection (hold hands, hug, whatever works)

It's not grand gestures. It's consistent small ones. Your relationship is the foundation your family is built on. Water it.

*If your relationship is struggling, couples therapy is a sign of strength, not weakness. Reach out to a licensed professional.*""",
        "category": "PARTNER_GUIDE",
        "stage": "TODDLER_2_3",
        "subStage": None,
        "forPartner": 1
    },
    {
        "id": "fun_baby_38",
        "title": "The Art of the Toddler Playdate (A Survival Guide)",
        "body": """## It's Less 'Play' and More 'Parallel Chaos'

You imagined two toddlers playing sweetly together while you sip coffee and chat with another adult. The reality involves parallel play, territorial disputes over toys, and someone crying within 8 minutes.

## What a Toddler Playdate Actually Looks Like

- **Minutes 1-5**: cautious observation. They circle each other like tiny gladiators
- **Minutes 5-10**: one grabs the other's toy. First conflict. Mediation required
- **Minutes 10-20**: parallel play! They're near each other doing their own thing. This is SUCCESS
- **Minutes 20-30**: someone's hungry, someone's tired, someone licked the other one
- **Minutes 30-45**: if you've made it this far, you're a champion. Start wrapping up

## Playdate Survival Tips

- **Host at your house** — your kid is more comfortable and shares better on home turf (theoretically)
- **Duplicate popular toys** — two of the same truck prevents 60% of conflicts
- **Snack strategy** — same snacks for both kids. Different snacks = war
- **Have a clear end time** — toddlers do better with shorter playdates. 1-1.5 hours max
- **Lower your expectations** — they don't need to "play together." Being in the same room is enough at this age

## The Parent Dynamic

The real playdate is the conversation you get with another adult. Even if it's fragmented, interrupted every 90 seconds, and mostly consists of "gentle hands, please!" — it still counts as social interaction.

## Exiting Gracefully

- **The countdown** — "5 more minutes, then we say bye-bye!"
- **A transition activity** — "Let's go get a snack in the car!"
- **The buddy goodbye** — encourage a wave or high-five (hug is advanced level)

You'll get better at this. And eventually, they'll actually play TOGETHER. That day is coming.

*Socialization is important for toddler development. This article is for fun. Discuss any social development concerns with your pediatrician.*""",
        "category": "BABY_DEVELOPMENT",
        "stage": "TODDLER_2_3",
        "subStage": None,
        "forPartner": 0
    },
    {
        "id": "fun_baby_39",
        "title": "Daddy/Mommy and Me: Adventures for Toddlers and Partners",
        "body": """## One-on-One Time Is Magic

When you spend solo time with your toddler, something special happens. They see you differently. You see them differently. And your partner gets a desperately needed break. Everyone wins.

## Adventure Ideas (That Don't Cost a Fortune)

**Outdoor Adventures**
- Nature walk with a "scavenger hunt" (find a stick, a flower, a rock, a leaf)
- Feed the ducks at a local pond
- Playground hopping — try a new park each weekend
- Backyard camping (even just 30 minutes in a blanket fort counts)

**Indoor Adventures**
- Library story time (free and wonderful)
- Baking together — let them stir, pour, and make a mess. The cookies will be ugly and delicious
- Pillow fort movie afternoon
- Dance party in the living room — just put on music and go wild

**Out-and-About Adventures**
- Farmers market — let them pick a fruit or vegetable
- Pet store visit — free zoo, basically
- Home improvement store — the cart ride alone is entertainment
- "Coffee shop date" — get them a steamed milk, you get your caffeine. Sit and chat

## Why Solo Parent Time Matters

- **Builds confidence** — both yours and theirs
- **Strengthens attachment** — different parent, different bond
- **Gives your partner a break** — and they'll love you for it
- **Creates memories** — your toddler will remember these adventures

## The Partner Perspective

If you're the one getting the break: USE IT. Nap, see a friend, take a bath, sit in silence. Do not clean the house. (Unless you want to. But you probably don't want to.)

## Make It Regular

Even if it's just once a week or every other week — put it on the calendar. It becomes "your thing" together, and that's genuinely special.

*Quality time benefits everyone in the family. This article is for encouragement and inspiration.*""",
        "category": "PARTNER_GUIDE",
        "stage": "TODDLER_2_3",
        "subStage": None,
        "forPartner": 1
    },
    {
        "id": "fun_baby_40",
        "title": "Embracing the Chaos: A Love Letter to the Toddler Years",
        "body": """## It Won't Always Be Like This

Read that again. It won't always be like this. The chaos, the noise, the messes, the tantrums — but also the magic, the giggles, the sloppy kisses, and the way they reach for your hand.

## Things You'll Miss Someday

- The way they say your name wrong and it's the best sound in the world
- Their complete, unfiltered honesty ("Your breath is stinky, Mama")
- How they think you can fix anything — a broken cracker, a rainy day, the world
- The bedtime requests for "one more hug" (even the fifteenth one)
- Their absolute certainty that you are the greatest person alive
- The weight of them falling asleep on your chest

## Things You Won't Miss (But Will Laugh About)

- Finding raisins in places raisins should not be
- The public meltdown over the wrong color cup
- Being narrated ("MOMMY IS GOING POTTY!") in every public restroom
- Stepping on Legos at 2 AM
- The word "why" asked 4,000 times in a single car ride

## A Permission Slip

You are allowed to:
- Love your toddler AND feel overwhelmed
- Miss your pre-kid life AND be grateful for this one
- Need a break AND be a great parent
- Not enjoy every moment AND still treasure this phase
- Ask for help AND not feel guilty about it

## The Truth

These years are hard. Really hard. But they're also ridiculously, heart-explodingly beautiful. Your toddler thinks you're their whole world because right now, you are.

So when the house is a mess, the laundry is piling up, and someone is crying (maybe you) — take a breath. Look at that chaotic little person. And know that you're doing an incredible job.

Even on the hard days. ESPECIALLY on the hard days.

*If you're struggling emotionally, please reach out to your healthcare provider. You deserve support. You matter too.*""",
        "category": "MENTAL_HEALTH",
        "stage": "TODDLER_2_3",
        "subStage": None,
        "forPartner": 0
    },
]

# Validate
assert len(articles) == 40, f"Expected 40 articles, got {len(articles)}"

# Count forPartner
partner_count = sum(1 for a in articles if a["forPartner"] == 1)
assert partner_count == 8, f"Expected 8 forPartner articles, got {partner_count}"

# Count by stage
from collections import Counter
stage_counts = Counter(a["stage"] for a in articles)
for stage, count in stage_counts.items():
    assert count == 10, f"Stage {stage} has {count} articles, expected 10"

# Verify IDs
for i, a in enumerate(articles, 1):
    assert a["id"] == f"fun_baby_{i}", f"ID mismatch at index {i}: {a['id']}"

# Check all required fields
required_fields = {"id", "title", "body", "category", "stage", "subStage", "forPartner"}
for a in articles:
    assert set(a.keys()) == required_fields, f"Field mismatch in {a['id']}: {set(a.keys())}"

# Check categories
valid_categories = {"PARTNER_GUIDE", "BABY_DEVELOPMENT", "MENTAL_HEALTH", "NUTRITION", "SLEEP", "MILESTONES_PRACTICAL"}
for a in articles:
    assert a["category"] in valid_categories, f"Invalid category in {a['id']}: {a['category']}"

# Check stages
valid_stages = {"INFANT_3_6", "INFANT_6_12", "TODDLER_1_2", "TODDLER_2_3"}
for a in articles:
    assert a["stage"] in valid_stages, f"Invalid stage in {a['id']}: {a['stage']}"

# Write JSON
output = json.dumps(articles, indent=2, ensure_ascii=False)
with open("/Users/dparsons/projects/bumptogether/src/data/fun_baby.json", "w") as f:
    f.write(output)

print(f"Successfully generated {len(articles)} articles")
print(f"Partner articles: {partner_count}")
print(f"Stage distribution: {dict(stage_counts)}")
print(f"Category distribution: {dict(Counter(a['category'] for a in articles))}")

# Verify JSON is valid by reading it back
with open("/Users/dparsons/projects/bumptogether/src/data/fun_baby.json", "r") as f:
    verified = json.loads(f.read())
print(f"JSON verification: {len(verified)} articles loaded successfully")
