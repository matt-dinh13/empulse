---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update"
domain: "Requirements Model"
element_id: 1593215
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 CalculateDebtResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update

## 🔗 Connections (2)

- → Dependency: [[FeeDebt]]
- ← Dependency: [[OnlineDebtWS (Interface 1593216)]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update
- Logical: OnlineDebtWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| debtOnAccuredInterest | MoneyDto |  |
| debtOnFees | FeeDebt |  |
| debtOnPrincipal | MoneyDto |  |
| prePayment | MoneyDto |  |
| prepaidAmount | MoneyDto |  |
