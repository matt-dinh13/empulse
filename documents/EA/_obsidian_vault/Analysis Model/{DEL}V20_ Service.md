---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationOfferManagementWS/{DEL}ApplicationOfferManagementWS_v7"
domain: "Analysis Model"
element_id: 1815204
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}V20: Service

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationOfferManagementWS/{DEL}ApplicationOfferManagementWS_v7

## 📝 Notes

{DEL LOR-8678/}
Technically it is reused from http://homecredit.net/hss/customeroffer/v20

## 🔗 Connections (5)

- → Dependency: [[{DEL}V20_ CustomData]]
- → Dependency: [[{DEL}V20_ ServiceType]]
- → Dependency: [[{DEL}V20_ InsuranceProgram]]
- ← Dependency: [[{DEL}V20_ CustomerOffer]]
- → Generalization «XSDextension»: [[{DEL}V20_ AbstractEnum]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationOfferManagementWS_v7 - Get Offers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | {DEL}ServiceType |  |
| description | string |  |
| insuranceProgram | {DEL}InsuranceProgram |  |
| adjustmentRule | string |  |
| serviceVersion | int |  |
| sortOrder | int |  |
| customData | CustomData |  |
