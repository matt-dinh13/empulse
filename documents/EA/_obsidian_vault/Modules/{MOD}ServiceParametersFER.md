---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/FER"
domain: "Modules"
element_id: 1808609
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceParametersFER

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/FER

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = FER

## 🔗 Connections (2)

- → Realisation: [[FERVariantDto]]
- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: FER Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| automaticProcessing | boolean |  |
| acceptedDueDateShift | int |  |
| acceptSmallUnderpayment | boolean |  |
| allowErDateChoice | boolean |  |
| allowRequestInMoratorium | boolean |  |
| dpdMaxLimit | int |  |
| earlyRepaymentAlgorithm | string |  |
| enableProcessingOnBalanceChange | boolean |  |
| finishContractAfterProcessing | boolean |  |
| includeGiftPayments | boolean |  |
| maxDaysBeforeEr | int |  |
| minDaysBeforeEr | int |  |
| moratorium | int |  |
| performRequestInMoratorium | boolean |  |
| variants | ServiceFERVariantDto |  |
| setERDataAsProcessingDate | boolean |  |
| paymentDepositDate | boolean |  |
| {ADD}useCurrentDate | boolean |  |
| {ADD}blockRequestReactivation | boolean |  |
