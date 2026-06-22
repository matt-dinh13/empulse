---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1280898
diagrams: 5
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Set payment status for Partner to Allowed

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants

## 📝 Notes

- System sets partner's payment status to 'Allowed'
	
- For all blocked outgoing payments directly for the partner (Outgoing_Payment[Partner=given partner, Status = 'Blocked'), system changes their statuses to 'Unpaid'.

## 🔗 Connections (3)

- ← Dependency: [[SN synchronization - Payment status]]
- ← Dependency: [[09.210 Set payment status for Partner manually (UseCase 1637268)]]
- ← Dependency: [[09.040 Activate Partner manually]]

## 📊 Appears In (5 diagrams)

- Custom: Partner - Business Rules
- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Use Case: Change Partner status
- Use Case: Manage partner
