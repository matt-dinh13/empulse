---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1280900
diagrams: 5
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Set payment status for Partner to Disabled

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants

## 📝 Notes

- System sets partner's payment status to 'Disabled'.
	
- For all unpaid outgoing payments directly for the partner (Outgoing_Payment[Partner=given partner, Status = 'Unpaid'), system changes their statuses to 'Blocked'.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Algorithm_ Set partners's status to 'Closed']]
- ← Dependency: [[SN synchronization - Payment status]]
- ← Dependency: [[09.210 Set payment status for Partner manually (UseCase 1637268)]]

## 📊 Appears In (5 diagrams)

- Custom: Partner - Business Rules
- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Use Case: Change Partner status
- Use Case: Manage partner
