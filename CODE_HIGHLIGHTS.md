# Highlights of Our GiggleBytes Code

### Here are a few of our favorite code snippets. Some of them felt like coding interview questions!

### TOP 3 LINES OF CODE (OUT OF CONTEXT!)


Steven's sort function of an array of jokes from an associated database:

```<% comedian.dataValues.jokes.sort(function(a, b){return b.likes-a.likes}).forEach(function(joke) { %>```

Bernarda's method for saving the incremented / decremented laugh count to the database for each displayed joke:

```foundJoke.save()```

Jacob's render method with a beast of an object to populate the dropdown menus and user in appropriate ejs file (at the end of a long sequence of db queries):

```res.render('main', { allTopics: topics, allComedians: comedians, currentUser: currentUser })```


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

```
router.post('/addjoke/:id', async (req, res) => {
  try {
    const foundJoke = await db.joke.findByPk(req.params.id)
    foundJoke.likes = foundJoke.likes + 1
    foundJoke.save()
    const foundUser = await db.user.findByPk(req.user.id)    
    foundUser.addJoke(foundJoke)
    res.redirect(`/topic?topic=${query.topic}`)
  } catch (error) {
    req.flash('error', error.message)
    res.redirect(`/topic?topic=${query.topic}`)
  }	 
})
```

### POPULATING MULTIPLE DROPDOWN MENUS USING FINDALL

```
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
 ```   
