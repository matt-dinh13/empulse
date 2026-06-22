---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/CELREW"
domain: "Modules"
element_id: 1849935
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceParametersCELREW

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/CELREW

## 📝 Notes

Specific for Service.ServiceType = CELREW

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: CELREW Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| currentAccount | boolean |  |
| debitCard | boolean |  |
| extraRepaymentOfLoan | boolean |  |
| lengthOfEvaluationPeriod | int |  |
| paymentDisciplineParameters | PaymentDisciplineParameters |  |
| {ADD}automaticEvaluation | boolean |  |
| {ADD}postponeForPER | boolean |  |
