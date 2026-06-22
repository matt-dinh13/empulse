---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model"
domain: "Analysis Model"
element_id: 1461200
diagrams: 16
connections: 66
tags:
  - class
  - analysis-model
---

# 🔷 Address

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Logical Data Model

## 📝 Notes

Contains all information about address of given entity (e.g. client's address, salesroom's address)

## 🔗 Connections (64)

- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- ← Dependency: [[Address Type]]
- → Dependency «use»: [[Country (Class 1461195)]]
- ← Aggregation: [[addressClassification]]
- → Dependency: [[District - PH]]
- → Dependency: [[{DEL}Address]]
- → Dependency «use»: [[ZIP code - ID]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[District - VN]]
- → Dependency «use»: [[District - KZ]]
- → Dependency: [[{DEL}Address]]
- → Usage: [[Locality -KZ]]
- → Usage: [[Region - KZ]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[Region - VN]]
- → Dependency «use»: [[KeyOrValue Type]]
- → Dependency: [[Town - VN]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[{DEL}Address]]
- → Usage: [[Street - KZ]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[Town - PH]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[{DEL}Address]]
- → Usage: [[ZIP Code - KZ]]
- → Dependency: [[Zip Code - PH]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[District - IN]]
- → Dependency: [[Sub-district - ID]]
- → Usage: [[Town - KZ]]
- → Dependency: [[District - ID]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[Sub-district - PH]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[{DEL}Address]]
- → Dependency: [[Region - IN]]
- → Dependency «use»: [[ZIP code - IN]]
- → Dependency: [[Town - ID]]
- ← Association: [[Salesroom Address]]
- ← Dependency: [[{ADD} GetBankBranchDataResponse]]
- ← Dependency: [[{ADD} GetBankBranchDataResponse]]
- ← Association: [[Partner Address]]
- → Aggregation: [[Communication Record]]
- → Aggregation: [[Person Address]]
- → Aggregation: [[Client Address]]
- → Aggregation: [[Employer (Class 1750943)]]
- ← Association: [[University]]
- ← Association: [[Bank Branch Address]]

## 📊 Appears In (16 diagrams)

- Logical: Address - CORE
- Logical: Address - ID
- Logical: Address - IN
- Logical: Address - KZ
- Logical: Address - PH
- Logical: Address - VN
- Logical: BankManagementWS
- Logical: Client management
- Logical: Common - Person
- Logical: Communication
- Logical: Partner
- Logical: Salesroom
- Logical: SNM Address Synchronization
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization
- Logical: University address

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Block | Text |  |
| Block set | Text |  |
| Country | Country |  |
| Flat | Text |  |
| Floor | Text |  |
| House number | Text |  |
| Landmark | Text |  |
| Locality | KeyOrValue Type |  |
| Region | KeyOrValue Type |  |
| District | KeyOrValue Type |  |
| Sub-district | KeyOrValue Type |  |
| Street name | KeyOrValue |  |
| Town | KeyOrValue Type |  |
| ZIP code | KeyOrValue Type |  |
