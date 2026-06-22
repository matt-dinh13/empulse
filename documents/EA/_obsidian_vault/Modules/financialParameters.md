---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Interface Provided/REST"
domain: "Modules"
element_id: 1757479
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 financialParameters

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Interface Provided/REST

## 🔗 Connections (3)

- → Dependency: [[financialParametersItemForGenerate]]
- ← Dependency: [[generateRequest]]
- → Dependency: [[originationFeeItemForGenerate]]

## 📊 Appears In (1 diagrams)

- Logical: GenerateIS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| annuityAmount | integer |  |
| terms | integer |  |
| creaditAmount | integer |  |
| cashPayment | integer |  |
| customerFirstDueDate | dateTime |  |
| firstDueDate | dateTime |  |
| shiftedLastDueDate | dateTime |  |
| signDate | dateTime |  |
| interestRate | integer |  |
| installmentScheduleMetod | string |  |
| financialParametersItemForenerate | financialParametersItemForGenerate |  |
| originationFeeItemsForGenerate | originationFeeItemsForGenerate |  |
| providedCreditAmount | integer |  |
| installmentScheduleInterestRate | integer |  |
| dayCountMethod | string |  |
| loanProvidingDate | dateTime |  |
