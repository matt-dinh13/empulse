---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/Service responses on Account Closure events"
domain: "Requirements Model"
element_id: 1735986
diagrams: 1
connections: 44
tags:
  - sequence
  - requirements-model
---

# 📄 BSL:LoanService

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18500 (CSI-2052) Change flag SERVICE_SWITCH_ALLOWED for ACCSTMT service type/Service responses on Account Closure events

## 🔗 Connections (44)

- ← Sequence: [[BSL_Contract]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- → Sequence: [[RMQ exchange csi.event.loan.service.request]]
- → Sequence: [[RMQ exchange am.topic.account.closure]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- ← Sequence: [[RMQ exchange am.topic.account.closure]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- ← Sequence: [[RMQ exchange am.topic.account.closure]]
- ← Sequence: [[RMQ exchange am.topic.account.closure]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- ← Sequence: [[RMQ exchange am.topic.account.closure]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- → Sequence: [[RMQ exchange csi.event.loan.service.request]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- → Sequence: [[RMQ exchange am.topic.account.closure]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- → Sequence: [[BSL_LoanService]]
- ← Sequence: [[BSL_LoanService]]
- → Sequence: [[RMQ exchange csi.event.loan.service.request]]
- ← Sequence: [[ContractPaidOffSE]]
- ← Sequence: [[RMQ echange clm.request.account]]
- → Sequence: [[RMQ exchange .csi.contract.service]]
- → Sequence: [[RMQ exchange .csi.contract.service]]
- → Sequence: [[RMQ exchange .csi.contract.service]]
- → Sequence: [[RMQ exchange .csi.contract.service]]
- ← Sequence: [[RMQ exchange am.account.service.status]]
- ← Sequence: [[RMQ exchange am.account.service.status]]
- ← Sequence: [[RMQ exchange am.account.service.status]]
- ← Sequence: [[RMQ exchange am.account.service.status]]

## 📊 Appears In (1 diagrams)

- Sequence: Service responses on Account Closure events
