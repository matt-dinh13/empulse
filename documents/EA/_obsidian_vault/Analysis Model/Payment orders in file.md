---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/User Interface"
domain: "Analysis Model"
element_id: 682838
diagrams: 1
connections: 1
tags:
  - object
  - analysis-model
---

# 🔸 Payment orders in file

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/User Interface

## 📝 Notes

Default ordering: Recipient name asc, Recipient bank account asc, amount asc, outgoing payment order.id asc.

Paging: Yes (number of rows is defined by system parameter)

## 🔗 Connections (1)

- → Dependency: [[05.125 Export dispatch note file (UseCase 867416)]]

## 📊 Appears In (1 diagrams)

- Custom: Outgoing payments file detail screen

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Payment order ID | text |  |
| Amount | financial amount |  |
| Count of payments | number |  |
| Dispatch note | button |  |
| Recipient bank account | text |  |
| Recipient name | text |  |
| Transaction time | datetime |  |
