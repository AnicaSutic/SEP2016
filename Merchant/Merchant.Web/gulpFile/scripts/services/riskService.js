app.factory("RiskService",function(t){return{getRisksByCategory:function(e){return t.get("/Risk/GetRisksByCategory/"+e)},getOtherCategories:function(){return t.get("/Risk/GetOtherCategories")},getAllCategories:function(){return t.get("/Risk/GetAllCategories")},getRiskItemsForRisk:function(e){return t.get("/Risk/GetRiskItemsForRisk/"+e)},calculatePrice:function(e){return t.post("/Risk/Calculate",e)}}});