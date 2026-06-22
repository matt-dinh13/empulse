---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Use case model"
domain: "Analysis Model"
element_id: 750814
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get related tariff item to discount

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Use case model

## 📝 Notes

This rule describes getting fees (Tariff Items) related to some monthly fee Tariff Items already charged to the contract. By relation role, these fees are used to some manipulation with the original contract fees (e.g. as discount fee to reduction of an original fee).

Input parameters:

	
- Contract


	
- Relation Role
	
- Fee Usage Type
	
- Fee Charging Periodicity


Output:

	
- DiscountResult object


Steps:

	
- Get originally charged "monthly fees" from financial parameters of the contract (i.e. Tariff Item Type having Usage Type = Fee Usage Type and Charging Periodicity = Fee Charging Periodicity, and related to Contract. Financial Parameters. FP Item of type Tariff Item) and populates DiscountResult object by found Tariff Items as DiscountResult.OriginalTariffItem
	
- For each DiscountResult.OriginalTariffItem found, 
2.1 get related Tariff Item Type having Tariff Item Type Relation.Relation Role = Relation Role 
2.2  gets Tariff Items for the related Tariff Item Type by Find Tariff Items by Tariff Item Type rule with parameters: ContractService, tariff item type = related Tariff Item Type
2.3 For each Tariff Item returned in the list of TariffItem 
2.3.1 add Tariff Item and Tariff Item into the DiscountResult as DiscountResult.RelatedTariffItem
2.3.2 after the list of TariffItem is processed, continue with next DiscountResult.OriginalTariffItem 
	
- Return the object of DiscountResult

## 🔗 Connections (2)

- → Dependency: [[Find Tariff Items by Tariff Item Type]]
- ← Dependency: [[08.262 Process Fees-back service (UseCase 1838986)]]

## 📊 Appears In (1 diagrams)

- Use Case: Fees-back service evaluation and processing
