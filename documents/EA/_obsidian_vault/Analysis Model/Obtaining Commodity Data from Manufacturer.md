---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1708939
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Obtaining Commodity Data from Manufacturer

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

PCF = Product Calculator Commodity Form (used below as reference to field values on panel for particular Commodity in calculator form)
SKU = Stock Keeping Unit
PCF.SKUDisabled is non-visual attribute of Commodity, which is saved to corresponding attribute of commodity when creating Temporary Application. Default value PCF.SKUDisabled = False.

Validation:
If any from following conditions is broken:

	
- parameter Product Calculator Parameters.CommodityDataFromManufacturer = True
	
- PCF.CommodityType and PCF.Manufacturer are filled in
	
- exists active record in Commodity Data from Manufacturer Definition (CDMD) 
where CDMD.CommodityType = PCF.CommodityType and CDMD.Manufacturer = PCF.Manufacturer

then algorithm ends with no action.

Action:
1. Modal window Commodity Data from Manufacturer is displayed with information that data from Manufacturer are retrieved (MSG_CommDataFromManufRetrive).
2. System creates GetCommodityDataRequest (RQ): 
- RQ.SalesroomCode = code of Salesroom where current user is logged on
- RQ.CommodityTypeCodeCode = PCF.CommodityType
- RQ.ManufacturerCode = PCF.Manufacturer
- RQ.RequestType = CDMD.RequestType (from record found in validation above)
- RQ.RequestID = unique code for communication
and send data to OSB (see CommodityManufacturerWS.GetCommodityData interface). 
3. OSB transforms data to proper request according to Request Type, sends them to selected web service and returns GetCommodityDataResponse. 
4. In case of no response (timeout) the message (MSG_CommDataFromManufTimeout) is displayed and a button for repeated calling is displayed. 
5. If repeated calling is unsuccessful or another error in communication occurs (MSG_CommDataFromManufError) or empty list of models is returned in response (MSG_CommDataFromManufNoModel) then user can close the window Then algorithm ends and user continues with entering of commodity data by standard way, i.e. PCF.Model is free text and PCF.Price is entered manually (SKU is not required). 
6. If non-empty list of Models was returned in response then:

	
- Message is hidden.
	
- Combo box for Model selection is displayed and filled from the returned list. User chooses a Model (mandatory).


	
- If a list of SKU was returned for the chosen Model, combo box for SKU is displayed and filled from the returned list. If the list contains only one value then the value is pre-filled.
	
- User chooses a SKU (mandatory).
	
- If Price was returned for the chosen combination of (Model, SKU) then it is displayed in the field Price. Otherwise the field is hidden.
	
- If Price was not returned and any of PriceMin/PriceMax was returned for the chosen combination of (Model, SKU) then it is displayed in the field PriceMax/PriceMin and the values are passed to Product Calculator form for validation of manually entered commodity price.
Otherwise the corresponding field is hidden.
	
- User confirms saving of entered data.
	
- User can also cancel entering of commodity data.

7. The modal window is closed.
8. If user canceled entering of commodity data, field PCF.Manufacturer is cleared, algorithm ends and user continues in entering of commodity data by standard way.
9. If a Model was chosen then 
- set PCF.Model = Model 
- disable fields PCF.CommodityCategory, PCF.CommodityType, PCF.Manufacturer, PCF.Model
10. If SKU was chosen then 
- set PCF.StockKeepingUnit = SKU and show this field
- set PCF.SKUDisabled = True
Note: Value SKU = "NA" is dedicated for case when the price is defined on level of Model (not on level of SKU). 
11. If Price was returned for SKU in response then 
- set PCF.Price = Price and disable this field

Note: When a modification of disabled fields is required then the Commodity has to be completely removed from PCF and a new one added.

## 🔗 Connections (2)

- ← Realisation: [[Commodity Data from Manufacturer]]
- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (2 diagrams)

- Custom: Commodity Data from Manufacturer
- Use Case: Choose product offer
