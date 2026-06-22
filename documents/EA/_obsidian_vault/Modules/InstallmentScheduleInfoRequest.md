---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model"
domain: "Modules"
element_id: 992870
diagrams: 3
connections: 5
tags:
  - class
  - modules
---

# 🔷 InstallmentScheduleInfoRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model

## 📝 Notes

{MOD IAKZ-504}Renamed from CELInstallmentScheduleRequest{/MOD}

Information about (re-)generation of installment schedule for CEL.

## 🔗 Connections (5)

- → Dependency: [[Processing CELInstallmentScheduleRequest]]
- → Dependency «transformation»: [[INSTALMENT120]]
- → Dependency: [[PaymentPairingInfoDto]]
- → Dependency: [[ContractStatusType]]
- → Dependency: [[InstallmentDto]]

## 📊 Appears In (3 diagrams)

- Logical: CEL Installment schedule - Communication model
- Logical: CEL Installment schedule - JMS messages
- Logical: CEL Payment Pairing - Communication Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| contractStatus | ContractStatusType |  |
| installments | InstallmentDto |  |
| paymentPairings | PaymentPairingInfoDto |  |
