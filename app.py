from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# 配置静态文件目录
@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

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

# 提供CSS和JS文件
@app.route('/lab.css')
def lab_css():
    return send_from_directory('static', 'css/lab.css')

@app.route('/lab.js')
def lab_js():
    return send_from_directory('static', 'js/lab.js')

@app.route('/style.css')
def style_css():
    return send_from_directory('static', 'css/style.css')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))