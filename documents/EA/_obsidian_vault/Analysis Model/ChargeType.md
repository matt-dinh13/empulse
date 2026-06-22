---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1878244
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ChargeType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Data of individual tariff item defined for the product selected on the processed contract.

Values of individual sub-elements are retrieved by calling the respective REST API provided by the Product Catalog module (i.e. GET Tariffs) - see the description of the superior element for particular request inputs.

## 🔗 Connections (4)

- ← Dependency «use»: [[ChargesType]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]

## 📊 Appears In (2 diagrams)

- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| name | string |  |
| calculationMethod | string |  |
| limitBase | string |  |
| limitFrom | MoneyType |  |
| limitTo | MoneyType |  |
| limitNumberBase | string |  |
| limitNumberFrom | int |  |
| limitNumberTo | int |  |
| amount | MoneyType |  |
| percentage | decimal |  |
| percentageBase | string |  |
| percentageMin | decimal |  |
| percentageMax | decimal |  |
| amountToShow | string |  |
| code | string |  |
| usage | string |  |
