---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819471
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}ContractSnapshotBaseDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Contract static data snapshot. Contains all financial parameters, active services with its parameters and information about person (contract owner)

Source #1 is taken for contract before status = Signed; #2 since Signed

## 🔗 Connections (5)

- ← Dependency: [[CreateAccountRequest (Class 1575845)]]
- ← Association: [[AccountDetailsDto (Class 1819492)]]
- → Dependency: [[PersonDto]]
- → Dependency: [[AccountTypeDto (Enumeration 1638516)]]
- ← Generalization «XSDextension»: [[ContractSnapshotDto (Class 1819463)]]

## 📊 Appears In (3 diagrams)

- Logical: Account management structures
- Logical: Account management structures - Contract Snapshot
- Logical: AccountManagementWS - Contract signing

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | ContractCodeType |  |
| validFrom | date |  |
| validTo | date |  |
| accountType | AccountTypeDto |  |
| productVersion | long |  |
| currencyCode | CurrencyCodeType |  |
| {MOD}tariffCode | TariffCodeType |  |
| originalTariffVersion | long |  |
| person | PersonDto |  |
