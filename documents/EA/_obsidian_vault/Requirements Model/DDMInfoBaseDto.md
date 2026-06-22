---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1487 (CBL-3093) Standing Instruction method of DDM"
domain: "Requirements Model"
element_id: 1710611
diagrams: 7
connections: 15
tags:
  - class
  - requirements-model
---

# 🔷 DDMInfoBaseDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1487 (CBL-3093) Standing Instruction method of DDM

## 📝 Notes

{ADD CBL-991 PAY /}

## 🔗 Connections (13)

- ← Dependency: [[GetContractDDMListResponse]]
- ← Dependency: [[getDDMByCodeResponse]]
- ← Dependency: [[GetDDMByContractResponse]]
- ← Dependency: [[GetDDMByCUIDResponse]]
- ← Dependency: [[GetDDMByDataExchangeIDResponse]]
- → Dependency: [[DdmJfsPartnerDto]]
- → Dependency: [[DDMStatusTypeDto]]
- → Dependency: [[DDMConfirmStatusTypeDto]]
- → Dependency: [[FrequencyTypeDto]]
- → Dependency: [[ContractDDMBaseDto]]
- → Dependency: [[BankAccountInfoDto]]
- → Dependency: [[DDMRegularPaymentTypeDto]]
- ← Dependency: [[DDMInfoMessage]]

## 📊 Appears In (7 diagrams)

- Custom: PAYM-1487 (CBL-3093) Standing Instruction method of DDM
- Logical: ContractPaymentChannelManagementWS - GetContractDDMList
- Logical: DDM Info
- Logical: DirectDebitService.getDDMByCode
- Logical: DirectDebitService.getDDMByContract
- Logical: DirectDebitService.getDDMByCUID
- Logical: DirectDebitService.getDDMByDataExchangeID

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}ddmdataExchangeID | string |  |
| limit | MoneyDto |  |
| {MOD}code | string |  |
| frequency | FrequencyTypeDto |  |
| bankAccount | BankAccountInfoDto |  |
| validFrom | date |  |
| validTo | date |  |
| ecsProvider | string |  |
| externalCode | string |  |
| status | DDMStatusTypeDto |  |
| confirmationStatus | DDMConfirmStatusTypeDto |  |
| confirmationStatusRemark | string |  |
| {DEL}eMandate | boolean |  |
| {ADD}ddmType | string |  |
| regularPaymentType | DDMRegularPaymentTypeDto |  |
| regularPaymentAmount | DDMRegularPaymentTypeDto |  |
| eligibleForDDSgeneration  | boolean |  |
| contractCode | ContractDDMBaseDto |  |
| numberOfDebitedDDS | int |  |
| JFSPartners | DdmJfsPartnerDto |  |
