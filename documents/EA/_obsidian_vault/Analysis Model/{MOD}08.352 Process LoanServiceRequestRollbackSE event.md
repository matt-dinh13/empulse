---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Access Rights"
domain: "Analysis Model"
element_id: 1879713
diagrams: 6
connections: 1
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.352 Process LoanServiceRequestRollbackSE event

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Access Rights

## 📝 Notes

This technical use case describes processing of the LoanServiceRequestRollbackSE system event. 
It creates Business Event and generate other system events (LoanServiceRequestCancelledSE , PaymentHolidaySE) according to service type related to LSR.
{ADD CSI-902}It also cancel Contract Supplement related to the LSR (if exists){/ADD}.

The event is triggered by mBean used for Rollback execution (called by 08.351 Rollback loan service request  and  01.821 Rollback Loan Service Request service).

## 🔗 Connections (1)

- ← UseCase: [[System event]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-10733 (CSI-902) Rollback loan service request update
- Custom: CBL-10922 (CSI-286) Rollback of executed Payhol request
- Custom: CBL-25261 (CSI-3472) Insurance Period update on Loan change
- Use Case: Loan service request management
- Use Case: Payment holiday rollback
