---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case"
domain: "Analysis Model"
element_id: 1878019
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Save Product Offer Request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case

## 📝 Notes

Input:
- RequestType
 

	
- Generate unique code of the request (no specific rules for code structure).
	
- Create record in Product Offer Request with
- Code = unique code
	
- If RequestType = CALCULATION then save specific calculation request data as follows:
From CalculateCustomerOfferRequest (Interface) to Product Offer Calculation Request (Saved):
Saved.LoanOption = Interface.loanOptionCode
Saved.Salesroom = Interface.salesroomCode
Saved.Currency = Interface.currencyCode
{ADD PCG-1208_2}Saved.ServiceType = Interface.serviceTypeCode{/ADD}
Saved.RequiredLoanAmount = Interface.requiredLoanAmount
Saved.RequiredExtraLimit = Interface.requiredLoanAmount
Saved.MaximalMonthlyPayment = Interface.maximalMonthlyPayment
Saved.MaximalCashPayment = Interface.maximalCashPayment
Saved.CampaignID= Interface.campaignID
Saved.CUID = Interface.CUID
Saved.BoundOfferCode = Interface.boundOfferCode
For each from Interface.documentTypes create record Product Offer Request Document Type (SavedD) and save: 
SavedD.Type = Interface.documentTypes
For each from CalculateCustomerOfferRequest.Commodity (InterfaceC) (if commodityID is presented then the commodityData are obtained based on calling of CommodityWS) create record Product Offer Request Commodity (SavedC)  and save: (If commodityID is on input and useModelManagement=TRUE then the record is not created)
SavedC.Type = InterfaceC.type
SavedC.Price = InterfaceC.price
SavedC.Manufacturer= InterfaceC.manufacturer
SavedC.Model= InterfaceC.model
SavedC.SKU= InterfaceC.SKU
For each from CalculateCustomerOfferRequest.Service Type Preference (InterfaceS) create record Product Offer Request Service Preference (SavedS) and save:
SavedS.Type = InterfaceS.type
SavedS.Preference = InterfaceS.preference
	
- If RequestType = RECALCULATION then save specific recalculation request data as follows:
From RecalculateCustomerOfferRequest (Interface) to Product Offer Recalculation Request (Saved):
Saved.OriginalResponseCode = Interface.offerCode
Saved.OriginalResponseRELIPCode = Interface.offerRELIPCode
Saved.PreferredDueDay = Interface.preferredDueDay
{ADD PCG-1427}Saved.InstallmentScheduleMethod = Interface.installmentScheduleMethod{/ADD}
For each from RecalculateCustomerOfferRequest.ServiceChoice (InterfaceS) create record Product Offer Request Service Choice (SavedS) and save:
SavedS.Service = InterfaceS.service
SavedS.Choice = InterfaceS.choice

## 🔗 Connections (2)

- ← Dependency: [[{MOD}02.830 Recalculate Product Offers for External system]]
- ← Dependency: [[02.820 Calculate Product Offers for External system (UseCase 1820901)]]

## 📊 Appears In (1 diagrams)

- Use Case: Product Calculator for External system - Calculate/Recalculate
