---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Browse refunds"
domain: "Analysis Model"
element_id: 1845229
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Refund channel on contract filled

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Browse refunds

## 📝 Notes

Indicates which contracts (i.e. with or without filled refund payment channel) with refunds are included to the search.

List of values:

	
- No restriction (RefundChannelRestriction.NO_RESTRICTION), i.e. no condition with contract payment channel is added to a query  
	
- Without refund payment channel (RefundChannelRestriction.WITHOUT_CHANNEL), i.e. payment channel described in LDM part does not exist
	
- With refund payment channel (RefundChannelRestriction.WITH_CHANNEL), i.e. payment channel described in LDM part exists


Default: 
No restriction

LDM:
Contract->PaymentChannel where Purpose = Refund disbursement (DR) 
for Contract where ContractCode = RefundItem.ContractCode

Localization code:
PAY_RefundChannelFilled

## 🔗 Connections (1)

- → Dependency: [[Refunds search criteria restrictions (Action 619531)]]

## 📊 Appears In (1 diagrams)

- Custom: Browse refunds
