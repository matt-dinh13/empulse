---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819472
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ContractServiceBaseDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Active service on contract

Source #1 is taken for contract before status = Signed; #2 since Signed

## 🔗 Connections (1)

- ← Generalization «XSDextension»: [[ContractServiceDto]]

## 📊 Appears In (2 diagrams)

- Logical: Account management structures
- Logical: Account management structures - Contract Snapshot

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| endDate | date |  |
| originalTariffVersion | long |  |
| serviceCode | ServiceCodeType |  |
| serviceVersion | long |  |
| startDate | date |  |
| {MOD}tariffCode | string |  |
