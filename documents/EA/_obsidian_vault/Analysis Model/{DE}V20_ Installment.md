---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationOfferManagementWS/{DEL}ApplicationOfferManagementWS_v7"
domain: "Analysis Model"
element_id: 1815213
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {DE}V20: Installment

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationOfferManagementWS/{DEL}ApplicationOfferManagementWS_v7

## 📝 Notes

{DEL LOR-8678/}
Technically it is reused from http://homecredit.net/hss/customeroffer/v20

## 🔗 Connections (1)

- ← Dependency: [[{DEL}V20_ CustomerOffer]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationOfferManagementWS_v7 - Get Offers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| number | int |  |
| dueDate | date |  |
| principalAmount | decimal |  |
| interestAmount | decimal |  |
| feeAmount | decimal |  |
