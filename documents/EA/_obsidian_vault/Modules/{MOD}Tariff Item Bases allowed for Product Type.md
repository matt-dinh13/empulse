---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/Business Rules"
domain: "Modules"
element_id: 1870818
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {MOD}Tariff Item Bases allowed for Product Type

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/Business Rules

## 📝 Notes

CELBaseAmountTypes is set of bases:

	
- FP (Future principal)
	
- SGP (Service goods price)
	
- SI (Sum insured)
	
- NSI (Next sum insured)
	
- SP (Simple principal)
	
- A (Annuity)
	
- DA (Delinquent amount)
	
- DAP (Delinquent amount capitalization)
	
- GP (Goods price)
	
- NLA (Net loan amount)
	
- OI (Outstanding installments)
	
- OP (Outstanding principal)
	
- WP (Whole principal)
	
- GPS (Goods price subsidized)
	
- EDB (Explicitly defined base)
	
- WPI (Whole Principal without Insurance)


	
- EDLA (Explicitly defined base for limit amount)
	
- LIDA (Latest installment delinquency amount)
	
- NCOF (Net credit amount with one time fee)
	
- NOP (Not yet due or due outstanding principal)
	
- POP (Past due outsanding principal)


	
- SUBP (Subsidized principal)
	
- FA (Financed Amount)
	
- EDBP (Explicit defined base principal)
	
- EDBI (Explicit defined base interest)
	
- CP (Cash principal)
	
- PSP (Proportional Simple Principal)
	
- BP (Basic Principal)
	
- {ADD PCG-4775}FINS (First Installment){/ADD}
	
- {ADD PCG-4710}INTA (Interest Amount){/ADD}


CELBaseNumberTypes is set of bases:

	
- TN (Number of terms)


	
- EDLN (Explicitly defined base for limit number)
	
- INSN (Installment Number)
	
- {ADD PCG-5010} PCAT (Pricing Category){/ADD}


RELBaseAmountTypes is set of bases:

	
- SGP (Service goods price)
	
- SI (Sum insured)
	
- NSI (Next sum insured)
	
- GP (Goods price)
	
- NLA (Net loan amount)
	
- TA (Transaction amount)
	
- NCL (Net credit limit)
	
- PCL (Provided credit limit)
	
- OD (Outstanding debt)
	
- UD (Unprescribed Debt)
	
- GPS (Goods price subsidized)
	
- EDB (Explicitly defined base)
	
- OF (Own funds)
	
- ODEI (Outstanding debt excluding initial transaction)


	
- OP (Outstanding principal)
	
- OI (Outstanding installments)
	
- DA (Delinquent amount)


	
- EDLA (Explicitly defined base for limit amount)
	
- RSI (REL Sum Insured)
	
- LIDA (Latest installment delinquency amount)


	
- NOP (Not yet due or due outstanding principal)


	
- POP (Past due oustanding principal)


	
- TAD_BP (Total Amount Past Due in EOB)
	
- PAY_SUM (Sum of Incoming Payments in Billing Period)
	
- PRINC_SUM (Sum of Debit Principals on the Account for a Previous Billing Period)


	
- DTA (Daily volume amount for given transaction type)
	
- BPTA (Volume per billing period for given transaction type)
	
- SUBP (Subsidized principal)
	
- WP (Whole principal)
	
- TOD (Total Outstanding Debt)
	
- FA (Financed Amount)
	
- BPTATC (Tired volume per billing period)
	
- CP (Cash principal)
	
- BP (Basic Principal)
	
- {ADD PCG-4710}INTA (Interest Amount){/ADD}


RELBaseNumberTypes is set of bases:

	
- NTB (Number of transactions per billing period)
	
- NSDT (Number of subsequent debit transactions)


	
- EDLN (Explicitly defined base for limit number)


	
- DNT (Number of transactions in same day for given transaction type)
	
- BPNT (Number of transactions per billing period for given transaction type)
	
- INSN (Installment Number)


	
- {ADD PCG-5010} PCAT (Pricing Category){/ADD}



SAIBaseAmountTypes is set of bases:

	
- GP (Goods price)


	
- BP (Basic Principal)


BaseValueTypes is set of bases:

	
- PUR (Purpose)
	
- DM (Disbursement Method)


	
- {ADD PCG-5010} RG (Risk Grade){/ADD}

## 🔗 Connections (2)

- ← Dependency: [[{MOD}TariffItemDto - validation]]
- ← Dependency: [[{MOD}Tariff Item activation validation rules]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: PCG-5010 New Limit Value Base Type and Limit Value for POS Tariff
- Custom: Validation Rules
