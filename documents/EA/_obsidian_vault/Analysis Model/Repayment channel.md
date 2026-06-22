---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Repayments channel management/User Interface Model"
domain: "Analysis Model"
element_id: 1018521
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Repayment channel

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Repayments channel management/User Interface Model

## 📝 Notes

PaymentChannelType.Name
where 
PaymentChannelType.PaymentChannelForProductType.PaymentPurpose = 'Repayment' and 
PaymentChannelType.PaymentChannelForProductType.ProductType = Parent.FinancialParameters.ProductType and PaymentChannelType.PaymentChannelForProductType.TransactionType = Parent.FinancialParameters.InitialTransactionType

Default value see LDM source.

LDM Source:
Contract.PaymentChannel.Type where Purpose = 'Repayment'

Mandatory

Localization code: CON_RepaymentChannel

## 🔗 Connections (1)

- → Dependency: [[Repayment method editability IN]]

## 📊 Appears In (1 diagrams)

- Custom: Change repayment channels
