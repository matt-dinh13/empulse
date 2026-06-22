---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1313426
diagrams: 6
connections: 24
tags:
  - interface
  - analysis-model
---

# 🔶 ContractPaymentChannelManagementWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

API for management of Contract DDMs and Contract payment channels

## 🔗 Connections (24)

- → Usage: [[CancelContractDDMRequest]]
- → Dependency: [[{ADD}01.781 Change contract DDM status service (UseCase 1325273)]]
- → Dependency: [[{ADD}ChangeContractDDMStatusFault]]
- → Dependency: [[{ADD}ChangeContractDDMStatusResponse]]
- → Usage: [[GetContractDDMListFault]]
- → Usage: [[CancelContractDDMFault]]
- → Dependency: [[01.778 Cancel contract DDM service]]
- → Dependency: [[01.777 Update contract DDM service]]
- → Usage: [[UpdateContractDDMResponse]]
- → Usage: [[ChangeRepaymentChannelRequest]]
- → Usage: [[CreateContractDDMFault]]
- → Dependency: [[{ADD}ChangeContractDDMStatusRequest]]
- → Usage: [[ChangeRepaymentChannelFault]]
- → Dependency: [[01.780 Change contract repayment channel service]]
- → Dependency: [[GetContractDDMListRequest]]
- → Usage: [[ChangeRepaymentChannelResponse]]
- → Usage: [[CancelContractDDMResponse]]
- → Usage: [[CreateContractDDMRequest]]
- → Usage: [[UpdateContractDDMRequest]]
- → Dependency: [[01.779 Get contract DDM service]]
- → Usage: [[UpdateContractDDMFault]]
- → Usage: [[CreateContractDDMResponse]]
- → Dependency: [[01.776 Create contract DDM service]]
- → Dependency: [[GetContractDDMListResponse]]

## 📊 Appears In (6 diagrams)

- Logical: ContractPaymentChannelManagementWS - CancelContractDDM
- Logical: ContractPaymentChannelManagementWS - ChangeContractDDMStatus
- Logical: ContractPaymentChannelManagementWS - ChangeContractRepaymentChannel
- Logical: ContractPaymentChannelManagementWS - CreateContractDDM API
- Logical: ContractPaymentChannelManagementWS - GetContractDDMList
- Logical: ContractPaymentChannelManagementWS - UpdateContractDDM
