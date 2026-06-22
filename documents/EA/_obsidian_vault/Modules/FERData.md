---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{ADD}Services/FER"
domain: "Modules"
element_id: 1581793
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 FERData

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{ADD}Services/FER

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = FER

## 🔗 Connections (1)

- → Realisation: [[ServiceFERVariantDto (Class 1581792)]]

## 📊 Appears In (1 diagrams)

- Logical: FER Data

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
| maximalDaysBeforeEr | int |  |
| minimumDaysBeforeEr | int |  |
| moratorium | int |  |
| performRequestInMoratorium | boolean |  |
| serviceVariant | ServiceFERVariantDto |  |
| setERDataAsProcessingDate | boolean |  |
| {ADD}interestCalcNextDueDate | boolean |  |
