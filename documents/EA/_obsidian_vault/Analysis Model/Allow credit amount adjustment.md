---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model"
domain: "Analysis Model"
element_id: 1820664
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Allow credit amount adjustment

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model

## 📝 Notes

ChosenOffer - offer where OFP.chosen = true
To allow credit amount adjustment on selected AlternativeOffer the following conditions must be fulfilled:

	
- AlternativeOffer is based on ProductType = REL
	
- Contract based on ChosenOffer is in status ('In Process' or 'In Pre-process') and substatus = 'Offer generated' 
	
- AlternativeOffer.NetCreditLimit > ChosenOffer.NetCreditLimit 
	
- AlternativeOffer.NetCreditLimit > AlternativeOffer.ProvidedCreditAmount

## 🔗 Connections (2)

- ← Dependency: [[Adjust credit limit (GUIElement 1755502)]]
- ← Dependency: [[01.156 Adjust credit limit (UseCase 1827721)]]

## 📊 Appears In (1 diagrams)

- Use Case: Offer detail
