#  Final Project: Quiz Application with Microservices
#  Date: 30-May-2023
#  Authors:
#           A01745597 Fernando Emilio Nava Cano
#           A01745696 Yahir Cortes Rodriguez
#           A01025261 Maximiliano Carrasco Rojas
#           A01742023 Alberto Jashua Rodriguez Villegas
from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
import mysql.connector
import json

server = ''
database = ''
username = ''
password = ''

array = []
app = Flask(__name__)
CORS(app)
@app.route("/")
def hello_world():
    return "No existe"
@app.route("/questions",methods=['GET'])
def questions():
    try:
        coneccion = mysql.connector.connect(user=username, password=password, host=server, database=database, charset="utf8")
        cursor = coneccion.cursor()
        query = "Select * from Question"
        cursor.execute(query)
        array = []

        for (id,question, answer_a,answer_b,answer_c,answer_d,correct) in cursor:
            thisdict = {
                "question":question,
                "a":answer_a,
                "b":answer_b,
                "c":answer_c,
                "d":answer_d,
                "correct":correct
            }
            array.append(thisdict)
        return jsonify({"Resultado":array})
    except mysql.connector.Error as err:
        return jsonify("Error: {}".format(err))

@app.route("/getHighScore")
def getHighScore():
    try:
        coneccion = mysql.connector.connect(user=username, password=password, host=server, database=database)
        cursor = coneccion.cursor()
        query = "Select email, MAX(score) as score, score_name FROM Score GROUP BY email ORDER BY score DESC;"
        cursor.execute(query)
        array = []

        for (email,score,score_name) in cursor:
            thisdict = {
                "email":email,
                "score":score,
                "score_name":score_name,
            }
            array.append(thisdict)
        datos = json.dumps(array, indent=3)
        return jsonify(array)

    except mysql.connector.Error as err:
        return jsonify("Error: {}".format(err))

@app.route("/postScore")
def postScore():
    try:
        coneccion = mysql.connector.connect(user=username, password=password, host=server, database=database)
        cursor = coneccion.cursor()
        query='''
        INSERT INTO Score(email,score,score_name)
        Values(%s, %s, %s);
        '''
        id_user = request.args['email']
        score = request.args['score']
        score_name = request.args['score_name']
        values = (id_user,score,score_name)
        cursor.execute(query,values)
        coneccion.commit()
        cursor.close()
        coneccion.close()
        return jsonify("Score Created Correctly")
    except mysql.connector.Error as err:
        return jsonify("Error: {}".format(err))

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8080)