from flask import Flask, render_template
import os

app = Flask(__name__)

# 主页路由
@app.route('/')
def index():
    return render_template('index.html')

# 互动实验室页面路由
@app.route('/lab')
def lab():
    return render_template('lab.html')

# 互动工作室页面路由
@app.route('/studio')
def studio():
    return render_template('studio.html')

# 关于页面路由
@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))