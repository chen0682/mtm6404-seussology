const books = [
  {
    id: '1',
    title: 'And to Think That I Saw It on Mulberry Street',
    year: '1937',
    description: 'Marco watches the sight and sounds of people and vehicles traveling along Mulberry Street and dreams up an elaborate story to tell to his father at the end of his walk.',
    image: '1.jpg',
    category: 'Big Books',
    grade: 'Grade 3',
    quotes: [
      'Stop telling such outlandish tales. Stop turning minnows into whales.',
      'For I had a story that no one could beat! And to think that I saw it on Mulberry Street!'
    ]
  }, {
    id: '7',
    title: 'Bartholomew and the Oobleck',
    year: '1949',
    description: 'A Caldecott Honor Book. Bartholomew must rescue his kingdom from a sticky substance called oobleck. ',
    image: '2.jpg',
    category: 'Big Books',
    grade: 'Grade 3',
    quotes: []
  }, {
    id: '45',
    title: 'The Butter Battle Book',
    year: '1984',
    description: 'The conflict between the Yooks and the Zooks over which side of bread to spread butter on leads to an arms race, each competing to make bigger and nastier weapons to outdo the other, which results in the threat of mutual assured destruction.',
    image: '30.jpg',
    category: 'Big Books',
    grade: 'Grade 3',
    quotes: [
      "I'll butter-side-up you to small smithereens!"
    ]
  }, {
    id: '16',
    title: 'The Cat in the Hat',
    year: '1957',
    description: 'The Cat in the Hat brings his companions, Thing One and Thing Two, to a household of two young children one rainy day. Chaos ensues while the children wonder how they are going to explain what happens to their mother.',
    image: '31.jpg',
    category: 'Favorites',
    grade: 'Grade 2',
    quotes: [
      'It is fun to have fun but you have to know how',
      'Your mother will not mind at all if I do',
      'I know it is wet and the sun is not sunny. But we can have a lot of good fun that is funny.',
      'We looked! Then we saw him step in on the mat!'
    ]
  }, {
    id: '18',
    title: 'The Cat in the Hat Comes Back',
    year: '1958',
    description: 'The Cat in the Hat returns and while he leaves Thing One and Thing Two at home, he does bring along Little Cat A nested inside his hat. Little Cat A doffs his hat to reveal Little Cat B, who in turn reveals C, and so on down to the microscopic Little Cat Z. Together they try to get rid of a pink ring that has spread from the bathtub to the dress, to the wall, into some shoes, and finally out onto the snow where they work to get rid of it.',
    image: '32.jpg',
    category: 'Beginner Books',
    grade: 'Grade 2',
    quotes: [
      'This was no time for games. There was work to be done.',
      'The thing that takes spots off a dress is a wall.'
    ]
  }, {
    id: '38',
    title: 'Did I Ever Tell You How Lucky You Are?',
    year: '1973',
    description: "Discusses an amusing litany of terrible predicaments which could befall a person, with the repeated admonishment that \"you're really quite lucky\".",
    image: '3.jpg',
    category: 'Big Books',
    grade: 'Grade 3',
    quotes: [
      'You ought to be thankful, a whole heaping lot',
      "Just tell yourself, Duckie, you're really quite lucky!"
    ]
  }, {
    id: '27',
    title: "Dr. Seuss's ABC",
    year: '1963',
    description: "An alphabet book which features many strange creatures from the Aunt Annie's Alligator to the Zizzer-Zazzer-Zuzz.",
    image: '4.jpg',
    category: 'Favorites',
    grade: 'Grade 2',
    quotes: [
      'I am a Zizzer-Zazzer-Zuzz as you can plainly see.'
    ]
  }, {
    id: '26',
    title: "Dr. Seuss's Sleep Book",
    year: '1962',
    description: 'A small bug yawn spreads contagiously and though various creatures, including the Foona Lagoona Baboona, the Collapsable Frink, the Chippendale Mupp, The Offt, and the Krandles.',
    image: '5.jpg',
    category: 'Big Books',
    grade: 'Grade 4',
    quotes: []
  }, {
    id: '2',
    title: 'The 500 Hats of Bartholomew Cubbins',
    year: '1938',
    description: 'In the kingdom of Didd, King Derwin is riding through a street past Bartholomew Cubbins, a poor boy in the market. Bartholomew removes his hat, according to the laws, but another hat mysteriously appears; when he attempts to remove this one too, another one appears again, and this continues, even as he removes more and more hats, each growing in extravagance and beauty.',
    image: '29.jpg',
    category: 'Big Books',
    grade: 'Grade 4',
    quotes: [
      'They only say it just "happened to happen" and was not very likely to happen again.'
    ]
  }, {
    id: '31',
    title: 'The Foot Book',
    year: '1968',
    description: 'Introduces many different creatures with different feet.',
    image: '35.jpg',
    category: 'Favorites',
    grade: 'Kindergarten',
    quotes: [
      'Oh, how many feet you meet!',
      'Feet in the morning feet at night'
    ]
  }, {
    id: '29',
    title: 'Fox in Socks',
    year: '1965',
    description: "Mr. Fox challenges Mr. Knox with rhyming tongue-twisters, which begins to get on Knox's nerves.",
    image: '6.jpg',
    category: 'Beginner Books',
    grade: 'Grade 2',
    quotes: [
      "Who sews whose socks? Sue sews Sue's socks.",
      'They call it a tweetle beetle puddle paddle battle.'
    ]
  }, {
    id: '21',
    title: 'Green Eggs and Ham',
    year: '1960',
    description: 'Sam-I-am consistently pesters an unnamed character (who is also the narrator) to try green eggs and ham. ',
    image: '7.jpg',
    category: 'Favorites',
    grade: 'Grade 1',
    quotes: [
      'I would not like them here or there. I would not like them anywhere.',
      'Try them! Try them! And you may. Try them and you may, I say.'
    ]
  }, {
    id: '19',
    title: 'Happy Birthday to You!',
    year: '1959',
    description: 'Deals with a fantastic land, called Katroo, where the Birthday Bird throws everyone an amazing party on their special day.',
    image: '8.jpg',
    category: 'Big Books',
    quotes: []
  }, {
    id: '28',
    title: 'Hop on Pop',
    year: '1963',
    description: 'Hop on Pop provides simple rhymes to help beginner reading, such as a character named Pat who sits on a hat, a cat, a bat and must not sit on that (which is a cactus).',
    image: '9.jpg',
    category: 'Beginner Books',
    grade: 'Grade 1',
    quotes: [
      'Dad is sad. Very, Very sad. He had a bad day. What a day Dad had!',
      'FATHER MOTHER SISTER BROTHER That one is my other brother.'
    ]
  }, {
    id: '4',
    title: 'Horton Hatches the Egg',
    year: '1940',
    description: 'An elephant named Horton is convinced by an irresponsible bird named Mayzie to sit on her egg while she takes a short break, which proves to last for months.',
    image: '10.jpg',
    category: 'Big Books',
    grade: 'Grade 3',
    quotes: [
      "I meant what I said And I said what I meant An elephant's faithful One hundred percent!"
    ]
  }, {
    id: '13',
    title: 'Horton Hears a Who!',
    year: '1954',
    description: 'Horton the Elephant of the Jungle of Nool hears a small speck of dust talking to him. The speck of dust is actually a tiny planet, home to a city called Who-ville, inhabited by microscopic-sized inhabitants known as Whos and led by a character known as the Mayor.',
    image: '11.jpg',
    category: 'Favorites',
    grade: 'Grade 3',
    quotes: [
      'So, open your mouth, lad! For every voice counts!',
      "A person's a person no matter how small."
    ]
  }, {
    id: '17',
    title: 'How the Grinch Stole Christmas!',
    year: '1957',
    description: 'The Grinch, a bitter, cave-dwelling creature tries to steal everything related to Christmas by impersonating Santa Claus.',
    image: '12.jpg',
    category: 'Favorites',
    grade: 'Grade 3',
    quotes: [
      "Maybe Christmas, he thought, doesn't come from a store",
      'I MUST find some way to stop Christmas from coming!'
    ]
  }, {
    id: '44',
    title: 'Hunches in Bunches',
    year: '1982',
    description: 'A boy is approached by numerous strange creatures with enormous gloved hats on their heads. Each "hunch" points out a different possible course of action with some even contradicting themselves.',
    image: '13.jpg',
    category: 'Big Books',
    grade: 'Grade 2',
    quotes: []
  }, {
    id: '32',
    title: 'I Can Lick 30 Tigers Today!',
    year: '1969',
    description: 'The title story concerns a boy who brags that he can fight 30 tigers and win.',
    image: '15.jpg',
    category: 'Big Books',
    grade: 'Grade 2',
    quotes: []
  }, {
    id: '42',
    title: 'I Can Read with My Eyes Shut!',
    year: '1978',
    description: 'The Cat in the Hat shows a Young Cat the fun he can get out of reading.',
    image: '16.jpg',
    category: 'Beginner Books',
    grade: 'Grade 2',
    quotes: []
  }, {
    id: '30',
    title: 'I Had Trouble in Getting to Solla Sollew',
    year: '1965',
    description: 'A tale of a young person who discovers the "troubles" of life and wishes to escape them.',
    image: '17.jpg',
    category: 'Big Books',
    grade: 'Grade 3',
    quotes: []
  }, {
    id: '15',
    title: 'If I Ran the Circus',
    year: '1956',
    description: "Behind Mr. Sneelock's ramshackle store, there's an empty lot. Little Morris McGurk is convinced that if he could just clear out the rusty cans, the dead tree, and the old cars, nothing would prevent him from using the lot for the amazing, world-beating, Circus McGurkus.",
    image: '18.jpg',
    category: 'Big Books',
    grade: 'Grade 3',
    quotes: []
  }, {
    id: '8',
    title: 'If I Ran the Zoo',
    year: '1950',
    description: 'Gerald McGrew visits a zoo and finds that the animals are "not good enough" and describes how he would run the zoo. He would let all of the current animals free and find new, more bizarre and exotic ones.',
    image: '19.jpg',
    category: 'Big Books',
    grade: 'Grade 4',
    quotes: []
  }, {
    id: '3',
    title: "The King's Stilts",
    year: '1939',
    description: 'The story of King Bertram of Binn, who dedicates himself to safeguarding his kingdom, which has a precarious existence. It is surrounded by water, which is held back from flooding the land by a ring of dike trees, which are in turn subject to attack from flocks of nizzards. To protect the kingdom, a legion of Patrol Cats is organized to keep the nizzards at bay, and King Bertram sees to their care personally.',
    image: '36.jpg',
    category: 'Big Books',
    grade: 'Grade 4',
    quotes: []
  }, {
    id: '36',
    title: 'The Lorax',
    year: '1971',
    description: 'The Lorax chronicles the plight of the environment and the Lorax (a mossy, bossy man-like creature resembling an emperor tamarin), who speaks for the trees against the greedy Once-ler.',
    image: '37.jpg',
    category: 'Favorites',
    grade: 'Grade 3',
    quotes: []
  }, {
    id: '37',
    title: 'Marvin K. Mooney Will You Please Go Now!',
    year: '1972',
    description: 'Marvin K. Mooney is asked to leave in many ways.',
    image: '20.jpg',
    category: 'Beginner Books',
    grade: 'Grade 1',
    quotes: []
  }, {
    id: '5',
    title: "McElligot's Pool",
    year: '1947',
    description: 'A Caldecott Honor Book. A boy named Marco is ridiculed for fishing in a small, polluted pool, and tries to justify himself by imagining the fish he might catch.',
    image: '21.jpg',
    category: 'Big Books',
    grade: 'Grade 3',
    quotes: []
  }, {
    id: '35',
    title: "Mr. Brown Can Moo! Can You?: Dr. Seuss's Book of Wonderful Noises!",
    year: '1970',
    description: "The book shows the sounds \"Mr. Brown\" can make, such as a cow's \"moo\", a frying pan's \"sizzle\", and a hippo's \"grum\".",
    image: '22.jpg',
    category: 'Favorites',
    grade: 'Grade 1',
    quotes: []
  }, {
    id: '43',
    title: 'Oh Say Can You Say?',
    year: '1979',
    description: 'A collection of 25 tongue-twisters such as "Oh my brothers! Oh my sisters! These are Terrible Tongue Twisters!"',
    image: '23.jpg',
    category: 'Beginner Books',
    grade: 'Grade 4',
    quotes: []
  }, {
    id: '47',
    title: "Oh, the Places You'll Go!",
    year: '1990',
    description: 'The book concerns the journey of life and its challenges.',
    image: '24.jpg',
    category: 'Favorites',
    grade: 'Grade 3',
    quotes: []
  }, {
    id: '41',
    title: 'Oh, the Thinks You Can Think!',
    year: '1975',
    description: "About the many amazing 'thinks' one can think and the endless possibilities and dreams that imagination can create.",
    image: '25.jpg',
    category: 'Beginner Books',
    grade: 'Grade 1',
    quotes: []
  }, {
    id: '14',
    title: 'On Beyond Zebra!',
    year: '1955',
    description: 'The young narrator, not content with the confines of the ordinary alphabet, invents additional letters beyond Z, with a fantastic creature corresponding to each new letter.',
    image: '26.jpg',
    category: 'Big Books',
    grade: 'Grade 4',
    quotes: []
  }, {
    id: '20',
    title: 'One Fish Two Fish Red Fish Blue Fish',
    year: '1960',
    description: 'A simple rhyming book for learner readers, that has a freewheeling plot about a boy and a girl, and the many amazing creatures they have for friends and pets.',
    image: '27.jpg',
    category: 'Beginner Books',
    grade: 'Grade 1',
    quotes: []
  }, {
    id: '12',
    title: 'Scrambled Eggs Super!',
    year: '1953',
    description: 'A young boy named Peter T. Hooper spins a tale of an incredible meal he created by harvesting the eggs of fantastically exotic birds.',
    image: '28.jpg',
    category: 'Big Books',
    grade: 'Grade 4',
    quotes: []
  }, {
    id: '39',
    title: 'The Shape of Me and Other Stuff',
    year: '1973',
    description: 'Explores the adventures of two kids and their journey to learn about all the shapes and sizes that make up our world.',
    image: '39.jpg',
    category: 'Beginner Books',
    grade: 'Grade 1',
    quotes: []
  }, {
    id: '22',
    title: 'The Sneetches',
    year: '1961',
    description: 'Because the star-bellied sneetches are being prejudicial to the plain-bellied Sneetches, a "fix-it-up chappie" named Sylvester McMonkey McBean appears and offers the Sneetches without stars a chance to have them by going through his Star-On Machine.',
    image: '40.jpg',
    category: 'Big Books',
    grade: 'Grade 3',
    quotes: []
  }, {
    id: '40',
    title: "There's a Wocket in My Pocket!",
    year: '1974',
    description: 'A little boy talks about what strange creatures live in his house, such as the Yeps on the steps, the Nooth Grush on his toothbrush, the Yottle in the bottle and the Jertain in the curtain.',
    image: '41.jpg',
    category: 'Beginner Books',
    grade: 'Grade 2',
    quotes: []
  }, {
    id: '6',
    title: 'Thidwick the Big-Hearted Moose',
    year: '1948',
    description: 'Thidwick, a moose who lives in a herd "about sixty or more", accepts a bug living on his antlers for free, who tells a spider of the free housing, and both accept a "Zinn-a-zu" bird, and this leads to a whole host of freeloaders taking up residence.',
    image: '42.jpg',
    category: 'Big Books',
    grade: 'Grade 3',
    quotes: []
  }, {
    id: '11',
    title: 'Yertle the Turtle',
    year: '1950',
    description: 'Unsatisfied with the stone that serves as his throne, the king turtle commands the other turtles to stack themselves beneath him so that he can see further and expand his kingdom.',
    image: '43.jpg',
    category: 'Big Books',
    grade: 'Grade 3',
    quotes: []
  }, {
    id: '46',
    title: "You're Only Old Once!",
    year: '1986',
    description: 'An old man journeys through a clinic and sees its inefficiency.',
    image: '44.jpg',
    category: 'Big Books',
    grade: 'Grade 5',
    quotes: []
  }
]
