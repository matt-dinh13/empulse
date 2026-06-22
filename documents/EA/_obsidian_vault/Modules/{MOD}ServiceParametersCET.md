---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/CET"
domain: "Modules"
element_id: 1589817
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceParametersCET

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/CET

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = CET

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: CET Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| acceptSmallUnderpayment | boolean |  |
| acceptedExpirationDateShift | int |  |
| earlyRepaymentAlgorithm | string |  |
| enableProcessingOnBalanceChange | boolean |  |
| expirationDateMaxLimit | int |  |
| expirationDateMinLimit | int |  |
| finishContractAfterProcessing | boolean |  |
| setERDateAsProcessingDate | boolean |  |
| {ADD}insCancellationPeriod | int |  |
| transferPaymentToBank | boolean |  |
