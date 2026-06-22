---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1660363
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ContractSnapshotBaseDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 📝 Notes

Contract static data snapshot. Contains all financial parameters, active services and its parameters.

## 🔗 Connections (1)

- ← Generalization «XSDextension»: [[ContractSnapshotDto (Class 1660356)]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS (v6) - CreateAccount

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | ContractCodeType |  |
| validFrom | date |  |
| validTo | date |  |
| accountType | AccountTypeDto |  |
| productCode | string |  |
| productVersion | long |  |
| currencyCode | CurrencyCodeType |  |
| tariffCode | TariffCodeType |  |
| originalTariffVersion | long |  |
| person | PersonDto |  |
