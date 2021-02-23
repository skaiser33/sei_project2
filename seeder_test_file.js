'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('comedians', [
      { name: 'Ellen DeGeneres',
        website: 'https://www.ellentube.com/',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'George Carlin',
      website: 'https://georgecarlin.com/',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Jerry Seinfeld',
      website: 'http://jerryseinfeld.com/',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Dave Chapelle',
      website: 'https://shopchappelle.com/',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Neal Brennan',
      website: 'https://www.nealbrennan.com/',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Kevin Hart',
      website: 'https://kevinhartnation.com/',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], { returning: true }).then(function(comedians) {
      return queryInterface.bulkInsert('jokes', [
        { content: `My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the heck she is.`,
          likes: 37,
          comedianId: comedians[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { content: `Accept who you are. Unless you're a serial killer.`,
        likes: 16,
        comedianId: comedians[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `In the beginning there was nothing. God said, "Let there be light!" And there was light. There was still nothing, but you could see it a whole lot better.`,
        likes: 9,
        comedianId: comedians[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `I'm a godmother, that's a great thing to be, a godmother. She calls me god for short, that's cute, I taught her that.`,
        likes: 12,
        comedianId: comedians[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Follow your passion. Stay true to yourself. Never follow someone else's path unless you're in the woods and you're lost and you see a path. By all means, you should follow that.`,
        likes: 22,
        comedianId: comedians[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `I went to a bookstore and asked the saleswoman, "Where's the self-help section?'" She said if she told me, it would defeat the purpose.`,
        likes: 15,
        comedianId: comedians[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `The reason I talk to myself is because I’m the only one whose answers I accept.`,
        likes: 11,
        comedianId: comedians[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Fighting for peace is like screwing for virginity.`,
        likes: 41,
        comedianId: comedians[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `The main reason Santa is so jolly is because he knows where all the bad girls live.`,
        likes: 30,
        comedianId: comedians[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Tell people there's an invisible man in the sky who created the universe, and the vast majority will believe you. Tell them the paint is wet, and they have to touch it to be sure.`,
        likes: 18,
        comedianId: comedians[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `If it’s true that our species is alone in the universe, then I’d have to say the universe aimed rather low and settled for very little.`,
        likes: 5,
        comedianId: comedians[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Isn’t it a bit unnerving that doctors call what they do "practice"?`,
        likes: 11,
        comedianId: comedians[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `The luge is the only Olympic event where you could have people competing in it against their will, and it would look exactly the same.`,
        likes: 57,
        comedianId: comedians[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `I wonder if illiterate people get the full effect of alphabet soup.`,
        likes: 14,
        comedianId: comedians[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `My parents didn't want to move to Florida, but they turned sixty and that's the law.`,
        likes: 26,
        comedianId: comedians[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Marriage is like a game of chess except the board is flowing water, the pieces are made of smoke and no move you make will have any effect on the outcome.`,
        likes: 35,
        comedianId: comedians[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `I don't want to hear the specials. If they're so special, put 'em on the menu.`,
        likes: 19,
        comedianId: comedians[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Terrorists don't take black hostages. That's the truth. I have yet to see one of us on the news reading a hostage letter. Like, "Uh... they is treating us good. Uh, we are chilling and shit. I'd like to give a shout out to Ray-Ray and Big Steve and uh, send some Newports!"`,
        likes: 52,
        comedianId: comedians[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `They got a character on there named Oscar, they treat this guy like shit the entire show. They judge him right in his face, "Oscar you are so mean! Isn't he kids?", "Yeah Oscar! You're a grouch!" It's like, "Bitch! I live in a fucking trashcan!"`,
        likes: 14,
        comedianId: comedians[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `All I'll say about Elian is thank God he's Cuban. 'Cause if he was Haitian you'd have never heard about his ass. If Elian Gonzales was Elian Mumumbo from Haiti, they would've pushed that little rubber tube right back in the water. "Sorry little fella, all full. Good luck!"`,
        likes: 26,
        comedianId: comedians[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Do you guys remember what life was like before covid? I do. There was a mass shooting every week. Anyone remember that? Thank God for covid. Something had to lock these murderous whites up and keep 'em in the house.`,
        likes: 35,
        comedianId: comedians[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `I don't know why poor white people don't like wearing masks. What is the problem? You wear a mask to the klan rally. Wear it to Wal-Mart too.`,
        likes: 28,
        comedianId: comedians[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Trump getting coronavirus was like when Freddy Mercury got AIDS. Nobody was like, "Well, how did he get it?"`,
        likes: 19,
        comedianId: comedians[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `I like how on cop cars, “To protect and serve” is in quotes, like they're being sarcastic.`,
        likes: 40,
        comedianId: comedians[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `The phrase, “Don’t take this the wrong way” has a zero percent success rate.`,
        likes: 56,
        comedianId: comedians[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Just tried to switch to Bing… Google was like, “You can, but it’d be a real shame if some of your old searches got out.”`,
        likes: 24,
        comedianId: comedians[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Marriage = Betting someone half your shit that you’ll love them forever.`,
        likes: 29,
        comedianId: comedians[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `The leading cause of hot air balloon crashes is blowing an open flame into a fucking cloth balloon with a basket attached.`,
        likes: 15,
        comedianId: comedians[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Relationships nowadays = First week: I love you baby.. Second week: Together forever.. Third week: Single.`,
        likes: 22,
        comedianId: comedians[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `I don’t make jokes. I just watch the government and report the facts.`,
        likes: 7,
        comedianId: comedians[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `I DON’T have EX’s! I have Y’s. Like "Y the hell did I date you?!"`,
        likes: 2,
        comedianId: comedians[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `Ain’t no sniper looking for me at no Applebee’s. I’m not at the sniper level in my career. I’m not there yet.`,
        likes: 41,
        comedianId: comedians[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        { content: `You ever get a bill so high, you try to put it in the light, like it’s gonna change?`,
        likes: 8,
        comedianId: comedians[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      ])
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('authors', null, {})
  }
}