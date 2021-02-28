'use strict'
const db = require('../models');
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {   
    await db.sequelize.sync({force: true});
    await queryInterface.bulkDelete('comedians', null, {truncate: true, cascade: true, restartIdentity: true});    
    const bulkComedians = await queryInterface.bulkInsert('comedians', [
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
    ], { returning: true });

    await queryInterface.bulkDelete('jokes', null, {truncate: true, cascade: true, restartIdentity: true});
    const bulkJokes = await queryInterface.bulkInsert('jokes', [
      { content: `My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the heck she is.`,
      likes: 37,
      comedianId: bulkComedians[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Accept who you are. Unless you're a serial killer.`,
      likes: 16,
      comedianId: bulkComedians[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `In the beginning there was nothing. God said, 'Let there be light!' And there was light. There was still nothing, but you could see it a whole lot better.`,
      likes: 9,
      comedianId: bulkComedians[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `I'm a godmother, that's a great thing to be, a godmother. She calls me god for short, that's cute, I taught her that.`,
      likes: 12,
      comedianId: bulkComedians[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Follow your passion. Stay true to yourself. Never follow someone else's path unless you're in the woods and you're lost and you see a path. By all means, you should follow that.`,
      likes: 22,
      comedianId: bulkComedians[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `I went to a bookstore and asked the saleswoman, 'Where's the self-help section?' She said if she told me, it would defeat the purpose.`,
      likes: 15,
      comedianId: bulkComedians[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `The reason I talk to myself is because I’m the only one whose answers I accept.`,
      likes: 11,
      comedianId: bulkComedians[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Fighting for peace is like screwing for virginity.`,
      likes: 41,
      comedianId: bulkComedians[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `The main reason Santa is so jolly is because he knows where all the bad girls live.`,
      likes: 30,
      comedianId: bulkComedians[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Tell people there's an invisible man in the sky who created the universe, and the vast majority will believe you. Tell them the paint is wet, and they have to touch it to be sure.`,
      likes: 18,
      comedianId: bulkComedians[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `If it’s true that our species is alone in the universe, then I’d have to say the universe aimed rather low and settled for very little.`,
      likes: 5,
      comedianId: bulkComedians[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Isn’t it a bit unnerving that doctors call what they do 'practice'?`,
      likes: 11,
      comedianId: bulkComedians[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `The luge is the only Olympic event where you could have people competing in it against their will, and it would look exactly the same.`,
      likes: 57,
      comedianId: bulkComedians[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `I wonder if illiterate people get the full effect of alphabet soup.`,
      likes: 14,
      comedianId: bulkComedians[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `My parents didn't want to move to Florida, but they turned sixty and that's the law.`,
      likes: 26,
      comedianId: bulkComedians[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Marriage is like a game of chess except the board is flowing water, the pieces are made of smoke and no move you make will have any effect on the outcome.`,
      likes: 35,
      comedianId: bulkComedians[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `I don't want to hear the specials. If they're so special, put 'em on the menu.`,
      likes: 19,
      comedianId: bulkComedians[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Terrorists don't take black hostages. That's the truth. I have yet to see one of us on the news reading a hostage letter. Like, 'Uh... they is treating us good. Uh, we are chilling and shit. I'd like to give a shout out to Ray-Ray and Big Steve and uh, send some Newports!'`,
      likes: 52,
      comedianId: bulkComedians[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `They got a character on there named Oscar, they treat this guy like shit the entire show. They judge him right in his face, 'Oscar you are so mean! Isn't he kids?', 'Yeah Oscar! You're a grouch!' It's like, 'Bitch! I live in a fucking trashcan!'`,
      likes: 14,
      comedianId: bulkComedians[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `All I'll say about Elian is thank God he's Cuban. 'Cause if he was Haitian you'd have never heard about his ass. If Elian Gonzales was Elian Mumumbo from Haiti, they would've pushed that little rubber tube right back in the water. 'Sorry little fella, all full. Good luck!'`,
      likes: 26,
      comedianId: bulkComedians[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Do you guys remember what life was like before covid? I do. There was a mass shooting every week. Anyone remember that? Thank God for covid. Something had to lock these murderous whites up and keep 'em in the house.`,
      likes: 35,
      comedianId: bulkComedians[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `I don't know why poor white people don't like wearing masks. What is the problem? You wear a mask to the klan rally. Wear it to Wal-Mart too.`,
      likes: 28,
      comedianId: bulkComedians[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Trump getting coronavirus was like when Freddy Mercury got AIDS. Nobody was like, 'Well, how did he get it?'`,
      likes: 19,
      comedianId: bulkComedians[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `I like how on cop cars, 'To protect and serve'”' is in quotes, like they're being sarcastic.`,
      likes: 40,
      comedianId: bulkComedians[4].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `The phrase, 'Don’t take this the wrong way' has a zero percent success rate.`,
      likes: 56,
      comedianId: bulkComedians[4].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Just tried to switch to Bing… Google was like, 'You can, but it’d be a real shame if some of your old searches got out.'`,
      likes: 24,
      comedianId: bulkComedians[4].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Marriage = Betting someone half your shit that you’ll love them forever.`,
      likes: 29,
      comedianId: bulkComedians[4].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `The leading cause of hot air balloon crashes is blowing an open flame into a fucking cloth balloon with a basket attached.`,
      likes: 15,
      comedianId: bulkComedians[4].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Relationships nowadays = First week: 'I love you baby.' Second week: Together forever.. Third week: Single.`,
      likes: 22,
      comedianId: bulkComedians[5].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `I don’t make jokes. I just watch the government and report the facts.`,
      likes: 7,
      comedianId: bulkComedians[5].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `I DON’T have EX’s! I have Y’s. Like 'Y the hell did I date you?!'`,
      likes: 2,
      comedianId: bulkComedians[5].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `Ain’t no sniper looking for me at no Applebee’s. I’m not at the sniper level in my career. I’m not there yet.`,
      likes: 41,
      comedianId: bulkComedians[5].id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { content: `You ever get a bill so high, you try to put it in the light, like it’s gonna change?`,
      likes: 8,
      comedianId: bulkComedians[5].id,
      createdAt: new Date(),
      updatedAt: new Date()
      }
      ], { returning: true });

    await queryInterface.bulkDelete('users', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkUsers = await queryInterface.bulkInsert('users', [
      { email: 'skaiser33@gmail.com',
      name: 'Steven Kaiser',
      password: bcrypt.hashSync('StevenKaiser', 12),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { email: 'rishejs194@gmail.com',
      name: 'Jacob Rishe',
      password: bcrypt.hashSync('JacobRishe', 12),
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { email: 'bernims6@gmail.com',
      name: 'Bernada Pierce',
      password: bcrypt.hashSync('BernardaPierce', 12),      
      createdAt: new Date(),
      updatedAt: new Date()
      }
      ], { returning: true });

    await queryInterface.bulkDelete('topics', null, {truncate: true, cascade: true, restartIdentity: true});
    const bulkTopics = await queryInterface.bulkInsert('topics', [
      { name: 'Age',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Christmas',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Conversation',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Covid',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Crime',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Doctors',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Education',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Fame',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Family',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Food',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Internet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Marriage',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Money',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Nature',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'People',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Police',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Politics',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Race',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Relationships',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Religion',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Self',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Sex',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Sports',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Travel',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Trump',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'TV',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      { name: 'Violence',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], { returning: true });

    await queryInterface.bulkDelete('usersJokes', null, {truncate: true, cascade: true, restartIdentity: true});
    const bulkUsersJokes = await queryInterface.bulkInsert('usersJokes', [
      { userId: 1,
        jokeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { userId: 1,
        jokeId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { userId: 1,
        jokeId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { userId: 2,
        jokeId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { userId: 2,
        jokeId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { userId: 2,
        jokeId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { userId: 3,
        jokeId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { userId: 3,
        jokeId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { userId: 3,
        jokeId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { returning: true });

    await queryInterface.bulkDelete('jokesTopics', null, {truncate: true, cascade: true, restartIdentity: true});
    const bulkJokesTopics = await queryInterface.bulkInsert('jokesTopics', [
      { jokeId: 1,
        topicId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 2,
        topicId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 2,
        topicId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 3,
        topicId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 4,
        topicId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 4,
        topicId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 5,
        topicId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 5,
        topicId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 6,
        topicId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 7,
        topicId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 7,
        topicId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 8,
        topicId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 8,
        topicId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 9,
        topicId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 10,
        topicId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 10,
        topicId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 11,
        topicId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 12,
        topicId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 13,
        topicId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 14,
        topicId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 14,
        topicId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 15,
        topicId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 16,
        topicId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 16,
        topicId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 17,
        topicId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 18,
        topicId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 19,
        topicId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 20,
        topicId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 20,
        topicId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 21,
        topicId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 22,
        topicId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 23,
        topicId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 23,
        topicId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 23,
        topicId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 24,
        topicId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 25,
        topicId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 26,
        topicId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 27,
        topicId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 27,
        topicId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 28,
        topicId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 29,
        topicId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 30,
        topicId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 31,
        topicId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 32,
        topicId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 32,
        topicId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { jokeId: 33,
        topicId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], { returning: true });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comedians', null, {})
  }
}