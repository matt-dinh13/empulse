---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model"
domain: "Modules"
element_id: 928752
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 PaymentPairingInfoDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model

## 📝 Notes

Notification about pairing or unpairing of incoming payments.

{MOD IAKZ-504}Renamed from PaymentPairingRequest{/MOD}

LDM source:
IncomingPayment

## 🔗 Connections (6)

- → Dependency «transformation»: [[INSTALPAY124]]
- → Dependency: [[PaymentPairingOperationTypeDto]]
- → Dependency: [[IncomingPaymentSourceSystemDto]]
- → Dependency: [[Processing PairedPaymentInfoDto]]
- → Dependency: [[PairedInstallmentPartDto]]
- ← Dependency: [[InstallmentScheduleInfoRequest]]

## 📊 Appears In (2 diagrams)

- Logical: CEL Payment Pairing - Communication Model
- Logical: CEL Payment Pairing - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| paymentDataExchangeID | string |  |
| paymentSourceSystem | IncomingPaymentSourceSystemDto |  |
| pairedInstallmentParts | PairedInstallmentPartDto |  |
| typeOfOperation | PaymentPairingOperationTypeDto |  |
| depositDate | Date |  |
