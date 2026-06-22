---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589680
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Name of goods purchased

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: Name of goods purchased?
- Localization Code: MSG_REL_AuthQuestion8

Answer Source
Get Contract. Financial Parameters.Initial Transaction Type

	
- Case CASH, NDF, localized value of value of Initial Transaction Type (Localization Code: InitialTransactionType.CASH II NDF).
	
- {DEL CSI-247}- Contract - > Commodity -> Commodity Type.Name{/DEL}{ADD CSI-247}Case POS, value of commodityTypeName obtained as follow:
-  A. call {ADD}Get Commodity data by commodityId with (Contract - > Contract2Commodity.CommodityId) as parameter. Returned commodityTypeCode is used
- B. if commodityTypeCode exists, call {ADD}Get Commodity Type data by code with commodityTypeCode as parameter. Returned name of respective localization is used, otherwise EN localization is used

## 🔗 Connections (3)

- → Dependency: [[Get Commodity Type data by code]]
- → Dependency: [[Get Commodity data by commodityId (Requirement 1833419)]]
- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (1 diagrams)

- Custom: Authentication questions
