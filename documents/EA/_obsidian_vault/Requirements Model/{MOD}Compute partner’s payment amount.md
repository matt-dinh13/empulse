---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1049 (CBL-3091) Cash payment deduction driven by a new parameter"
domain: "Requirements Model"
element_id: 1878558
diagrams: 4
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Compute partner’s payment amount

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1049 (CBL-3091) Cash payment deduction driven by a new parameter

## 📝 Notes

This rule describes calculation of payment for retailer (outgoing payment).

Input parameters:

	
- Contract
	
- Contract.Financial Parameters


	
- {DEL}{ADD CLM-936}BuybackAmount (initial value set to 0 if no value is provided){/ADD}{/DEL}
	
- {ADD CBL-3081 PAYM-1084}productFlags{/ADD}
	
- {ADD PAYM-1625 CBL-4117}amount of commodities excluded from disbursement{/ADD}


Output:

	
- PaymentAmount


{ADD PAYM-922}
System calculates partner’s subvention amount using Get subvention amount.
System calculates service related subvention amount using {ADD}Get service related subvention amount.
{/ADD}

PaymentAmount =  
+ FinancialParameters.goodsPriceAmount 
- FinancialParameters.cashPaymentAmount ... only if {ADD CBL-3081 PAYM-1084}productFlags does not contain "CASHPAYM_TO_HC"{/ADD}{DEL CBL-3081 PAYM-1084}Contract.Created Externally = false{/DEL}
{ADD PAYM-1625 CBL-4117}
- amount of commodities excluded from disbursement{/ADD}
- {ADD CBL-10760}PTR payment is generated even with 0 amount{/ADD}

If partner’s subvention amount > 0 then PaymentAmount = PaymentAmount – partner’s subvention amount
{DEL}{ADD CLM-936}If BuybackAmount > 0 then PaymentAmount = PaymentAmount + BuybackAmount{/ADD}{/DEL}
{ADD PAYM-922}If service related subvention amount < 0 then PaymentAmount = PaymentAmount – service related subvention amount{/ADD}

## 🔗 Connections (2)

- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- ← Dependency: [[{MOD}05.090 Generate outgoing payment for contract]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-3091 Cash payment deduction driven by a new parameter
- Custom: PAYM-1625 (CBL-4117) Outgoing Payment Disbursement for Telco Partners 
- Custom: PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention
- Use Case: Generate and Cancel outgoing payments
