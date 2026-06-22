---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model"
domain: "Analysis Model"
element_id: 1820662
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Preference of Insurance Types in Alternative offer

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/UseCase Model

## 📝 Notes

Input:

	
- insuranceRequired - boolean, switch for decision about required/refused types of insurance services
	
- insuranceType1, insuranceType2 - required types of insurance service

Parameters are taken from LAP vector.

Preference for selection of Insurance services with be set as follows: 

	
- If insuranceRequired = false then alternative offer cannot include any insurance service (regardless vector values insuranceType1 or insuranceType2 are empty or not); i.e. preference of all insurance service types is set to 'REFUSED'.
	
- If insuranceRequired = true and (neither insuranceType1 nor insuranceType2 is defined) then alternative offer will include insurance service types from original offer (if offered); i.e. preference of those insurance service types is set to 'REQUIRED', preference of remaining Insurance service types is set to 'NO_PREFERENCE' (only if corresponding ServiceType.OrderInCalculator is defined).
	
- If (insuranceRequired = true or insuranceRequired is not defined) and (either insuranceType1 or insuranceType2) is defined then alternative offer will include insurance service of required type; i.e. preference of Insurance service types from (insuranceType1, insuranceType2) is set to 'REQUIRED', preference of remaining insurance types is set to  'NO_PREFERENCE' (only if corresponding ServiceType.OrderInCalculator is defined).
	
- If insuranceRequired is not defined and (neither insuranceType1 nor insuranceType2) is defined then preference of all insurance service types is set to 'NO_PREFERENCE' (only if corresponding ServiceType.OrderInCalculator is defined).

## 🔗 Connections (1)

- ← Dependency: [[01.155 Generate optional offers (UseCase 1827694)]]

## 📊 Appears In (1 diagrams)

- Use Case: Generate optional offers
