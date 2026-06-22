---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/DirectDebitServiceV5"
domain: "Analysis Model"
element_id: 1710851
diagrams: 2
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 DDMInfoBaseDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/DirectDebitServiceV5

## 📝 Notes

Version for DirectDebitServiceV4 and V5

## 🔗 Connections (8)

- ← Dependency: [[GetDDMByContractResponse]]
- ← Dependency: [[GetDDMByCUIDResponse]]
- → Dependency: [[ContractDDMBaseDto]]
- → Dependency: [[DDMConfirmStatusTypeDto]]
- → Dependency: [[DDMStatusTypeDto]]
- → Dependency: [[BankAccountInfoDto]]
- → Dependency: [[DdmJfsPartnerDto]]
- → Dependency: [[DDMInfoBaseAttributes]]

## 📊 Appears In (2 diagrams)

- Logical: DirectDebitServiceV5 - Get DDM by contract
- Logical: DirectDebitServiceV5 - Get DDM by CUID

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ddmDataExchangeID | string |  |
| ddmType | string |  |
| code | string |  |
| bankAccount | BankAccountInfoDto |  |
| confirmationStatus | DDMConfirmStatusTypeDto |  |
| confirmationStatusRemark | string |  |
| contractCode | ContractDDMBaseDto |  |
| ecsProvider | string |  |
| eligibleForDDSGeneration | boolean |  |
| externalCode | string |  |
| frequency | FrequencyTypeDto |  |
| JFSPartners | DdmJfsPartnerDto |  |
| limit | MoneyDto |  |
| numberofDebitedDDS | int |  |
| regularPaymentAmount | DDMRegularPaymentTypeDto |  |
| regularPaymentType | DDMRegularPaymentTypeDto |  |
| status | DDMStatusTypeDto |  |
| validFrom | date |  |
| validTo | date |  |
| DDMInfoBaseAttributes | DDMInfoBaseAttributes |  |
