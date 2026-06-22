---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/InstallmentServiceWS"
domain: "Analysis Model"
element_id: 1414259
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CalculationInfoDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/InstallmentServiceWS

## 🔗 Connections (3)

- → Dependency: [[AmountToPay]]
- → Dependency: [[CalculationStatus]]
- ← Dependency: [[ServiceSimulationResponse]]

## 📊 Appears In (2 diagrams)

- Logical: InstallmentServiceWS
- Use Case: OVERVIEW - Installment Schedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| itemsToPay | AmountToPay |  |
| resultCode | CalculationStatus |  |
| errorDescription | string |  |
