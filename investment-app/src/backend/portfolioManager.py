# LIBRARIES INSTALATION

# # FINANCE DATA
# !pip install yfinance

# # MATH AND STATISTICS
# !pip install statistics
# !pip install numpy

# # FUNCTIONAL LIBRARIES
# !pip install pandas
# !pip install seaborn
# !pip install matplotlib

# IMPORT LIBRARIES
import yfinance as YF
import pandas as pd
import numpy as np
import statistics as stats
import matplotlib.pyplot as plt
import seaborn as sns
import scipy.stats as scistats
import datetime as dt


###########################################

# CLASS STOCK OBJECT
class Stock:
  def __init__(self, ticker):
    self.ticker = ticker
    self.price = "Nothing here"
    self.yeild = "Nothing here"
    self.sharesOutstanding = "Nothing here"
    self.volume = "Nothing here"
    self.close = "Nothing here"
    self.eps = "Nothing here"
    self.revenue = "Nothing here"
    self.beta = "Nothing here"
    self.netInomce = "Nothing here"
    self.ebidta = "Nothing here"
    self.nextEarnings = "Nothing here"
    self.sharesOwned = "Nothing here"

  # UTILITY FUNCTION TO BE USED IN OTHER FUNCTIONS
  def getOHLCVDS(self, timePeriod):
    stockobj = YF.Ticker(self.ticker)
    OHLCVDS = stockobj.history(period=timePeriod)
    return OHLCVDS

  def getClose(self, timePeriod):
    stockobj = self.getOHLCVDS(timePeriod)
    stockobjClose = stockobj['Close']
    return stockobjClose
  
  def getPrice(self):
    closeData = self.getClose('1y')
    return round(closeData[-1],2)
  
  def YTDperformance(self):
    closeDataYTD = self.getClose('ytd')
    yearOpen = closeDataYTD[0]
    recentClose = closeDataYTD[-1]
    returns = ((recentClose/yearOpen) - 1)
    returns = round(returns*100, 2)
    return returns
  
  def getStandardDev(self):
    closeData = self.getClose('1y')
    stdev = stats.stdev(closeData)
    return round(stdev,4)


#############################

class Portfolio:
  def __init__(self):
    self.holdingsWeights = "Nothing here"
    self.cash = "Nothing here"

  # returns only the holdings no weights
  def getHoldings(self):
    # list to hold tickers
    listOfholdings = []
    for i in self.holdingsWeights:
      # appends holdings to the list
      listOfholdings.append(i)
    # returns only the holdings no weights
    return listOfholdings
  
  # GET THE WEIGHTS OF THE HOLDINGS 
  # RETURNS AN ARRAY OF WEIGHTS
  def getWeights(self):
    #loops through an array or dictionary 
    weightsList = []
    # iterate through the dictionary of the portfolio
    for i in self.holdingsWeights.values():
      weightsList.append(i)
    return weightsList
  
  # GET THE RECENT PRICES OF HOLDINGS
  # RETURNS AN ARRAY OF PRICES 
  def getPrices(self):
    # get holdings
    holdings = self.getHoldings()
    # list of holdings
    listOfprices = []
    # interate through holdings 
    for i in holdings:
      # get the price for that particular holding
      price = Stock(i).getPrice()
      # append to list
      listOfprices.append(price)
    # returns an array of prices
    return listOfprices

  # GET THE YTD PERFORMANCE OF HOLDINGS
  # RETURNS AN ARRAY OF YTD PERFORMANCE
  def YTDperformance(self):
    # empty dictionary
    ytdPerformance = []
    # calculates the YTD performance of the entire portfolio
    holdings = self.getHoldings()
    # loop through list of tickers and create objects for each returning the YTD perfromance of each company
    for i in holdings:
      # get the performance of the particular stock
      performance = Stock(i).YTDperformance()
      # append to list
      ytdPerformance.append(performance)
    # returns ytd performance array
    return ytdPerformance

  # GET SECTOR DESIGNATION
  # RETURNS AN ARRAY OF SECTORS
  def getSectorsInfo(self):
    holdings = self.getHoldings()
    sectorsData = []
    for i in holdings:
      try:
        data = self.get_data(i)['sector']
        sectorsData.append(data)
      except:
        sectorsData.append('error')
    return sectorsData
  
  # GET STANDARD DEVIATIONS OF HOLDINGS 
  # RETURNS AN ARRAY OF STDEVS
  def getStandardDevs(self):
    # get holdings
    holdings = self.getHoldings()
    # empty list to append to
    listOfStdevs = []
    # loop through the holdings to get tickers
    for i in holdings:
      # get the stdev of perticular holding
      stdev = Stock(i).getStandardDev()
      # append to list
      listOfStdevs.append(stdev)
    # returns the array
    return listOfStdevs

  # CORRELATION FUNCTION
  # RETURNS A DATAFRAME OF CORRELATED VALUES
  def holdingsCorrelations(self):
    pct_change_list = []
    for ticker in self.getHoldings():
        stockhistory = YF.Ticker(ticker).history()['Close']
        pct_chg = pd.DataFrame(stockhistory.pct_change()).rename(columns={'Close': f'{ticker}'}).dropna()
        pct_change_list.append(pct_chg)
    #print(pct_change_list)
    pct_chg_df_appended = pd.concat(pct_change_list, axis=1)
    return pct_chg_df_appended.corr()

    print("The total number of tickers entered is:",len(tickers))

  # HEATMAP FUNCTION
  # RETURNS A HEATMAP OF CORRELATION VALUES FROM A DATAFRAME
  # CREATED BY THE HOLDINGS CORRELATED FUNCTION
  def correlatedHeatmap(self):
    correlations_df = self.holdingsCorrelations()
    sns.set(rc = {'figure.figsize':(30,20)})
    sns_heatmap = sns.heatmap(correlations_df, cmap ="coolwarm_r", annot=True)
    return sns_heatmap

  # VALUE OF POSITION FUNCTION
  # RETURNS THE VALUE AS A PCT OF THE ENTIRE PORTFOLIO FOR SPECIFIC HOLDING
  def holdingsPct(self):
    weights = self.getWeights()
    print(weights)
    prices = self.getPrices()
    print(prices)
    values = weights*prices
    print(values)
  
  # RETURNS THE VALUE OF THE PORTFOLIO
  # def getPvalue(self):
  #   portfolio = self.getPortfolio()
    

#################################################################################################################################################################

  # UNDER CONSTRUCTION
  def portfolioStddev(self):
    stdevs = pd.DataFrame(self.getStandardDevs())
    print(stdevs)

  # expirmental
  def get_data(self, ticker):
    tickerObj = YF.Ticker(ticker)
    info = tickerObj.get_info()
    return info
  
  # GET PORTFOLIO DISTRIBUTION
  def getDistribution(self):
    portfolio = self.getPortfolio()
    return portfolio

  # def WeightedYTDportfolioPerformance(self):
  #   # dictionary to hold values
  #   holdingsRelreturns = {"Ticker":[], "RelativeYTD":[]}
  #   holdings = self.getHoldings()
  #   # calculate the weighted performance
  #   weights = holdings_dict.values()
  #   YTDperformanceDict = self.YTDportfolioPerformance()
  #   for i in holdings:
  #     for returns in YTDperformanceDict["YTD"]:
  #       for weight in weights:
  #         relativeReturn = returns*weight
  #         holdingsRelreturns["Ticker"].append(i)
  #         holdingsRelreturns["RelativeYTD"].append(relativeReturn)
  #   return holdingsRelreturns

  def getPortfolio(self):
    portfolio = pd.DataFrame()
    portfolio["Tickers"] = self.getHoldings()
    portfolio["Quantity"] = self.getWeights()
    portfolio["Price"] = self.getPrices()
    portfolio["YTD %"] = self.YTDperformance()
    portfolio["Stdev 1y"] = self.getStandardDevs()
    portfolio["Stdev %"] = round((portfolio["Stdev 1y"] / portfolio["Price"] * 100), 3)
    portfolio["Position Value"] = round((portfolio["Price"] * portfolio["Quantity"]),2)
    portfolio["Sector"] = self.getSectorsInfo()


    equityvalue = round(float(portfolio["Position Value"].sum()),2)
    cash = self.cash
    totalvalue = cash + equityvalue
    totalvalue = round(totalvalue,2)

    portfolio["% of Portfolio"] = round((portfolio["Position Value"] / totalvalue),4) * 100
    portfolio.dropna()


    print(f"The total value of the portfolio and its positions is: ${totalvalue}")
    print(f"The cash balance is set at ${self.cash}")
    print(f"The value of all equity positions is: ${equityvalue}")
    return portfolio
    

print("success2")

OSIG = Portfolio()

holdings_dict = {"ADBE":375,
                 "AMZN":940,
                 "AXON":883,
                 "BX":1567.916,
                 "BRK-B":275,
                 "COST":385.956,
                 "DIS":651.43,
                 "DPZ":258,
                 "GOOGL":1640,
                 "HD":386.603,
                 "CRM":635,
                 "CSCO":2952.787,
                 "CVS":932.405,
                 "HON":597.887,
                 "INTC":3100,
                 "JNJ":842.56,
                 "JPM":1356.25,
                 "LMT":220,
                 "MDT":1154.281,
                 "MSFT":390,
                 "NEE":2164,
                 "PXD":980,
                 "PYPL":550,
                 "SBUX":1873.436,
                 "STZ":265.746,
                 "USB":2022.076,
                 "VZ":1248,
                 "ZTS":1023.159,
                 }

OSIG.holdingsWeights = holdings_dict
OSIG.cash = 91884.68

#print("Cash balance of the portfolio is:", OSIG.cash)
#OSIG.displayHoldingsWeights()

# portfolio1 = OSIG.getPortfolio()
# portfolio1

# OSIG.getSectorsInfo()
# holdings = [OSIG.getPortfolio()["Tickers"], OSIG.getPortfolio()["Position Value"]]

# holdings = pd.DataFrame(holdings)

#OSIG.portfolioStddev()

masterframeData = OSIG.getPortfolio()
print(masterframeData)
    
date = dt.datetime.today()

date = date.strftime('%m/%d/%Y')

print(date)

totalvalues = pd.read_csv('PortfolioManager/investment-app/src/backend/totalValues.csv')
print(totalvalues)

totalvalues = totalvalues.set_index('Ticker')

#totalvalues.to_dict(orient='dict')

#totalvalues.to_json('/PortfolioValues4.json')
## Add values to the CSV file

posValues = masterframeData[['Tickers','Position Value']]
posValues = posValues.set_index('Tickers')

posValues = posValues.rename({'BRK-B':'BRK.B'})
posValues
totalvalues[date] = posValues
totalvalues.to_csv('PortfolioManager/investment-app/src/backend/totalValues.csv')
