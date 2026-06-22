---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/Account management/Account blockage/Access rights"
domain: "Analysis Model"
element_id: 1612653
diagrams: 5
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 Account Blocking Reason Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account blockage/Access rights

## 📝 Notes

List of blocking reasons relevant for account blocking.

Implementation note: 
Will be implemented as a static code-list / enumeration.
This static code-list will contain on the BSL side all the valid values from all different countries, where the system will be deployed. CABUS is responsible for sending only valid blocking reasons for specific country.

## 🔗 Connections (7)

- ← Dependency: [[Blocking reason]]
- ← Dependency: [[Active blockings]]
- → Realisation: [[{ADD}12.609 Block account - BlockAccCollection]]
- → Realisation: [[(ADD}12.610 Unblock account - UnblockAccBank]]
- → Realisation: [[(ADD}12.610 Unblock account - UnblockAccCollection]]
- → Realisation: [[{ADD}12.609 Block account - BlockAccBank]]
- ← Dependency: [[12.607 Show account blocking overview]]

## 📊 Appears In (5 diagrams)

- Custom: Access: Account blockage
- Custom: CBL-13263 (CSI-661) New Account Type - Virtual Limit
- Custom: UI: Account blockage
- Logical: DM: Account blockage
- Use Case: Account Blockage use case model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| MANUAL_REQUEST |  |  |
| COLLECTION |  |  |
| UNRECOGNIZED_REASON |  |  |
| SEIZURE |  |  |
| {ADD}UNCONFIRMED_TRANSACTION |  |  |
| {ADD}SUSPECTED_CUSTOMER_FRAUD |  |  |
| {ADD}LOST_PHONE |  |  |
