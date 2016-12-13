A little web app I decided to make for posting places you've travelled on a map.

To get started, run these commands from the top directory:

```
pip install virtualenv
virtualenv venv; source venv/bin/activate
pip install -r requirements.txt
npm install -g webpack; npm install
```

Then in two separate tabs run `python app.py` and `webpack --watch`. Make edits to `app.py` to edit the frontend and backend, respectively.
