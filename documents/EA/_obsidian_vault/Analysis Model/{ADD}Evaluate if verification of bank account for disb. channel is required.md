---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/Business rules"
domain: "Analysis Model"
element_id: 1542015
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Evaluate if verification of bank account for disb. channel is required

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/Business rules

## 📝 Notes

{ADD PAYM-1214 CBL-1767}

If all conditions

	
- user has the UC01_676 access right granted


	
- selected product requires the external verification of client's bank account used for the money disbursement (i.e. Payment_Channel->Contract->Financial_Parameters->Product_Variant->Product->Product_Flag[.Type->Product_Flag_Type.Code='DISB_BA_VERIF'])

are met, the system returns true (verification is required).

Otherwise returns false (verification should be skipped).

## 🔗 Connections (2)

- ← Dependency: [[Account holder name (GUIElement 1747195)]]
- ← Dependency: [[Bank account verification (GUIElement 1873923)]]

## 📊 Appears In (3 diagrams)

- Custom: Business rules
- Custom: Create/Update bank account for disbursement - ID
- Custom: General bank account - change disb. channel
