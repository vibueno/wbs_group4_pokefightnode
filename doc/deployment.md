# Deployment

The deployment has been performed using [this guide](https://devcenter.heroku.com/articles/git).

For some steps there are different options you can choose. These are just the ones we went for.

1. Create an account on Heroku
2. Install Heroku client:

```bash
npm install -g heroku
```

3. Log-in with the Heroku client:

```bash
heroku login
```

4. Inside your git project, create a new Heroku app (if you already have one, the process is different):

```bash
heroku create
```

5. Make sure you have a start script in your packages.json. We added:

```json
"start": "node index.js"
```

6. Deploy:

```bash
git push -f heroku dev:main
```

If someone goes wrong, you may check the deployment log on your machine with this command:

```bash
heroku logs --tail
```
