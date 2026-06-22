---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1878246
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ServiceDateType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

This entity holds information about services related to contract.
Only data corresponding to the type of service are filled in.

Values of selected sub-elements are retrieved by calling the external system with following parameters on the input:
- serviceCode = Contract->Offer_Financial_Parameter[.Chosen=TRUE]->Offer_Service.Service_Code
- serviceVersion = Contract->Offer_Financial_Parameter[.Chosen=TRUE]->Offer_Service.Service_Version

Entity is created for services 

	
- Grace Period (Contract->Offer_Financial_Parameters->Offer_Service->Service where related Service_Type.Code = 'GRPER‘)
	
- Gift Payment (Contract->Offer_Financial_Parameters->Offer_Service->Service where related Service_Type.Code = 'GIFTP‘)
	
- Card Services (Contract->Offer_Financial_Parameters->Offer_Service->Service where related Service_Type.Code = 'CRDPST‘)
	
- CEL Rewards (Contract->Offer_Financial_Parameters->Offer_Service->Service where related Service_Type.Code = 'CELREW‘)
	
- Insurance services (Contract->Offer_Financial_Parameters->Offer_Service[Offer_Insurance_Service]->Service)

## 🔗 Connections (5)

- ← Dependency «use»: [[ServiceDataTypeItems]]
- → Dependency «use»: [[ServiceParameters (Class 1878245)]]
- → Dependency «use»: [[CardInfoType]]
- → Dependency «use»: [[InterestRateType]]
- → Dependency «use»: [[ChargesType]]

## 📊 Appears In (2 diagrams)

- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceCode | string |  |
| serviceName | string |  |
| serviceDescription | string |  |
| serviceType | string |  |
| numberOfGiftPayments | int |  |
| gracePeriodLength | int |  |
| gracePeriodEnd | dateTime |  |
| gracePeriodInterestRate | InterestRateType |  |
| cardNumber | string |  |
| cardType | string |  |
| branch | string |  |
| cardHolderName | string |  |
| embossName | string |  |
| expirationDate | date |  |
| cardDeliveryType | string |  |
| cardInfo | CardInfoType |  |
| serviceParameters | ServiceParameters |  |
| charges | ChargesType |  |
