---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821409
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CustomDataType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Other custom data. //Currently filled in only in KZ with data retrieved via the rsaService.isOrderExists REST endpoint - https://rsa.homecredit.kz/test/api/swagger-ui.html#/rest-order/isExistsOrderUsingGET

LDM for the attributes:
- .key = 
- .value =

## 🔗 Connections (3)

- ← Dependency: [[{MOD}DocumentData (Class 1821417)]]
- → Generalization: [[{MOD}KeyAndValueType]]
- → Dependency: [[Custom data type rule]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - contract data
