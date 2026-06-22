---
type: Class
stereotype: "output"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2350 - OBS interface - Operations on contract (REL)"
domain: "Modules"
element_id: 821060
diagrams: 3
connections: 6
tags:
  - class
  - modules
---

# 🔷 REFUNDPAY222

> **Type**: Class · **Stereotype**: «output»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2350 - OBS interface - Operations on contract (REL)

## 📝 Notes

Used for closed-end loans only. Informs HoSel about refund of money to the client, to the bank income or about refund cancellation / transfer to another client's contract.

## 🔗 Connections (6)

- → Realisation: [[REQ#2 Update of REFUNDPAY222]]
- → Dependency «use»: [[CommResult]]
- → Dependency «use»: [[REFUNDPAY222 Refund Type]]
- → Dependency «transformation»: [[RefundPaymentRequest]]
- → Dependency: [[Generating RefundPaymentRequest]]
- ← Dependency «transformation»: [[RefundPaymentResponse]]

## 📊 Appears In (3 diagrams)

- Custom: BRR-2350 - OBS interface - Operations on contract (REL)
- Logical: Refunds - Communication Model
- Logical: Refunds - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| Id credit | number |  |
| id_refund | number |  |
| Amount refund | decimal |  |
| Amount fee | decimal |  |
| Type refund | REFUNDPAY222 Refund Type |  |
| Id refund cancelled | number |  |
| Date refund | date |  |
| Time stamp | datetime |  |
| Fail reason | CommResult |  |
| Processed | boolean |  |
