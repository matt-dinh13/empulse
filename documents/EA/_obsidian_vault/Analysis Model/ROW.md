---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Add charging requests"
domain: "Analysis Model"
element_id: 912359
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ROW

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Add charging requests

## 📝 Notes

This is structure of one row of the ROWSET file.

## 🔗 Connections (1)

- → Association: [[ROWSET]]

## 📊 Appears In (2 diagrams)

- Logical: AddChargingRequestsWS
- Logical: ChargingRequests file structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CONTRACT_CODE | string |  |
| CHARGED_TO_DUE_DATE | date |  |
| {ADD}CHARGE_DATE | date |  |
| TARIFF_ITEM_CODE | string |  |
