---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM"
domain: "Requirements Model"
element_id: 1821401
diagrams: 2
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}RefinancedContractType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM

## 📝 Notes

Object containing the data of some particular refinanced contract.

## 🔗 Connections (8)

- → Dependency «use»: [[MoneyType (Class 1878205)]]
- ← Dependency «use»: [[RefinancingDataType]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[ContractFinancialAmounts]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM
- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paidInstallmentsData | ContractFinancialAmounts |  |
| contractNumber | string |  |
| amount | MoneyType |  |
| amountOfFees | MoneyType |  |
| amountOfInterests | MoneyType |  |
| amountOfPenalties | MoneyType |  |
| amountOfPrincipal | MoneyType |  |
| providedCreditAmount | MoneyType |  |
| contractApprovalDate | dateTime |  |
| contractSignDate | dateTime |  |
| contractType | string |  |
| initialTransactionType | string |  |
| accountNumber | string |  |
| bankBranchCode | string |  |
| bankBranchName | string |  |
| bankCode | string |  |
| bankName | string |  |
| isInternal | boolean |  |
