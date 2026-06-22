---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Communication Management/v1.0/Communication"
domain: "Analysis Model"
element_id: 1309690
diagrams: 6
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 ValidationResultDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Communication Management/v1.0/Communication

## 📝 Notes

A list of validation results for input data

## 🔗 Connections (6)

- ← Dependency: [[CancelContractDDMFault]]
- ← Dependency: [[{ADD}ChangeContractDDMStatusFault]]
- ← Dependency: [[CreateContractDDMFault]]
- ← Dependency: [[UpdateContractDDMFault]]
- ← Dependency: [[ChangeRepaymentChannelFault]]
- ← Dependency: [[ValidatedCommunicationType]]

## 📊 Appears In (6 diagrams)

- Logical: Communications
- Logical: ContractPaymentChannelManagementWS - CancelContractDDM
- Logical: ContractPaymentChannelManagementWS - ChangeContractDDMStatus
- Logical: ContractPaymentChannelManagementWS - ChangeContractRepaymentChannel
- Logical: ContractPaymentChannelManagementWS - CreateContractDDM API
- Logical: ContractPaymentChannelManagementWS - UpdateContractDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| attributeCode | string |  |
| errorMessageCode | string |  |
