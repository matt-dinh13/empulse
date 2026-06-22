---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 926319
diagrams: 2
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 SNM synchronization - validation rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

Input:
- Entity (type of synchronized entity)
- Code (identification code of record in synchronized entity)

If synchronized object does not yet exist in BSL database (i.e. Notification.Code <> Entity.Code in the system), values of all mandatory attributes must be present in the message:
- values for code-list-based attributes sent in the message must by compatible with values in corresponding code-lists in BSL
- lengths and types of other attributes must be in the form allowed by the system (see general Partner and Salesroom validation rules for editing attributes, country specific validations are ignored)

If Entity is (PARTNER, SALESROOM) then validate according to:
- SN Address validation rules
- SN Bank Account validation rules
- SN Contact Person validation rules
- SN Contact Information validation rules

If Entity is (SALESROOM) then validate according to:
- SN Salesman synchronization validation rules
- SN Sales area synchronization validation rules

## 🔗 Connections (7)

- → Dependency: [[{MOD}SN Address validation rules]]
- → Dependency: [[SN Contact Person validation rules]]
- → Dependency: [[SN Contact Information validation rules]]
- → Dependency: [[SN Bank Account validation rules]]
- → Dependency: [[SN Sales area synchronization validation rules]]
- → Dependency: [[SN Salesman synchronization validation rules]]
- ← Dependency: [[Algorithm_Synchronization of SN object]]

## 📊 Appears In (2 diagrams)

- Custom: SNM Synchronization
- Custom: Synchronization validation rules
