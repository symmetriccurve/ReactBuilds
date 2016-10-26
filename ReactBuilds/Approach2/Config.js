var Config = function(Env){
      if(Env == 'Production'){
         return productionConfig()
      } else if(Env == 'Development'){
         return developmentConfig()
      }else if (Env == 'Staging') {
         return stagingConfig()
      }

}

function productionConfig(){
   var config =
      {
  "Apis": {
    "API_1": "production_API_1",
    "API_2": "production_API_2",
    "API_3": "production_API_3"
  },
  "Credentials": {
    "passWord": "production_somePassword",
    "userName": "production_someUser"
  },
  "authTokens": {
    "token_1": "production_tokenValue1",
    "token_2": "production_tokenValue2"
  },
  "testData": {
    "data_1": "production_Somedata",
    "data_2": "production_Somedata",
    "data_3": "production_Somedata"
  }
}
   return config
}

function developmentConfig(){
   var config =
      {
  "Apis": {
    "API_1": "Develop_API_1",
    "API_2": "Develop_API_2",
    "API_3": "Develop_API_3"
  },
  "Credentials": {
    "passWord": "Develop_somePassword",
    "userName": "Develop_someUser"
  },
  "authTokens": {
    "token_1": "Develop_tokenValue1",
    "token_2": "Develop_tokenValue2"
  },
  "testData": {
    "data_1": "Develop_Somedata",
    "data_2": "Develop_Somedata",
    "data_3": "Develop_Somedata"
  }
}
   return config
}

function stagingConfig(){
   var config =
      {
  "Apis": {
    "API_1": "Staging_API_1",
    "API_2": "Staging_API_2",
    "API_3": "Staging_API_3"
  },
  "Credentials": {
    "passWord": "Staging_somePassword",
    "userName": "Staging_someUser"
  },
  "authTokens": {
    "token_1": "Staging_tokenValue1",
    "token_2": "Staging_tokenValue2"
  },
  "testData": {
    "data_1": "Staging_Somedata",
    "data_2": "Staging_Somedata",
    "data_3": "Staging_Somedata"
  }
}
   return config
}

module.exports = Config
