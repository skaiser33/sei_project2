PASTE THE FOLLOWING INTO YOUR config.json FILE INSIDE OF THE config/ FOLDER. 

IF YOU'RE NOT ON MAC, ADD USERNAME / PW. 



{
  "development": {
    "database": "gigglebytes",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "gigglebytes_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "gigglebytes_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
