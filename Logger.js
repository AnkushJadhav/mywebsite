function getLoggerFormattedDate(date) {
  var m_strLoggerDate = '';
  if (date) {
    m_strLoggerDate += date.getDate();
    m_strLoggerDate += '-';
    m_strLoggerDate += date.getMonth();
    m_strLoggerDate += '-';
    m_strLoggerDate += date.getFullYear();
    m_strLoggerDate += ' ';
    m_strLoggerDate += date.getHours()+1;
    m_strLoggerDate += ':';
    m_strLoggerDate += date.getMinutes()+1;
    m_strLoggerDate += ':';
    m_strLoggerDate += date.getSeconds()+1;
    m_strLoggerDate += ':';
    m_strLoggerDate += date.getMilliseconds()+1;
  }
  return m_strLoggerDate;
};

module.exports = {
  logError : function(msg) {
    var date = new Date();
    var strDate = getLoggerFormattedDate(date);
    var logLevel = 'ERROR';
    console.log(strDate + '\t' + logLevel + '\t' + msg);
  },

  logDebug : function(msg) {
    var date = new Date();
    var strDate = getLoggerFormattedDate(date);
    var logLevel = 'DEBUG';
    console.log(strDate + '\t' + logLevel + '\t' + msg);
  },

  logInfo : function(msg) {
    var date = new Date();
    var strDate = getLoggerFormattedDate(date);
    var logLevel = 'INFO';
    console.log(strDate + '\t' + logLevel + '\t' + msg);
  }
};
