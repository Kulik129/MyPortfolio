from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('aboutme.html')

@app.route('/skils')
def about():
    return render_template('skils.html')

@app.route('/projects')
def skils():
    return render_template('projects.html')



if __name__ == '__main__':
    app.run()