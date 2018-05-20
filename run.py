#candy aigle noir
from datetime import datetime
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def gintoki():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=1001, host='0.0.0.0', threaded=True)



