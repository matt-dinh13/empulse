---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Logical Data Model"
domain: "Analysis Model"
element_id: 1874509
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Bonus Service Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Logical Data Model

## 📝 Notes

{ADD IS-2617} {PH only}
Contain requests for bonus service period creation or evaluation. Requests are processed by scheduled job 08.612 Process bonus services.

## 🔗 Connections (3)

- → Dependency: [[RequestStatus]]
- → Dependency: [[BonusServiceType]]
- → Dependency: [[OperationType]]

## 📊 Appears In (1 diagrams)

- Logical: Bonus service request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Operation Type | OperationType |  |
| Status | RequestStatus |  |
| Service Type | BonusServiceType |  |
| Contract Code | String |  |
| Job ID | String |  |
| Creation Date | Date |  |
| Update Date | Date |  |
| Created By | String |  |
| Updated By | String |  |
| Error Code | String |  |
| Checked Date | Date |  |
