# Importar las librerias
from flask import Flask, render_template, jsonify, redirect
from flask_pymongo import PyMongo
import scrape_mars

# Crear la instancia de Flask
app = Flask(__name__)

# Inicializar PyMongo
mongo = PyMongo(app)

# Crear la ruta para renderear el indice
@app.route("/")
def index():
    mars = mongo.db.mars.find_one()
    return render_template("index.html", mars=mars)

@app.route("/scrape")
def scrape():
    mars = mongo.db.mars
    mars_data = scrape_mars.scrape()
    mars.update(
        {},
        mars_data,
        upsert=True
    )
    return redirect("http://localhost:5000/", code=302)

# Inicializa la aplicación
if __name__ == "__main__":
    app.run(debug=True)