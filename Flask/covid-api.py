from flask import Flask, request

import urllib

import json

from flask_ngrok import run_with_ngrok


url = "https://api.covid19india.org/v4/data.json"


response = urllib.request.urlopen(url)




data = json.loads(response.read())



# data['GJ']['districts']['Surat']



def covid_parameters(state, city):
    temp = data[state]['districts'][city]
    
    try:
        active = temp['total']['confirmed'] - temp['total']['recovered']
        population = temp['meta']['population']
        daily_cases = temp['delta']['confirmed']
        daily_recovered = temp['delta']['recovered']
        active_ratio = (active/population)*100
        daily_cases_ratio = ((daily_cases - daily_recovered)/population)*1000
    except:
        active = 0
        population = 0
        daily_cases = 0
        daily_recovered = 0
        active_ratio = 0
        daily_cases_ratio = 0
    
    results = {
        'active' : active,
        'population' : population,
        'daily_cases' : daily_cases,
        'daily_recovered' : daily_recovered,
        'active_ratio' : active_ratio,
        'daily_cases_ratio' : daily_cases_ratio,
    }
    
    return results





def safety_score(results):
    active_score = 0
    if (results['active_ratio'] < 0.25):
        active_score = results['active_ratio']*20
    elif (results['active_ratio'] < 0.5):
        active_score = 5
    elif (results['active_ratio'] < 1):
        active_score = 10
    elif (results['active_ratio'] < 2):
        active_score = 50
    elif (results['active_ratio'] < 4):
        active_score = 80
    else:
        active_score = 100
    daily_score = 0
    if (results['daily_cases_ratio'] < 0.25):
        daily_score = results['daily_cases_ratio']*20
    elif (results['daily_cases_ratio'] < 0.5):
        daily_score = 5
    elif (results['daily_cases_ratio'] < 1):
        daily_score = 10
    elif (results['daily_cases_ratio'] < 2):
        daily_score = 50
    elif (results['daily_cases_ratio'] < 4):
        daily_score = 80
    else:
        daily_score = 100
        
    return 100 - (active_score + daily_score)/2


# safety_score(covid_parameters('GJ', 'Ahmedabad'))




app = Flask(__name__)
run_with_ngrok(app)




@app.route('/city-safety')
def safety():
    try:
        state = request.args.get('state')
        city = request.args.get('city')
        
        if state != None and city != None:
            return str(safety_score(covid_parameters(state, city)))
        else:
            return "Send proper argumnets"
    except:
        return "Send proper argumnets"



if __name__ == '__main__':
    app.run()







