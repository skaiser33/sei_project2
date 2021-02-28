# Highlights of Our GiggleBytes Code

### Here are a few of our favorite code snippets. Some of them felt like coding interview questions!

### TO DISPLAY JOKES FILTERED BY COMEDIAN 
    <% comedian.dataValues.jokes.sort(function(a, b){return b.likes-a.likes}).forEach(function(joke) { %>
    <div class="jokes-container">
      <div class="individual-joke">      
        <p> "<%= joke.content  %>"  %> </p>
### TO INCLUDE A LAUGH/UNLAUGH BUTTON DEPENDING ON WHETHER THE USER HAS ALREADY FAVORITED        
        <% isFavorite = false %> 
        <% for (i=0; i < currentUser.dataValues.jokes.length; i++) { %> 
          <% if (currentUser.dataValues.jokes[i].id === joke.id) { %> 
            <% isFavorite = true; %> 
            <% break; %> 
          <% }  %>    
        <% }  %> 
        <div class="items-container">
          <% if (isFavorite === false) { %>
          <div class="laughs-container">
            <form method="POST" action="/comedian/addjoke/<%= joke.id %> ">
              <input hidden type="text">
              <button type="submit">Add A Laugh</button>
            </form>
          </div>
          <% } else { %>
          <div class="laughs-container">
            <form method="POST" action="/comedian/takejoke/<%= joke.id %> ">
              <input hidden type="text">
              <button type="submit">Remove A Laugh</button>
            </form>
          </div>
          <% } %>


### ADDING A LAUGH (USING ASYNC AWAIT IN A POST ROUTE)

router.post('/addjoke/:id', async (req, res) => {
  try {
    const foundJoke = await db.joke.findByPk(req.params.id)
    foundJoke.likes = foundJoke.likes + 1
    foundJoke.save()
    const foundUser = await db.user.findByPk(req.user.id)    
    foundUser.addJoke(foundJoke)
    console.log('===========')
    console.log(foundUser.name, 'has faved', foundJoke.content)
    // res.redirect(`/topic/${req.query.topic}`)
    res.redirect(`/topic?topic=${query.topic}`)
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/topic?topic=${query.topic}`)
  }	 
})

### POPULATING MULTIPLE DROPDOWN MENUS USING FINDALL

<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Comedians</a>
  <div class="dropdown-content">
    <form method="GET" action="/comedian" id="comedianform">
      <select name="comedian" id="comedian" form="comedianform" onchange="this.form.submit();">
        <% allComedians.forEach((x)=> { %>
          <option value=<%=x.id %>><%= x.name %>
          </option>
          <% }) %>
      </select>
      <!-- <input type="submit" value="Submit"> -->
    </form>
