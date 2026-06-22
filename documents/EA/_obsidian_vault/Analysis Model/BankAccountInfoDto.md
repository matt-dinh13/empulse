---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1710610
diagrams: 8
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 BankAccountInfoDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

{ADD CBL-991 PAY /}

## 🔗 Connections (4)

- → Dependency: [[AccountTypeDto (Enumeration 1710623)]]
- ← Dependency: [[DDMInfoBaseDto]]
- ← Dependency: [[DDMInfoBaseDto (Class 1710851)]]
- ← Dependency: [[DirectDebitMandateData]]

## 📊 Appears In (8 diagrams)

- Logical: ContractPaymentChannelManagementWS - GetContractDDMList
- Logical: DDM Info
- Logical: DirectDebitService.getDDMByCode
- Logical: DirectDebitService.getDDMByContract
- Logical: DirectDebitService.getDDMByCUID
- Logical: DirectDebitServiceRestAPI - Get DDM
- Logical: DirectDebitServiceV5 - Get DDM by contract
- Logical: DirectDebitServiceV5 - Get DDM by CUID

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountHolderName | string |  |
| accountNumber | string |  |
| accountType | AccountTypeDto |  |
| bankBranchCode | string |  |
| bankCode | string |  |
| micr | string |  |
| district | string |  |
| region | string |  |
| bankBranchSyncCode | string |  |
| bankSyncCode | string |  |
| bankName | string |  |
