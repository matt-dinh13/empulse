---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1627479
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get allowed commodities on POS for a revolving transaction

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants

## 📝 Notes

System finds list of Salesroom[of currently logged user]->Salesroom_Commodity_Type[currently valid]->Commodity_Type.
In case that the list is empty system finds list of all Commodity_Type (i.e. there is no restriction on the salesroom and all of Commodity_Type are allowed).

## 🔗 Connections (1)

- → Dependency: [[REQ#2 Create Revolving transaction supplement]]

## 📊 Appears In (1 diagrams)

- Custom: Get Salesroom Properties - business rules
