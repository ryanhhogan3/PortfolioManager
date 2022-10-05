import pandas as pd

def convertFile(csvFile):
    csv = pd.read_csv(csvFile)
    csv = csv.T
    csv.to_dict()
    csv.to_json('testPvalues.json')

convertFile('PortfolioManager/investment-app/src/backend/totalValues.csv')
