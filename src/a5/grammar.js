let therapistGrammar = {
	 "excuse": ["You have a lot to say", "Hmm... oh yes... I understand", "TerribleTherapistBot relies on your consumption of our services to provide the best quality care possible"],
     "randomThing": ["Looking at the sky. It really puts everything into perspective in the grand scheme of things.",
                    "Changing your mindset. Try to think of happier things, you know?",
                    "Herbal self-medicating. You should try it.",
                    "Dogs.",
                    "Crying."],
    "terribleAdvice": ["getting off your phone and touching some grass. Social media is a curse.",
                        "taking a walk. Clear your mind and get some fresh air.",
                        "breathing exercises. Just breathe in and out... slowly... do you feel better yet?",
                        "not having such a negative outlook."],
    "cryingSound": ["sob", "waah", "boohoo","burp","snort", "sniffle", "meow"],
    "cryingResponse": ["OK and what do you want me to do about it?", 
                    "Uh... you're making me uncomfortable.",
                    "There, there...", 
                    "I've never seen anyone cry like that before."]
}

// let astrologyGrammar = {
//     "setMonths": ["[m0:June][m1:July]","[m0:June][m1:July]","[m0:June][m1:July]","[m0:June][m1:July]","[m0:June][m1:July]","[m0:June][m1:July]","[m0:June][m1:July]","[m0:June][m1:July]"]
//     "hpnStart" : ["Brax", "Brash", "Stump", "Tangle", "Star", "Stage", "Black", "Red", "Chamb", "Whit", "Gren", "Brook", "Bright", "North", "Hells", "Saints", "Fair"],
//     "hpnEnd" : ["bridge", "bury", "ton", "fright", "borough", "ford", "blood", "ly", "brox", "bray", "bay", "smith", "town", "lyn", "ferry", "ghost", "haven", "brook", "oaks", "ox", "wood"],
//     "hpn" : ["#hpnStart##hpnEnd#"],
//     "firstname" : ["Gabriel", "Lucia", "Hollis", "Holly", "Maisie", "Jasper", "Lane", "Lincoln", "Sterling", "Summer", "Miranda", "Maria", "Min", "Minnie", "Mariah", "Gus", "Dani", "Darius", "Elena", "Eduardo", "Elías", "Rajesh", "Ranjit", "Rex", "Rez", "Rey", "Yew", "Reba", "Jae-woo", "Ken", "Kira", "Jae", "Shah", "Josef", "Jørn", "Autumn", "Brandy", "Copper", "Cooper", "Harrow", "Manhattan", "Jo", "Jodi", "Karim", "Raf", "January", "Aku", "Juraj", "Yuri", "Kåre", "Lyn", "Jahan", "Mitch", "Alda", "Aimee", "Zoe", "London", "Paris", "Zuzu", "Zara", "Micah", "Song", "Sparrow", "Miguel", "Mikey", "Monette", "Michelina", "Agave", "Robyn", "Saffron", "Zeke", "Garth", "Rae", "Sebastian", "Seb", "Jake", "Bastion", "Luna", "Apple", "Delilah", "Jeremiah", "Finn", "Milo", "Finley", "April", "May", "September", "Kim", "Phineas", "Quincy", "Saul", "Rudy", "Cleo", "Noel", "Frankie", "June", "Rocky", "Pearl", "Harris", "Braxton", "Hamilton", "Ace", "Duke", "Rowan", "Stella", "Stevie", "Juniper", "Ryder", "Kai", "Judd", "Rhody", "Rho", "Sven", "Hazel", "Byron", "Edie", "Lola", "Poppy", "Jo", "Whisper", "Kaya", "Karim", "Kit", "Luca", "Rafa", "Miriam", "Aya", "Carmen", "Omar", "Anika", "Shan", "Luka", "Theo", "Emma", "Julian", "Adrian", "Ari", "Noah", "Maya", "Ariel"],

//     "archetype": ["mother", "lover", "wizard", "joker", "seeker", "soldier", "explorer", "victim",  "scribe", "thief", "child", "writer", "nurturer", "prankster", "mage", "healer", "wanderer", "dreamer", "storyteller", "killer", "exile", "philanderer", "leader", "follower", "servant", "braggart", "harlot", "clown", "ruler", "usurper", "prisoner", "guide"],

//     "flavorAdj" : ["special", "dark", "light", "bitter", "burnt", "savory", "flavorful", "aromatic", "fermented", "herbal", "pleasant", "harsh", "smoky", "sweet", "fresh", "refreshing", "somber", "bright", "perky", "sullen", "acidic", "sour", "peaty", "juicy", "perfumed", "buttery", "lush", "brisk", "strong", "weak", "tart", "tangy", "bold", "overpowering", "light", "faint", "subtle", "bright", "zesty", "austere", "round", "big", "buttery", "oaky", "peaty", "seedy", "gritty", "creamy", "smooth", "rustic", "complex", "chewy", "sweet", "crisp", "dense", "bold", "elegant", "sassy", "opulent", "massive", "wide", "flamboyant", "fleshy", "approachable", "jammy", "juicy", "refined", "silky", "structured", "steely", "rich", "toasty", "burnt", "velvety", "unctuous", "oily"],
//     material: "fire water cybernetic steampunk jazz steel bronze brass leather pearl cloud sky great crystal rainbow iron gold silver titanium".split(" "),
//     mood: "wanton materialistic athletic spirited bossy submissive greedy generous cautious adventurous skeptical logical vicious gossipy balanced quiet shy passionate powerful timid terrified awake intellectual capricious mercurial whimsical salacious empathetic sympathetic macabre morbid careless cruel insightful clever villainous bookish nerdy festive fiery impetuous wise spiteful patient stubborn vexed indignant impassioned wistful astute courteous benevolent convivial mirthful lighthearted affectionate mournful inquisitive quizzical studious disillusioned angry bemused oblivious sophisticated elated skeptical morose gleeful curious sleepy hopeful ashamed alert energetic exhausted giddy grateful groggy grumpy irate jealous jubilant lethargic sated lonely relaxed restless surprised tired thankful".split(" "),
//     work: ["screenplay", "novel", "mixtape", "symphony","poetry collection", "fanfic", "essay collection", "manifesto"],
//     nounSet: ["[noun:record][verb:play]","[noun:dress][verb:wear]", "[noun:holiday][verb:celebrate]", "[noun:meal][verb:eat]", "[noun:bicycle][verb:ride]", "[noun:friend][verb:see]", "[noun:joke][verb:tell]", "[noun:project][verb:finish]", "[noun:song][verb:hear]", "[noun:lover][verb:kiss]","[noun:mirror][verb:break]","[noun:vacation][verb:take]","[noun:enemy][verb:kill]", "[noun:recipe][verb:make]", "[noun:wine bottle][verb:drink]", "[noun:plant][verb:water]", "[noun:adventure][verb:seek]", "[noun:game][verb:play]", "[noun:book][verb:read]", "[noun:#work#][verb:finish]", "[noun:photograph][verb:look at]", ],
//     inAWay: ["as though you could die from it", "without regrets", "rarely", "often", "with shame, as though someone were watching you", "on film", "for the world to see", "without shame", "more than you should", "as you did when you were a child", "as thought you have little time left", "as though you had never seen #noun.a# before", ", but you #verb# more", "as though it were #new#"],
//     time: ["time", "year", "day", "week", "month"],
//     new: ["new", "different", "better", "stranger", "greater"],
//     nounStatement: ["You collect #noun.s# you will never #verb#", "#nounSet#You can still #verb# your first #noun#", "It is time to #verb# a #new# #noun#", "Do not #verb# #noun.a# today", "it is a good #time# to #verb# #noun.a#", "You think you could #verb# a #noun.a#. The #noun# will #verb# you", "You are #noun.a#-#verb#er", "You #verb# #noun.s# #inAWay#", "#verb.capitalize# #noun.a#. #verb.capitalize# every #noun#"],
//     are: ["seem", "are", "appear", "were", "would be", "could be", "know you should be"],
//     both: ["neither", "both", "every", "no"],
//     you: ["you", "#signName#"],
//     personality: ["#you.capitalize# #are# #both# #archetype# and #archetype#", "#you.capitalize# #are# #mood# and #mood#","#you.capitalize# #are# #mood#, but #are# #mood#",  "#you.capitalize# #are# #flavorAdj#, #flavorAdj#, #flavorAdj#", "#you.capitalize# #are# #mood#, for #mood.a# person", "#nounSet##nounStatement#",  "#nounSet##nounStatement#", "#nounSet##nounStatement#", "#nounSet##nounStatement#", "#nounSet##nounStatement#"],

//     "syl0": "B P T T T N M M M B C D F G Ph J K L M N P Qu R S T V W X Y Z St Fl Bl Pr Kr Ph Ll Chr Sk Br Sth Ch Dhr Dr Sl Sc Sh Thl Thr Pl Fr Phr Phl Wh".split(" "),
//     "syl1": "an ad in an on ion ill oop erv ack erpsi ion ers uos irt eph ist all irg ar art aur ous us ed air aean eun eun euh esqu aphn arl ifn ast ign agn af av ant app ab er en eor eon ent enth iar ein irt ian ion iont ill il ipp in is it ik ob ov orb oon ion uk uf un ull urk".split(" "),
//     "composites": "estr antr okl ackl".split(" "),
//     "syl2": "e us aus eaus eus erva eous era esa a i ie ei e a ay oy y a ia ea u y en am is on an o ang ing io i el ios ius ae ie ee i".split(" "),
//     "name": ["#syl0.capitalize##syl1##syl2#","#syl0.capitalize##syl1##syl1##syl2#"],

//     "animal" : ["horse","goat","impala","wombat","fox","wolf","goose", "coyote","dingo","centaur","amoeba","mongoose","capybara", "yeti","dragon","unicorn","gryphon","sphinx","kangaroo","boa"],
//     "critter" : ["#personType#", "#animal#", "#animal# #animal#"],
//     "bodyPart": ["antler", "wing", "ear", "arm", "horn", "tentacle", "head", "hand", "leg"],
//     "countless": ["innumerable", "countless", "uncountable"],
//     "material": ["leather", "golden", "#color#", "bronze", "glass", "crystal", "#color#-#color#"],
//     "multiadj": ["#color# #material#", "#color#", "#accessoryAdj#", "#accessoryAdj# #material#"],

//     "substance": ["beer", "knowledge", "wine", "medicine", "foolishness", "invention", "wisdom", "lore", "stories", "songs", "music", "wind", "history", "mistakes", "laughter", "sorrows", "tears", "freedom", "regrets", "magic", "loneliness", "love", "lust", "midnight", "morning", "dawn", "rainbows", "rain", "storms", "weather", "sheep", "mice", "clouds", "steam", "machinery", "technology", "internet", "craft supplies", "books", "literature", "poetry", "snacks", "mix tapes", "cocktails", "drunkenness", "frivolity", "seriousness", "gravity", "nothingness", "grace"],
//     "obj": ["book", "serpent", "jug", "rose", "sword", "wand", "axe", "flute", "horn", "spindle", "cellphone", "laptop", "kettlebell", "bell", "candle", "torch", "branch", "lantern", "knife"],
//     "accessoryAdj": ["broad", "bedraggled", "shadowy", "ominous", "fleshy", "#color#", "perfect", "immense", "tiny", "delicate", "flawless", "beautiful", "handsome", "enormous", "sky-spanning", "rainbow-hued", "shining", "terrifying", "rhinestone-studded", "handmade", "strong", "muscled", "lithe", "graceful", "glowing", "ethereal"],
//     "accessory": ["a pair of #multiadj# #bodyPart.s#", "#countless# #bodyPart.s#", "#countless# #multiadj# #bodyPart.s#"],
//     "fancyCreature": ["#critter# with #accessory#", "#critter# with #accessory#", "#critter# with #accessory#", "#critter# with #accessory#", "wingéd #critter#"],

//     "objAdj": ["wooden","old","vintage","woven", "antique","broken","tiny", "giant", "little", "upside-down","dented","imaginary","glowing","curséd","glittery","organic", "rusty", "multi-layered", "complicated", "ornate", "dusty", "gleaming", "fresh", "ancient", "forbidden", "milky", "upholstered", "comfortable", "dynamic", "solar-powered", "coal-fired", "warm", "cold", "frozen", "melted", "boxy", "well-polished", "vivid", "painted", "embroidered", "enhanced", "embellished", "collapsible", "simple", "demure"],
    
//     "keeper": ["keeper", "guardian", "bearer"],
//     "personobject": ["old blanket", "glowing orb", "threadbare shawl", "silver picture frame", "stack of old papers", "bundle of old letters", "tattered map", "vintage record player", "telescope", "human skull", "heavy iron box", "mud-covered shovel", "baseball bat", "hula hoop", "battered guitar", "cello case", "riding whip"],
//     "color" : ["green", "red", "violet", "tafetta", "blue", "silver", "gold", "ivory", "platinum", "black", "lavender", "velvet", "satin", "pink", "magenta", "white", "grey", "tan"],
//     "personDesc" : ["feminine", "muddy", "sweaty", "pregnant", "grinning", "soft-voiced", "drowsy", "lanky", "macho", "silent", "weeping", "ashen-faced", "red-eyed", "#color#-eyed", "sullen", "scowling", "laughing", "distracted", "nervous", "bespectacled", "slouching", "crying", "giggling", "loud-voice", "hoarse", "gracious", "mysterious", "tall", "tanned", "studious", "tattooed", "grim", "laid-back", "smiling", "hungover", "genial", "one-armed", "gorgeous", "quiet", "thoughtful", "argumentative", "long-braided", "relaxed", "pleasant", "noisy", "short", "long-haired", "short-haired", "free-spirited", "oddly dressed", "well-dressed", "formally dressed", "curly-haired", "blond", "sunburned", "disheveled", "polished", "clean-shaven", "outgoing", "introverted", "cheerful", "mournful", "chatty", "gossipy", "silver-haired", "#color#-haired", "graceful", "distracted", "mustachioed", "bearded"],
//     "personSuit" : ["sundress", "unitard", "bathrobe", "wearing a lab coat", "carrying #obj.a#", "in paint-smeared overalls", "caftan", "headscarf", "tuxedo", "ballgown", "suit", "vest", "jacket", "bathing suit", "wedding dress"],
//     "personPostDesc" : ["in #color.a# #personSuit#", "covered in mud", "with mud-covered shoes", "with a blank expression", "with a dazed expression", "carrying a stuffed rabbit", "clutching a brown paper bag", "carrying a suitcase", "with a sword", "carrying a stack of thick books", "wearing an overstuffed backpack", "with an accordion", "with a Southern drawl", "with a British accent", "in #personSuit.a#", "with a strangely-shaped scar", "with an eyepatch", "with an old guitar", "carrying a ukulele", "carrying a briefcase", "carrying a boombox", "talking on their cellphone", "holding a heavy wooden crate", "wearing sunglasses", "in a wheelchair", "on crutches", "wearing a blindfold", "with haunted eyes", "wearing short-shorts", "with long dreads", "trying to hide their face", "with an enormous beard", "with long dangling earrings", "with a parrot on their shoulder", "carrying a small dog", "wearing an enormous hat", "wearing a #color# ballgown", "dressed entirely in #color#", "wearing a long #color# robe", "with tall #color# boots", "in a #color# #personSuit#"],
//     "personType" : ["supermodel", "witch", "soldier", "child", "wizard", "rock star", "country singer", "sailor", "young woman", "hiker", "biker", "truck driver", "gentleman", "pirate", "detective", "movie star", "young man", "violinist", "duchess", "farmer", "soldier", "civil servant", "acrobat", "fireman", "judge", "retiree", "catgirl", "stranger", "hooded figure", "scientist", "writer", "frat brother", "nurse", "tourist", "doctor", "clown", "nun", "clown", "nun", "clown", "nun", "queen", "politician", "lumberjack", "bodybuilder", "rugby player", "ballerina", "professor", "grad student", "student", "high-schooler", "football player", "skater", "geek", "nerd", "goth", "cowboy", "priest", "nun", "monk", "granny", "girl", "hipster", "punk", "banker", "businesswoman", "businessman", "surfer", "old lady", "old man", "kid", "teen", "20-something", "woman", "man", "person", "being"],
//     "emoji": "✨ 💫 ✴️ 🌟 ⭐️ ★ ☆ ⭒ ⭐ ✩ ✯ ✰ 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌙 ☾ 🌛 🌜 🌝 🌚 ☄ 🪐 ☀ ☼ 🌞".split(" "),
    
//     "fancyObj": ["#personobject#", "#obj#", "#objAdj# #obj#"],
//     "carrying": ["carying", "bearing", "holding", "brandishing", "dragging", "carressing"],
//     "keeperType": ["the #substance# #keeper#", "#keeper# of #substance# and #substance#"],
//     "creatureType": ["#fancyCreature.a#", "the #fancyCreature#"],
//     "longDesc": ["#creatureType#", "#creatureType# #carrying# #fancyObj.a#", "#creatureType#, #keeperType#", "#keeperType#", "the top half of #critter.a# and the bottom half of a #critter#"],
//     "origin": ["[signName:#name#][myChar:#emoji#]#myChar##signName##myChar#\n#longDesc#\n#personality#. #personality#."]
// }